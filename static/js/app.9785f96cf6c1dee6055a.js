webpackJsonp([1],{"/ML0":function(s,t){},"8QI3":function(s,t){},"9Ko4":function(s,t){s.exports={title:"Experience",experiences:[{company_name:"The Outplay",logo:"/static/images/company/theoutplay.png",location:"Milan, Italy",role:"Backend Developer",start_date:"2017/11/2",end_date:"Present",technologies:"Java, Spring Boot, Docker.",industry:"Marketing Technology"},{company_name:"Objectway",logo:"/static/images/company/objectway.png",location:"Milan, Italy",role:"Junior Developer",start_date:"2015/11/16",end_date:"2017/10/28",technologies:"Java, JSP, JSF, MyBatis, Hibernate, Spring MVC, Mercurial, Jira.",industry:"Fintech"},{company_name:"Consoft Sistemi",logo:"/static/images/company/consoft.png",location:"Turin, Italy",role:"Junior Developer",start_date:"2015/5/4",end_date:"2015/10/30",technologies:"Java, JSP, Liferay, Alfresco.",industry:""}]}},CdE4:function(s,t){},NHnr:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("7+uW"),n={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"about",attrs:{id:"about"}},[e("div",{staticClass:"text"},[e("h3",[s._v(s._s(s.msg))]),s._v("\n      "+s._s(s.about_me)+"\n      "+s._s(s.about_tech)+"\n    ")]),s._v(" "),e("ul",s._l(s.links,function(s){return e("li",[e("a",{staticClass:"link",attrs:{href:s.url,target:"_blank"}},[e("img",{staticClass:"image",attrs:{src:s.logo}})])])}))])},staticRenderFns:[]};var i={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"experience",attrs:{id:"experience"}},[e("div",{staticClass:"text"},[e("h3",[s._v(s._s(s.title))])]),s._v(" "),e("ul",s._l(s.experiences,function(t){return e("li",[e("div",{staticClass:"company"},[e("img",{staticClass:"image",attrs:{src:t.logo}}),s._v(" "),e("div",{staticClass:"company-info"},[e("p",[s._v(s._s(s._f("formatDate")(t.start_date))+" - "+s._s(s._f("formatDate")(t.end_date))+" \n            | "+s._s(s._f("getYears")(t.start_date,t.end_date)))]),s._v(" "),e("p",[s._v(s._s(t.role)+" • "),e("b",[s._v(s._s(t.company_name))]),s._v(" • "+s._s(t.location))]),s._v(" "),e("p",[e("small",[s._v(s._s(t.industry))])]),s._v(" "),e("p",[e("i",[s._v(s._s(t.technologies))])])])])])}))])},staticRenderFns:[]};var o={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"skill",attrs:{id:"skill"}},[e("ul",s._l(s.skills,function(t){return e("li",[e("div",{staticClass:"text"},[e("h3",[s._v(s._s(t.title))])]),s._v(" "),e("ul",{staticClass:"skill-list"},s._l(t.technologies,function(t){return e("li",{staticClass:"tech"},[e("div",{staticClass:"tech-info"},[e("img",{staticClass:"image",attrs:{src:t.logo}}),s._v(" "),e("p",[s._v(s._s(t.name))])])])}))])}))])},staticRenderFns:[]};var r={name:"App",components:{About:e("VU/8")({data:function(){return this.$store.state.about}},n,!1,function(s){e("CdE4")},"data-v-7289b7b6",null).exports,Experience:e("VU/8")({data:function(){return this.$store.state.experience}},i,!1,function(s){e("wxrc")},"data-v-1e4bc877",null).exports,Skill:e("VU/8")({data:function(){return this.$store.state.skill}},o,!1,function(s){e("8QI3")},"data-v-7e628d1e",null).exports}},l={render:function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"app",attrs:{id:"app"}},[t("div",{staticClass:"content"},[t("div",{staticClass:"component"},[t("About",{staticClass:"about"}),this._v(" "),t("Skill",{staticClass:"border-component"})],1),this._v(" "),t("div",{staticClass:"component left-border"},[t("Experience")],1)])])},staticRenderFns:[]};var c=e("VU/8")(r,l,!1,function(s){e("/ML0")},null,null).exports,u=e("NYxO"),j=e("hmAo"),m=e.n(j),g=e("9Ko4"),d=e.n(g),p=e("nHLY"),h=e.n(p);a.a.use(u.a);var v={state:{about_me:m.a.about_me.replace("{{age}}",Math.floor((new Date-new Date(m.a.birthday))/315576e5)),msg:m.a.msg,about_tech:m.a.about_tech,links:m.a.links}},f={state:d.a},y={state:h.a},_=new u.a.Store({modules:{about:v,experience:f,skill:y}}),b=e("PJh5"),k=e.n(b);a.a.config.productionTip=!1,a.a.filter("formatDate",function(s){return!isNaN(Date.parse(s))&&k()(new Date(s).toISOString()).isValid()?k()(new Date(s).toISOString()).format("DD MMMM YYYY"):s}),a.a.filter("getYears",function(s,t){var e=k()(new Date(s).toISOString());if(!isNaN(Date.parse(t))&&k()(new Date(t).toISOString()).isValid())var a=k()(new Date(t).toISOString());else a=k()((new Date).toISOString());var n=k.a.duration(a.diff(e)).years(),i=k.a.duration(a.diff(e)).months(),o=k.a.duration(a.diff(e)).days(),r="";return 0!=n&&(r=n+" years "),0!=i&&(r=r+i+" months "),0!=o&&(r=r+o+" days "),r}),new a.a({store:_,el:"#app",components:{App:c},template:"<App/>"})},hmAo:function(s,t){s.exports={msg:"— Hi, I'm Stefano Guerrini, a backend developer.",about_me:"I was born in Messina {{age}} years ago, but I live in Milano.",about_tech:"I work primarily with Java, I like to learn new technologies, such as Go. I've always been drawn to coding, I'm a technology lover, I love damn to have many doubts and ask myself many questions. I want to improve always myself! Also I like to have often new objectives. I consider myself a person dynamic and smart, always funny, and when is necessary a serious and finicking developer. :)",birthday:"1995/2/3",links:[{url:"https://www.linkedin.com/in/stefanoguerrini",logo:"/static/images/in.png"},{url:"https://github.com/StefanoGuerrini",logo:"/static/images/git.png"},{url:"https://stackoverflow.com/users/5002696",logo:"/static/images/stackoverflow.png"},{url:"https://github.com/StefanoGuerrini/stefanoguerrini.github.io",logo:"/static/images/source.png"}]}},nHLY:function(s,t){s.exports={skills:[{title:"I'm comfortable with:",technologies:[{name:"Java",logo:"/static/images/tech/java.png"},{name:"Spring",logo:"/static/images/tech/spring.png"},{name:"Docker",logo:"/static/images/tech/docker.png"},{name:"IntelliJ",logo:"/static/images/tech/intellij.png"},{name:"Git",logo:"/static/images/tech/git.png"}]},{title:"I'm studying:",technologies:[{name:"Go",logo:"/static/images/tech/go.png"},{name:"Vue.js",logo:"/static/images/tech/vuejs.png"},{name:"Kotlin",logo:"/static/images/tech/kotlin.png"}]}]}},uslO:function(s,t,e){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(s){return e(i(s))}function i(s){var t=a[s];if(!(t+1))throw new Error("Cannot find module '"+s+"'.");return t}n.keys=function(){return Object.keys(a)},n.resolve=i,s.exports=n,n.id="uslO"},wxrc:function(s,t){}},["NHnr"]);
//# sourceMappingURL=app.9785f96cf6c1dee6055a.js.map