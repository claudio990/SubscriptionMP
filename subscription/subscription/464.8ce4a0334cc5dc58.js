"use strict";(self.webpackChunksubscriptionMP=self.webpackChunksubscriptionMP||[]).push([[464],{7464:(T,m,r)=>{r.r(m),r.d(m,{LandingModule:()=>l});var d=r(6895),f=r(6881),h=r(5861),b=r(3905),a=r(433),_=r(5226),x=r.n(_),t=r(4650),C=r(2468),v=r(3651);const k=["modal"];function y(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div")(1,"label",11),t._uU(2,"Repetir Contrase\xf1a"),t.qZA(),t.TgZ(3,"input",24),t.NdJ("change",function(g){t.CHM(n);const p=t.oxw();return t.KtG(p.checkPass(g))}),t.qZA()()}}const Z=function(e){return{btn_select:e}};function w(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"a",35),t.NdJ("click",function(){const p=t.CHM(n).$implicit,u=t.oxw().$implicit;return t.KtG(u.selected_period=p)}),t._uU(1),t.qZA()}if(2&e){const n=o.$implicit,i=t.oxw().$implicit;t.Q6J("ngClass",t.VKq(2,Z,i.selected_period.id==n.id)),t.xp6(1),t.Oqu(n.period_title)}}function M(e,o){if(1&e&&(t.TgZ(0,"div",36),t.O4$(),t.TgZ(1,"svg",37),t._UZ(2,"path",38)(3,"rect",39)(4,"rect",40)(5,"rect",41)(6,"rect",42),t.qZA(),t.kcU(),t.TgZ(7,"p",43),t._uU(8),t.qZA()()),2&e){const n=o.$implicit;t.xp6(8),t.hij(" ",n.title," ")}}function O(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",25)(1,"div",26)(2,"p",27),t._uU(3),t.qZA(),t.TgZ(4,"p",28),t._uU(5),t.qZA(),t.TgZ(6,"div",29),t.YNc(7,w,2,4,"a",30),t.qZA()(),t.TgZ(8,"div",31),t.YNc(9,M,9,1,"div",32),t.qZA(),t.TgZ(10,"div",33)(11,"button",34),t.NdJ("click",function(){const p=t.CHM(n).$implicit,u=t.oxw();return t.KtG(u.contract(p))}),t._uU(12," Suscribir"),t._UZ(13,"br"),t.qZA()()()}if(2&e){const n=o.$implicit,i=t.oxw();t.Akn(i.calculateHeightPlan(n.perks.length)),t.xp6(3),t.Oqu(n.subscription_title),t.xp6(2),t.hij("$",n.selected_period.prices[0].price,""),t.xp6(2),t.Q6J("ngForOf",n.periods),t.xp6(1),t.Akn(i.calculateHeightPerks(n.perks.length)),t.xp6(1),t.Q6J("ngForOf",n.perks)}}class c{constructor(o,n,i){this.dataServices=o,this.authService=n,this.formBuilder=i,this.subscriptions=[],this.inf={current_subscription:"",subscription_period:""},this.loginForm=this.formBuilder.group({correo:["",a.kI.required],password:["",a.kI.required],new:[!0]}),this.heightLine=68}ngOnInit(){var o=this;return(0,h.Z)(function*(){o.subscriptions=yield(0,b.z)(o.dataServices.getSubscription())})()}checkPass(o){this.loginForm.value.password!=o.target.value&&(this.loginForm.value.password="",o.target.value="",x().fire({title:"Contrase\xf1as diferentes"}))}ngOnDestroy(){this.modal.nativeElement.click()}onSubmit(){}fnGoogle(){this.modal.nativeElement.click(),this.authService.GoogleAuth(this.inf)}fnFace(){this.modal.nativeElement.click(),this.authService.FacebookAuth(this.inf)}fnApple(){this.modal.nativeElement.click(),this.authService.appleLog()}fnEmail(){this.modal.nativeElement.click(),this.authService.doRegister(this.loginForm.value,this.inf)}contract(o){this.inf.current_subscription=o.subscription_id,this.inf.subscription_period=o.selected_period.period}calculateHeightPerks(o){return window.innerWidth<550?"height: "+this.heightLine*o+"px;":""}calculateHeightPlan(o){return window.innerWidth<550?"height: "+(this.heightLine*o+168+36+80)+"px;":""}}c.\u0275fac=function(o){return new(o||c)(t.Y36(C.D),t.Y36(v.e),t.Y36(a.qu))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-landing"]],viewQuery:function(o,n){if(1&o&&t.Gf(k,5),2&o){let i;t.iGM(i=t.CRH())&&(n.modal=i.first)}},decls:33,vars:4,consts:[["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],["modal",""],[1,"modal-body"],[3,"formGroup","ngSubmit"],["for","inputPassword5",1,"form-label",2,"font-size","13px"],["type","text","name","","id","","placeholder","email","formControlName","correo",1,"input_form"],["for","inputPassword5",1,"form-label",2,"font-size","13px","margin-top","17px"],["type","password","name","","id","","placeholder","Contrase\xf1a","formControlName","password",1,"input_form",3,"value"],[4,"ngIf"],["type","checkbox","formControlName","new",2,"margin-top","17px"],["type","button",1,"btn","btn-primary",2,"margin-top","30px","width","100%",3,"click"],[2,"margin","auto","font-size","15px","margin-bottom","10px"],[1,"log_social"],[1,"btn_social",3,"click"],["src","../../../subscription/assets/images/logog.png","alt",""],["src","../../../subscription/assets/images/logof.png","alt",""],["src","../../../subscription/assets/images/logoapple.png","alt",""],["id","subscription",2,"padding-left","20px","padding-right","20px"],["id","subs","class","subs",3,"style",4,"ngFor","ngForOf"],["type","password","name","","id","","placeholder","Contrase\xf1a",1,"input_form",3,"change"],["id","subs",1,"subs"],[1,"plan"],["id","sub_name",2,"font-size","19px","color","white","font-family","Roboto","margin-bottom","5px"],["id","price",1,"price",2,"font-family","Roboto"],["id","select",1,"select"],["id","period_btn","style","border-radius: 3px; font-family: 'Roboto'; font-size: 14px;","class","btn_",3,"ngClass","click",4,"ngFor","ngForOf"],["id","perks"],["style","align-items: center;",4,"ngFor","ngForOf"],["id","btn_choose"],["id","choose_btn","type","button","data-bs-toggle","modal","data-bs-target","#exampleModal",1,"btn","btn-primary","btn_register",2,"width","80%",3,"click"],["id","period_btn",1,"btn_",2,"border-radius","3px","font-family","Roboto","font-size","14px",3,"ngClass","click"],[2,"align-items","center"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512","height","20",1,"ionicon",2,"margin","0 auto","margin-bottom","-20px","color","#a47e02","display","block"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","32","d","M48 256h416"],["x","384","y","128","width","32","height","256","rx","16","ry","16","fill","none","stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","32"],["x","96","y","128","width","32","height","256","rx","16","ry","16","fill","none","stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","32"],["x","32","y","192","width","16","height","128","rx","8","ry","8","fill","none","stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","32"],["x","464","y","192","width","16","height","128","rx","8","ry","8","fill","none","stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","32"],["id","perk",1,"perks"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),t._uU(5,"Reg\xedstrate o inicia sesi\xf3n "),t.qZA(),t._UZ(6,"button",5,6),t.qZA(),t.TgZ(8,"div",7)(9,"form",8),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(10,"label",9),t._uU(11,"Correo"),t.qZA(),t._UZ(12,"input",10),t.TgZ(13,"label",11),t._uU(14,"Contrase\xf1a"),t.qZA(),t._UZ(15,"input",12),t.YNc(16,y,4,0,"div",13),t._UZ(17,"input",14),t.TgZ(18,"p"),t._uU(19,"Soy Nuevo"),t.qZA(),t.TgZ(20,"button",15),t.NdJ("click",function(){return n.fnEmail()}),t._uU(21,"Continuar"),t.qZA()()(),t.TgZ(22,"p",16),t._uU(23,"o Iniciar sesi\xf3n con"),t.qZA(),t.TgZ(24,"div",17)(25,"a",18),t.NdJ("click",function(){return n.fnGoogle()}),t._UZ(26,"img",19),t.qZA(),t.TgZ(27,"a",18),t.NdJ("click",function(){return n.fnFace()}),t._UZ(28,"img",20),t.qZA(),t.TgZ(29,"a",18),t.NdJ("click",function(){return n.fnApple()}),t._UZ(30,"img",21),t.qZA()()()()(),t.TgZ(31,"div",22),t.YNc(32,O,14,8,"div",23),t.qZA()),2&o&&(t.xp6(9),t.Q6J("formGroup",n.loginForm),t.xp6(6),t.s9C("value",n.loginForm.value.password),t.xp6(1),t.Q6J("ngIf",n.loginForm.value.new),t.xp6(16),t.Q6J("ngForOf",n.subscriptions))},dependencies:[d.mk,d.sg,d.O5,a._Y,a.Fj,a.Wl,a.JJ,a.JL,a.sg,a.u],styles:["#subscription[_ngcontent-%COMP%]{background:linear-gradient(rgba(0,0,0,1),rgba(124,103,36,1) 26.47%,rgba(226,212,165,1) 63.03%,rgba(213,188,106,1))!important;display:grid;grid-template-columns:repeat(auto-fit,minmax(450px,1fr));grid-gap:25px;margin:auto}.subs[_ngcontent-%COMP%]{box-shadow:0 -13px 30px -13px #a47e02;height:86vH;max-width:360px;background-color:#00000064;margin:7vh auto;overflow:hidden;color:#fff;border-radius:8px;background-image:url(plans1.03ff7bb0b7a0709a.png);background-position:center;background-size:cover}.plan[_ngcontent-%COMP%]{text-align:center;align-items:center;margin:10px auto;height:20vH;color:#000;border-radius:50px}.plan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Times New Roman,Times,serif;font-size:25px}.select[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(50px,1fr));width:90%;border-top:1px solid #a47e02;border-bottom:1px solid #a47e02;margin:auto}button[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{cursor:pointer}.btn_[_ngcontent-%COMP%]{text-align:center;border:1px solid #a47e02;border-radius:12px!important;color:#a47e02;margin:10px 3px;text-decoration:none}.btn_[_ngcontent-%COMP%]:hover{color:#fff}#subscription[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,2fr));margin:auto}.perks[_ngcontent-%COMP%]{display:block;text-align:center;color:#fff;font-size:14px;font-family:Roboto;margin-bottom:16px;padding:20px 20px 0;justify-content:center}#perks[_ngcontent-%COMP%]{margin-top:10px;height:62%;overflow-y:scroll}.btn_select[_ngcontent-%COMP%]{background:#a47e02;color:#000;margin:10px 0;border-radius:12px!important}.btn_register[_ngcontent-%COMP%]{background:#a47e02;color:#fff!important;bottom:0;margin:15px auto auto}.btn_select[_ngcontent-%COMP%]:hover{color:#000}#btn_choose[_ngcontent-%COMP%]{display:flex;width:100%}.btn-primary[_ngcontent-%COMP%]{background-color:#a47e02!important;color:#fff!important;border:0px!important}.log_social[_ngcontent-%COMP%]{display:flex;margin:10px auto 50px}.btn_social[_ngcontent-%COMP%]{max-width:100px;margin-left:20px}.fb-login-button[_ngcontent-%COMP%]{margin-left:50px;margin-bottom:5px;max-width:50px}.btn_contratar[_ngcontent-%COMP%]{margin:15px auto 0;height:80px;clip-path:polygon(30% 0%,70% 0%,100% 43%,99% 100%,70% 100%,30% 100%,0 100%,0 41%);border-radius:10px;background:rgb(99,99,99);background:linear-gradient(90deg,rgba(99,99,99,1) 14%,rgba(199,199,199,1) 50%,rgba(119,119,119,1) 100%)}.price[_ngcontent-%COMP%]{font-size:40px!important;margin-top:-15px;color:#d6cdabf1;text-shadow:0 0 .2em #e5b311}.input_form[_ngcontent-%COMP%]{margin:auto;width:100%;border:0px;border-bottom:1px solid #95959584}.btn_social[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:40px;max-height:40px;margin:auto}#choose_btn[_ngcontent-%COMP%]{transition:all .3s;margin-bottom:10px!important}#choose_btn[_ngcontent-%COMP%]:hover{opacity:.8}@media (max-width: 800px){.subs[_ngcontent-%COMP%]{box-shadow:0 -13px 30px -13px #a47e02;height:600px;max-width:360px;background-color:#00000064;margin:7vh auto;overflow:hidden;color:#fff;border-radius:8px;background-image:url(plans1.03ff7bb0b7a0709a.png);background-position:center;background-size:cover;display:flex;flex-direction:column}.plan[_ngcontent-%COMP%]{margin:15px 0 0}#perks[_ngcontent-%COMP%]{height:50%}}@media (max-width: 550px){.subs[_ngcontent-%COMP%]{margin:1vh auto 2vh;height:auto}.plan[_ngcontent-%COMP%]{height:auto;margin-bottom:10px}#choose_btn[_ngcontent-%COMP%]{margin-bottom:30px!important}}"]});const P=[{path:"",component:c}];class s{}s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[f.Bz.forChild(P),f.Bz]});class l{}l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[d.ez,a.UX,s]})}}]);