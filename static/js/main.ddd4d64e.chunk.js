(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a,c,r=n(0),o=n.n(r),s=n(8),i=n.n(s),b=(n(21),n(22),n(9)),d=n(10),l=n(11),j=n(16),u=n(15),h=n(2),O=n(3),p=O.a.ul(a||(a=Object(h.a)(["\n  display: flex;\n  .btnFeedback {\n    margin-right: 5px;\n    cursor: pointer;\n  }\n"]))),g=n(1),x=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(g.jsx)(p,{children:t.map((function(e){return Object(g.jsx)("li",{children:Object(g.jsx)("button",{className:"btnFeedback",type:"button",onClick:function(){return n(e)},children:e})},e)}))})},f=function(e){var t=e.message;return Object(g.jsx)("p",{children:t})},v=O.a.section(c||(c=Object(h.a)(["\n  .sectionTitle {\n    color: teal;\n    margin: 20px;\n  }\n"]))),k=function(e){var t=e.children,n=e.title;return Object(g.jsxs)(v,{children:[Object(g.jsx)("h2",{className:"sectionTitle",children:n.toUpperCase()}),t]})},m=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.percentage;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("p",{children:["Good: ",t]}),Object(g.jsxs)("p",{children:["Neutral: ",n]}),Object(g.jsxs)("p",{children:["Bad: ",a]}),Object(g.jsx)("br",{}),Object(g.jsxs)("p",{children:["Total: ",c]}),r>=1&&Object(g.jsxs)("p",{children:["Positive feedback: ",r,"%"]})]})},F=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(b.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good+e.state.neutral+e.state.bad;return Math.floor(100*e.state.good/t)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback(),r=this.countPositiveFeedbackPercentage();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(k,{title:"Please leave feedback",children:Object(g.jsx)(x,{options:["good","neutral","bad"],onLeaveFeedback:this.onLeaveFeedback})}),Object(g.jsx)(k,{title:"Statistics",children:c?Object(g.jsx)(m,{good:t,neutral:n,bad:a,total:c,percentage:r}):Object(g.jsx)(f,{message:"No feedback given"})})]})}}]),n}(r.Component);i.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(F,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.ddd4d64e.chunk.js.map