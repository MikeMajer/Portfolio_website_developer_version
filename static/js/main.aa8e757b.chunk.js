(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(23).concat([function(e,t,a){e.exports=a.p+"static/media/img.3dd28b53.png"},function(e,t,a){e.exports=a.p+"static/media/robot.1b5a3471.jpg"},function(e,t,a){e.exports=a.p+"static/media/Vision.6a053c4e.jpg"},function(e,t,a){e.exports=a.p+"static/media/PLC.983fa967.jpg"},function(e,t,a){e.exports=a.p+"static/media/CNC2.8258f24f.jpg"},function(e,t,a){e.exports=a.p+"static/media/meeting.74b77da7.jpg"},function(e,t,a){e.exports=a.p+"static/media/Team.f75d5509.jpg"},function(e,t,a){e.exports=a(53)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(20),l=a.n(c),r=(a(35),a(5)),s=a(6),o=a(8),m=a(7),u=a(9),d=a(11),h=(a(36),a(37),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={value:"burger",aside:"",click:1},a.handleClick=function(){1===a.state.click&&a.setState({value:"burger active",aside:"on",click:2}),2===a.state.click&&a.setState({value:"burger close",aside:"",click:1})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=[{name:"home",path:"/",exact:!0},{name:"about",path:"/about"},{name:"tools",path:"/tools"},{name:"experience",path:"/experience"},{name:"contact",path:"/contact"}].map(function(t){return i.a.createElement("li",{key:t.name},i.a.createElement(d.b,{onClick:e.handleClick,to:t.path,exact:!!t.exact&&t.exact},t.name),i.a.createElement("div",{className:"cover"}))});return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{onClick:this.handleClick,className:this.state.value},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement("aside",{id:"one",className:this.state.aside}),i.a.createElement("aside",{id:"two",className:this.state.aside}),i.a.createElement("aside",{id:"tree",className:this.state.aside}),i.a.createElement("aside",{id:"four",className:this.state.aside},i.a.createElement("nav",null,i.a.createElement("ul",null,t))))}}]),t}(i.a.Component)),p=a(10),f=(a(46),function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"home"},i.a.createElement("div",{className:"brush"}),i.a.createElement("span",null,"Portfolio",i.a.createElement("h1",null,"Michal Majer"))))}),g=(a(47),a(23)),E=a.n(g),v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={txt:"My name is Michal Majer and I am  programming enthusiastic. I am very keen on front-end. Moreover, I am exploring the secrets of back-end either. I love new technologies, creative and challenging projects as well as problem-solving. I am looking forward to improving efficiency in a forward thinking company by applying my skills and engagement as a junior Front-end developer.",indexText:-30,text:""},a.indexTyping="",a.setTyping=function(){a.indexTyping=setInterval(function(){return a.typingEffect()},50)},a.typingEffect=function(){a.state.indexText>=0&&a.setState({text:a.state.text+a.state.txt[a.state.indexText]}),a.setState({indexText:a.state.indexText+1}),a.state.indexText===a.state.txt.length&&clearInterval(a.indexTyping)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.setTyping()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"about"},i.a.createElement("div",{className:"text"},i.a.createElement("h1",null,"Here is a little about me ..."),this.state.text),i.a.createElement("img",{src:E.a,alt:"portret"})))}}]),t}(i.a.Component),b=(a(48),function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"title"},i.a.createElement("h1",null,"Tools and technologies I am using")),i.a.createElement("div",{className:"icons"},i.a.createElement("span",null,i.a.createElement("i",{className:"fab fa-html5"}),"HTML 5"),i.a.createElement("span",null,i.a.createElement("i",{className:"fab fa-css3-alt"})," CSS 3"),i.a.createElement("span",null,i.a.createElement("i",{className:"fab fa-js"}),"JavaScript"),i.a.createElement("span",null,i.a.createElement("i",{className:"fab fa-react"}),"React.js"),i.a.createElement("span",null,i.a.createElement("i",{className:"fab fa-node"}),"Node.js"),i.a.createElement("span",null,i.a.createElement("i",{className:"fab fa-github"}),"Git & GitHub")))}),y=a(13),x=(a(49),a(24)),k=a.n(x),w=a(25),N=a.n(w),j=a(26),I=a.n(j),C=a(27),S=a.n(C),O=a(28),T=a.n(O),M=a(29),A=a.n(M),D=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={index:0},a.images=[k.a,N.a,I.a,S.a,T.a,A.a],a.title=["Robots","Vision systems","PLC","CNC","Soft skills","Front-End Developing"],a.content=["First time I discovered programming in 2012 when I started my work in the automotive industry in international company called Dr Schneider. I occupated maintenance technician position, and one of my responsibilities was to correct, and ad new lines of code to robots move.  The language I used calls Rapid for ABB robots. However, I have some experience with robots like KUKA and MOTOMAN as well. In this time I did some robot programming training which contains basic and advances aspects of this type of programming.","The same profession enabled me to learn something about the visions systems like (Keyence, Balluff or Cognex), which we used to detect different parts of products. In this case, I have used simple conditional statements. It was an excellent opportunity to see how graphics and code can work together.","My next big employer called WABCO,  and here I had the possibility to try program controllers (PLC) such as Siemens or Beckhoff. I was using a ladder diagram or a function block diagram.","Another programming experience I was lucky to have, was about CNC machine programming. During six months I worked as a CNC programmer/fitter, in one of Australian company OZ Seals. In this occupation, I was using G-code to set up correct directions of the machine.","All of my occupations was highly focused on problem-solving, work with time pressure as well as a team-work. I gained a lot of essential skills which can be very useful in a programming environment.","Finally, in October 2018, I came across my first Front-end developing course, and I decide to engage myself full time on it. From this point, I went through a bunch of courses about programming topic include: HTML / HTML Canvas, CSS (SASS/LESS), JavaScript, Jquery, React.js, Node.js, Git & GitHub. Right Now I am focused on grinding my programming skills and working on my projects, which you can check on my GitHub and Code Pen pages."],a.activeDot="activeDot",a.sliderTime=2e4,a.indexInterval="",a.autoSlide=function(){var e=a.state.index;a.setState({index:e+1}),e===a.title.length-1&&a.setState({index:0})},a.handleClick=function(e){var t=a.state.index,n=Object(y.a)(Object(y.a)(a)).title;"right"===e.target.id&&(a.setState({index:t+1}),t===n.length-1&&a.setState({index:0})),"left"===e.target.id&&(t<=0?a.setState({index:n.length-1}):a.setState({index:t-1})),clearInterval(a.indexInterval),a.indexInterval=setInterval(a.autoSlide,a.sliderTime)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.indexInterval=setInterval(this.autoSlide,this.sliderTime)}},{key:"render",value:function(){var e=this.state.index,t=this.images,a=this.title,n=this.content;return i.a.createElement("div",{className:"resume"},i.a.createElement("h1",null,"My programming ",i.a.createElement("span",null,"background")," "),i.a.createElement("header",{className:"slider"},i.a.createElement("div",{className:"backImg",style:{backgroundImage:"url(".concat(t[e],")")}}),i.a.createElement("h2",null,a[e]),i.a.createElement("p",null,n[e]),i.a.createElement("div",{className:"dots"},i.a.createElement("span",{className:0===e?this.activeDot:""}),i.a.createElement("span",{className:1===e?this.activeDot:""}),i.a.createElement("span",{className:2===e?this.activeDot:""}),i.a.createElement("span",{className:3===e?this.activeDot:""}),i.a.createElement("span",{className:4===e?this.activeDot:""}),i.a.createElement("span",{className:5===e?this.activeDot:""})),i.a.createElement("button",{id:"left",onClick:this.handleClick},i.a.createElement("i",{id:"left",className:"fas fa-arrow-left"})),i.a.createElement("button",{id:"right",onClick:this.handleClick},i.a.createElement("i",{id:"right",className:"fas fa-arrow-right"}))))}}]),t}(i.a.Component),F=(a(50),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={value:"",isEmpty:!1},a.handleSubmit=function(e){e.preventDefault(),a.setState({value:"",isEmpty:!0})},a.handleChange=function(e){e.target.value.lenght>0?a.setState({value:e.target.value,isEmpty:!0}):a.setState({value:e.target.value,isEmpty:!1})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"contact"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("h1",null,"Contact me here ..."),i.a.createElement("textarea",{value:this.state.value,on:!0,onChange:this.handleChange,placeholder:"Type message..."}),i.a.createElement("button",null,"Send")),i.a.createElement(p.a,{when:this.state.value,message:"Your form is not submitted. Are you sure that you want to leave this page?"}))}}]),t}(i.a.Component)),H=(a(51),function(){return i.a.createElement("div",{className:"error"},i.a.createElement("h1",null," The page doesn't exist ! "))}),L=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.d,null,i.a.createElement(p.b,{path:"/",exact:!0,component:f}),i.a.createElement(p.b,{path:"/about",component:v}),i.a.createElement(p.b,{path:"/tools",component:b}),i.a.createElement(p.b,{path:"/experience",component:D}),i.a.createElement(p.b,{path:"/contact",component:F}),i.a.createElement(p.b,{component:H})))},B=(a(52),function(){return i.a.createElement("div",{className:"footerWrapper"},i.a.createElement("div",{className:"social"},i.a.createElement("a",{href:"https://github.com/"},i.a.createElement("i",{className:"fab fa-github"})),i.a.createElement("a",{href:"https://codepen.io/"},i.a.createElement("i",{className:"fab fa-codepen"})),i.a.createElement("a",{href:"https://au.linkedin.com/"},i.a.createElement("i",{className:"fab fa-linkedin"}))),i.a.createElement("div",{className:"copyRight"},"\xa9 Mike Majer "))}),G=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,{basename:"/Portfolio_website_developer_version"},i.a.createElement("div",{className:"app"},i.a.createElement("nav",null,i.a.createElement(h,null)),i.a.createElement("main",{className:"pages"},i.a.createElement(L,null)),i.a.createElement("footer",null,i.a.createElement(B,null))))}}]),t}(n.Component);l.a.render(i.a.createElement(G,null),document.getElementById("root"))}]),[[30,1,2]]]);
//# sourceMappingURL=main.aa8e757b.chunk.js.map