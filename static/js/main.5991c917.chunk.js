(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(23).concat([function(e,t,a){e.exports=a.p+"static/media/img.3dd28b53.png"},function(e,t,a){e.exports=a.p+"static/media/robot.1b5a3471.jpg"},function(e,t,a){e.exports=a.p+"static/media/Vision.6a053c4e.jpg"},function(e,t,a){e.exports=a.p+"static/media/PLC.983fa967.jpg"},function(e,t,a){e.exports=a.p+"static/media/CNC2.8258f24f.jpg"},function(e,t,a){e.exports=a.p+"static/media/meeting.74b77da7.jpg"},function(e,t,a){e.exports=a.p+"static/media/Team.f75d5509.jpg"},,function(e,t,a){e.exports=a(54)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(20),c=a.n(i),r=(a(36),a(5)),s=a(6),o=a(8),m=a(7),u=a(9),d=a(11),h=(a(37),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={value:"burger",aside:"",click:1},a.handleClick=function(){1===a.state.click?a.setState({value:"burger active",aside:"on",click:2}):2===a.state.click&&a.setState({value:"burger close",aside:"",click:1})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.value,n=t.aside,i=[{name:"home",path:"/",exact:!0},{name:"about",path:"/about"},{name:"tools",path:"/tools"},{name:"experience",path:"/experience"},{name:"contact",path:"/contact"}].map(function(t){return l.a.createElement("li",{key:t.name},l.a.createElement(d.b,{onClick:e.handleClick,to:t.path,exact:!!t.exact&&t.exact},t.name),l.a.createElement("div",{className:"cover"}))});return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{onClick:this.handleClick,className:a},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("aside",{id:"one",className:n}),l.a.createElement("aside",{id:"two",className:n}),l.a.createElement("aside",{id:"tree",className:n}),l.a.createElement("aside",{id:"four",className:n},l.a.createElement("nav",null,l.a.createElement("ul",null,i))))}}]),t}(l.a.Component)),p=a(10),f=(a(46),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"brush"}),l.a.createElement("span",null,"Portfolio",l.a.createElement("h1",null,"Michal Majer"))))}),g=(a(47),a(23)),b=a.n(g),E=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={textTemplate:"I am self-taught programming enthusiast, very keen on learning the most significant and latest technologies no matter it is a frontend or backend. I enjoy creating stylish, modern and responsive applications with sleek UX/UI connection. A versatile, self-motivated and conscientious individual with industrial automation programming background and passion for continuous improvement. ",indexText:-30,text:""},a.indexTyping="",a.typingEffect=function(){a.state.indexText>=0&&a.setState({text:a.state.text+a.state.textTemplate[a.state.indexText]}),a.setState({indexText:a.state.indexText+1}),a.state.indexText===a.state.textTemplate.length&&clearInterval(a.indexTyping)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.indexTyping=setInterval(function(){return e.typingEffect()},50)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"about"},l.a.createElement("div",{className:"text"},l.a.createElement("h1",null,"Here is a little about me ..."),this.state.text),l.a.createElement("img",{src:b.a,alt:"portret"})))}}]),t}(l.a.Component),v=(a(48),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,"Tools and technologies I am using")),l.a.createElement("div",{onScroll:function(){var e=document.querySelector(".icons"),t=document.querySelector(".scrollLabel"),a=e.scrollHeight-e.clientHeight;e.scrollTop===a?t.classList.add("scrollEnd"):0===e.scrollTop&&t.classList.remove("scrollEnd")},className:"icons"},l.a.createElement("span",null,l.a.createElement("i",{className:"fab fa-html5"}),"HTML 5"),l.a.createElement("span",null,l.a.createElement("i",{className:"fab fa-css3-alt"})," CSS 3"),l.a.createElement("span",null,l.a.createElement("i",{className:"fab fa-js"}),"JavaScript"),l.a.createElement("span",null,l.a.createElement("i",{className:"fab fa-react"}),"React.js"),l.a.createElement("span",null,l.a.createElement("i",{className:"fab fa-node"}),"Node.js"),l.a.createElement("span",null,l.a.createElement("i",{className:"fab fa-github"}),"Git & GitHub")),l.a.createElement("label",{className:"scrollLabel"},l.a.createElement("i",{className:"fas fa-angle-down"})))}),y=a(13),x=(a(49),a(24)),k=a.n(x),N=a(25),j=a.n(N),w=a(26),C=a.n(w),S=a(27),I=a.n(S),O=a(28),T=a.n(O),M=a(29),A=a.n(M),D=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={index:0},a.images=[k.a,j.a,C.a,I.a,T.a,A.a],a.title=["Robots","Vision systems","PLC","CNC","Soft skills","Front-End Developing"],a.content=["First time I discovered programming in 2012 when I started my work in the automotive industry in international company called Dr Schneider. I occupated maintenance technician position, and one of my responsibilities was to correct, and ad new lines of code to robots move. The language I used calls Rapid for ABB robots. However, I have some experience with robots like KUKA and MOTOMAN as well. In this time I did some robot programming training which contains basic and advances aspects of this type of programming.","The same profession enabled me to learn something about the visions systems like (Keyence, Balluff or Cognex), which we used to detect different parts of products. In this case, I have used simple conditional statements. It was an excellent opportunity to see how graphics and code can work together.","My next big employer called WABCO,  and here I had the possibility to try program controllers (PLC) such as Siemens or Beckhoff. I was using a ladder diagram or a function block diagram.","Another programming experience I was lucky to have, was about CNC machine programming. During six months I worked as a CNC programmer/fitter, in one of Australian company OZ Seals. In this occupation, I was using G-code to set up correct directions of the machine.","All of my occupations was highly focused on problem-solving, work with time pressure as well as a team-work. I gained a lot of essential skills which can be very useful in a programming environment.","Finally, in October 2018, I came across my first Front-end developing course, and I decide to engage myself full time on it. From this point, I went through a bunch of courses about programming topic include: HTML / HTML Canvas, CSS (SASS/LESS), Flex-Box, CSS Grid, JavaScript, Jquery, React.js, Node.js, Git & GitHub. Right Now I am focused on grinding my programming skills and working on my projects, which you can check on my GitHub and Code Pen pages."],a.activeDot="activeDot",a.sliderTime=2e4,a.indexInterval="",a.autoSlide=function(){var e=a.state.index;a.setState({index:e+1}),e===a.title.length-1&&a.setState({index:0})},a.handleClick=function(e){var t=a.state.index,n=Object(y.a)(Object(y.a)(a)).title;"right"===e.target.id&&(a.setState({index:t+1}),t===n.length-1&&a.setState({index:0})),"left"===e.target.id&&(t<=0?a.setState({index:n.length-1}):a.setState({index:t-1})),clearInterval(a.indexInterval),a.indexInterval=setInterval(a.autoSlide,a.sliderTime)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.indexInterval=setInterval(this.autoSlide,this.sliderTime)}},{key:"render",value:function(){var e=this.state.index,t=this.images,a=this.title,n=this.content;return l.a.createElement("div",{className:"resume"},l.a.createElement("h1",null,"My programming ",l.a.createElement("span",null,"background")," "),l.a.createElement("header",{className:"slider"},l.a.createElement("div",{className:"backImg",style:{backgroundImage:"url(".concat(t[e],")")}}),l.a.createElement("h2",null,a[e]),l.a.createElement("p",null,n[e]),l.a.createElement("div",{className:"dots"},l.a.createElement("span",{className:0===e?this.activeDot:""}),l.a.createElement("span",{className:1===e?this.activeDot:""}),l.a.createElement("span",{className:2===e?this.activeDot:""}),l.a.createElement("span",{className:3===e?this.activeDot:""}),l.a.createElement("span",{className:4===e?this.activeDot:""}),l.a.createElement("span",{className:5===e?this.activeDot:""})),l.a.createElement("button",{id:"left",onClick:this.handleClick},l.a.createElement("i",{id:"left",className:"fas fa-arrow-left"})),l.a.createElement("button",{id:"right",onClick:this.handleClick},l.a.createElement("i",{id:"right",className:"fas fa-arrow-right"}))))}}]),t}(l.a.Component),L=a(30),F=(a(50),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={value:"",name:"",email:"",subject:""},a.handleSubmit=function(e){e.preventDefault(),alert("Sorry for any inconvenience, the form is under construction at the moment. Please contact me on majer.michal@outlook.com or through my LinkedIn profile page."),a.setState({value:"",name:"",email:"",subject:""})},a.handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(L.a)({},t,n))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"contact"},l.a.createElement("h1",null,"Contact me here ..."),l.a.createElement("form",{className:"formStyle",onSubmit:this.handleSubmit},l.a.createElement("input",{onChange:this.handleChange,type:"text",placeholder:"Name ...",name:"name",value:this.state.name,autoComplete:"off"}),l.a.createElement("input",{onChange:this.handleChange,type:"email",placeholder:"Email ...",name:"email",value:this.state.email,autoComplete:"off"}),l.a.createElement("input",{onChange:this.handleChange,type:"text",placeholder:"Subject ...",name:"subject",value:this.state.subject,autoComplete:"off"}),l.a.createElement("textarea",{name:"value",value:this.state.value,onChange:this.handleChange,placeholder:"Type message ..."}),l.a.createElement("button",null,"Submit")),l.a.createElement(p.a,{when:this.state.value,message:"Your form is not submitted. Are you sure that you want to leave this page?"}))}}]),t}(l.a.Component)),H=(a(51),function(){return l.a.createElement("div",{className:"error"},l.a.createElement("h1",null," The page doesn't exist! "))}),B=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.d,null,l.a.createElement(p.b,{path:"/",exact:!0,component:f}),l.a.createElement(p.b,{path:"/about",component:E}),l.a.createElement(p.b,{path:"/tools",component:v}),l.a.createElement(p.b,{path:"/experience",component:D}),l.a.createElement(p.b,{path:"/contact",component:F}),l.a.createElement(p.b,{component:H})))},G=(a(52),function(){return l.a.createElement("div",{className:"footerWrapper"},l.a.createElement("div",{className:"social"},l.a.createElement("a",{href:"https://github.com/MikeMajer/"},l.a.createElement("i",{className:"fab fa-github"})),l.a.createElement("a",{href:"https://codepen.io/Code_Mike/"},l.a.createElement("i",{className:"fab fa-codepen"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/michal-majer-90656515b/"},l.a.createElement("i",{className:"fab fa-linkedin"}))),l.a.createElement("div",{className:"copyRight"},"\xa9 Michal Majer "))}),P=(a(53),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,{basename:"/Portfolio_website_developer_version"},l.a.createElement("div",{className:"app"},l.a.createElement("nav",null,l.a.createElement(h,null)),l.a.createElement("main",{className:"pages"},l.a.createElement(B,null)),l.a.createElement("footer",null,l.a.createElement(G,null))))}}]),t}(n.Component));c.a.render(l.a.createElement(P,null),document.getElementById("root"))}]),[[31,1,2]]]);
//# sourceMappingURL=main.5991c917.chunk.js.map