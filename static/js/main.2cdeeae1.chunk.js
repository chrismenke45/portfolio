(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,t,o){},16:function(e,t,o){"use strict";o.r(t);var i=o(2),r=o.n(i),n=o(6),s=o.n(n),c=(o(12),o(0));var a=function(){return Object(c.jsxs)("div",{id:"home",children:[Object(c.jsx)("h1",{children:"Hi, I'm Chris!"}),Object(c.jsx)("img",{id:"photo",className:"fadeIn",src:"./IMG_4657.jpg",alt:"Me"}),Object(c.jsxs)("p",{children:["I'm a web developer with experience building websites with HTML, CSS, JavaScript, React, Node.js and MongoDB. I have also started to learn Ruby on Rails and SQL. Please checkout my projects and ",Object(c.jsx)("a",{href:"Resume.pdf",download:!0,children:"resume"}),".  Reach out to me if you think I\u2019d be the right fit for you!"]})]})};var l=function(e){var t=e.project,o=Object(i.useRef)(null);Object(i.useLayoutEffect)((function(){return window.addEventListener("scroll",r),function(){return window.removeEventListener("scroll",r)}}),[]);var r=function(){var e=o.current.getBoundingClientRect().top,t=window.scrollY+1.3*window.innerHeight;e<t&&(console.log(e,t,window.scrollY+window.innerHeight),o.current.classList.add("fadeIn"),o.current.classList.remove("hiddenForFadeIn"))};return Object(i.useEffect)((function(){if(t.pingUrl){var e=t.pingUrl;return fetch(e,{method:"GET"}).then((function(e){console.log("".concat(t.name," pinged"))})).catch((function(e){console.error("Error:",e)}))}})),Object(c.jsxs)("div",{ref:o,className:"hiddenForFadeIn individualProject",children:[Object(c.jsx)("h3",{className:"projectName",children:t.name}),Object(c.jsx)("p",{children:t.description}),t.desktopPhoto&&Object(c.jsx)("img",{className:"desktopProject project",src:t.desktopPhoto,alt:"".concat(t.name," on desktop")}),t.mobilePhoto&&Object(c.jsx)("img",{className:"mobileProject project",src:t.mobilePhoto,alt:"".concat(t.name," on mobile")}),Object(c.jsxs)("details",{children:[Object(c.jsx)("summary",{children:"What I learned:"}),t.experience]}),Object(c.jsxs)("div",{className:"projectLinks",children:[Object(c.jsx)("a",{className:"site growHover linkBtn",href:t.siteUrl,target:"_blank",rel:"noreferrer",children:"Checkout the site!"}),Object(c.jsx)("a",{className:"code growHover linkBtn",href:t.githubUrl,target:"_blank",rel:"noreferrer",children:Object(c.jsx)("code",{children:"Checkout the code;"})})]})]})},h={name:"Twitter Clone",description:"My Twitter Clone was made with the MERN Stack and is composed of 2 sites: a frontend hosted on Github Pages and an api hosted on Render.com.  It allows users to sign in with their Twitter credentials via Passport.js and Twitter OAuth.  This imports and prepopulates their user profile with their username and profile picture.  The user can then post on the clone with text or pictures, follow other users, and explore tweets and profiles.  All Clone generated posts are kept internal to the Twitter Clone.",experience:"This app had a lot go into it.  It allowed me to practice developing and testing a separate back end and front end with the goal of bringing them together.  It also gave me the chance to write some responsive CSS to make it mobile friendly",siteUrl:"https://chrismenke45.github.io/twitter-client",pingUrl:"https://twitter-api-9m7g.onrender.com",githubUrl:"https://github.com/chrismenke45/twitter-client",desktopPhoto:"./ProjectPhotos/twitterClone/desktop.png",mobilePhoto:"./ProjectPhotos/twitterClone/mobile.png",id:1},d={name:"Chess",description:"This is project is command-line chess written in ruby.  It can either be played with 2 players or against a computer. The game will end and a winner will be declared when a player is checkmated. ",experience:"This project gave me an opportunity to practice my Object Oriented Programming skills by making classes and modules to support each distinct piece without rewriting any code. I also got to write algorithms to detect if there was a check or checkmate on the board. To test my algorithms I used Rspec.",siteUrl:"https://replit.com/@chrismenke45/Chess?v=1",githubUrl:"https://github.com/chrismenke45/chess",desktopPhoto:"./ProjectPhotos/chess/desktop.png",mobilePhoto:"./ProjectPhotos/chess/desktop.png",id:2},p={name:"Snake Game",description:"This is project is a full stack site using React.js for the front end and Ruby on Rails for an api to store high scores.",experience:"I made this because I wanted practice building a simple rails API and wanted to write some JavaScript/React after spending the past two months focusing on Ruby and Ruby on Rails. It allowed me to reorient myself with JavaScript while applying some bet practices I learned while studying Ruby. I also used Jest to test some funtionality of the snake game before creating the layout in React.",siteUrl:"https://chrismenke45.github.io/snake_client/",githubUrl:"https://github.com/chrismenke45/snake_client",desktopPhoto:"./ProjectPhotos/snake/desktop.png",mobilePhoto:"./ProjectPhotos/snake/desktop.png",id:3};var m=function(){var e=[h,p,d];return Object(c.jsxs)("main",{id:"projects",children:[Object(c.jsx)("div",{className:"projectsTitleContainer",children:Object(c.jsx)("h2",{className:"projectsTitle",children:"My Projects:"})}),e.map((function(e,t){return Object(c.jsx)(l,{project:e},e.id)}))]})},j=o(3),u=o(5),b=o(7);var g=function(){return Object(c.jsxs)("address",{id:"contact",children:[Object(c.jsx)("a",{href:"mailto: chrismenke45@gmail.com?Subject=Working%20Together",type:"email",children:Object(c.jsx)(j.a,{icon:b.a,id:"email",className:"icon growHover"})}),Object(c.jsx)("a",{href:"https://github.com/chrismenke45",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(j.a,{icon:u.a,id:"gitHub",className:"icon growHover"})}),Object(c.jsx)("a",{href:"https://linkedin.com/in/chrismenke45",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(j.a,{icon:u.b,id:"gitHub",className:"icon growHover"})})]})};var w=function(){return Object(c.jsxs)("body",{children:[Object(c.jsx)(a,{}),Object(c.jsx)(m,{}),Object(c.jsx)(g,{})]})};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2cdeeae1.chunk.js.map