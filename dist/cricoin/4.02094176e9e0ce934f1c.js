(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7caw":function(i,n,c){"use strict";c.r(n),c.d(n,"CoinsListingModule",function(){return ni});var t=c("SVse"),e=c("iInd"),l=c("ey9i"),r=c("LRne"),o=c("lJxs"),a=c("nYR2"),s=c("8Y7J"),b=c("HDdC"),u=c("DH7j"),p=c("XoHu"),d=c("Cfvw");function g(i,n){return new b.a(c=>{const t=i.length;if(0===t)return void c.complete();const e=new Array(t);let l=0,r=0;for(let o=0;o<t;o++){const a=Object(d.a)(i[o]);let s=!1;c.add(a.subscribe({next:i=>{s||(s=!0,r++),e[o]=i},error:i=>c.error(i),complete:()=>{l++,l!==t&&s||(r===t&&c.next(n?n.reduce((i,n,c)=>(i[n]=e[c],i),{}):e),c.complete())}}))}})}var m=c("aMOu");let h=(()=>{class i{constructor(i){this._currency=i}transform(i,n="INR"){return i?this._getCurrencySymbol(n)+this._getAbbreviateNumber(i):"-"}_getAbbreviateNumber(n){const c=String(Math.floor(n));return c.length>=13?i._decimalPipe.transform(n/Math.pow(10,12))+"t":c.length>=10?i._decimalPipe.transform(n/Math.pow(10,9))+"b":c.length>=7?i._decimalPipe.transform(n/Math.pow(10,6))+"m":i._decimalPipe.transform(n)}_getCurrencySymbol(i){if("-"===i)return"";const n=this._currency.getFiatsSnapshot().find(n=>n.name===i);return n?n.symbol:""}}return i._decimalPipe=new t.f("en-US"),i.\u0275fac=function(n){return new(n||i)(s.Jb(m.a))},i.\u0275pipe=s.Ib({name:"cricoinCurrency",type:i,pure:!0}),i})();function f(i,n){if(1&i&&(s.Ob(0,"div",9),s.rc(1),s.Yb(2,"cricoinCurrency"),s.Nb()),2&i){const i=n.$implicit;s.yb(1),s.vc(" ",null==i?null:i.from,"-",null==i?null:i.to," (",s.ac(2,3,i.price,null==i?null:i.to),") ")}}function y(i,n){if(1&i&&(s.Ob(0,"div",2),s.Ob(1,"div",3),s.Ob(2,"div",4),s.Ob(3,"h2",5),s.rc(4),s.Nb(),s.Nb(),s.Kb(5,"div",6),s.Ob(6,"div",7),s.pc(7,f,3,6,"div",8),s.Yb(8,"async"),s.Nb(),s.Nb(),s.Nb()),2&i){const i=n.$implicit,c=n.index,t=s.Xb();s.yb(4),s.tc("",t.exchanges[c]," "),s.yb(3),s.dc("ngForOf",s.Zb(8,2,i))}}let C=(()=>{class i{constructor(i){this._currency=i,this.topCoins=["BTC","ETH","BNB","USDT","ADA"],this.exchanges=["yobit","binance","probit"],this.exchangesTickers=[Object(r.a)([])]}ngOnInit(){this._initTickers()}_initTickers(){this.exchangesTickers=this.exchanges.map(i=>function(...i){if(1===i.length){const n=i[0];if(Object(u.a)(n))return g(n,null);if(Object(p.a)(n)&&Object.getPrototypeOf(n)===Object.prototype){const i=Object.keys(n);return g(i.map(i=>n[i]),i)}}if("function"==typeof i[i.length-1]){const n=i.pop();return g(i=1===i.length&&Object(u.a)(i[0])?i[0]:i,null).pipe(Object(o.a)(i=>n(...i)))}return g(i,null)}(this.topCoins.map(n=>this._currency.tickers$(i,n,"INR"))).pipe(Object(o.a)(i=>i.filter(i=>i))))}}return i.\u0275fac=function(n){return new(n||i)(s.Jb(l.c))},i.\u0275cmp=s.Db({type:i,selectors:[["cricoin-tickers"]],decls:2,vars:1,consts:[[1,"row","tickers-wrapper","p-2"],["class","col-12 ticker my-2 py-2",4,"ngFor","ngForOf"],[1,"col-12","ticker","my-2","py-2"],[1,"row","align-items-start"],[1,"col-2","col-md-1","col-lg-1"],[1,"text-capitalize","m-0"],[1,"col-1"],[1,"col-9","d-flex","flex-wrap"],["class","ticker mx-3 my-1 position-relative",4,"ngFor","ngForOf"],[1,"ticker","mx-3","my-1","position-relative"]],template:function(i,n){1&i&&(s.Ob(0,"div",0),s.pc(1,y,9,4,"div",1),s.Nb()),2&i&&(s.yb(1),s.dc("ngForOf",n.exchangesTickers))},directives:[t.l],pipes:[t.b,h],styles:['.tickers-wrapper[_ngcontent-%COMP%]{background:linear-gradient(90deg,#3f51b5,#64b5f6) #fff;color:#fff}.ticker[_ngcontent-%COMP%]{font-size:.8rem;white-space:nowrap}.ticker[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-weight:700}.ticker[_ngcontent-%COMP%]:not(:last-child):after{content:"";display:inline-block;height:100%;border:1px solid #fff;position:absolute;right:-15px}'],changeDetection:0}),i})();var O=c("51/P"),N=c("92km"),v=c("kYFL"),k=c("LElk");function _(i,n){if(1&i&&(s.Ob(0,"span",22),s.rc(1),s.Nb()),2&i){const i=n.$implicit;s.yb(1),s.sc(null==i?null:i.rank)}}function w(i,n){if(1&i&&(s.Ob(0,"div",23),s.Ob(1,"div",24),s.Kb(2,"cricoin-img",25),s.Nb(),s.Ob(3,"div",26),s.Ob(4,"div",27),s.rc(5),s.Nb(),s.Ob(6,"div",28),s.rc(7),s.Nb(),s.Nb(),s.Nb()),2&i){const i=n.$implicit;s.yb(2),s.dc("width",30)("height",30)("alt",null==i?null:i.name)("src",null==i?null:i.icon),s.yb(2),s.zb("title",null==i?null:i.name),s.yb(1),s.sc(null==i?null:i.name),s.yb(2),s.sc(null==i?null:i.symbol)}}function x(i,n){if(1&i&&(s.Ob(0,"span",22),s.rc(1),s.Yb(2,"cricoinCurrency"),s.Nb()),2&i){const i=n.$implicit,c=s.Xb(2);s.yb(1),s.sc(s.ac(2,1,null==i?null:i.price,c.currentCurrency))}}function S(i,n){if(1&i&&(s.Ob(0,"span",22),s.rc(1),s.Yb(2,"cricoinCurrency"),s.Nb()),2&i){const i=n.$implicit,c=s.Xb(2);s.yb(1),s.sc(s.ac(2,1,null==i?null:i.marketCap,c.currentCurrency))}}function M(i,n){if(1&i&&(s.Ob(0,"span",22),s.rc(1),s.Yb(2,"cricoinCurrency"),s.Nb()),2&i){const i=n.$implicit;s.yb(1),s.sc(s.ac(2,1,null==i?null:i.availableSupply,"-"))}}function $(i,n){if(1&i&&(s.Ob(0,"span",22),s.rc(1),s.Yb(2,"cricoinCurrency"),s.Nb()),2&i){const i=n.$implicit,c=s.Xb(2);s.yb(1),s.sc(s.ac(2,1,null==i?null:i.volume,c.currentCurrency))}}const P=function(i,n){return{"text-danger":i,"text-success":n}};function j(i,n){if(1&i&&(s.Ob(0,"span",29),s.rc(1),s.Nb()),2&i){const i=n.$implicit;s.dc("ngClass",s.gc(2,P,(null==i?null:i.priceChange1d)<0,(null==i?null:i.priceChange1d)>=0)),s.yb(1),s.tc("",null==i?null:i.priceChange1d,"%")}}function F(i,n){if(1&i&&(s.Ob(0,"span",29),s.rc(1),s.Nb()),2&i){const i=n.$implicit;s.dc("ngClass",s.gc(2,P,(null==i?null:i.priceChange1h)<0,(null==i?null:i.priceChange1h)>=0)),s.yb(1),s.tc("",null==i?null:i.priceChange1h,"%")}}function X(i,n){if(1&i&&(s.Ob(0,"section",15),s.Ob(1,"h3"),s.rc(2,"Favorite Crypto Coins (Max 3)"),s.Nb(),s.Ob(3,"cricoin-listing",16),s.Ob(4,"cricoin-listing-column",17),s.pc(5,_,2,1,"ng-template"),s.Nb(),s.Ob(6,"cricoin-listing-column",5),s.pc(7,w,8,7,"ng-template"),s.Nb(),s.Ob(8,"cricoin-listing-column",18),s.pc(9,x,3,4,"ng-template"),s.Nb(),s.Ob(10,"cricoin-listing-column",19),s.pc(11,S,3,4,"ng-template"),s.Nb(),s.Ob(12,"cricoin-listing-column",8),s.pc(13,M,3,4,"ng-template"),s.Nb(),s.Ob(14,"cricoin-listing-column",9),s.pc(15,$,3,4,"ng-template"),s.Nb(),s.Ob(16,"cricoin-listing-column",20),s.pc(17,j,2,5,"ng-template"),s.Nb(),s.Ob(18,"cricoin-listing-column",21),s.pc(19,F,2,5,"ng-template"),s.Nb(),s.Nb(),s.Nb()),2&i){const i=s.Xb();s.yb(3),s.dc("dataSource",i.favoriteCoins),s.yb(1),s.dc("hidable",!0)("align","center")("colSpan",1)("id","rank"),s.yb(2),s.dc("align","left")("id","name"),s.yb(2),s.dc("id","price"),s.yb(2),s.dc("hidable",!0)("id","marketCap"),s.yb(2),s.dc("hidable",!0)("id","availableSupply"),s.yb(2),s.dc("hidable",!0)("id","volume"),s.yb(2),s.dc("colSpan",1)("id","priceChange1d"),s.yb(2),s.dc("colSpan",1)("hidable",!0)("id","priceChange1h")}}function Y(i,n){if(1&i&&(s.Ob(0,"span",22),s.rc(1),s.Nb()),2&i){const i=n.$implicit;s.yb(1),s.sc(null==i?null:i.rank)}}function L(i,n){if(1&i&&(s.Ob(0,"div",23),s.Ob(1,"div",24),s.Kb(2,"cricoin-img",25),s.Nb(),s.Ob(3,"div",26),s.Ob(4,"div",27),s.rc(5),s.Nb(),s.Ob(6,"div",28),s.rc(7),s.Nb(),s.Nb(),s.Nb()),2&i){const i=n.$implicit;s.yb(2),s.dc("width",30)("height",30)("alt",null==i?null:i.name)("src",null==i?null:i.icon),s.yb(2),s.zb("title",null==i?null:i.name),s.yb(1),s.sc(null==i?null:i.name),s.yb(2),s.sc(null==i?null:i.symbol)}}function D(i,n){if(1&i&&(s.Ob(0,"span",22),s.rc(1),s.Yb(2,"cricoinCurrency"),s.Nb()),2&i){const i=n.$implicit,c=s.Xb();s.yb(1),s.sc(s.ac(2,1,null==i?null:i.price,c.currentCurrency))}}function I(i,n){if(1&i&&(s.Ob(0,"span",22),s.rc(1),s.Yb(2,"cricoinCurrency"),s.Nb()),2&i){const i=n.$implicit,c=s.Xb();s.yb(1),s.sc(s.ac(2,1,null==i?null:i.marketCap,c.currentCurrency))}}function T(i,n){if(1&i&&(s.Ob(0,"span",22),s.rc(1),s.Yb(2,"cricoinCurrency"),s.Nb()),2&i){const i=n.$implicit;s.yb(1),s.sc(s.ac(2,1,null==i?null:i.availableSupply,"-"))}}function R(i,n){if(1&i&&(s.Ob(0,"span",22),s.rc(1),s.Yb(2,"cricoinCurrency"),s.Nb()),2&i){const i=n.$implicit,c=s.Xb();s.yb(1),s.sc(s.ac(2,1,null==i?null:i.volume,c.currentCurrency))}}function V(i,n){if(1&i&&(s.Ob(0,"span",29),s.rc(1),s.Nb()),2&i){const i=n.$implicit;s.dc("ngClass",s.gc(2,P,(null==i?null:i.priceChange1d)<0,(null==i?null:i.priceChange1d)>=0)),s.yb(1),s.tc("",null==i?null:i.priceChange1d,"%")}}function H(i,n){if(1&i&&(s.Ob(0,"span",29),s.rc(1),s.Nb()),2&i){const i=n.$implicit;s.dc("ngClass",s.gc(2,P,(null==i?null:i.priceChange1h)<0,(null==i?null:i.priceChange1h)>=0)),s.yb(1),s.tc("",null==i?null:i.priceChange1h,"%")}}function J(i,n){if(1&i){const i=s.Pb();s.Ob(0,"cricoin-icon",31),s.Vb("click",function(n){s.kc(i);const c=s.Xb().$implicit;return s.Xb().toggleFavorite(n,c)}),s.Nb()}if(2&i){const i=s.Xb().$implicit;s.Bb("active",null==i?null:i.isFavorite),s.dc("name","heart")}}function z(i,n){if(1&i&&s.pc(0,J,1,3,"cricoin-icon",30),2&i){const i=n.$implicit,c=s.Xb();s.dc("ngIf",(null==i?null:i.isFavorite)||c.favoriteCoins.length<3)}}function A(i,n){if(1&i){const i=s.Pb();s.Ob(0,"div",32),s.Vb("click",function(){return s.kc(i),s.Xb().fetchNextCoins()}),s.Ob(1,"button",33),s.rc(2,"View More"),s.Nb(),s.Nb()}}function B(i,n){if(1&i&&(s.Ob(0,"span",22),s.rc(1),s.Nb()),2&i){const i=n.$implicit;s.yb(1),s.sc(null==i?null:i.exchange)}}function E(i,n){if(1&i&&(s.Ob(0,"span",22),s.rc(1),s.Nb()),2&i){const i=n.$implicit;s.yb(1),s.sc(null==i?null:i.pair)}}function K(i,n){if(1&i&&(s.Ob(0,"span",22),s.rc(1),s.Yb(2,"cricoinCurrency"),s.Nb()),2&i){const i=n.$implicit,c=s.Xb(2);s.yb(1),s.sc(s.ac(2,1,null==i?null:i.price,c.currentCurrency))}}function G(i,n){if(1&i&&(s.Ob(0,"span",22),s.rc(1),s.Yb(2,"cricoinCurrency"),s.Nb()),2&i){const i=n.$implicit,c=s.Xb(2);s.yb(1),s.sc(s.ac(2,1,null==i?null:i.volume,c.currentCurrency))}}const U=function(){return[]};function Z(i,n){if(1&i&&(s.Ob(0,"div",34),s.Ob(1,"div",35),s.Ob(2,"div",24),s.Kb(3,"cricoin-img",36),s.Nb(),s.Ob(4,"div",37),s.Ob(5,"div"),s.Ob(6,"strong"),s.rc(7),s.Nb(),s.Nb(),s.Ob(8,"div",38),s.rc(9),s.Yb(10,"date"),s.Nb(),s.Nb(),s.Nb(),s.Ob(11,"cricoin-listing",39),s.Yb(12,"async"),s.Ob(13,"cricoin-listing-column",40),s.pc(14,B,2,1,"ng-template"),s.Nb(),s.Ob(15,"cricoin-listing-column",41),s.pc(16,E,2,1,"ng-template"),s.Nb(),s.Ob(17,"cricoin-listing-column",18),s.pc(18,K,3,4,"ng-template"),s.Nb(),s.Ob(19,"cricoin-listing-column",9),s.pc(20,G,3,4,"ng-template"),s.Nb(),s.Nb(),s.Nb()),2&i){const i=n.$implicit,c=s.Xb();s.yb(3),s.dc("alt",null==i?null:i.name)("height",60)("width",60)("src",null==i?null:i.icon),s.yb(4),s.uc("",null==i?null:i.name," (",null==i?null:i.symbol,")"),s.yb(2),s.sc(s.ac(10,17,c.currentDate,"longDate")),s.yb(2),s.dc("loading",c.isCoinMarketsLoading)("dataSource",s.Zb(12,20,c.coinMarkets$)||s.ec(22,U)),s.yb(2),s.dc("hidable",!0)("align","left")("id","exchange"),s.yb(2),s.dc("align","left")("id","pair"),s.yb(2),s.dc("id","price"),s.yb(2),s.dc("hidable",!0)("id","volume")}}const q=[{path:"",component:(()=>{class i{constructor(i){this._currency=i,this.coins=[],this.favoriteCoins=[],this.currentCurrency="INR",this.coinMarkets$=Object(r.a)([]),this.isCoinsLoading=!1,this.isCoinMarketsLoading=!1,this._pageNumber=1,this._limit=10,this._allCoinsFetched=!1}get showViewMore(){return!this._allCoinsFetched}get currentDate(){return Date.now()}ngOnInit(){this._currency.fiatChange$().subscribe(i=>{this.currentCurrency=i.name,this._initCoinsList()})}sortCoins(i){this._sortState=i,this.coins=this._getSortedCoins(this.coins,i.direction,i.id)}toggleFavorite(i,n){i.stopPropagation(),n.isFavorite=!n.isFavorite,this.favoriteCoins=n.isFavorite?[...this.favoriteCoins,n]:this.favoriteCoins.filter(i=>i.id!==n.id)}displayCoinMarkets(i){this.isCoinMarketsLoading=!0,this.coinMarkets$=this._currency.coinMarkets$(i.id).pipe(Object(o.a)(i=>i.map((i,n)=>Object.assign({id:String(n)},i))),Object(a.a)(()=>{this.isCoinMarketsLoading=!1}))}fetchNextCoins(){this._pageNumber++,this._fetchCoins((this._pageNumber-1)*this._limit,this._limit,this.currentCurrency).subscribe(i=>{this.coins=[...this.coins,...i],this._sortState&&this.sortCoins(this._sortState)})}_initCoinsList(){this.isCoinsLoading=!0,this._fetchCoins(0,this._limit*this._pageNumber,this.currentCurrency).pipe(Object(a.a)(()=>{this.isCoinsLoading=!1})).subscribe(i=>{this.coins=i,this._sortState&&this.sortCoins(this._sortState)})}_fetchCoins(i,n,c){return this._currency.coins$(i,n,c).pipe(Object(o.a)(i=>(this._allCoinsFetched=0===i.length,i)))}_getSortedCoins(i,n,c){return i.sort((i,t)=>"ASC"===n?i[c]-t[c]:t[c]-i[c])}}return i.\u0275fac=function(n){return new(n||i)(s.Jb(l.c))},i.\u0275cmp=s.Db({type:i,selectors:[["cricoin-coins-listing"]],decls:28,vars:29,consts:[["id","tickers",1,"p-2"],["class","p-2","id","favorite-coins-list",4,"ngIf"],["id","coins-list",1,"p-2"],[3,"loading","dataSource","expandedRowTmpl","sortingChanged","rowExpanded"],["label","Rank",3,"hidable","sort","align","colSpan","id"],["label","Name",3,"align","id"],["label","Price",3,"sort","id"],["label","Market Cap",3,"hidable","sort","id"],["label","Supply",3,"hidable","id"],["label","Volume",3,"hidable","id"],["label","Change(1d)",3,"sort","colSpan","id"],["label","Change(1h)",3,"hidable","colSpan","sort","id"],["label","",3,"id"],["class","d-flex justify-content-center m-5",3,"click",4,"ngIf"],["coinDetailsTmpl",""],["id","favorite-coins-list",1,"p-2"],[3,"dataSource"],["label","Rank",3,"hidable","align","colSpan","id"],["label","Price",3,"id"],["label","Market Cap",3,"hidable","id"],["label","Change(1d)",3,"colSpan","id"],["label","Change(1h)",3,"colSpan","hidable","id"],[1,"coin-info"],[1,"row","align-items-center"],[1,"col-3"],[3,"width","height","alt","src"],[1,"col"],[1,"coin-name","text-truncate","coin-info"],[1,"coin-symbol","text-muted"],[1,"percent-change",3,"ngClass"],["class","favorite-icon",3,"active","name","click",4,"ngIf"],[1,"favorite-icon",3,"name","click"],[1,"d-flex","justify-content-center","m-5",3,"click"],[1,"view-more","cursor-pointer"],[1,"p-3"],[1,"row","my-2","align-items-center"],[3,"alt","height","width","src"],[1,"col-8","col-offset-2"],[1,"text-muted"],[1,"d-block","w-100","coin-markets",3,"loading","dataSource"],["label","Exchange",3,"hidable","align","id"],["label","Pair",3,"align","id"]],template:function(i,n){if(1&i&&(s.Ob(0,"section",0),s.Ob(1,"h3"),s.rc(2,"Tickers"),s.Nb(),s.Kb(3,"cricoin-tickers"),s.Nb(),s.pc(4,X,20,19,"section",1),s.Ob(5,"section",2),s.Ob(6,"cricoin-listing",3),s.Vb("sortingChanged",function(i){return n.sortCoins(i)})("rowExpanded",function(i){return n.displayCoinMarkets(i)}),s.Ob(7,"cricoin-listing-column",4),s.pc(8,Y,2,1,"ng-template"),s.Nb(),s.Ob(9,"cricoin-listing-column",5),s.pc(10,L,8,7,"ng-template"),s.Nb(),s.Ob(11,"cricoin-listing-column",6),s.pc(12,D,3,4,"ng-template"),s.Nb(),s.Ob(13,"cricoin-listing-column",7),s.pc(14,I,3,4,"ng-template"),s.Nb(),s.Ob(15,"cricoin-listing-column",8),s.pc(16,T,3,4,"ng-template"),s.Nb(),s.Ob(17,"cricoin-listing-column",9),s.pc(18,R,3,4,"ng-template"),s.Nb(),s.Ob(19,"cricoin-listing-column",10),s.pc(20,V,2,5,"ng-template"),s.Nb(),s.Ob(21,"cricoin-listing-column",11),s.pc(22,H,2,5,"ng-template"),s.Nb(),s.Ob(23,"cricoin-listing-column",12),s.pc(24,z,1,1,"ng-template"),s.Nb(),s.Nb(),s.pc(25,A,3,0,"div",13),s.Nb(),s.pc(26,Z,21,23,"ng-template",null,14,s.qc)),2&i){const i=s.jc(27);s.yb(4),s.dc("ngIf",n.favoriteCoins.length>0),s.yb(2),s.dc("loading",n.isCoinsLoading)("dataSource",n.coins)("expandedRowTmpl",i),s.yb(1),s.dc("hidable",!0)("sort",!0)("align","center")("colSpan",1)("id","rank"),s.yb(2),s.dc("align","left")("id","name"),s.yb(2),s.dc("sort",!0)("id","price"),s.yb(2),s.dc("hidable",!0)("sort",!0)("id","marketCap"),s.yb(2),s.dc("hidable",!0)("id","availableSupply"),s.yb(2),s.dc("hidable",!0)("id","volume"),s.yb(2),s.dc("sort",!0)("colSpan",1)("id","priceChange1d"),s.yb(2),s.dc("hidable",!0)("colSpan",1)("sort",!0)("id","priceChange1h"),s.yb(2),s.dc("id","favorite"),s.yb(2),s.dc("ngIf",n.showViewMore)}},directives:[C,t.m,O.a,N.a,v.a,t.k,k.a],pipes:[h,t.e,t.b],styles:[".coin-name[_ngcontent-%COMP%]{letter-spacing:1px}.coin-symbol[_ngcontent-%COMP%]{font-size:.7rem}.coin-info[_ngcontent-%COMP%], .percent-change[_ngcontent-%COMP%]{font-weight:400;font-size:.9rem;font-weight:300}.view-more[_ngcontent-%COMP%]{background-color:#18c683;color:#fff;box-shadow:0 2px 15px -3px rgba(0,0,0,.4);border:none;padding:1rem;border-radius:1rem}.coin-markets[_ngcontent-%COMP%]{max-height:25rem;overflow:auto}.favorite-icon[_ngcontent-%COMP%]{opacity:.1}.favorite-icon.active[_ngcontent-%COMP%]{opacity:1}@media screen and (max-width:360px){.coin-name[_ngcontent-%COMP%]{max-width:4rem!important}}@media screen and (min-width:361px) and (max-width:450px){.coin-name[_ngcontent-%COMP%]{max-width:6rem!important}}"]}),i})()}];let Q=(()=>{class i{}return i.\u0275mod=s.Hb({type:i}),i.\u0275inj=s.Gb({factory:function(n){return new(n||i)},imports:[[e.a.forChild(q)],e.a]}),i})();var W=c("R6jH"),ii=c("B/Dj");let ni=(()=>{class i{}return i.\u0275mod=s.Hb({type:i}),i.\u0275inj=s.Gb({factory:function(n){return new(n||i)},imports:[[t.c,Q,W.a,l.b,ii.c,ii.b]]}),i})()}}]);