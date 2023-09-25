(self.webpackChunkmm_mvp=self.webpackChunkmm_mvp||[]).push([[590],{27844:function(e,t,n){"use strict";n.r(t),n.d(t,{OpenloginAdapter:function(){return O},getOpenloginDefaultOptions:function(){return w}});var i=n(24611),r=n(53755),o=n(47061),s=n(59900),a=n(14771),c=n(12731),h=n(70886),u=n(24269),p=n(38114),l=n(27329),d=n(20240),g=n(46622),v=n(5275),f=n(46331),y=n.n(f),w=function(){return{adapterSettings:{network:l.dr.MAINNET,clientId:"",uxMode:l.$e.POPUP},loginSettings:{}}};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,d.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){(0,u.Z)(f,e);var t=(0,p.Z)(f);function f(){var e;(0,o.Z)(this,f);var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e=t.call(this,n),(0,d.Z)((0,a.Z)(e),"name",g.rW.OPENLOGIN),(0,d.Z)((0,a.Z)(e),"adapterNamespace",g.yk.MULTICHAIN),(0,d.Z)((0,a.Z)(e),"type",g.hN.IN_APP),(0,d.Z)((0,a.Z)(e),"openloginInstance",null),(0,d.Z)((0,a.Z)(e),"status",g.MP.NOT_READY),(0,d.Z)((0,a.Z)(e),"currentChainNamespace",g.EN.EIP155),(0,d.Z)((0,a.Z)(e),"openloginOptions",void 0),(0,d.Z)((0,a.Z)(e),"loginSettings",{loginProvider:""}),(0,d.Z)((0,a.Z)(e),"privKeyProvider",null),e.setAdapterSettings(P(P({},n.adapterSettings),{},{chainConfig:n.chainConfig,clientId:n.clientId||"",sessionTime:n.sessionTime,web3AuthNetwork:n.web3AuthNetwork,useCoreKitKey:n.useCoreKitKey})),e.loginSettings=n.loginSettings||{loginProvider:""},e}return(0,s.Z)(f,[{key:"chainConfigProxy",get:function(){return this.chainConfig?P({},this.chainConfig):null}},{key:"provider",get:function(){var e;return(null===(e=this.privKeyProvider)||void 0===e?void 0:e.provider)||null},set:function(e){throw new Error("Not implemented")}},{key:"init",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t){var n,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,c.Z)((0,h.Z)(f.prototype),"checkInitializationRequirements",this).call(this),this.clientId){e.next=3;break}throw g.Ty.invalidParams("clientId is required before openlogin's initialization");case 3:if(this.openloginOptions){e.next=5;break}throw g.Ty.invalidParams("openloginOptions is required before openlogin's initialization");case 5:return n=!1,this.openloginOptions.uxMode!==l.$e.REDIRECT&&this.openloginOptions.uxMode!==l.$e.SESSIONLESS_REDIRECT||(r=(0,l.Gv)(),Object.keys(r).length>0&&r._pid&&(n=!0)),this.openloginOptions=P(P({},this.openloginOptions),{},{replaceUrlOnRedirect:n}),this.openloginInstance=new l.ZP(P(P({},this.openloginOptions),{},{clientId:this.clientId,network:this.openloginOptions.network||this.web3AuthNetwork||l.dr.MAINNET})),g.cM.debug("initializing openlogin adapter init"),e.next=12,this.openloginInstance.init();case 12:if(this.status=g.MP.READY,this.emit(g.n2.READY,g.rW.OPENLOGIN),e.prev=14,g.cM.debug("initializing openlogin adapter"),!this._getFinalPrivKey()||!t.autoConnect&&!n){e.next=21;break}return this.rehydrated=!0,e.next=21,this.connect();case 21:e.next=27;break;case 23:e.prev=23,e.t0=e.catch(14),g.cM.error("Failed to connect with cached openlogin provider",e.t0),this.emit("ERRORED",e.t0);case 27:case"end":return e.stop()}}),e,this,[[14,23]])})));return function(t){return e.apply(this,arguments)}}()},{key:"connect",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){var t,n=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{loginProvider:""},(0,c.Z)((0,h.Z)(f.prototype),"checkConnectionRequirements",this).call(this),this.status=g.MP.CONNECTING,this.emit(g.n2.CONNECTING,P(P({},t),{},{adapter:g.rW.OPENLOGIN})),e.prev=4,e.next=7,this.connectWithProvider(t);case 7:return e.abrupt("return",this.provider);case 10:if(e.prev=10,e.t0=e.catch(4),g.cM.error("Failed to connect with openlogin provider",e.t0),this.status=g.MP.READY,this.emit(g.n2.ERRORED,e.t0),null===e.t0||void 0===e.t0||!e.t0.message.includes("user closed popup")){e.next=19;break}throw g.RM.popupClosed();case 19:if(!(e.t0 instanceof g.up)){e.next=21;break}throw e.t0;case 21:throw g.RM.connectionError("Failed to login with openlogin");case 22:case"end":return e.stop()}}),e,this,[[4,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"disconnect",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){var t,n=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.length>0&&void 0!==n[0]?n[0]:{cleanup:!1},this.status===g.MP.CONNECTED){e.next=3;break}throw g.RM.notConnectedError("Not connected with wallet");case 3:if(this.openloginInstance){e.next=5;break}throw g.Ty.notReady("openloginInstance is not ready");case 5:return e.next=7,this.openloginInstance.logout();case 7:t.cleanup?(this.status=g.MP.NOT_READY,this.openloginInstance=null,this.privKeyProvider=null):this.status=g.MP.READY,this.rehydrated=!1,this.emit(g.n2.DISCONNECTED);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"authenticateUser",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.status===g.MP.CONNECTED){e.next=2;break}throw g.RM.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return e.next=4,this.getUserInfo();case 4:return t=e.sent,e.abrupt("return",{idToken:t.idToken});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.status===g.MP.CONNECTED){e.next=2;break}throw g.RM.notConnectedError("Not connected with wallet");case 2:if(this.openloginInstance){e.next=4;break}throw g.Ty.notReady("openloginInstance is not ready");case 4:return e.next=6,this.openloginInstance.getUserInfo();case 6:return t=e.sent,e.abrupt("return",t);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setAdapterSettings",value:function(e){(0,c.Z)((0,h.Z)(f.prototype),"setAdapterSettings",this).call(this,e);var t=w();g.cM.info("setting adapter settings",e),this.openloginOptions=P(P(P({},t.adapterSettings),this.openloginOptions),e),e.web3AuthNetwork&&(this.openloginOptions.network=e.web3AuthNetwork),void 0!==e.useCoreKitKey&&(this.openloginOptions.useCoreKitKey=e.useCoreKitKey)}},{key:"addChain",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t){var n,r,o=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=o.length>1&&void 0!==o[1]&&o[1],(0,c.Z)((0,h.Z)(f.prototype),"checkAddChainRequirements",this).call(this,r),null===(n=this.privKeyProvider)||void 0===n||n.addChain(t),this.addChainConfig(t);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"switchChain",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t){var n,r,o=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]&&o[1],(0,c.Z)((0,h.Z)(f.prototype),"checkSwitchChainRequirements",this).call(this,t,r),e.next=4,null===(n=this.privKeyProvider)||void 0===n?void 0:n.switchChain(t);case 4:this.setAdapterSettings({chainConfig:this.getChainConfig(t.chainId)});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getFinalPrivKey",value:function(){var e;if(!this.openloginInstance)return"";var t=this.openloginInstance.privKey;if(null!==(e=this.openloginOptions)&&void 0!==e&&e.useCoreKitKey){if(this.openloginInstance.privKey&&!this.openloginInstance.coreKitKey)throw g.RM.coreKitKeyNotFound();t=this.openloginInstance.coreKitKey}return t}},{key:"connectWithProvider",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){var t,r,o,s,a,c,h,u,p,d,f=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=f.length>0&&void 0!==f[0]?f[0]:{loginProvider:""},this.chainConfig){e.next=3;break}throw g.Ty.invalidParams("chainConfig is required before initialization");case 3:if(this.openloginInstance){e.next=5;break}throw g.Ty.notReady("openloginInstance is not ready");case 5:if(this._getFinalPrivKey()&&(null===(t=r.extraLoginOptions)||void 0===t||!t.id_token)){e.next=12;break}if(this.loginSettings.curve||(this.loginSettings.curve=this.currentChainNamespace===g.EN.SOLANA?l.x7.ED25519:l.x7.SECP256K1),r.loginProvider||this.loginSettings.loginProvider){e.next=10;break}throw g.Ty.invalidParams("loginProvider is required for login");case 10:return e.next=12,this.openloginInstance.login(y()(this.loginSettings,r,{extraLoginOptions:P(P({},r.extraLoginOptions||{}),{},{login_hint:r.login_hint||(null===(o=r.extraLoginOptions)||void 0===o?void 0:o.login_hint)})}));case 12:if(!(s=this._getFinalPrivKey())){e.next=45;break}if(this.currentChainNamespace!==g.EN.SOLANA){e.next=20;break}return e.next=17,Promise.all([n.e(17),n.e(848)]).then(n.bind(n,66017));case 17:a=e.sent,c=a.getED25519Key,s=c(s).sk.toString("hex");case 20:if(this.currentChainNamespace!==g.EN.SOLANA){e.next=28;break}return e.next=23,Promise.all([n.e(17),n.e(703),n.e(833)]).then(n.bind(n,47703));case 23:h=e.sent,u=h.SolanaPrivateKeyProvider,this.privKeyProvider=new u({config:{chainConfig:this.chainConfig}}),e.next=41;break;case 28:if(this.currentChainNamespace!==g.EN.EIP155){e.next=36;break}return e.next=31,Promise.all([n.e(212),n.e(995)]).then(n.bind(n,45212));case 31:p=e.sent,d=p.EthereumPrivateKeyProvider,this.privKeyProvider=new d({config:{chainConfig:this.chainConfig}}),e.next=41;break;case 36:if(this.currentChainNamespace!==g.EN.OTHER){e.next=40;break}this.privKeyProvider=new v.FL,e.next=41;break;case 40:throw new Error("Invalid chainNamespace: ".concat(this.currentChainNamespace," found while connecting to wallet"));case 41:return e.next=43,this.privKeyProvider.setupProvider(s);case 43:this.status=g.MP.CONNECTED,this.emit(g.n2.CONNECTED,{adapter:g.rW.OPENLOGIN,reconnected:this.rehydrated});case 45:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),f}(g.J5)},24654:function(){}}]);
//# sourceMappingURL=590.91b07cee.chunk.js.map