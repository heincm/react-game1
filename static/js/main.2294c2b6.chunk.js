(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Captain America",image:"${procces.env.PUBLIC_URL}/images/captain_america.png"},{id:2,name:"The Hulk",image:"./images/hulk.jpeg"},{id:3,name:"Iron Man",image:"./images/iron_man.jpeg"},{id:4,name:"Black Panther",image:"./images/black_panther.jpg"},{id:5,name:"Thor",image:"./images/thor.jpeg"},{id:6,name:"Black Widow",image:"./images/black_widow.jpeg"},{id:7,name:"Groot",image:"./images/groot.jpeg"},{id:8,name:"Rocket Raccoon",image:"./images/rocket.jpeg"},{id:9,name:"Dr. Strange",image:"./images/dr_strange.jpg"},{id:10,name:"Starlord",image:"./images/starlord.avif"},{id:11,name:"Hawkeye",image:"./images/hawkeye.jpeg"},{id:12,name:"Vision",image:"./images/vision.jpeg"}]},,,,,,,,function(e,a,t){e.exports=t(19)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(3),r=t.n(c),o=t(4),s=t(5),l=t(7),m=t(6),g=t(8);t(15);var d=function(e){return i.a.createElement("div",{className:"wrapper container"},e.children)};t(16);var h=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image,onClick:e.handleOnClick})))};t(17);var u=function(e){return i.a.createElement("div",{className:"container",id:"scoreJumbo"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("p",{className:"text-center font-weight-bold"},"Score: ",e.count)),i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("p",{className:"text-center font-weight-bold"},"High Score: ",e.highScore))),i.a.createElement("p",{className:"text-center font-weight-bold",style:{color:e.color}},e.message))};t(18);var v=function(e){var a=e.children;return i.a.createElement("div",{className:"jumbotron jumbotron-fluid",id:"topJumbo"},i.a.createElement("div",{className:"container"},a))},k=t(1),p=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={avengers:t.shuffle(k),score:0,highScore:0,isClicked:[],message:"Click an image to begin",color:"black"},t.handleOnClick=function(e){var a=e.target.alt;t.state.isClicked.includes(a)?t.setState({score:0,isClicked:[],message:"You already clicked that one. Game Over. Click again!",highScore:t.state.highScore<=t.state.score?t.state.score:t.state.highScore,avengers:t.shuffle(k),color:"red"}):t.setState({isClicked:t.state.isClicked.concat(a),score:t.state.score+1,message:"Nice work! Keep going!",avengers:t.shuffle(k),color:"green"})},t}return Object(g.a)(a,e),Object(s.a)(a,[{key:"shuffle",value:function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(v,null,i.a.createElement("h1",{className:"text-white display-3"},"Avenger Clicky Game!"),i.a.createElement("p",{className:"text-white lead"},"Try not to click the same avenger twice.")),i.a.createElement(u,{count:this.state.score,highScore:this.state.highScore,message:this.state.message,color:this.state.color}),i.a.createElement(d,null,this.state.avengers.map(function(a){return i.a.createElement(h,{key:a.id,name:a.name,image:a.image,handleOnClick:e.handleOnClick,clicked:a.clicked})})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.2294c2b6.chunk.js.map