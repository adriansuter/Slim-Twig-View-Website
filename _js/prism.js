/* PrismJS 1.17.1
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+css-extras+markup-templating+http+php+json+php-extras+sql&plugins=line-numbers */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(g){var c=/\blang(?:uage)?-([\w-]+)\b/i,a=0,C={manual:g.Prism&&g.Prism.manual,disableWorkerMessageHandler:g.Prism&&g.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof M?new M(e.type,C.util.encode(e.content),e.alias):Array.isArray(e)?e.map(C.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function n(e,t){var r,a,i=C.util.type(e);switch(t=t||{},i){case"Object":if(a=C.util.objId(e),t[a])return t[a];for(var o in r={},t[a]=r,e)e.hasOwnProperty(o)&&(r[o]=n(e[o],t));return r;case"Array":return a=C.util.objId(e),t[a]?t[a]:(r=[],t[a]=r,e.forEach(function(e,a){r[a]=n(e,t)}),r);default:return e}}},languages:{extend:function(e,a){var n=C.util.clone(C.languages[e]);for(var t in a)n[t]=a[t];return n},insertBefore:function(n,e,a,t){var r=(t=t||C.languages)[n],i={};for(var o in r)if(r.hasOwnProperty(o)){if(o==e)for(var l in a)a.hasOwnProperty(l)&&(i[l]=a[l]);a.hasOwnProperty(o)||(i[o]=r[o])}var s=t[n];return t[n]=i,C.languages.DFS(C.languages,function(e,a){a===s&&e!=n&&(this[e]=i)}),i},DFS:function e(a,n,t,r){r=r||{};var i=C.util.objId;for(var o in a)if(a.hasOwnProperty(o)){n.call(a,o,a[o],t||o);var l=a[o],s=C.util.type(l);"Object"!==s||r[i(l)]?"Array"!==s||r[i(l)]||(r[i(l)]=!0,e(l,n,o,r)):(r[i(l)]=!0,e(l,n,null,r))}}},plugins:{},highlightAll:function(e,a){C.highlightAllUnder(document,e,a)},highlightAllUnder:function(e,a,n){var t={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};C.hooks.run("before-highlightall",t);for(var r,i=e.querySelectorAll(t.selector),o=0;r=i[o++];)C.highlightElement(r,!0===a,t.callback)},highlightElement:function(e,a,n){for(var t,r="none",i=e;i&&!c.test(i.className);)i=i.parentNode;i&&(r=(i.className.match(c)||[,"none"])[1].toLowerCase(),t=C.languages[r]),e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+r,e.parentNode&&(i=e.parentNode,/pre/i.test(i.nodeName)&&(i.className=i.className.replace(c,"").replace(/\s+/g," ")+" language-"+r));var o={element:e,language:r,grammar:t,code:e.textContent},l=function(e){o.highlightedCode=e,C.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,C.hooks.run("after-highlight",o),C.hooks.run("complete",o),n&&n.call(o.element)};if(C.hooks.run("before-sanity-check",o),o.code)if(C.hooks.run("before-highlight",o),o.grammar)if(a&&g.Worker){var s=new Worker(C.filename);s.onmessage=function(e){l(e.data)},s.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else l(C.highlight(o.code,o.grammar,o.language));else l(C.util.encode(o.code));else C.hooks.run("complete",o)},highlight:function(e,a,n){var t={code:e,grammar:a,language:n};return C.hooks.run("before-tokenize",t),t.tokens=C.tokenize(t.code,t.grammar),C.hooks.run("after-tokenize",t),M.stringify(C.util.encode(t.tokens),t.language)},matchGrammar:function(e,a,n,t,r,i,o){for(var l in n)if(n.hasOwnProperty(l)&&n[l]){if(l==o)return;var s=n[l];s="Array"===C.util.type(s)?s:[s];for(var g=0;g<s.length;++g){var c=s[g],u=c.inside,h=!!c.lookbehind,f=!!c.greedy,d=0,m=c.alias;if(f&&!c.pattern.global){var p=c.pattern.toString().match(/[imuy]*$/)[0];c.pattern=RegExp(c.pattern.source,p+"g")}c=c.pattern||c;for(var y=t,v=r;y<a.length;v+=a[y].length,++y){var k=a[y];if(a.length>e.length)return;if(!(k instanceof M)){if(f&&y!=a.length-1){if(c.lastIndex=v,!(x=c.exec(e)))break;for(var b=x.index+(h?x[1].length:0),w=x.index+x[0].length,A=y,P=v,O=a.length;A<O&&(P<w||!a[A].type&&!a[A-1].greedy);++A)(P+=a[A].length)<=b&&(++y,v=P);if(a[y]instanceof M)continue;N=A-y,k=e.slice(v,P),x.index-=v}else{c.lastIndex=0;var x=c.exec(k),N=1}if(x){h&&(d=x[1]?x[1].length:0);w=(b=x.index+d)+(x=x[0].slice(d)).length;var j=k.slice(0,b),S=k.slice(w),E=[y,N];j&&(++y,v+=j.length,E.push(j));var _=new M(l,u?C.tokenize(x,u):x,m,x,f);if(E.push(_),S&&E.push(S),Array.prototype.splice.apply(a,E),1!=N&&C.matchGrammar(e,a,n,y,v,!0,l),i)break}else if(i)break}}}}},tokenize:function(e,a){var n=[e],t=a.rest;if(t){for(var r in t)a[r]=t[r];delete a.rest}return C.matchGrammar(e,n,a,0,0,!1),n},hooks:{all:{},add:function(e,a){var n=C.hooks.all;n[e]=n[e]||[],n[e].push(a)},run:function(e,a){var n=C.hooks.all[e];if(n&&n.length)for(var t,r=0;t=n[r++];)t(a)}},Token:M};function M(e,a,n,t,r){this.type=e,this.content=a,this.alias=n,this.length=0|(t||"").length,this.greedy=!!r}if(g.Prism=C,M.stringify=function(e,a){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return M.stringify(e,a)}).join("");var n={type:e.type,content:M.stringify(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a};if(e.alias){var t=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,t)}C.hooks.run("wrap",n);var r=Object.keys(n.attributes).map(function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(r?" "+r:"")+">"+n.content+"</"+n.tag+">"},!g.document)return g.addEventListener&&(C.disableWorkerMessageHandler||g.addEventListener("message",function(e){var a=JSON.parse(e.data),n=a.language,t=a.code,r=a.immediateClose;g.postMessage(C.highlight(t,C.languages[n],n)),r&&g.close()},!1)),C;var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return e&&(C.filename=e.src,C.manual||e.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(C.highlightAll):window.setTimeout(C.highlightAll,16):document.addEventListener("DOMContentLoaded",C.highlightAll))),C}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};n["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var i={};i[a]={pattern:RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g,a),"i"),lookbehind:!0,greedy:!0,inside:n},Prism.languages.insertBefore("markup","cdata",i)}}),Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
!function(s){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var e=s.languages.markup;e&&(e.tag.addInlined("style","css"),s.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:e.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:s.languages.css}},alias:"language-css"}},e.tag))}(Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript;
Prism.languages.css.selector={pattern:Prism.languages.css.selector,inside:{"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-:.\w]+/,id:/#[-:.\w]+/,attribute:{pattern:/\[(?:[^[\]"']|("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1)*\]/,greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},attribute:{pattern:/^(\s*)[-\w\xA0-\uFFFF]+/,lookbehind:!0},value:[/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,{pattern:/(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],punctuation:/[()]/}},Prism.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,lookbehind:!0}}),Prism.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:/#[\da-f]{3,8}/i,entity:/\\[\da-f]{1,8}/i,unit:{pattern:/(\d)(?:%|[a-z]+)/,lookbehind:!0},number:/-?[\d.]+/});
!function(h){function v(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(h.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,r,e,o){if(a.language===r){var c=a.tokenStack=[];a.code=a.code.replace(e,function(e){if("function"==typeof o&&!o(e))return e;for(var n,t=c.length;-1!==a.code.indexOf(n=v(r,t));)++t;return c[t]=e,n}),a.grammar=h.languages.markup}}},tokenizePlaceholders:{value:function(p,k){if(p.language===k&&p.tokenStack){p.grammar=h.languages[k];var m=0,d=Object.keys(p.tokenStack);!function e(n){for(var t=0;t<n.length&&!(m>=d.length);t++){var a=n[t];if("string"==typeof a||a.content&&"string"==typeof a.content){var r=d[m],o=p.tokenStack[r],c="string"==typeof a?a:a.content,i=v(k,r),u=c.indexOf(i);if(-1<u){++m;var g=c.substring(0,u),l=new h.Token(k,h.tokenize(o,p.grammar),"language-"+k,o),s=c.substring(u+i.length),f=[];g&&f.push.apply(f,e([g])),f.push(l),s&&f.push.apply(f,e([s])),"string"==typeof a?n.splice.apply(n,[t,1].concat(f)):a.content=f}}else a.content&&e(a.content)}return n}(p.tokens)}}}})}(Prism);
!function(t){t.languages.http={"request-line":{pattern:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] \d+.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )\d+.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var a,e,n,i=t.languages,s={"application/javascript":i.javascript,"application/json":i.json||i.javascript,"application/xml":i.xml,"text/xml":i.xml,"text/html":i.html,"text/css":i.css},p={"application/json":!0,"application/xml":!0};for(var r in s)if(s[r]){a=a||{};var T=p[r]?(void 0,n=(e=r).replace(/^[a-z]+\//,""),"(?:"+e+"|\\w+/(?:[\\w.-]+\\+)+"+n+"(?![+\\w.-]))"):r;a[r]={pattern:RegExp("(content-type:\\s*"+T+"[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*","i"),lookbehind:!0,inside:{rest:s[r]}}}a&&t.languages.insertBefore("http","header-name",a)}(Prism);
!function(n){n.languages.php=n.languages.extend("clike",{keyword:/\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,boolean:{pattern:/\b(?:false|true)\b/i,alias:"constant"},constant:[/\b[A-Z_][A-Z0-9_]*\b/,/\b(?:null)\b/i],comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0}}),n.languages.insertBefore("php","string",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),n.languages.insertBefore("php","comment",{delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"}}),n.languages.insertBefore("php","keyword",{variable:/\$+(?:\w+\b|(?={))/i,package:{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),n.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}});var e={pattern:/{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,lookbehind:!0,inside:{rest:n.languages.php}};n.languages.insertBefore("php","string",{"nowdoc-string":{pattern:/<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,greedy:!0,alias:"string",inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},"heredoc-string":{pattern:/<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,greedy:!0,alias:"string",inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:e}},"single-quoted-string":{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0,alias:"string"},"double-quoted-string":{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,alias:"string",inside:{interpolation:e}}}),delete n.languages.php.string,n.hooks.add("before-tokenize",function(e){if(/<\?/.test(e.code)){n.languages["markup-templating"].buildPlaceholders(e,"php",/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi)}}),n.hooks.add("after-tokenize",function(e){n.languages["markup-templating"].tokenizePlaceholders(e,"php")})}(Prism);
Prism.languages.json={property:{pattern:/"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,greedy:!0},string:{pattern:/"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,greedy:!0},comment:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,number:/-?\d+\.?\d*(e[+-]?\d+)?/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};
Prism.languages.insertBefore("php","variable",{this:/\$this\b/,global:/\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,scope:{pattern:/\b[\w\\]+::/,inside:{keyword:/static|self|parent/,punctuation:/::|\\/}}});
Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:TRUE|FALSE|NULL)\b/i,number:/\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};
!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var l="line-numbers",c=/\n(?!$)/g,m=function(e){var t=a(e)["white-space"];if("pre-wrap"===t||"pre-line"===t){var n=e.querySelector("code"),r=e.querySelector(".line-numbers-rows"),s=e.querySelector(".line-numbers-sizer"),i=n.textContent.split(c);s||((s=document.createElement("span")).className="line-numbers-sizer",n.appendChild(s)),s.style.display="block",i.forEach(function(e,t){s.textContent=e||"\n";var n=s.getBoundingClientRect().height;r.children[t].style.height=n+"px"}),s.textContent="",s.style.display="none"}},a=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null};window.addEventListener("resize",function(){Array.prototype.forEach.call(document.querySelectorAll("pre."+l),m)}),Prism.hooks.add("complete",function(e){if(e.code){var t=e.element,n=t.parentNode;if(n&&/pre/i.test(n.nodeName)&&!t.querySelector(".line-numbers-rows")){for(var r=!1,s=/(?:^|\s)line-numbers(?:\s|$)/,i=t;i;i=i.parentNode)if(s.test(i.className)){r=!0;break}if(r){t.className=t.className.replace(s," "),s.test(n.className)||(n.className+=" line-numbers");var l,a=e.code.match(c),o=a?a.length+1:1,u=new Array(o+1).join("<span></span>");(l=document.createElement("span")).setAttribute("aria-hidden","true"),l.className="line-numbers-rows",l.innerHTML=u,n.hasAttribute("data-start")&&(n.style.counterReset="linenumber "+(parseInt(n.getAttribute("data-start"),10)-1)),e.element.appendChild(l),m(n),Prism.hooks.run("line-numbers",e)}}}}),Prism.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}),Prism.plugins.lineNumbers={getLine:function(e,t){if("PRE"===e.tagName&&e.classList.contains(l)){var n=e.querySelector(".line-numbers-rows"),r=parseInt(e.getAttribute("data-start"),10)||1,s=r+(n.children.length-1);t<r&&(t=r),s<t&&(t=s);var i=t-r;return n.children[i]}}}}}();