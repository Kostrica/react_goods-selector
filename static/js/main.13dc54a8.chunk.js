(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(2),l=n.n(c),d=n(3),s=n(4),r=n(8),i=n(7),u=n(5),m=n.n(u),p=n(6),g=n.n(p),b=m.a.bind(g.a),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={selectedGood:"No goods selected",goods:[],"button\u0421leanHiden":!0},e.clickHandlerSelectedGood=function(){e.setState((function(e){return{selectedGood:"No goods selected","button\u0421leanHiden":!0,goods:e.goods.map((function(e){return{name:e.name,hiden:!1,selected:!1}}))}}))},e.clickHandlerGood=function(t){e.setState((function(e){return{selectedGood:"".concat(t," is selected"),"button\u0421leanHiden":!1,goods:e.goods.map((function(e){return{name:e.name,hiden:e.name===t,selected:e.name===t}}))}}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState({goods:h.map((function(e){return{name:e,hiden:!1,selected:!1}}))})}},{key:"render",value:function(){var e=this,t=this.state,n=t.selectedGood,o=t.goods,c=t.button\u0421leanHiden,l=b("button\u0421lean",{hiden:c});return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"selectedGood"},a.a.createElement("h1",null,"Selected good: -",n),a.a.createElement("button",{type:"button",className:l,onClick:this.clickHandlerSelectedGood},"X")),a.a.createElement("ul",null,o.map((function(t){var n=t.name.split(" ").join("-"),o=b("good",{goodName:n},{selected:t.selected}),c=b("button",{goodName:n},{hiden:t.hiden});return a.a.createElement("li",{key:t.name},a.a.createElement("div",{className:"goodBox"},a.a.createElement("div",{className:o},a.a.createElement("p",{className:"goodName"},t.name)),a.a.createElement("div",{className:"buttonBox"},a.a.createElement("button",{type:"button",className:c,onClick:function(){e.clickHandlerGood(t.name)}},"Select"))))}))))}}]),n}(a.a.Component);l.a.render(a.a.createElement(f,null),document.getElementById("root"))},6:function(e,t,n){},9:function(e,t,n){e.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.13dc54a8.chunk.js.map