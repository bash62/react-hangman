(this.webpackJsonphangman=this.webpackJsonphangman||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(2),c=n.n(s),i=(n(12),n(3)),o=n(4),l=n(6),u=n(5),m=(n(13),n(14),function(e){var t=e.mask;return r.a.createElement("div",{className:"mask"},t.map((function(e,t){return r.a.createElement("span",{className:"letter ".concat("_"===e?"hidden":""),key:t},e)})))}),d=(n(15),function(e){var t=e.letters,n=e.testedLetters,a=e.onClick;return r.a.createElement("div",{className:"keyboard"},t.map((function(e,t){return r.a.createElement("button",{className:"letter ".concat(n.includes(e)?"tested":""),key:t,onClick:function(){return a(e)}},e)})))}),k=Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleLetterClick=function(t){var n=e.state,a=(n.mask,n.testedLetters),r=n.word,s=e.revealLetter(t);a.includes(t)||(a.push(t),e.setState({testedLetters:a,mask:s,won:r.every((function(e,t){return e===s[t]}))}))},e.handleRestartClick=function(){e.setState(e.getInitState())},e.state=e.getInitState(),e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.mask,n=e.testedLetters,a=e.won;return r.a.createElement("div",{className:"hangman"},r.a.createElement(m,{mask:t}),a?r.a.createElement("button",{className:"restart",onClick:this.handleRestartClick},"Recommencer"):r.a.createElement(d,{letters:k,testedLetters:n,onClick:this.handleLetterClick}))}},{key:"revealLetter",value:function(e){var t=this.state,n=t.mask,a=t.word;return n.map((function(t,n){return e===a[n]?a[n]:t}))}},{key:"getRandomWord",value:function(){return Array.from(h[Math.floor(Math.random()*h.length)])}},{key:"getInitState",value:function(){var e=this.getRandomWord();return{word:e,mask:this.getInitialMask(e),testedLetters:[],won:!1}}},{key:"getInitialMask",value:function(e){return e.map((function(t,n){return[0,e.length-1].includes(n)?t:"_"}))}}]),n}(a.Component),h=["MANGER","BOIRE","DORMIR","POMME","POIRE","FRAISE","FRAMBOISE","SUPREME","PALACE","GUCCI"],E=f;c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.1d94dd63.chunk.js.map