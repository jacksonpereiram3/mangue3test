!function(e){"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){!function(t){var o="function"==typeof define&&define.amd,a="undefined"!=typeof module&&module.exports,n="https:"==document.location.protocol?"https:":"http:";o||(a?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js%3E%3C/script%3E"))),function(){var t,o="mCustomScrollbar",a={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:!0,autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},n=0,i={},r=window.attachEvent&&!window.addEventListener?1:0,l=!1,s=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],c={init:function(t){var t=e.extend(!0,{},a,t),o=d.call(this);if(t.live){var r=t.liveSelector||this.selector||".mCustomScrollbar",l=e(r);if("off"===t.live)return void f(r);i[r]=setTimeout(function(){l.mCustomScrollbar(t),"once"===t.live&&l.length&&f(r)},500)}else f(r);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":m(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=h(t.scrollButtons.scrollType),u(t),e(o).each(function(){var o=e(this);if(!o.data("mCS")){o.data("mCS",{idx:++n,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null});var a=o.data("mCS"),i=a.opt,r=o.data("mcs-axis"),l=o.data("mcs-scrollbar-position"),d=o.data("mcs-theme");r&&(i.axis=r),l&&(i.scrollbarPosition=l),d&&(i.theme=d,u(i)),p.call(this),e("#mCSB_"+a.idx+"_container img:not(."+s[2]+")").addClass(s[2]),c.update.call(null,o)}})},update:function(t,o){var a=t||d.call(this);return e(a).each(function(){var t=e(this);if(t.data("mCS")){var a=t.data("mCS"),n=a.opt,i=e("#mCSB_"+a.idx+"_container"),r=[e("#mCSB_"+a.idx+"_dragger_vertical"),e("#mCSB_"+a.idx+"_dragger_horizontal")];if(!i.length)return;a.tweenRunning&&X(t),t.hasClass(s[3])&&t.removeClass(s[3]),t.hasClass(s[4])&&t.removeClass(s[4]),S.call(this),g.call(this),"y"===n.axis||n.advanced.autoExpandHorizontalScroll||i.css("width",v(i.children())),a.overflowed=b.call(this),k.call(this),n.autoDraggerLength&&_.call(this),C.call(this),B.call(this);var l=[Math.abs(i[0].offsetTop),Math.abs(i[0].offsetLeft)];"x"!==n.axis&&(a.overflowed[0]?r[0].height()>r[0].parent().height()?y.call(this):(N(t,l[0].toString(),{dir:"y",dur:0,overwrite:"none"}),a.contentReset.y=null):(y.call(this),"y"===n.axis?T.call(this):"yx"===n.axis&&a.overflowed[1]&&N(t,l[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==n.axis&&(a.overflowed[1]?r[1].width()>r[1].parent().width()?y.call(this):(N(t,l[1].toString(),{dir:"x",dur:0,overwrite:"none"}),a.contentReset.x=null):(y.call(this),"x"===n.axis?T.call(this):"yx"===n.axis&&a.overflowed[0]&&N(t,l[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&a&&(2===o&&n.callbacks.onImageLoad&&"function"==typeof n.callbacks.onImageLoad?n.callbacks.onImageLoad.call(this):3===o&&n.callbacks.onSelectorChange&&"function"==typeof n.callbacks.onSelectorChange?n.callbacks.onSelectorChange.call(this):n.callbacks.onUpdate&&"function"==typeof n.callbacks.onUpdate&&n.callbacks.onUpdate.call(this)),Y.call(this)}})},scrollTo:function(t,o){if(void 0!==t&&null!=t){var a=d.call(this);return e(a).each(function(){var a=e(this);if(a.data("mCS")){var n=a.data("mCS"),i=n.opt,r={trigger:"external",scrollInertia:i.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},l=e.extend(!0,{},r,o),s=F.call(this,t),c=l.scrollInertia>0&&l.scrollInertia<17?17:l.scrollInertia;s[0]=q.call(this,s[0],"y"),s[1]=q.call(this,s[1],"x"),l.moveDragger&&(s[0]*=n.scrollRatio.y,s[1]*=n.scrollRatio.x),l.dur=c,setTimeout(function(){null!==s[0]&&void 0!==s[0]&&"x"!==i.axis&&n.overflowed[0]&&(l.dir="y",l.overwrite="all",N(a,s[0].toString(),l)),null!==s[1]&&void 0!==s[1]&&"y"!==i.axis&&n.overflowed[1]&&(l.dir="x",l.overwrite="none",N(a,s[1].toString(),l))},l.timeout)}})}},stop:function(){var t=d.call(this);return e(t).each(function(){var t=e(this);t.data("mCS")&&X(t)})},disable:function(t){var o=d.call(this);return e(o).each(function(){var o=e(this);if(o.data("mCS")){o.data("mCS");Y.call(this,"remove"),T.call(this),t&&y.call(this),k.call(this,!0),o.addClass(s[3])}})},destroy:function(){var t=d.call(this);return e(t).each(function(){var a=e(this);if(a.data("mCS")){var n=a.data("mCS"),i=n.opt,r=e("#mCSB_"+n.idx),l=e("#mCSB_"+n.idx+"_container"),c=e(".mCSB_"+n.idx+"_scrollbar");i.live&&f(i.liveSelector||e(t).selector),Y.call(this,"remove"),T.call(this),y.call(this),a.removeData("mCS"),J(this,"mcs"),c.remove(),l.find("img."+s[2]).removeClass(s[2]),r.replaceWith(l.contents()),a.removeClass(o+" _mCS_"+n.idx+" "+s[6]+" "+s[7]+" "+s[5]+" "+s[3]).addClass(s[4])}})}},d=function(){return"object"!=typeof e(this)||e(this).length<1?".mCustomScrollbar":this},u=function(t){var o=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],a=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=!(e.inArray(t.theme,o)>-1)&&t.autoDraggerLength,t.autoExpandScrollbar=!(e.inArray(t.theme,a)>-1)&&t.autoExpandScrollbar,t.scrollButtons.enable=!(e.inArray(t.theme,n)>-1)&&t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1||t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},f=function(e){i[e]&&(clearTimeout(i[e]),J(i,e))},m=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},h=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},p=function(){var t=e(this),a=t.data("mCS"),n=a.opt,i=n.autoExpandScrollbar?" "+s[1]+"_expand":"",r=["<div id='mCSB_"+a.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+a.idx+"_scrollbar mCS-"+n.theme+" mCSB_scrollTools_vertical"+i+"'><div class='"+s[12]+"'><div id='mCSB_"+a.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+a.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+a.idx+"_scrollbar mCS-"+n.theme+" mCSB_scrollTools_horizontal"+i+"'><div class='"+s[12]+"'><div id='mCSB_"+a.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],l="yx"===n.axis?"mCSB_vertical_horizontal":"x"===n.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===n.axis?r[0]+r[1]:"x"===n.axis?r[1]:r[0],d="yx"===n.axis?"<div id='mCSB_"+a.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",u=n.autoHideScrollbar?" "+s[6]:"",f="x"!==n.axis&&"rtl"===a.langDir?" "+s[7]:"";n.setWidth&&t.css("width",n.setWidth),n.setHeight&&t.css("height",n.setHeight),n.setLeft="y"!==n.axis&&"rtl"===a.langDir?"989999px":n.setLeft,t.addClass(o+" _mCS_"+a.idx+u+f).wrapInner("<div id='mCSB_"+a.idx+"' class='mCustomScrollBox mCS-"+n.theme+" "+l+"'><div id='mCSB_"+a.idx+"_container' class='mCSB_container' style='position:relative; top:"+n.setTop+"; left:"+n.setLeft+";' dir="+a.langDir+" /></div>");var m=e("#mCSB_"+a.idx),h=e("#mCSB_"+a.idx+"_container");"y"===n.axis||n.advanced.autoExpandHorizontalScroll||h.css("width",v(h.children())),"outside"===n.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),h.wrap(d)),x.call(this);var p=[e("#mCSB_"+a.idx+"_dragger_vertical"),e("#mCSB_"+a.idx+"_dragger_horizontal")];p[0].css("min-height",p[0].height()),p[1].css("min-width",p[1].width())},v=function(t){return Math.max.apply(Math,t.map(function(){return e(this).outerWidth(!0)}).get())},g=function(){var t=e(this),o=t.data("mCS"),a=o.opt,n=e("#mCSB_"+o.idx+"_container");a.advanced.autoExpandHorizontalScroll&&"y"!==a.axis&&n.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(n[0].getBoundingClientRect().right+.4)-Math.floor(n[0].getBoundingClientRect().left),position:"relative"}).unwrap()},x=function(){var t=e(this),o=t.data("mCS"),a=o.opt,n=e(".mCSB_"+o.idx+"_scrollbar:first"),i=$(a.scrollButtons.tabindex)?"tabindex='"+a.scrollButtons.tabindex+"'":"",r=["<a href='#' class='"+s[13]+"' oncontextmenu='return false;' "+i+" />","<a href='#' class='"+s[14]+"' oncontextmenu='return false;' "+i+" />","<a href='#' class='"+s[15]+"' oncontextmenu='return false;' "+i+" />","<a href='#' class='"+s[16]+"' oncontextmenu='return false;' "+i+" />"],l=["x"===a.axis?r[2]:r[0],"x"===a.axis?r[3]:r[1],r[2],r[3]];a.scrollButtons.enable&&n.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])},S=function(){var t=e(this),o=t.data("mCS"),a=e("#mCSB_"+o.idx),n=t.css("max-height")||"none",i=-1!==n.indexOf("%"),r=t.css("box-sizing");if("none"!==n){var l=i?t.parent().height()*parseInt(n)/100:parseInt(n);"border-box"===r&&(l-=t.innerHeight()-t.height()+(t.outerHeight()-t.innerHeight())),a.css("max-height",Math.round(l))}},_=function(){var t=e(this),o=t.data("mCS"),a=e("#mCSB_"+o.idx),n=e("#mCSB_"+o.idx+"_container"),i=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[a.height()/n.outerHeight(!1),a.width()/n.outerWidth(!1)],s=[parseInt(i[0].css("min-height")),Math.round(l[0]*i[0].parent().height()),parseInt(i[1].css("min-width")),Math.round(l[1]*i[1].parent().width())],c=r&&s[1]<s[0]?s[0]:s[1],d=r&&s[3]<s[2]?s[2]:s[3];i[0].css({height:c,"max-height":i[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":s[0]+"px"}),i[1].css({width:d,"max-width":i[1].parent().width()-10})},C=function(){var t=e(this),o=t.data("mCS"),a=e("#mCSB_"+o.idx),n=e("#mCSB_"+o.idx+"_container"),i=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],r=[n.outerHeight(!1)-a.height(),n.outerWidth(!1)-a.width()],l=[r[0]/(i[0].parent().height()-i[0].height()),r[1]/(i[1].parent().width()-i[1].width())];o.scrollRatio={y:l[0],x:l[1]}},w=function(e,t,o){var a=o?s[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(s[0]+" "+a),n.toggleClass(s[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(s[0]),n.removeClass(s[1])):(e.addClass(s[0]),n.addClass(s[1])))},b=function(){var t=e(this),o=t.data("mCS"),a=e("#mCSB_"+o.idx),n=e("#mCSB_"+o.idx+"_container"),i=null==o.overflowed?n.height():n.outerHeight(!1),r=null==o.overflowed?n.width():n.outerWidth(!1);return[i>a.height(),r>a.width()]},y=function(){var t=e(this),o=t.data("mCS"),a=o.opt,n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(X(t),("x"!==a.axis&&!o.overflowed[0]||"y"===a.axis&&o.overflowed[0])&&(r[0].add(i).css("top",0),N(t,"_resetY")),"y"!==a.axis&&!o.overflowed[1]||"x"===a.axis&&o.overflowed[1]){var l=dx=0;"rtl"===o.langDir&&(l=n.width()-i.outerWidth(!1),dx=Math.abs(l/o.scrollRatio.x)),i.css("left",l),r[1].css("left",dx),N(t,"_resetX")}},B=function(){function t(){i=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(i),D.call(o[0])):t()},100)}var o=e(this),a=o.data("mCS"),n=a.opt;if(!a.bindEvents){if(O.call(this),n.contentTouchScroll&&I.call(this),R.call(this),n.mouseWheel.enable){var i;t()}L.call(this),z.call(this),n.advanced.autoScrollOnFocus&&A.call(this),n.scrollButtons.enable&&P.call(this),n.keyboard.enable&&H.call(this),a.bindEvents=!0}},T=function(){var t=e(this),o=t.data("mCS"),a=o.opt,n="mCS_"+o.idx,i=".mCSB_"+o.idx+"_scrollbar",r=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+i+" ."+s[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+i+">a"),l=e("#mCSB_"+o.idx+"_container");a.advanced.releaseDraggableSelectors&&r.add(e(a.advanced.releaseDraggableSelectors)),o.bindEvents&&(e(document).unbind("."+n),r.each(function(){e(this).unbind("."+n)}),clearTimeout(t[0]._focusTimeout),J(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),J(o.sequential,"step"),clearTimeout(l[0].onCompleteTimeout),J(l[0],"onCompleteTimeout"),o.bindEvents=!1)},k=function(t){var o=e(this),a=o.data("mCS"),n=a.opt,i=e("#mCSB_"+a.idx+"_container_wrapper"),r=i.length?i:e("#mCSB_"+a.idx+"_container"),l=[e("#mCSB_"+a.idx+"_scrollbar_vertical"),e("#mCSB_"+a.idx+"_scrollbar_horizontal")],c=[l[0].find(".mCSB_dragger"),l[1].find(".mCSB_dragger")];"x"!==n.axis&&(a.overflowed[0]&&!t?(l[0].add(c[0]).add(l[0].children("a")).css("display","block"),r.removeClass(s[8]+" "+s[10])):(n.alwaysShowScrollbar?(2!==n.alwaysShowScrollbar&&c[0].css("display","none"),r.removeClass(s[10])):(l[0].css("display","none"),r.addClass(s[10])),r.addClass(s[8]))),"y"!==n.axis&&(a.overflowed[1]&&!t?(l[1].add(c[1]).add(l[1].children("a")).css("display","block"),r.removeClass(s[9]+" "+s[11])):(n.alwaysShowScrollbar?(2!==n.alwaysShowScrollbar&&c[1].css("display","none"),r.removeClass(s[11])):(l[1].css("display","none"),r.addClass(s[11])),r.addClass(s[9]))),a.overflowed[0]||a.overflowed[1]?o.removeClass(s[5]):o.addClass(s[5])},M=function(e){switch(e.type){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return e.target.ownerDocument!==document?[e.originalEvent.screenY,e.originalEvent.screenX,!1]:[e.originalEvent.pageY,e.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var t=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],o=e.originalEvent.touches.length||e.originalEvent.changedTouches.length;return e.target.ownerDocument!==document?[t.screenY,t.screenX,o>1]:[t.pageY,t.pageX,o>1];default:return[e.pageY,e.pageX,!1]}},O=function(){function t(e){var t=m.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}}function o(e,t,o,n){if(m[0].idleTimer=d.scrollInertia<233?250:0,a.attr("id")===f[1])var i="x",r=(a[0].offsetLeft-t+n)*c.scrollRatio.x;else var i="y",r=(a[0].offsetTop-e+o)*c.scrollRatio.y;N(s,r.toString(),{dir:i,drag:!0})}var a,n,i,s=e(this),c=s.data("mCS"),d=c.opt,u="mCS_"+c.idx,f=["mCSB_"+c.idx+"_dragger_vertical","mCSB_"+c.idx+"_dragger_horizontal"],m=e("#mCSB_"+c.idx+"_container"),h=e("#"+f[0]+",#"+f[1]),p=d.advanced.releaseDraggableSelectors?h.add(e(d.advanced.releaseDraggableSelectors)):h;h.bind("mousedown."+u+" touchstart."+u+" pointerdown."+u+" MSPointerDown."+u,function(o){if(o.stopImmediatePropagation(),o.preventDefault(),K(o)){l=!0,r&&(document.onselectstart=function(){return!1}),t(!1),X(s),a=e(this);var c=a.offset(),u=M(o)[0]-c.top,f=M(o)[1]-c.left,m=a.height()+c.top,h=a.width()+c.left;u<m&&u>0&&f<h&&f>0&&(n=u,i=f),w(a,"active",d.autoExpandScrollbar)}}).bind("touchmove."+u,function(e){e.stopImmediatePropagation(),e.preventDefault();var t=a.offset(),r=M(e)[0]-t.top,l=M(e)[1]-t.left;o(n,i,r,l)}),e(document).bind("mousemove."+u+" pointermove."+u+" MSPointerMove."+u,function(e){if(a){var t=a.offset(),r=M(e)[0]-t.top,l=M(e)[1]-t.left;if(n===r)return;o(n,i,r,l)}}).add(p).bind("mouseup."+u+" touchend."+u+" pointerup."+u+" MSPointerUp."+u,function(e){a&&(w(a,"active",d.autoExpandScrollbar),a=null),l=!1,r&&(document.onselectstart=null),t(!0)})},I=function(){function o(e){if(!Z(e)||l||M(e)[2])return void(t=0);t=1,_=0,C=0,w.removeClass("mCS_touch_action");var o=k.offset();c=M(e)[0]-o.top,d=M(e)[1]-o.left,L=[M(e)[0],M(e)[1]]}function a(e){if(Z(e)&&!l&&!M(e)[2]&&(!C||_)){h=Q();var t=T.offset(),o=M(e)[0]-t.top,a=M(e)[1]-t.left;if(I.push(o),R.push(a),L[2]=Math.abs(M(e)[0]-L[0]),L[3]=Math.abs(M(e)[1]-L[1]),b.overflowed[0])var n=O[0].parent().height()-O[0].height(),i=c-o>0&&o-c>-n*b.scrollRatio.y&&(2*L[3]<L[2]||"yx"===y.axis);if(b.overflowed[1])var r=O[1].parent().width()-O[1].width(),u=d-a>0&&a-d>-r*b.scrollRatio.x&&(2*L[2]<L[3]||"yx"===y.axis);i||u?(e.preventDefault(),_=1):(C=1,w.addClass("mCS_touch_action")),x="yx"===y.axis?[c-o,d-a]:"x"===y.axis?[null,d-a]:[c-o,null],k[0].idleTimer=250,b.overflowed[0]&&s(x[0],D,"mcsLinearOut","y","all",!0),b.overflowed[1]&&s(x[1],D,"mcsLinearOut","x",W,!0)}}function n(e){if(!Z(e)||l||M(e)[2])return void(t=0);t=1,X(w),m=Q();var o=T.offset();u=M(e)[0]-o.top,f=M(e)[1]-o.left,I=[],R=[]}function i(e){if(Z(e)&&!l&&!M(e)[2]){_=0,C=0,p=Q();var t=T.offset(),o=M(e)[0]-t.top,a=M(e)[1]-t.left;if(!(p-h>30)){g=1e3/(p-m);var n=g<2.5,i=n?[I[I.length-2],R[R.length-2]]:[0,0];v=n?[o-i[0],a-i[1]]:[o-u,a-f];var c=[Math.abs(v[0]),Math.abs(v[1])];g=n?[Math.abs(v[0]/4),Math.abs(v[1]/4)]:[g,g];var d=[Math.abs(k[0].offsetTop)-v[0]*r(c[0]/g[0],g[0]),Math.abs(k[0].offsetLeft)-v[1]*r(c[1]/g[1],g[1])];x="yx"===y.axis?[d[0],d[1]]:"x"===y.axis?[null,d[1]]:[d[0],null],S=[4*c[0]+y.scrollInertia,4*c[1]+y.scrollInertia];var w=parseInt(y.contentTouchScroll)||0;x[0]=c[0]>w?x[0]:0,x[1]=c[1]>w?x[1]:0,b.overflowed[0]&&s(x[0],S[0],"mcsEaseOut","y",W,!1),b.overflowed[1]&&s(x[1],S[1],"mcsEaseOut","x",W,!1)}}}function r(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function s(e,t,o,a,n,i){e&&N(w,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var c,d,u,f,m,h,p,v,g,x,S,_,C,w=e(this),b=w.data("mCS"),y=b.opt,B="mCS_"+b.idx,T=e("#mCSB_"+b.idx),k=e("#mCSB_"+b.idx+"_container"),O=[e("#mCSB_"+b.idx+"_dragger_vertical"),e("#mCSB_"+b.idx+"_dragger_horizontal")],I=[],R=[],D=0,W="yx"===y.axis?"none":"all",L=[],A=k.find("iframe"),z=["touchstart."+B+" pointerdown."+B+" MSPointerDown."+B,"touchmove."+B+" pointermove."+B+" MSPointerMove."+B,"touchend."+B+" pointerup."+B+" MSPointerUp."+B];k.bind(z[0],function(e){o(e)}).bind(z[1],function(e){a(e)}),T.bind(z[0],function(e){n(e)}).bind(z[2],function(e){i(e)}),A.length&&A.each(function(){e(this).load(function(){E(this)&&e(this.contentDocument||this.contentWindow.document).bind(z[0],function(e){o(e),n(e)}).bind(z[1],function(e){a(e)}).bind(z[2],function(e){i(e)})})})},R=function(){function o(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function a(e,t,o){c.type=o&&n?"stepped":"stepless",c.scrollAmount=10,U(i,e,t,"mcsLinearOut",o?60:null)}var n,i=e(this),r=i.data("mCS"),s=r.opt,c=r.sequential,d="mCS_"+r.idx,u=e("#mCSB_"+r.idx+"_container"),f=u.parent();u.bind("mousedown."+d,function(e){t||n||(n=1,l=!0)}).add(document).bind("mousemove."+d,function(e){if(!t&&n&&o()){var i=u.offset(),l=M(e)[0]-i.top+u[0].offsetTop,d=M(e)[1]-i.left+u[0].offsetLeft;l>0&&l<f.height()&&d>0&&d<f.width()?c.step&&a("off",null,"stepped"):("x"!==s.axis&&r.overflowed[0]&&(l<0?a("on",38):l>f.height()&&a("on",40)),"y"!==s.axis&&r.overflowed[1]&&(d<0?a("on",37):d>f.width()&&a("on",39)))}}).bind("mouseup."+d,function(e){t||(n&&(n=0,a("off",null)),l=!1)})},D=function(){function t(t,i){if(X(o),!W(o,t.target)){var c="auto"!==n.mouseWheel.deltaFactor?parseInt(n.mouseWheel.deltaFactor):r&&t.deltaFactor<100?100:t.deltaFactor||100;if("x"===n.axis||"x"===n.mouseWheel.axis)var d="x",u=[Math.round(c*a.scrollRatio.x),parseInt(n.mouseWheel.scrollAmount)],f="auto"!==n.mouseWheel.scrollAmount?u[1]:u[0]>=l.width()?.9*l.width():u[0],m=Math.abs(e("#mCSB_"+a.idx+"_container")[0].offsetLeft),h=s[1][0].offsetLeft,p=s[1].parent().width()-s[1].width(),v=t.deltaX||t.deltaY||i;else var d="y",u=[Math.round(c*a.scrollRatio.y),parseInt(n.mouseWheel.scrollAmount)],f="auto"!==n.mouseWheel.scrollAmount?u[1]:u[0]>=l.height()?.9*l.height():u[0],m=Math.abs(e("#mCSB_"+a.idx+"_container")[0].offsetTop),h=s[0][0].offsetTop,p=s[0].parent().height()-s[0].height(),v=t.deltaY||i;"y"===d&&!a.overflowed[0]||"x"===d&&!a.overflowed[1]||((n.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(v=-v),n.mouseWheel.normalizeDelta&&(v=v<0?-1:1),(v>0&&0!==h||v<0&&h!==p||n.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),N(o,(m-v*f).toString(),{dir:d}))}}if(e(this).data("mCS")){var o=e(this),a=o.data("mCS"),n=a.opt,i="mCS_"+a.idx,l=e("#mCSB_"+a.idx),s=[e("#mCSB_"+a.idx+"_dragger_vertical"),e("#mCSB_"+a.idx+"_dragger_horizontal")],c=e("#mCSB_"+a.idx+"_container").find("iframe");c.length&&c.each(function(){e(this).load(function(){E(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+i,function(e,o){t(e,o)})})}),l.bind("mousewheel."+i,function(e,o){t(e,o)})}},E=function(e){var t=null;try{t=(e.contentDocument||e.contentWindow.document).body.innerHTML}catch(e){}return null!==t},W=function(t,o){var a=o.nodeName.toLowerCase(),n=t.data("mCS").opt.mouseWheel.disableOver,i=["select","textarea"];return e.inArray(a,n)>-1&&!(e.inArray(a,i)>-1&&!e(o).is(":focus"))},L=function(){var t=e(this),o=t.data("mCS"),a="mCS_"+o.idx,n=e("#mCSB_"+o.idx+"_container"),i=n.parent();e(".mCSB_"+o.idx+"_scrollbar ."+s[12]).bind("touchstart."+a+" pointerdown."+a+" MSPointerDown."+a,function(e){l=!0}).bind("touchend."+a+" pointerup."+a+" MSPointerUp."+a,function(e){l=!1}).bind("click."+a,function(a){if(e(a.target).hasClass(s[12])||e(a.target).hasClass("mCSB_draggerRail")){X(t);var r=e(this),l=r.find(".mCSB_dragger");if(r.parent(".mCSB_scrollTools_horizontal").length>0){if(!o.overflowed[1])return;var c="x",d=a.pageX>l.offset().left?-1:1,u=Math.abs(n[0].offsetLeft)-d*(.9*i.width())}else{if(!o.overflowed[0])return;var c="y",d=a.pageY>l.offset().top?-1:1,u=Math.abs(n[0].offsetTop)-d*(.9*i.height())}N(t,u.toString(),{dir:c,scrollEasing:"mcsEaseInOut"})}})},A=function(){var t=e(this),o=t.data("mCS"),a=o.opt,n="mCS_"+o.idx,i=e("#mCSB_"+o.idx+"_container"),r=i.parent();i.bind("focusin."+n,function(o){var n=e(document.activeElement),l=i.find(".mCustomScrollBox").length;n.is(a.advanced.autoScrollOnFocus)&&(X(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=l?17*l:0,t[0]._focusTimeout=setTimeout(function(){var e=[ee(n)[0],ee(n)[1]],o=[i[0].offsetTop,i[0].offsetLeft],l=[o[0]+e[0]>=0&&o[0]+e[0]<r.height()-n.outerHeight(!1),o[1]+e[1]>=0&&o[0]+e[1]<r.width()-n.outerWidth(!1)],s="yx"!==a.axis||l[0]||l[1]?"all":"none";"x"===a.axis||l[0]||N(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:s,dur:0}),"y"===a.axis||l[1]||N(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:s,dur:0})},t[0]._focusTimer))})},z=function(){var t=e(this),o=t.data("mCS"),a="mCS_"+o.idx,n=e("#mCSB_"+o.idx+"_container").parent();n.bind("scroll."+a,function(t){0===n.scrollTop()&&0===n.scrollLeft()||e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},P=function(){var t=e(this),o=t.data("mCS"),a=o.opt,n=o.sequential,i="mCS_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar";e(r+">a").bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i+" mouseup."+i+" touchend."+i+" pointerup."+i+" MSPointerUp."+i+" mouseout."+i+" pointerout."+i+" MSPointerOut."+i+" click."+i,function(i){function r(e,o){n.scrollAmount=a.snapAmount||a.scrollButtons.scrollAmount,U(t,e,o)}if(i.preventDefault(),K(i)){var s=e(this).attr("class");switch(n.type=a.scrollButtons.scrollType,i.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===n.type)return;l=!0,o.tweenRunning=!1,r("on",s);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===n.type)return;l=!1,n.dir&&r("off",s);break;case"click":if("stepped"!==n.type||o.tweenRunning)return;r("on",s)}}})},H=function(){function t(t){function r(e,t){i.type=n.keyboard.scrollType,i.scrollAmount=n.snapAmount||n.keyboard.scrollAmount,"stepped"===i.type&&a.tweenRunning||U(o,e,t)}switch(t.type){case"blur":a.tweenRunning&&i.dir&&r("off",null);break;case"keydown":case"keyup":var l=t.keyCode?t.keyCode:t.which,u="on";if("x"!==n.axis&&(38===l||40===l)||"y"!==n.axis&&(37===l||39===l)){if((38===l||40===l)&&!a.overflowed[0]||(37===l||39===l)&&!a.overflowed[1])return;"keyup"===t.type&&(u="off"),e(document.activeElement).is(d)||(t.preventDefault(),t.stopImmediatePropagation(),r(u,l))}else if(33===l||34===l){if((a.overflowed[0]||a.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){X(o);var f=34===l?-1:1;if("x"===n.axis||"yx"===n.axis&&a.overflowed[1]&&!a.overflowed[0])var m="x",h=Math.abs(s[0].offsetLeft)-f*(.9*c.width());else var m="y",h=Math.abs(s[0].offsetTop)-f*(.9*c.height());N(o,h.toString(),{dir:m,scrollEasing:"mcsEaseInOut"})}}else if((35===l||36===l)&&!e(document.activeElement).is(d)&&((a.overflowed[0]||a.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===n.axis||"yx"===n.axis&&a.overflowed[1]&&!a.overflowed[0])var m="x",h=35===l?Math.abs(c.width()-s.outerWidth(!1)):0;else var m="y",h=35===l?Math.abs(c.height()-s.outerHeight(!1)):0;N(o,h.toString(),{dir:m,scrollEasing:"mcsEaseInOut"})}}}var o=e(this),a=o.data("mCS"),n=a.opt,i=a.sequential,r="mCS_"+a.idx,l=e("#mCSB_"+a.idx),s=e("#mCSB_"+a.idx+"_container"),c=s.parent(),d="input,textarea,select,datalist,keygen,[contenteditable='true']",u=s.find("iframe"),f=["blur."+r+" keydown."+r+" keyup."+r];u.length&&u.each(function(){e(this).load(function(){E(this)&&e(this.contentDocument||this.contentWindow.document).bind(f[0],function(e){t(e)})})}),l.attr("tabindex","0").bind(f[0],function(e){t(e)})},U=function(t,o,a,n,i){function r(e){var o="stepped"!==d.type,a=i||(e?o?m/1.5:h:1e3/60),s=e?o?7.5:40:2.5,c=[Math.abs(u[0].offsetTop),Math.abs(u[0].offsetLeft)],f=[l.scrollRatio.y>10?10:l.scrollRatio.y,l.scrollRatio.x>10?10:l.scrollRatio.x],p="x"===d.dir[0]?c[1]+d.dir[1]*(f[1]*s):c[0]+d.dir[1]*(f[0]*s),v="x"===d.dir[0]?c[1]+d.dir[1]*parseInt(d.scrollAmount):c[0]+d.dir[1]*parseInt(d.scrollAmount),g="auto"!==d.scrollAmount?v:p,x=n||(e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear"),S=!!e;if(e&&a<17&&(g="x"===d.dir[0]?c[1]:c[0]),N(t,g.toString(),{dir:d.dir[0],scrollEasing:x,dur:a,onComplete:S}),e)return void(d.dir=!1);clearTimeout(d.step),d.step=setTimeout(function(){r()},a)}var l=t.data("mCS"),c=l.opt,d=l.sequential,u=e("#mCSB_"+l.idx+"_container"),f="stepped"===d.type,m=c.scrollInertia<26?26:c.scrollInertia,h=c.scrollInertia<1?17:c.scrollInertia;switch(o){case"on":if(d.dir=[a===s[16]||a===s[15]||39===a||37===a?"x":"y",a===s[13]||a===s[15]||38===a||37===a?-1:1],X(t),$(a)&&"stepped"===d.type)return;r(f);break;case"off":!function(){clearTimeout(d.step),J(d,"step"),X(t)}(),(f||l.tweenRunning&&d.dir)&&r(!0)}},F=function(t){var o=e(this).data("mCS").opt,a=[];return"function"==typeof t&&(t=t()),t instanceof Array?a=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(a[0]=t.y?t.y:t.x||"x"===o.axis?null:t,a[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof a[0]&&(a[0]=a[0]()),"function"==typeof a[1]&&(a[1]=a[1]()),a},q=function(t,o){if(null!=t&&void 0!==t){var a=e(this),n=a.data("mCS"),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=r.parent(),s=typeof t;o||(o="x"===i.axis?"x":"y");var d="x"===o?r.outerWidth(!1):r.outerHeight(!1),u="x"===o?r[0].offsetLeft:r[0].offsetTop,f="x"===o?"left":"top";switch(s){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?ee(m)[1]:ee(m)[0];case"string":case"number":if($(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(u-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var h=u+parseInt(t.split("+=")[1]);return h>=0?0:Math.abs(h)}if(-1!==t.indexOf("px")&&$(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(l.height()-r.outerHeight(!1));if("right"===t)return Math.abs(l.width()-r.outerWidth(!1));if("first"===t||"last"===t){var m=r.find(":"+t);return"x"===o?ee(m)[1]:ee(m)[0]}return e(t).length?"x"===o?ee(e(t))[1]:ee(e(t))[0]:(r.css(f,t),void c.update.call(null,a[0]))}}},Y=function(t){function o(){if(clearTimeout(f[0].autoUpdate),0===l.parents("html").length)return void(l=null);f[0].autoUpdate=setTimeout(function(){if(u.advanced.updateOnSelectorChange&&(m=i())!==S)return r(3),void(S=m);u.advanced.updateOnContentResize&&(h=[f.outerHeight(!1),f.outerWidth(!1),v.height(),v.width(),x()[0],x()[1]],h[0]===_[0]&&h[1]===_[1]&&h[2]===_[2]&&h[3]===_[3]&&h[4]===_[4]&&h[5]===_[5]||(r(h[0]!==_[0]||h[1]!==_[1]),_=h)),u.advanced.updateOnImageLoad&&(p=a())!==C&&(f.find("img").each(function(){n(this)}),C=p),(u.advanced.updateOnSelectorChange||u.advanced.updateOnContentResize||u.advanced.updateOnImageLoad)&&o()},u.advanced.autoUpdateTimeout)}function a(){var e=0;return u.advanced.updateOnImageLoad&&(e=f.find("img").length),e}function n(t){function o(){this.onload=null,e(t).addClass(s[2]),r(2)}if(e(t).hasClass(s[2]))return void r();var a=new Image;a.onload=function(e,t){return function(){return t.apply(e,arguments)}}(a,o),a.src=t.src}function i(){!0===u.advanced.updateOnSelectorChange&&(u.advanced.updateOnSelectorChange="*");var t=0,o=f.find(u.advanced.updateOnSelectorChange);return u.advanced.updateOnSelectorChange&&o.length>0&&o.each(function(){t+=e(this).height()+e(this).width()}),t}function r(e){clearTimeout(f[0].autoUpdate),c.update.call(null,l[0],e)}var l=e(this),d=l.data("mCS"),u=d.opt,f=e("#mCSB_"+d.idx+"_container");if(t)return clearTimeout(f[0].autoUpdate),void J(f[0],"autoUpdate");var m,h,p,v=f.parent(),g=[e("#mCSB_"+d.idx+"_scrollbar_vertical"),e("#mCSB_"+d.idx+"_scrollbar_horizontal")],x=function(){return[g[0].is(":visible")?g[0].outerHeight(!0):0,g[1].is(":visible")?g[1].outerWidth(!0):0]},S=i(),_=[f.outerHeight(!1),f.outerWidth(!1),v.height(),v.width(),x()[0],x()[1]],C=a();o()},j=function(e,t,o){return Math.round(e/t)*t-o},X=function(t){var o=t.data("mCS");e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal").each(function(){G.call(this)})},N=function(t,o,a){function n(e){return l&&s.callbacks[e]&&"function"==typeof s.callbacks[e]}function i(){return[s.callbacks.alwaysTriggerOffsets||x>=S[0]+C,s.callbacks.alwaysTriggerOffsets||x<=-b]}function r(){var e=[f[0].offsetTop,f[0].offsetLeft],o=[v[0].offsetTop,v[0].offsetLeft],n=[f.outerHeight(!1),f.outerWidth(!1)],i=[u.height(),u.width()];t[0].mcs={content:f,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(n[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(n[1])-i[1])),direction:a.dir}}var l=t.data("mCS"),s=l.opt,c={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:s.scrollInertia,overwrite:"all",callbacks:!0,
onStart:!0,onUpdate:!0,onComplete:!0},a=e.extend(c,a),d=[a.dur,a.drag?0:a.dur],u=e("#mCSB_"+l.idx),f=e("#mCSB_"+l.idx+"_container"),m=f.parent(),h=s.callbacks.onTotalScrollOffset?F.call(t,s.callbacks.onTotalScrollOffset):[0,0],p=s.callbacks.onTotalScrollBackOffset?F.call(t,s.callbacks.onTotalScrollBackOffset):[0,0];if(l.trigger=a.trigger,0===m.scrollTop()&&0===m.scrollLeft()||(e(".mCSB_"+l.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||l.contentReset.y||(n("onOverflowYNone")&&s.callbacks.onOverflowYNone.call(t[0]),l.contentReset.y=1),"_resetX"!==o||l.contentReset.x||(n("onOverflowXNone")&&s.callbacks.onOverflowXNone.call(t[0]),l.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){switch(!l.contentReset.y&&t[0].mcs||!l.overflowed[0]||(n("onOverflowY")&&s.callbacks.onOverflowY.call(t[0]),l.contentReset.x=null),!l.contentReset.x&&t[0].mcs||!l.overflowed[1]||(n("onOverflowX")&&s.callbacks.onOverflowX.call(t[0]),l.contentReset.x=null),s.snapAmount&&(o=j(o,s.snapAmount,s.snapOffset)),a.dir){case"x":var v=e("#mCSB_"+l.idx+"_dragger_horizontal"),g="left",x=f[0].offsetLeft,S=[u.width()-f.outerWidth(!1),v.parent().width()-v.width()],_=[o,0===o?0:o/l.scrollRatio.x],C=h[1],b=p[1],y=C>0?C/l.scrollRatio.x:0,B=b>0?b/l.scrollRatio.x:0;break;case"y":var v=e("#mCSB_"+l.idx+"_dragger_vertical"),g="top",x=f[0].offsetTop,S=[u.height()-f.outerHeight(!1),v.parent().height()-v.height()],_=[o,0===o?0:o/l.scrollRatio.y],C=h[0],b=p[0],y=C>0?C/l.scrollRatio.y:0,B=b>0?b/l.scrollRatio.y:0}_[1]<0||0===_[0]&&0===_[1]?_=[0,0]:_[1]>=S[1]?_=[S[0],S[1]]:_[0]=-_[0],t[0].mcs||(r(),n("onInit")&&s.callbacks.onInit.call(t[0])),clearTimeout(f[0].onCompleteTimeout),!l.tweenRunning&&(0===x&&_[0]>=0||x===S[0]&&_[0]<=S[0])||(V(v[0],g,Math.round(_[1]),d[1],a.scrollEasing),V(f[0],g,Math.round(_[0]),d[0],a.scrollEasing,a.overwrite,{onStart:function(){a.callbacks&&a.onStart&&!l.tweenRunning&&(n("onScrollStart")&&(r(),s.callbacks.onScrollStart.call(t[0])),l.tweenRunning=!0,w(v),l.cbOffsets=i())},onUpdate:function(){a.callbacks&&a.onUpdate&&n("whileScrolling")&&(r(),s.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(a.callbacks&&a.onComplete){"yx"===s.axis&&clearTimeout(f[0].onCompleteTimeout);var e=f[0].idleTimer||0;f[0].onCompleteTimeout=setTimeout(function(){n("onScroll")&&(r(),s.callbacks.onScroll.call(t[0])),n("onTotalScroll")&&_[1]>=S[1]-y&&l.cbOffsets[0]&&(r(),s.callbacks.onTotalScroll.call(t[0])),n("onTotalScrollBack")&&_[1]<=B&&l.cbOffsets[1]&&(r(),s.callbacks.onTotalScrollBack.call(t[0])),l.tweenRunning=!1,f[0].idleTimer=0,w(v,"hide")},e)}}}))}},V=function(e,t,o,a,n,i,r){function l(){S.stop||(v||f.call(),v=Q()-p,s(),v>=S.time&&(S.time=v>S.time?v+d-(v-S.time):v+d-1,S.time<v+1&&(S.time=v+1)),S.time<a?S.id=u(l):h.call())}function s(){a>0?(S.currVal=c(S.time,g,_,a,n),x[t]=Math.round(S.currVal)+"px"):x[t]=o+"px",m.call()}function c(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return(e/=a/2)<1?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return(e/=a/2)<1?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(2-Math.pow(2,-10*e))+t);case"easeInOut":case"mcsEaseInOut":return(e/=a/2)<1?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(1-Math.pow(2,-10*e/a))+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var d,u,r=r||{},f=r.onStart||function(){},m=r.onUpdate||function(){},h=r.onComplete||function(){},p=Q(),v=0,g=e.offsetTop,x=e.style,S=e._mTween[t];"left"===t&&(g=e.offsetLeft);var _=o-g;S.stop=0,"none"!==i&&function(){null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null)}(),function(){d=1e3/60,S.time=v+d,u=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=u(l)}()},Q=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},G=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},J=function(e,t){try{delete e[t]}catch(o){e[t]=null}},K=function(e){return!(e.which&&1!==e.which)},Z=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},$=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ee=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]};e.fn[o]=function(t){return c[t]?c[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):c.init.apply(this,arguments)},e[o]=function(t){return c[t]?c[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):c.init.apply(this,arguments)},e[o].defaults=a,window[o]=!0,e(window).load(function(){e(".mCustomScrollbar")[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),a=[i[0].offsetTop,i[0].offsetLeft],a[0]+ee(n)[0]>=0&&a[0]+ee(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+ee(n)[1]>=0&&a[1]+ee(n)[1]<o.width()-n.outerWidth(!1)},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data("mCS");if(o)return o.overflowed[0]||o.overflowed[1]}})})}()}()});