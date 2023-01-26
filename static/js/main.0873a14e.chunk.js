(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,t,s){"use strict";s.r(t);var a=s(1),l=s.n(a),r=s(3),c=s.n(r),i=(s(8),s(12)),n=s(0);function m(){return Object(n.jsxs)("div",{className:"px-6 py-8 sm:px-10",children:[Object(n.jsx)("div",{children:Object(n.jsx)("p",{id:"notification",className:"text-xl font-medium text-gray-700",children:"Contact Me"})}),Object(n.jsxs)("div",{className:"relative mt-6",children:[Object(n.jsx)("div",{className:"absolute inset-0 flex items-center","aria-hidden":"true",children:Object(n.jsx)("div",{className:"w-full border-t border-gray-300"})}),Object(n.jsx)("div",{className:"relative flex justify-center text-sm"})]}),Object(n.jsx)("div",{className:"mt-6",children:Object(n.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault();var t=document.getElementById("notification"),s=document.getElementById("submit-button"),a=document.createElement("i");a.classList.add("fas","fa-spinner","animate-spin"),s.innerText="",s.append(a),window.emailjs.sendForm("gmail_service","contact_template",e.target).then((function(e){document.getElementById("contact-form").reset(),t.classList.add("text-green-600"),t.textContent="MESSAGE DELIVERED!",s.innerText="Send"}),(function(e){t.classList.add("text-red-600"),t.textContent="Sorry, the message was not delivered.",s.innerText="Send"})).finally(setTimeout((function(){t.textContent="Contact Me",t.classList.contains("text-green-600")?t.classList.remove("text-green-600"):t.classList.remove("text-red-600")}),5e3))},className:"space-y-6",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"name",className:"sr-only",children:"Name"}),Object(n.jsx)("input",{type:"text",name:"name",id:"name",autoComplete:"name",placeholder:"Full name",required:!0,className:"block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"email",className:"sr-only",children:"Email"}),Object(n.jsx)("input",{type:"text",name:"email",id:"email",autoComplete:"email",placeholder:"Email Address",required:!0,className:"block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"message",className:"sr-only",children:"Message"}),Object(n.jsx)("textarea",{id:"message",name:"message",placeholder:"Message",required:!0,className:"block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-s"})]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{id:"submit-button",type:"submit",className:"flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2",children:"Send Message"})})]})})]})}var d=s.p+"static/media/Resume.9b0c550e.pdf",o=[{name:"Songsemble",href:"#first-feature"},{name:"Blog",href:"#second-feature"},{name:"Other Projects",href:"#other-projects"}];function x(){return Object(n.jsx)("div",{className:"relative overflow-hidden bg-gray-900 pattern",children:Object(n.jsxs)("div",{className:"relative pt-6 pb-16 sm:pb-24",children:[Object(n.jsx)("nav",{className:"relative mx-auto flex max-w-7xl items-center justify-between px-6","aria-label":"Global",children:Object(n.jsx)("div",{className:"flex flex-1 items-center",children:Object(n.jsx)("div",{className:"flex text-sm sm:text-base space-x-5 sm:space-x-10 md:ml-10",children:o.map((function(e){return Object(n.jsx)("a",{href:e.href,className:"font-medium text-white hover:text-gray-300",children:e.name},e.name)}))})})}),Object(n.jsx)("header",{className:"mt-16 sm:mt-24",children:Object(n.jsx)("div",{className:"mx-auto max-w-7xl",children:Object(n.jsxs)("div",{className:"lg:grid lg:grid-cols-12 lg:gap-8",children:[Object(n.jsx)("div",{className:"px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"serif text-4xl font-bold tracking-wide text-white sm:text-5xl md:text-6xl",children:"Seth Strouf"}),Object(n.jsx)("p",{className:"mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl",children:"Full-stack developer, former educator, father of cats"}),Object(n.jsx)("div",{className:"mt-4 sm:mt-8 sm:mb-4 sm:flex sm:justify-center lg:justify-start group",children:Object(n.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:d,className:"sm:flex sm:items-center rounded-full sm:bg-gray-800 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base",children:[Object(n.jsx)("span",{className:"rounded-full bg-cyan-600 px-3 py-1 text-md font-semibold leading-5 text-white group-hover:bg-cyan-700",children:"View my resum\xe9"}),Object(n.jsx)(i.a,{className:"hidden sm:block ml-2 h-5 w-5 text-gray-300","aria-hidden":"true"})]})})]})}),Object(n.jsx)("div",{className:"mt-16 sm:mt-24 lg:col-span-6 lg:mt-0",children:Object(n.jsx)("div",{className:"bg-gray-50 sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg",children:Object(n.jsx)(m,{})})})]})})})]})})}var b=s.p+"static/media/songsemble.a735aadc.png",j=s.p+"static/media/blog.b641bab9.png";function h(e){var t=e.text;return Object(n.jsx)("div",{className:"flex justify-center px-1 mt-1",children:Object(n.jsx)("span",{className:"text-sm rounded-full px-2 pb-0.5 text-white bg-red-500 border-2 border-red-900",children:t})})}function g(e){var t=e.text;return Object(n.jsx)("div",{className:"flex justify-center px-1 mt-1",children:Object(n.jsx)("span",{className:"text-sm rounded-full px-2 pb-0.5 text-white bg-blue-500 border-2 border-blue-900",children:t})})}function u(e){var t=e.text;return Object(n.jsx)("div",{className:"flex justify-center px-1 mt-1",children:Object(n.jsx)("span",{className:"text-sm rounded-full px-2 pb-0.5 text-white bg-indigo-500 border-2 border-indigo-900",children:t})})}function f(e){var t=e.text;return Object(n.jsx)("div",{className:"flex justify-center px-1 mt-1",children:Object(n.jsx)("span",{className:"text-sm rounded-full px-2 pb-0.5 text-white bg-emerald-500 border-2 border-emerald-900",children:t})})}function p(e){var t=e.siteUrl,s=e.codeUrl;return Object(n.jsxs)("div",{className:"text-white font-bold",children:[Object(n.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"px-3 py-1.5 rounded-l-lg bg-cyan-600 hover:bg-cyan-700",children:"View Site"}),Object(n.jsx)("div",{className:"absolute inline-block",children:Object(n.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"px-3 py-1.5 border-l border-cyan-700 rounded-r-lg bg-cyan-600 hover:bg-cyan-700",children:Object(n.jsx)("i",{className:"fa-brands fa-github text-md"})})})]})}function O(){return Object(n.jsxs)("div",{className:"relative overflow-hidden bg-gray-50 pt-16 pb-32",children:[Object(n.jsx)("div",{className:"relative",children:Object(n.jsxs)("div",{className:"lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8",children:[Object(n.jsx)("div",{className:"mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0",children:Object(n.jsx)("div",{children:Object(n.jsxs)("div",{id:"first-feature",className:"mt-6",children:[Object(n.jsx)("h2",{className:"text-3xl font-bold tracking-tight text-gray-900",children:"Songsemble"}),Object(n.jsxs)("div",{className:"mt-4 flex justify-center flex-wrap",children:[Object(n.jsx)(h,{text:"Rails"}),Object(n.jsx)(g,{text:"React"}),Object(n.jsx)(u,{text:"Typescript"}),Object(n.jsx)(f,{text:"Rspec"})]}),Object(n.jsx)("p",{className:"mt-4 text-lg text-gray-600",children:"A music library management application that allows users to connect with colleagues to share libraries."}),Object(n.jsx)("div",{className:"mt-8 mb-10 mr-12",children:Object(n.jsx)(p,{siteUrl:"https://www.songsemble.com/signin?email=guest_user@mail.com&password=testPassword123!",codeUrl:"https://github.com/sethstrouf/music-library-api"})}),Object(n.jsx)("div",{className:"mt-4 border-t",children:Object(n.jsx)("p",{className:"mt-4 text-base text-gray-500",children:"JWT Authentication, SSL with Cloudflare, Amazon S3 Storage, SendGrid Mailers, Github Actions"})})]})})}),Object(n.jsx)("div",{className:"mt-12 sm:mt-16 lg:mt-0",children:Object(n.jsx)("div",{className:"-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0",children:Object(n.jsx)("img",{className:"w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none",src:b,alt:"Songsemble project"})})})]})}),Object(n.jsx)("div",{id:"second-feature",className:"mt-24",children:Object(n.jsxs)("div",{className:"lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8",children:[Object(n.jsx)("div",{className:"mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0",children:Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"mt-6",children:[Object(n.jsx)("h2",{className:"text-3xl font-bold tracking-tight text-gray-900",children:"Blog"}),Object(n.jsx)("div",{className:"mt-4 flex justify-center flex-wrap",children:Object(n.jsx)(h,{text:"Rails",color:"red"})}),Object(n.jsx)("p",{className:"mt-4 text-lg text-gray-600",children:"A blog originally made using Squarespace re-created using Rails."}),Object(n.jsx)("div",{className:"mt-8 mb-10 mr-12",children:Object(n.jsx)(p,{siteUrl:"https://www.hannahbauer.me",codeUrl:"https://github.com/sethstrouf/blog"})}),Object(n.jsx)("div",{className:"mt-4 border-t",children:Object(n.jsx)("p",{className:"mt-4 text-base text-gray-500",children:"Devise Authentication, SSL with Cloudflare, Amazon S3 Storage"})})]})})}),Object(n.jsx)("div",{className:"mt-12 sm:mt-16 lg:col-start-1 lg:mt-0",children:Object(n.jsx)("div",{className:"-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0",children:Object(n.jsx)("img",{className:"w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none",src:j,alt:"Blog project"})})})]})})]})}var v={social:[{name:"LinkedIn",href:"https://www.linkedin.com/in/sethstrouf",icon:function(){return Object(n.jsx)("i",{className:"fa-brands fa-linkedin text-xl"})}},{name:"GitHub",href:"https://github.com/sethstrouf?tab=repositories",icon:function(){return Object(n.jsx)("i",{className:"fa-brands fa-github text-xl"})}},{name:"YouTube",href:"https://www.youtube.com/moose2006lp",icon:function(){return Object(n.jsx)("i",{className:"fa-brands fa-youtube text-xl"})}}]};function N(){return Object(n.jsx)("footer",{className:"bg-gray-50",children:Object(n.jsxs)("div",{className:"mx-auto max-w-7xl overflow-hidden lg:px-8",children:[Object(n.jsx)("div",{className:"mt-10 flex justify-center space-x-10",children:v.social.map((function(e){return Object(n.jsxs)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-gray-500",children:[Object(n.jsx)("span",{className:"sr-only",children:e.name}),Object(n.jsx)(e.icon,{className:"h-6 w-6","aria-hidden":"true"})]},e.name)}))}),Object(n.jsx)("p",{className:"mt-6 mb-2 text-center text-xs leading-5 text-gray-500",children:"\xa9 2023 Seth Strouf"})]})})}var w=[{title:"Weather App",href:"https://sethstrouf.github.io/weather/",description:"React, TailwindCSS, API from weatherapi.com",imageUrl:s.p+"static/media/weather.8ea11ea0.png",viewButton:function(){return Object(n.jsx)("div",{className:"mb-4 md:mb-10 mr-12",children:Object(n.jsx)(p,{siteUrl:"https://sethstrouf.github.io/weather/",codeUrl:"https://github.com/sethstrouf/weather"})})}},{title:"Memory Cards",href:"https://sethstrouf.github.io/memory-cards/",description:"React, Vanilla CSS",imageUrl:s.p+"static/media/memorycards.21f3eb40.png",viewButton:function(){return Object(n.jsx)("div",{className:"mb-4 md:mb-10 mr-12",children:Object(n.jsx)(p,{siteUrl:"https://sethstrouf.github.io/memory-cards/",codeUrl:"https://github.com/sethstrouf/memory-cards"})})}},{title:"Calculator",href:"https://sethstrouf.github.io/calculator/",description:"Vanilla Javascript, Vanilla CSS",imageUrl:s.p+"static/media/calculator.5d4afea5.png",viewButton:function(){return Object(n.jsx)("div",{className:"mb-4 md:mb-10 mr-12",children:Object(n.jsx)(p,{siteUrl:"https://sethstrouf.github.io/calculator/",codeUrl:"https://github.com/sethstrouf/calculator"})})}}];function y(){return Object(n.jsxs)("div",{id:"other-projects",className:"relative bg-gray-900 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28",children:[Object(n.jsx)("div",{className:"absolute inset-0",children:Object(n.jsx)("div",{className:"h-1/3 bg-gray-800 sm:h-2/3"})}),Object(n.jsxs)("div",{className:"relative mx-auto max-w-7xl",children:[Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("h2",{className:"text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl",children:"Other Projects"})}),Object(n.jsx)("div",{className:"mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3",children:w.map((function(e){return Object(n.jsxs)("div",{className:"flex flex-col overflow-hidden rounded-lg shadow-lg",children:[Object(n.jsx)("div",{className:"flex-shrink-0",children:Object(n.jsx)("img",{className:"h-48 w-full object-cover",src:e.imageUrl,alt:""})}),Object(n.jsxs)("div",{className:"flex flex-1 flex-col justify-between bg-gray-50 p-6",children:[Object(n.jsx)("div",{className:"flex-1",children:Object(n.jsxs)("a",{href:e.href,className:"mt-2 block",target:"_blank",rel:"noopener noreferrer",children:[Object(n.jsx)("p",{className:"text-xl font-semibold text-gray-900",children:e.title}),Object(n.jsx)("p",{className:"mt-3 text-base text-gray-500",children:e.description})]})}),Object(n.jsx)("div",{className:"mt-6 flex mx-auto items-center",children:Object(n.jsx)(e.viewButton,{})})]})]},e.title)}))})]})]})}function S(){return Object(n.jsxs)("div",{className:"min-h-screen mx-auto text-center",children:[Object(n.jsx)(x,{}),Object(n.jsxs)("main",{children:[Object(n.jsx)(O,{}),Object(n.jsx)(y,{})]}),Object(n.jsx)(N,{})]})}c.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root"))},8:function(e,t,s){}},[[10,1,2]]]);
//# sourceMappingURL=main.0873a14e.chunk.js.map