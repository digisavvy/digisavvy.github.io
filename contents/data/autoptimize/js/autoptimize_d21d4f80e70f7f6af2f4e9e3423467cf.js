/*! flexnav https://github.com/indyplanets/flexnav http://unlicense.org/ 2013-11-28 */
!function(){var a;a=jQuery,a.fn.flexNav=function(b){var c,d,e,f,g,h,i,j,k,l,m,n;return k=a.extend({animationSpeed:250,transitionOpacity:!0,buttonSelector:".menu-button",hoverIntent:!1,hoverIntentTimeout:150,calcItemWidths:!1,hover:!0},b),c=a(this),c.addClass("with-js"),k.transitionOpacity===!0&&c.addClass("opacity"),c.find("li").each(function(){return a(this).has("ul").length?a(this).addClass("item-with-ul").find("ul").hide():void 0}),k.calcItemWidths===!0&&(d=c.find(">li"),f=d.length,h=100/f,g=h+"%"),c.data("breakpoint")&&(e=c.data("breakpoint")),l=function(){return c.hasClass("lg-screen")===!0&&k.hover===!0?k.transitionOpacity===!0?a(this).find(">ul").addClass("flexnav-show").stop(!0,!0).animate({height:["toggle","swing"],opacity:"toggle"},k.animationSpeed):a(this).find(">ul").addClass("flexnav-show").stop(!0,!0).animate({height:["toggle","swing"]},k.animationSpeed):void 0},i=function(){return c.hasClass("lg-screen")===!0&&a(this).find(">ul").hasClass("flexnav-show")===!0&&k.hover===!0?k.transitionOpacity===!0?a(this).find(">ul").removeClass("flexnav-show").stop(!0,!0).animate({height:["toggle","swing"],opacity:"toggle"},k.animationSpeed):a(this).find(">ul").removeClass("flexnav-show").stop(!0,!0).animate({height:["toggle","swing"]},k.animationSpeed):void 0},j=function(){var b;if(a(window).width()<=e)return c.removeClass("lg-screen").addClass("sm-screen"),k.calcItemWidths===!0&&d.css("width","100%"),b=k.buttonSelector+", "+k.buttonSelector+" .touch-button",a(b).removeClass("active"),a(".one-page li a").on("click",function(){return c.removeClass("flexnav-show")});if(a(window).width()>e){if(c.removeClass("sm-screen").addClass("lg-screen"),k.calcItemWidths===!0&&d.css("width",g),c.removeClass("flexnav-show").find(".item-with-ul").on(),a(".item-with-ul").find("ul").removeClass("flexnav-show"),i(),k.hoverIntent===!0)return a(".item-with-ul").hoverIntent({over:l,out:i,timeout:k.hoverIntentTimeout});if(k.hoverIntent===!1)return a(".item-with-ul").on("mouseenter",l).on("mouseleave",i)}},a(k.buttonSelector).data("navEl",c),n=".item-with-ul, "+k.buttonSelector,a(n).append('<span class="touch-button"><i class="navicon">&#9660;</i></span>'),m=k.buttonSelector+", "+k.buttonSelector+" .touch-button",a(m).on("click",function(b){var c,d,e;return a(m).toggleClass("active"),b.preventDefault(),b.stopPropagation(),e=k.buttonSelector,c=a(this).is(e)?a(this):a(this).parent(e),d=c.data("navEl"),d.toggleClass("flexnav-show")}),a(".touch-button").on("click",function(){var b,d;return b=a(this).parent(".item-with-ul").find(">ul"),d=a(this).parent(".item-with-ul").find(">span.touch-button"),c.hasClass("lg-screen")===!0&&a(this).parent(".item-with-ul").siblings().find("ul.flexnav-show").removeClass("flexnav-show").hide(),b.hasClass("flexnav-show")===!0?(b.removeClass("flexnav-show").slideUp(k.animationSpeed),d.removeClass("active")):b.hasClass("flexnav-show")===!1?(b.addClass("flexnav-show").slideDown(k.animationSpeed),d.addClass("active")):void 0}),c.find(".item-with-ul *").focus(function(){return a(this).parent(".item-with-ul").parent().find(".open").not(this).removeClass("open").hide(),a(this).parent(".item-with-ul").find(">ul").addClass("open").show()}),j(),a(window).on("resize",j)}}.call(this);
!function($){"use strict";var Typed=function(el,options){this.el=$(el);this.options=$.extend({},$.fn.typed.defaults,options);this.isInput=this.el.is('input');this.attr=this.options.attr;this.showCursor=this.isInput?false:this.options.showCursor;this.elContent=this.attr?this.el.attr(this.attr):this.el.text()
this.contentType=this.options.contentType;this.typeSpeed=this.options.typeSpeed;this.startDelay=this.options.startDelay;this.backSpeed=this.options.backSpeed;this.backDelay=this.options.backDelay;this.stringsElement=this.options.stringsElement;this.strings=this.options.strings;this.strPos=0;this.arrayPos=0;this.stopNum=0;this.loop=this.options.loop;this.loopCount=this.options.loopCount;this.curLoop=0;this.stop=false;this.cursorChar=this.options.cursorChar;this.shuffle=this.options.shuffle;this.sequence=[];this.build();};Typed.prototype={constructor:Typed,init:function(){var self=this;self.timeout=setTimeout(function(){for(var i=0;i<self.strings.length;++i)self.sequence[i]=i;if(self.shuffle)self.sequence=self.shuffleArray(self.sequence);self.typewrite(self.strings[self.sequence[self.arrayPos]],self.strPos);},self.startDelay);},build:function(){var self=this;if(this.showCursor===true){this.cursor=$("<span class=\"typed-cursor\">"+this.cursorChar+"</span>");this.el.after(this.cursor);}
if(this.stringsElement){self.strings=[];this.stringsElement.hide();var strings=this.stringsElement.find('p');$.each(strings,function(key,value){self.strings.push($(value).html());});}
this.init();},typewrite:function(curString,curStrPos){if(this.stop===true){return;}
var humanize=Math.round(Math.random()*(100-30))+this.typeSpeed;var self=this;self.timeout=setTimeout(function(){var charPause=0;var substr=curString.substr(curStrPos);if(substr.charAt(0)==='^'){var skip=1;if(/^\^\d+/.test(substr)){substr=/\d+/.exec(substr)[0];skip+=substr.length;charPause=parseInt(substr);}
curString=curString.substring(0,curStrPos)+curString.substring(curStrPos+skip);}
if(self.contentType==='html'){var curChar=curString.substr(curStrPos).charAt(0)
if(curChar==='<'||curChar==='&'){var tag='';var endTag='';if(curChar==='<'){endTag='>'}else{endTag=';'}
while(curString.substr(curStrPos).charAt(0)!==endTag){tag+=curString.substr(curStrPos).charAt(0);curStrPos++;}
curStrPos++;tag+=endTag;}}
self.timeout=setTimeout(function(){if(curStrPos===curString.length){self.options.onStringTyped(self.arrayPos);if(self.arrayPos===self.strings.length-1){self.options.callback();self.curLoop++;if(self.loop===false||self.curLoop===self.loopCount)
return;}
self.timeout=setTimeout(function(){self.backspace(curString,curStrPos);},self.backDelay);}else{if(curStrPos===0)
self.options.preStringTyped(self.arrayPos);var nextString=curString.substr(0,curStrPos+1);if(self.attr){self.el.attr(self.attr,nextString);}else{if(self.isInput){self.el.val(nextString);}else if(self.contentType==='html'){self.el.html(nextString);}else{self.el.text(nextString);}}
curStrPos++;self.typewrite(curString,curStrPos);}},charPause);},humanize);},backspace:function(curString,curStrPos){if(this.stop===true){return;}
var humanize=Math.round(Math.random()*(100-30))+this.backSpeed;var self=this;self.timeout=setTimeout(function(){if(self.contentType==='html'){if(curString.substr(curStrPos).charAt(0)==='>'){var tag='';while(curString.substr(curStrPos).charAt(0)!=='<'){tag-=curString.substr(curStrPos).charAt(0);curStrPos--;}
curStrPos--;tag+='<';}}
var nextString=curString.substr(0,curStrPos);if(self.attr){self.el.attr(self.attr,nextString);}else{if(self.isInput){self.el.val(nextString);}else if(self.contentType==='html'){self.el.html(nextString);}else{self.el.text(nextString);}}
if(curStrPos>self.stopNum){curStrPos--;self.backspace(curString,curStrPos);}
else if(curStrPos<=self.stopNum){self.arrayPos++;if(self.arrayPos===self.strings.length){self.arrayPos=0;if(self.shuffle)self.sequence=self.shuffleArray(self.sequence);self.init();}else
self.typewrite(self.strings[self.sequence[self.arrayPos]],curStrPos);}},humanize);},shuffleArray:function(array){var tmp,current,top=array.length;if(top)while(--top){current=Math.floor(Math.random()*(top+1));tmp=array[current];array[current]=array[top];array[top]=tmp;}
return array;},reset:function(){var self=this;clearInterval(self.timeout);var id=this.el.attr('id');this.el.after('<span id="'+id+'"/>')
this.el.remove();if(typeof this.cursor!=='undefined'){this.cursor.remove();}
self.options.resetCallback();}};$.fn.typed=function(option){return this.each(function(){var $this=$(this),data=$this.data('typed'),options=typeof option=='object'&&option;if(!data)$this.data('typed',(data=new Typed(this,options)));if(typeof option=='string')data[option]();});};$.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:false,backDelay:500,loop:false,loopCount:false,showCursor:true,cursorChar:"|",attr:null,contentType:'html',callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}};}(window.jQuery);
var wpAjaxUrl='https://app-digisavvy.pantheonsite.io/wp-admin/admin-ajax.php';var flBuilderUrl='https://app-digisavvy.pantheonsite.io/contents/lib/bb-plugin/';var FLBuilderLayoutConfig={anchorLinkAnimations:{duration:1000,easing:'swing',offset:100},paths:{pluginUrl:'https://app-digisavvy.pantheonsite.io/contents/lib/bb-plugin/',wpAjaxUrl:'https://app-digisavvy.pantheonsite.io/wp-admin/admin-ajax.php'},breakpoints:{small:768,medium:1024},waypoint:{offset:80}};(function($){if(typeof FLBuilderLayout!='undefined'){return;}
FLBuilderLayout={init:function()
{FLBuilderLayout._destroy();FLBuilderLayout._initClasses();FLBuilderLayout._initBackgrounds();if(0===$('.fl-builder-edit').length){FLBuilderLayout._initAnchorLinks();FLBuilderLayout._initHash();FLBuilderLayout._initModuleAnimations();FLBuilderLayout._initForms();}},refreshGalleries:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),mfContent=$element.find('.fl-mosaicflow-content'),wmContent=$element.find('.fl-gallery'),mfObject=null;if(mfContent){mfObject=mfContent.data('mosaicflow');if(mfObject){mfObject.columns=$([]);mfObject.columnsHeights=[];mfContent.data('mosaicflow',mfObject);mfContent.mosaicflow('refill');}}
if(wmContent){wmContent.trigger('refreshWookmark');}},refreshGridLayout:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),msnryContent=$element.find('.masonry');if(msnryContent.length){msnryContent.masonry('layout');}},reloadSlider:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),bxContent=$element.find('.bx-viewport > div').eq(0),bxObject=null;if(bxContent.length){bxObject=bxContent.data('bxSlider');if(bxObject){bxObject.reloadSlider();}}},resizeAudio:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),audioPlayers=$element.find('.wp-audio-shortcode.mejs-audio'),player=null,mejsPlayer=null,rail=null,railWidth=400;if(audioPlayers.length&&typeof mejs!=='undefined'){audioPlayers.each(function(){player=$(this);mejsPlayer=mejs.players[player.attr('id')];rail=player.find('.mejs-controls .mejs-time-rail');var innerMejs=player.find('.mejs-inner'),total=player.find('.mejs-controls .mejs-time-total');if(typeof mejsPlayer!=='undefined'){railWidth=Math.ceil(player.width()*0.8);if(innerMejs.length){rail.css('width',railWidth+'px!important');mejsPlayer.options.autosizeProgress=true;setTimeout(function(){mejsPlayer.setControlsSize();},50);player.find('.mejs-inner').css({visibility:'visible',height:'inherit'});}}});}},preloadAudio:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),contentWrap=$element.closest('.fl-accordion-item'),audioPlayers=$element.find('.wp-audio-shortcode.mejs-audio');if(!contentWrap.hasClass('fl-accordion-item-active')&&audioPlayers.find('.mejs-inner').length){audioPlayers.find('.mejs-inner').css({visibility:'hidden',height:0});}},resizeSlideshow:function(){if(typeof YUI!=='undefined'){YUI().use('node-event-simulate',function(Y){Y.one(window).simulate("resize");});}},_destroy:function()
{var win=$(window);win.off('scroll.fl-bg-parallax');win.off('resize.fl-bg-video');},_isTouch:function()
{if(('ontouchstart'in window)||(window.DocumentTouch&&document instanceof DocumentTouch)){return true;}
return false;},_isMobile:function()
{return/Mobile|Android|Silk\/|Kindle|BlackBerry|Opera Mini|Opera Mobi|webOS/i.test(navigator.userAgent);},_initClasses:function()
{var body=$('body'),ua=navigator.userAgent;if(!body.hasClass('archive')&&$('.fl-builder-content-primary').length>0){body.addClass('fl-builder');}
if(FLBuilderLayout._isTouch()){body.addClass('fl-builder-touch');}
if(FLBuilderLayout._isMobile()){body.addClass('fl-builder-mobile');}
if(ua.indexOf('Trident/7.0')>-1&&ua.indexOf('rv:11.0')>-1){body.addClass('fl-builder-ie-11');}},_initBackgrounds:function()
{var win=$(window);if($('.fl-row-bg-parallax').length>0&&!FLBuilderLayout._isMobile()){FLBuilderLayout._scrollParallaxBackgrounds();FLBuilderLayout._initParallaxBackgrounds();win.on('scroll.fl-bg-parallax',FLBuilderLayout._scrollParallaxBackgrounds);}
if($('.fl-bg-video').length>0){FLBuilderLayout._initBgVideos();FLBuilderLayout._resizeBgVideos();win.on('resize.fl-bg-video',FLBuilderLayout._resizeBgVideos);}},_initParallaxBackgrounds:function()
{$('.fl-row-bg-parallax').each(FLBuilderLayout._initParallaxBackground);},_initParallaxBackground:function()
{var row=$(this),content=row.find('> .fl-row-content-wrap'),src=row.data('parallax-image'),loaded=row.data('parallax-loaded'),img=new Image();if(loaded){return;}
else if(typeof src!='undefined'){$(img).on('load',function(){content.css('background-image','url('+src+')');row.data('parallax-loaded',true);});img.src=src;}},_scrollParallaxBackgrounds:function()
{$('.fl-row-bg-parallax').each(FLBuilderLayout._scrollParallaxBackground);},_scrollParallaxBackground:function()
{var win=$(window),row=$(this),content=row.find('> .fl-row-content-wrap'),speed=row.data('parallax-speed'),offset=content.offset(),yPos=-((win.scrollTop()-offset.top)/speed);content.css('background-position','center '+yPos+'px');},_initBgVideos:function()
{$('.fl-bg-video').each(FLBuilderLayout._initBgVideo);},_initBgVideo:function()
{var wrap=$(this),width=wrap.data('width'),height=wrap.data('height'),mp4=wrap.data('mp4'),youtube=wrap.data('youtube'),vimeo=wrap.data('vimeo'),mp4Type=wrap.data('mp4-type'),webm=wrap.data('webm'),webmType=wrap.data('webm-type'),fallback=wrap.data('fallback'),loaded=wrap.data('loaded'),fallbackTag='',videoTag=null,mp4Tag=null,webmTag=null;if(loaded){return;}
videoTag=$('<video autoplay loop muted playsinline></video>');if('undefined'!=typeof fallback&&''!=fallback){videoTag.attr('poster','data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')
videoTag.css('background','transparent url("'+fallback+'") no-repeat center center')
videoTag.css('background-size','cover')
videoTag.css('height','100%')}
if('undefined'!=typeof mp4&&''!=mp4){mp4Tag=$('<source />');mp4Tag.attr('src',mp4);mp4Tag.attr('type',mp4Type);videoTag.append(mp4Tag);}
if('undefined'!=typeof webm&&''!=webm){webmTag=$('<source />');webmTag.attr('src',webm);webmTag.attr('type',webmType);videoTag.append(webmTag);}
if('undefined'!=typeof youtube&&!FLBuilderLayout._isMobile()){FLBuilderLayout._initYoutubeBgVideo.apply(this);}
else if('undefined'!=typeof vimeo&&!FLBuilderLayout._isMobile()){FLBuilderLayout._initVimeoBgVideo.apply(this);}
else{wrap.append(videoTag);}
wrap.data('loaded',true);},_initYoutubeBgVideo:function()
{var playerWrap=$(this),videoId=playerWrap.data('video-id'),videoPlayer=playerWrap.find('.fl-bg-video-player'),enableAudio=playerWrap.data('enable-audio'),audioButton=playerWrap.find('.fl-bg-video-audio'),startTime='undefined'!==typeof playerWrap.data('t')?playerWrap.data('t'):0,loop='undefined'!==typeof playerWrap.data('loop')?playerWrap.data('loop'):1,vidPlayed=false,didUnmute=false,stateCount=0,player;if(videoId){FLBuilderLayout._onYoutubeApiReady(function(YT){setTimeout(function(){player=new YT.Player(videoPlayer[0],{videoId:videoId,events:{onReady:function(event){if("no"===enableAudio){event.target.mute();}
else if("yes"===enableAudio&&event.target.isMuted){event.target.unMute();}
playerWrap.data('YTPlayer',player);FLBuilderLayout._resizeYoutubeBgVideo.apply(playerWrap);event.target.playVideo();if(audioButton.length>0){audioButton.on('click',{button:audioButton,player:player},FLBuilderLayout._toggleBgVideoAudio);}},onStateChange:function(event){if(stateCount<4){stateCount++;}
if(stateCount>1&&-1===event.data&&"yes"===enableAudio){player.mute();player.playVideo();audioButton.show();}
if(event.data===YT.PlayerState.ENDED&&1===loop){if(startTime>0){player.seekTo(startTime);}
else{player.playVideo();}}},onError:function(event){console.info('YT Error: '+event.data)
FLBuilderLayout._onErrorYoutubeVimeo(playerWrap)}},playerVars:{controls:0,showinfo:0,rel:0,start:startTime,}});},1);});}},_onErrorYoutubeVimeo:function(playerWrap){fallback=playerWrap.data('fallback')||false
if(!fallback){return false;}
playerWrap.find('iframe').remove()
fallbackTag=$('<div></div>');fallbackTag.addClass('fl-bg-video-fallback');fallbackTag.css('background-image','url('+playerWrap.data('fallback')+')');playerWrap.append(fallbackTag);},_onYoutubeApiReady:function(callback){if(window.YT&&YT.loaded){callback(YT);}else{setTimeout(function(){FLBuilderLayout._onYoutubeApiReady(callback);},350);}},_initVimeoBgVideo:function()
{var playerWrap=$(this),videoId=playerWrap.data('video-id'),videoPlayer=playerWrap.find('.fl-bg-video-player'),enableAudio=playerWrap.data('enable-audio'),audioButton=playerWrap.find('.fl-bg-video-audio'),player,width=playerWrap.outerWidth();if(typeof Vimeo!=='undefined'&&videoId){player=new Vimeo.Player(videoPlayer[0],{id:videoId,loop:true,title:false,portrait:false,background:true,autopause:false,muted:true});playerWrap.data('VMPlayer',player);if("no"===enableAudio){player.setVolume(0);}
else if("yes"===enableAudio){if($.browser.safari||$.browser.chrome){player.setVolume(0);audioButton.show();}
else{player.setVolume(1);}}
player.play().catch(function(error){FLBuilderLayout._onErrorYoutubeVimeo(playerWrap)});if(audioButton.length>0){audioButton.on('click',{button:audioButton,player:player},FLBuilderLayout._toggleBgVideoAudio);}}},_toggleBgVideoAudio:function(e){var player=e.data.player,control=e.data.button.find('.fl-audio-control');if(control.hasClass('fa-volume-off')){control.removeClass('fa-volume-off').addClass('fa-volume-up');e.data.button.find('.fa-times').hide();if('function'===typeof player.unMute){player.unMute();}
else{player.setVolume(1);}}
else{control.removeClass('fa-volume-up').addClass('fa-volume-off');e.data.button.find('.fa-times').show();if('function'===typeof player.unMute){player.mute();}
else{player.setVolume(0);}}},_videoBgSourceError:function(e)
{var source=$(e.target),wrap=source.closest('.fl-bg-video'),vid=wrap.find('video'),fallback=wrap.data('fallback'),fallbackTag='';source.remove();if(vid.find('source').length){return;}else if(''!==fallback){fallbackTag=$('<div></div>');fallbackTag.addClass('fl-bg-video-fallback');fallbackTag.css('background-image','url('+fallback+')');wrap.append(fallbackTag);vid.remove();}},_resizeBgVideos:function()
{$('.fl-bg-video').each(function(){FLBuilderLayout._resizeBgVideo.apply(this);if($(this).parent().find('img').length>0){$(this).parent().imagesLoaded($.proxy(FLBuilderLayout._resizeBgVideo,this));}});},_resizeBgVideo:function()
{if(0===$(this).find('video').length&&0===$(this).find('iframe').length){return;}
var wrap=$(this),wrapHeight=wrap.outerHeight(),wrapWidth=wrap.outerWidth(),vid=wrap.find('video'),vidHeight=wrap.data('height'),vidWidth=wrap.data('width'),newWidth=wrapWidth,newHeight=Math.round(vidHeight*wrapWidth/vidWidth),newLeft=0,newTop=0,iframe=wrap.find('iframe');if(vid.length){if(vidHeight===''||typeof vidHeight==='undefined'||vidWidth===''||typeof vidWidth==='undefined'){vid.css({'left':'0px','top':'0px','width':newWidth+'px'});vid.on('loadedmetadata',FLBuilderLayout._resizeOnLoadedMeta);}
else{if(newHeight<wrapHeight){newHeight=wrapHeight;newWidth=Math.round(vidWidth*wrapHeight/vidHeight);newLeft=-((newWidth-wrapWidth)/2);}
else{newTop=-((newHeight-wrapHeight)/2);}
vid.css({'left':newLeft+'px','top':newTop+'px','height':newHeight+'px','width':newWidth+'px'});}}
else if(iframe.length){if(typeof wrap.data('youtube')!=='undefined'){FLBuilderLayout._resizeYoutubeBgVideo.apply(this);}}},_resizeOnLoadedMeta:function(){var video=$(this),wrapHeight=video.parent().outerHeight(),wrapWidth=video.parent().outerWidth(),vidWidth=video[0].videoWidth,vidHeight=video[0].videoHeight,newHeight=Math.round(vidHeight*wrapWidth/vidWidth),newWidth=wrapWidth,newLeft=0,newTop=0;if(newHeight<wrapHeight){newHeight=wrapHeight;newWidth=Math.round(vidWidth*wrapHeight/vidHeight);newLeft=-((newWidth-wrapWidth)/2);}
else{newTop=-((newHeight-wrapHeight)/2);}
video.parent().data('width',vidWidth);video.parent().data('height',vidHeight);video.css({'left':newLeft+'px','top':newTop+'px','width':newWidth+'px','height':newHeight+'px'});},_resizeYoutubeBgVideo:function()
{var wrap=$(this),wrapWidth=wrap.outerWidth(),wrapHeight=wrap.outerHeight(),player=wrap.data('YTPlayer'),video=player?player.getIframe():null,aspectRatioSetting='16:9',aspectRatioArray=aspectRatioSetting.split(':'),aspectRatio=aspectRatioArray[0]/aspectRatioArray[1],ratioWidth=wrapWidth/aspectRatio,ratioHeight=wrapHeight*aspectRatio,isWidthFixed=wrapWidth/wrapHeight>aspectRatio,width=isWidthFixed?wrapWidth:ratioHeight,height=isWidthFixed?ratioWidth:wrapHeight;if(video){$(video).width(width).height(height);}},_initModuleAnimations:function()
{if(typeof jQuery.fn.waypoint!=='undefined'&&!FLBuilderLayout._isMobile()){$('.fl-animation').each(function(){var node=$(this),nodeTop=node.offset().top,winHeight=$(window).height(),bodyHeight=$('body').height(),waypoint=FLBuilderLayoutConfig.waypoint,offset='80%';if(typeof waypoint.offset!==undefined){offset=FLBuilderLayoutConfig.waypoint.offset+'%';}
if(bodyHeight-nodeTop<winHeight*0.2){offset='100%';}
node.waypoint({offset:offset,handler:FLBuilderLayout._doModuleAnimation});});}},_doModuleAnimation:function()
{var module='undefined'==typeof this.element?$(this):$(this.element),delay=parseFloat(module.data('animation-delay'));if(!isNaN(delay)&&delay>0){setTimeout(function(){module.addClass('fl-animated');},delay*1000);}
else{module.addClass('fl-animated');}},_initHash:function()
{var hash=window.location.hash.replace('#','').split('/').shift(),element=null,tabs=null,responsiveLabel=null,tabIndex=null,label=null;if(''!==hash){try{element=$('#'+hash);if(element.length>0){if(element.hasClass('fl-accordion-item')){setTimeout(function(){element.find('.fl-accordion-button').trigger('click');},100);}
if(element.hasClass('fl-tabs-panel')){setTimeout(function(){tabs=element.closest('.fl-tabs');responsiveLabel=element.find('.fl-tabs-panel-label');tabIndex=responsiveLabel.data('index');label=tabs.find('.fl-tabs-labels .fl-tabs-label[data-index='+tabIndex+']');if(responsiveLabel.is(':visible')){responsiveLabel.trigger('click');}
else{label[0].click();FLBuilderLayout._scrollToElement(element);}},100);}}}
catch(e){}}},_initAnchorLinks:function()
{$('a').each(FLBuilderLayout._initAnchorLink);},_initAnchorLink:function()
{var link=$(this),href=link.attr('href'),loc=window.location,id=null,element=null;if('undefined'!=typeof href&&href.indexOf('#')>-1&&link.closest('svg').length<1){if(loc.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&loc.hostname==this.hostname){try{id=href.split('#').pop();if(!id){return;}
element=$('#'+id);if(element.length>0){if(link.hasClass('fl-scroll-link')||element.hasClass('fl-row')||element.hasClass('fl-col')||element.hasClass('fl-module')){$(link).on('click',FLBuilderLayout._scrollToElementOnLinkClick);}
if(element.hasClass('fl-accordion-item')){$(link).on('click',FLBuilderLayout._scrollToAccordionOnLinkClick);}
if(element.hasClass('fl-tabs-panel')){$(link).on('click',FLBuilderLayout._scrollToTabOnLinkClick);}}}
catch(e){}}}},_scrollToElementOnLinkClick:function(e,callback)
{var element=$('#'+$(this).attr('href').split('#').pop());FLBuilderLayout._scrollToElement(element,callback);e.preventDefault();},_scrollToElement:function(element,callback)
{var config=FLBuilderLayoutConfig.anchorLinkAnimations,dest=0,win=$(window),doc=$(document);if(element.length>0){if(element.offset().top>doc.height()-win.height()){dest=doc.height()-win.height();}
else{dest=element.offset().top-config.offset;}
$('html, body').animate({scrollTop:dest},config.duration,config.easing,function(){if('undefined'!=typeof callback){callback();}
if(undefined!=element.attr('id')){if(history.pushState){history.pushState(null,null,'#'+element.attr('id'));}
else{window.location.hash=element.attr('id');}}});}},_scrollToAccordionOnLinkClick:function(e)
{var element=$('#'+$(this).attr('href').split('#').pop());if(element.length>0){var callback=function(){if(element){element.find('.fl-accordion-button').trigger('click');element=false;}};FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,callback);}},_scrollToTabOnLinkClick:function(e)
{var element=$('#'+$(this).attr('href').split('#').pop()),tabs=null,label=null,responsiveLabel=null;if(element.length>0){tabs=element.closest('.fl-tabs');responsiveLabel=element.find('.fl-tabs-panel-label');tabIndex=responsiveLabel.data('index');label=tabs.find('.fl-tabs-labels .fl-tabs-label[data-index='+tabIndex+']');if(responsiveLabel.is(':visible')){var callback=function(){if(element){responsiveLabel.trigger('click');element=false;}};FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,callback);}
else{label[0].click();FLBuilderLayout._scrollToElement(element);}
e.preventDefault();}},_initForms:function()
{if(!FLBuilderLayout._hasPlaceholderSupport){$('.fl-form-field input').each(FLBuilderLayout._initFormFieldPlaceholderFallback);}
$('.fl-form-field input').on('focus',FLBuilderLayout._clearFormFieldError);},_hasPlaceholderSupport:function()
{var input=document.createElement('input');return'undefined'!=input.placeholder;},_initFormFieldPlaceholderFallback:function()
{var field=$(this),val=field.val(),placeholder=field.attr('placeholder');if('undefined'!=placeholder&&''===val){field.val(placeholder);field.on('focus',FLBuilderLayout._hideFormFieldPlaceholderFallback);field.on('blur',FLBuilderLayout._showFormFieldPlaceholderFallback);}},_hideFormFieldPlaceholderFallback:function()
{var field=$(this),val=field.val(),placeholder=field.attr('placeholder');if(val==placeholder){field.val('');}},_showFormFieldPlaceholderFallback:function()
{var field=$(this),val=field.val(),placeholder=field.attr('placeholder');if(''===val){field.val(placeholder);}},_clearFormFieldError:function()
{var field=$(this);field.removeClass('fl-form-error');field.siblings('.fl-form-error-message').hide();}};$(function(){FLBuilderLayout.init();});})(jQuery);jQuery(function($){$(function(){$('.fl-node-586ade5b9bd91 .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-586adb40b2d5a .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});
var wp_intel=wp_intel||{'settings':{},'behaviors':{},'locale':{}};(function($){wp_intel.attachBehaviors=function(context,settings){context=context||document;settings=settings||wp_intel.settings;$.each(wp_intel.behaviors,function(){if($.isFunction(this.attach)){this.attach(context,settings);}});};wp_intel.detachBehaviors=function(context,settings,trigger){context=context||document;settings=settings||wp_intel.settings;trigger=trigger||'unload';$.each(wp_intel.behaviors,function(){if($.isFunction(this.detach)){this.detach(context,settings,trigger);}});};wp_intel.t=function(str,args,options){options=options||{};options.context=options.context||'';if(wp_intel.locale.strings&&wp_intel.locale.strings[options.context]&&wp_intel.locale.strings[options.context][str]){str=wp_intel.locale.strings[options.context][str];}
if(args){str=wp_intel.formatString(str,args);}
return str;};$(function(){wp_intel.attachBehaviors(document,wp_intel.settings);});})(jQuery);

(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);

(function(g){function P(c){if(c&&void 0===c.allowPageScroll&&(void 0!==c.swipe||void 0!==c.swipeStatus))c.allowPageScroll=G;c||(c={});c=g.extend({},g.fn.swipe.defaults,c);return this.each(function(){var b=g(this),f=b.data(w);f||(f=new W(this,c),b.data(w,f))})}function W(c,b){var f,p,r,s;function H(a){var a=a.originalEvent,c,Q=n?a.touches[0]:a;d=R;n?h=a.touches.length:a.preventDefault();i=0;j=null;k=0;!n||h===b.fingers||b.fingers===x?(r=f=Q.pageX,s=p=Q.pageY,y=(new Date).getTime(),b.swipeStatus&&(c= l(a,d))):t(a);if(!1===c)return d=m,l(a,d),c;e.bind(I,J);e.bind(K,L)}function J(a){a=a.originalEvent;if(!(d===q||d===m)){var c,e=n?a.touches[0]:a;f=e.pageX;p=e.pageY;u=(new Date).getTime();j=S();n&&(h=a.touches.length);d=z;var e=a,g=j;if(b.allowPageScroll===G)e.preventDefault();else{var o=b.allowPageScroll===T;switch(g){case v:(b.swipeLeft&&o||!o&&b.allowPageScroll!=M)&&e.preventDefault();break;case A:(b.swipeRight&&o||!o&&b.allowPageScroll!=M)&&e.preventDefault();break;case B:(b.swipeUp&&o||!o&&b.allowPageScroll!= N)&&e.preventDefault();break;case C:(b.swipeDown&&o||!o&&b.allowPageScroll!=N)&&e.preventDefault()}}h===b.fingers||b.fingers===x||!n?(i=U(),k=u-y,b.swipeStatus&&(c=l(a,d,j,i,k)),b.triggerOnTouchEnd||(e=!(b.maxTimeThreshold?!(k>=b.maxTimeThreshold):1),!0===D()?(d=q,c=l(a,d)):e&&(d=m,l(a,d)))):(d=m,l(a,d));!1===c&&(d=m,l(a,d))}}function L(a){a=a.originalEvent;a.preventDefault();u=(new Date).getTime();i=U();j=S();k=u-y;if(b.triggerOnTouchEnd||!1===b.triggerOnTouchEnd&&d===z)if(d=q,(h===b.fingers||b.fingers=== x||!n)&&0!==f){var c=!(b.maxTimeThreshold?!(k>=b.maxTimeThreshold):1);if((!0===D()||null===D())&&!c)l(a,d);else if(c||!1===D())d=m,l(a,d)}else d=m,l(a,d);else d===z&&(d=m,l(a,d));e.unbind(I,J,!1);e.unbind(K,L,!1)}function t(){y=u=p=f=s=r=h=0}function l(a,c){var d=void 0;b.swipeStatus&&(d=b.swipeStatus.call(e,a,c,j||null,i||0,k||0,h));if(c===m&&b.click&&(1===h||!n)&&(isNaN(i)||0===i))d=b.click.call(e,a,a.target);if(c==q)switch(b.swipe&&(d=b.swipe.call(e,a,j,i,k,h)),j){case v:b.swipeLeft&&(d=b.swipeLeft.call(e, a,j,i,k,h));break;case A:b.swipeRight&&(d=b.swipeRight.call(e,a,j,i,k,h));break;case B:b.swipeUp&&(d=b.swipeUp.call(e,a,j,i,k,h));break;case C:b.swipeDown&&(d=b.swipeDown.call(e,a,j,i,k,h))}(c===m||c===q)&&t(a);return d}function D(){return null!==b.threshold?i>=b.threshold:null}function U(){return Math.round(Math.sqrt(Math.pow(f-r,2)+Math.pow(p-s,2)))}function S(){var a;a=Math.atan2(p-s,r-f);a=Math.round(180*a/Math.PI);0>a&&(a=360-Math.abs(a));return 45>=a&&0<=a?v:360>=a&&315<=a?v:135<=a&&225>=a? A:45<a&&135>a?C:B}function V(){e.unbind(E,H);e.unbind(F,t);e.unbind(I,J);e.unbind(K,L)}var O=n||!b.fallbackToMouseEvents,E=O?"touchstart":"mousedown",I=O?"touchmove":"mousemove",K=O?"touchend":"mouseup",F="touchcancel",i=0,j=null,k=0,e=g(c),d="start",h=0,y=p=f=s=r=0,u=0;try{e.bind(E,H),e.bind(F,t)}catch(P){g.error("events not supported "+E+","+F+" on jQuery.swipe")}this.enable=function(){e.bind(E,H);e.bind(F,t);return e};this.disable=function(){V();return e};this.destroy=function(){V();e.data(w,null); return e}}var v="left",A="right",B="up",C="down",G="none",T="auto",M="horizontal",N="vertical",x="all",R="start",z="move",q="end",m="cancel",n="ontouchstart"in window,w="TouchSwipe";g.fn.swipe=function(c){var b=g(this),f=b.data(w);if(f&&"string"===typeof c){if(f[c])return f[c].apply(this,Array.prototype.slice.call(arguments,1));g.error("Method "+c+" does not exist on jQuery.swipe")}else if(!f&&("object"===typeof c||!c))return P.apply(this,arguments);return b};g.fn.swipe.defaults={fingers:1,threshold:75, maxTimeThreshold:null,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:!0,allowPageScroll:"auto",fallbackToMouseEvents:!0};g.fn.swipe.phases={PHASE_START:R,PHASE_MOVE:z,PHASE_END:q,PHASE_CANCEL:m};g.fn.swipe.directions={LEFT:v,RIGHT:A,UP:B,DOWN:C};g.fn.swipe.pageScroll={NONE:G,HORIZONTAL:M,VERTICAL:N,AUTO:T};g.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:x}})(jQuery);
/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(d){function m(a){if(a in j.style)return a;var b=["Moz","Webkit","O","ms"],c=a.charAt(0).toUpperCase()+a.substr(1);if(a in j.style)return a;for(a=0;a<b.length;++a){var d=b[a]+c;if(d in j.style)return d}}function l(a){"string"===typeof a&&this.parse(a);return this}function q(a,b,c,e){var h=[];d.each(a,function(a){a=d.camelCase(a);a=d.transit.propertyMap[a]||d.cssProps[a]||a;a=a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()});-1===d.inArray(a,h)&&h.push(a)});d.cssEase[c]&&(c=d.cssEase[c]);
var f=""+n(b)+" "+c;0<parseInt(e,10)&&(f+=" "+n(e));var g=[];d.each(h,function(a,b){g.push(b+" "+f)});return g.join(", ")}function f(a,b){b||(d.cssNumber[a]=!0);d.transit.propertyMap[a]=e.transform;d.cssHooks[a]={get:function(b){return d(b).css("transit:transform").get(a)},set:function(b,e){var h=d(b).css("transit:transform");h.setFromString(a,e);d(b).css({"transit:transform":h})}}}function g(a,b){return"string"===typeof a&&!a.match(/^[\-0-9\.]+$/)?a:""+a+b}function n(a){d.fx.speeds[a]&&(a=d.fx.speeds[a]);
return g(a,"ms")}d.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var j=document.createElement("div"),e={},r=-1<navigator.userAgent.toLowerCase().indexOf("chrome");e.transition=m("transition");e.transitionDelay=m("transitionDelay");e.transform=m("transform");e.transformOrigin=m("transformOrigin");j.style[e.transform]=
"";j.style[e.transform]="rotateY(90deg)";e.transform3d=""!==j.style[e.transform];var p=e.transitionEnd={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"}[e.transition]||null,k;for(k in e)e.hasOwnProperty(k)&&"undefined"===typeof d.support[k]&&(d.support[k]=e[k]);j=null;d.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",
easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",
easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};d.cssHooks["transit:transform"]={get:function(a){return d(a).data("transform")||
new l},set:function(a,b){var c=b;c instanceof l||(c=new l(c));a.style[e.transform]="WebkitTransform"===e.transform&&!r?c.toString(!0):c.toString();d(a).data("transform",c)}};d.cssHooks.transform={set:d.cssHooks["transit:transform"].set};"1.8">d.fn.jquery&&(d.cssHooks.transformOrigin={get:function(a){return a.style[e.transformOrigin]},set:function(a,b){a.style[e.transformOrigin]=b}},d.cssHooks.transition={get:function(a){return a.style[e.transition]},set:function(a,b){a.style[e.transition]=b}});f("scale");
f("translate");f("rotate");f("rotateX");f("rotateY");f("rotate3d");f("perspective");f("skewX");f("skewY");f("x",!0);f("y",!0);l.prototype={setFromString:function(a,b){var c="string"===typeof b?b.split(","):b.constructor===Array?b:[b];c.unshift(a);l.prototype.set.apply(this,c)},set:function(a){var b=Array.prototype.slice.apply(arguments,[1]);this.setter[a]?this.setter[a].apply(this,b):this[a]=b.join(",")},get:function(a){return this.getter[a]?this.getter[a].apply(this):this[a]||0},setter:{rotate:function(a){this.rotate=
g(a,"deg")},rotateX:function(a){this.rotateX=g(a,"deg")},rotateY:function(a){this.rotateY=g(a,"deg")},scale:function(a,b){void 0===b&&(b=a);this.scale=a+","+b},skewX:function(a){this.skewX=g(a,"deg")},skewY:function(a){this.skewY=g(a,"deg")},perspective:function(a){this.perspective=g(a,"px")},x:function(a){this.set("translate",a,null)},y:function(a){this.set("translate",null,a)},translate:function(a,b){void 0===this._translateX&&(this._translateX=0);void 0===this._translateY&&(this._translateY=0);
null!==a&&void 0!==a&&(this._translateX=g(a,"px"));null!==b&&void 0!==b&&(this._translateY=g(b,"px"));this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var a=(this.scale||"1,1").split(",");a[0]&&(a[0]=parseFloat(a[0]));a[1]&&(a[1]=parseFloat(a[1]));return a[0]===a[1]?a[0]:a},rotate3d:function(){for(var a=(this.rotate3d||"0,0,0,0deg").split(","),b=0;3>=b;++b)a[b]&&(a[b]=parseFloat(a[b]));
a[3]&&(a[3]=g(a[3],"deg"));return a}},parse:function(a){var b=this;a.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(a,d,e){b.setFromString(d,e)})},toString:function(a){var b=[],c;for(c in this)if(this.hasOwnProperty(c)&&(e.transform3d||!("rotateX"===c||"rotateY"===c||"perspective"===c||"transformOrigin"===c)))"_"!==c[0]&&(a&&"scale"===c?b.push(c+"3d("+this[c]+",1)"):a&&"translate"===c?b.push(c+"3d("+this[c]+",0)"):b.push(c+"("+this[c]+")"));return b.join(" ")}};d.fn.transition=d.fn.transit=function(a,
b,c,f){var h=this,g=0,j=!0;"function"===typeof b&&(f=b,b=void 0);"function"===typeof c&&(f=c,c=void 0);"undefined"!==typeof a.easing&&(c=a.easing,delete a.easing);"undefined"!==typeof a.duration&&(b=a.duration,delete a.duration);"undefined"!==typeof a.complete&&(f=a.complete,delete a.complete);"undefined"!==typeof a.queue&&(j=a.queue,delete a.queue);"undefined"!==typeof a.delay&&(g=a.delay,delete a.delay);"undefined"===typeof b&&(b=d.fx.speeds._default);"undefined"===typeof c&&(c=d.cssEase._default);
b=n(b);var l=q(a,b,c,g),k=d.transit.enabled&&e.transition?parseInt(b,10)+parseInt(g,10):0;if(0===k)return b=j,c=function(b){h.css(a);f&&f.apply(h);b&&b()},!0===b?h.queue(c):b?h.queue(b,c):c(),h;var m={};b=j;c=function(b){this.offsetWidth;var c=!1,g=function(){c&&h.unbind(p,g);0<k&&h.each(function(){this.style[e.transition]=m[this]||null});"function"===typeof f&&f.apply(h);"function"===typeof b&&b()};0<k&&p&&d.transit.useTransitionEnd?(c=!0,h.bind(p,g)):window.setTimeout(g,k);h.each(function(){0<k&&
(this.style[e.transition]=l);d(this).css(a)})};!0===b?h.queue(c):b?h.queue(b,c):c();return this};d.transit.getTransitionValue=q})(jQuery);
(function($){if($.fn.carouFredSel)
{return;}
$.fn.caroufredsel=$.fn.carouFredSel=function(options,configs)
{if(this.length==0)
{debug(true,'No element found for "'+this.selector+'".');return this;}
if(this.length>1)
{return this.each(function(){$(this).carouFredSel(options,configs);});}
var $cfs=this,$tt0=this[0],starting_position=false;if($cfs.data('_cfs_isCarousel'))
{starting_position=$cfs.triggerHandler('_cfs_triggerEvent','currentPosition');$cfs.trigger('_cfs_triggerEvent',['destroy',true]);}
var FN={};FN._init=function(o,setOrig,start)
{o=go_getObject($tt0,o);o.items=go_getItemsObject($tt0,o.items);o.scroll=go_getScrollObject($tt0,o.scroll);o.auto=go_getAutoObject($tt0,o.auto);o.prev=go_getPrevNextObject($tt0,o.prev);o.next=go_getPrevNextObject($tt0,o.next);o.pagination=go_getPaginationObject($tt0,o.pagination);o.swipe=go_getSwipeObject($tt0,o.swipe);o.mousewheel=go_getMousewheelObject($tt0,o.mousewheel);if(setOrig)
{opts_orig=$.extend(true,{},$.fn.carouFredSel.defaults,o);}
opts=$.extend(true,{},$.fn.carouFredSel.defaults,o);opts.d=cf_getDimensions(opts);crsl.direction=(opts.direction=='up'||opts.direction=='left')?'next':'prev';var a_itm=$cfs.children(),avail_primary=ms_getParentSize($wrp,opts,'width');if(is_true(opts.cookie))
{opts.cookie='caroufredsel_cookie_'+conf.serialNumber;}
opts.maxDimension=ms_getMaxDimension(opts,avail_primary);opts.items=in_complementItems(opts.items,opts,a_itm,start);opts[opts.d['width']]=in_complementPrimarySize(opts[opts.d['width']],opts,a_itm);opts[opts.d['height']]=in_complementSecondarySize(opts[opts.d['height']],opts,a_itm);if(opts.responsive)
{if(!is_percentage(opts[opts.d['width']]))
{opts[opts.d['width']]='100%';}}
if(is_percentage(opts[opts.d['width']]))
{crsl.upDateOnWindowResize=true;crsl.primarySizePercentage=opts[opts.d['width']];opts[opts.d['width']]=ms_getPercentage(avail_primary,crsl.primarySizePercentage);if(!opts.items.visible)
{opts.items.visibleConf.variable=true;}}
if(opts.responsive)
{opts.usePadding=false;opts.padding=[0,0,0,0];opts.align=false;opts.items.visibleConf.variable=false;}
else
{if(!opts.items.visible)
{opts=in_complementVisibleItems(opts,avail_primary);}
if(!opts[opts.d['width']])
{if(!opts.items.visibleConf.variable&&is_number(opts.items[opts.d['width']])&&opts.items.filter=='*')
{opts[opts.d['width']]=opts.items.visible*opts.items[opts.d['width']];opts.align=false;}
else
{opts[opts.d['width']]='variable';}}
if(is_undefined(opts.align))
{opts.align=(is_number(opts[opts.d['width']]))?'center':false;}
if(opts.items.visibleConf.variable)
{opts.items.visible=gn_getVisibleItemsNext(a_itm,opts,0);}}
if(opts.items.filter!='*'&&!opts.items.visibleConf.variable)
{opts.items.visibleConf.org=opts.items.visible;opts.items.visible=gn_getVisibleItemsNextFilter(a_itm,opts,0);}
opts.items.visible=cf_getItemsAdjust(opts.items.visible,opts,opts.items.visibleConf.adjust,$tt0);opts.items.visibleConf.old=opts.items.visible;if(opts.responsive)
{if(!opts.items.visibleConf.min)
{opts.items.visibleConf.min=opts.items.visible;}
if(!opts.items.visibleConf.max)
{opts.items.visibleConf.max=opts.items.visible;}
opts=in_getResponsiveValues(opts,a_itm,avail_primary);}
else
{opts.padding=cf_getPadding(opts.padding);if(opts.align=='top')
{opts.align='left';}
else if(opts.align=='bottom')
{opts.align='right';}
switch(opts.align)
{case'center':case'left':case'right':if(opts[opts.d['width']]!='variable')
{opts=in_getAlignPadding(opts,a_itm);opts.usePadding=true;}
break;default:opts.align=false;opts.usePadding=(opts.padding[0]==0&&opts.padding[1]==0&&opts.padding[2]==0&&opts.padding[3]==0)?false:true;break;}}
if(!is_number(opts.scroll.duration))
{opts.scroll.duration=500;}
if(is_undefined(opts.scroll.items))
{opts.scroll.items=(opts.responsive||opts.items.visibleConf.variable||opts.items.filter!='*')?'visible':opts.items.visible;}
opts.auto=$.extend(true,{},opts.scroll,opts.auto);opts.prev=$.extend(true,{},opts.scroll,opts.prev);opts.next=$.extend(true,{},opts.scroll,opts.next);opts.pagination=$.extend(true,{},opts.scroll,opts.pagination);opts.auto=go_complementAutoObject($tt0,opts.auto);opts.prev=go_complementPrevNextObject($tt0,opts.prev);opts.next=go_complementPrevNextObject($tt0,opts.next);opts.pagination=go_complementPaginationObject($tt0,opts.pagination);opts.swipe=go_complementSwipeObject($tt0,opts.swipe);opts.mousewheel=go_complementMousewheelObject($tt0,opts.mousewheel);if(opts.synchronise)
{opts.synchronise=cf_getSynchArr(opts.synchronise);}
if(opts.auto.onPauseStart)
{opts.auto.onTimeoutStart=opts.auto.onPauseStart;deprecated('auto.onPauseStart','auto.onTimeoutStart');}
if(opts.auto.onPausePause)
{opts.auto.onTimeoutPause=opts.auto.onPausePause;deprecated('auto.onPausePause','auto.onTimeoutPause');}
if(opts.auto.onPauseEnd)
{opts.auto.onTimeoutEnd=opts.auto.onPauseEnd;deprecated('auto.onPauseEnd','auto.onTimeoutEnd');}
if(opts.auto.pauseDuration)
{opts.auto.timeoutDuration=opts.auto.pauseDuration;deprecated('auto.pauseDuration','auto.timeoutDuration');}};FN._build=function(){$cfs.data('_cfs_isCarousel',true);var a_itm=$cfs.children(),orgCSS=in_mapCss($cfs,['textAlign','float','position','top','right','bottom','left','zIndex','width','height','marginTop','marginRight','marginBottom','marginLeft']),newPosition='relative';switch(orgCSS.position)
{case'absolute':case'fixed':newPosition=orgCSS.position;break;}
if(conf.wrapper=='parent')
{sz_storeOrigCss($wrp);}
else
{$wrp.css(orgCSS);}
$wrp.css({'overflow':'hidden','position':newPosition});sz_storeOrigCss($cfs);$cfs.data('_cfs_origCssZindex',orgCSS.zIndex);$cfs.css({'textAlign':'left','float':'none','position':'absolute','top':0,'right':'auto','bottom':'auto','left':0,'marginTop':0,'marginRight':0,'marginBottom':0,'marginLeft':0});sz_storeMargin(a_itm,opts);sz_storeOrigCss(a_itm);if(opts.responsive)
{sz_setResponsiveSizes(opts,a_itm);}};FN._bind_events=function(){FN._unbind_events();$cfs.bind(cf_e('stop',conf),function(e,imm){e.stopPropagation();if(!crsl.isStopped)
{if(opts.auto.button)
{opts.auto.button.addClass(cf_c('stopped',conf));}}
crsl.isStopped=true;if(opts.auto.play)
{opts.auto.play=false;$cfs.trigger(cf_e('pause',conf),imm);}
return true;});$cfs.bind(cf_e('finish',conf),function(e){e.stopPropagation();if(crsl.isScrolling)
{sc_stopScroll(scrl);}
return true;});$cfs.bind(cf_e('pause',conf),function(e,imm,res){e.stopPropagation();tmrs=sc_clearTimers(tmrs);if(imm&&crsl.isScrolling)
{scrl.isStopped=true;var nst=getTime()-scrl.startTime;scrl.duration-=nst;if(scrl.pre)
{scrl.pre.duration-=nst;}
if(scrl.post)
{scrl.post.duration-=nst;}
sc_stopScroll(scrl,false);}
if(!crsl.isPaused&&!crsl.isScrolling)
{if(res)
{tmrs.timePassed+=getTime()-tmrs.startTime;}}
if(!crsl.isPaused)
{if(opts.auto.button)
{opts.auto.button.addClass(cf_c('paused',conf));}}
crsl.isPaused=true;if(opts.auto.onTimeoutPause)
{var dur1=opts.auto.timeoutDuration-tmrs.timePassed,perc=100-Math.ceil(dur1*100/opts.auto.timeoutDuration);opts.auto.onTimeoutPause.call($tt0,perc,dur1);}
return true;});$cfs.bind(cf_e('play',conf),function(e,dir,del,res){e.stopPropagation();tmrs=sc_clearTimers(tmrs);var v=[dir,del,res],t=['string','number','boolean'],a=cf_sortParams(v,t);dir=a[0];del=a[1];res=a[2];if(dir!='prev'&&dir!='next')
{dir=crsl.direction;}
if(!is_number(del))
{del=0;}
if(!is_boolean(res))
{res=false;}
if(res)
{crsl.isStopped=false;opts.auto.play=true;}
if(!opts.auto.play)
{e.stopImmediatePropagation();return debug(conf,'Carousel stopped: Not scrolling.');}
if(crsl.isPaused)
{if(opts.auto.button)
{opts.auto.button.removeClass(cf_c('stopped',conf));opts.auto.button.removeClass(cf_c('paused',conf));}}
crsl.isPaused=false;tmrs.startTime=getTime();var dur1=opts.auto.timeoutDuration+del;dur2=dur1-tmrs.timePassed;perc=100-Math.ceil(dur2*100/dur1);if(opts.auto.progress)
{tmrs.progress=setInterval(function(){var pasd=getTime()-tmrs.startTime+tmrs.timePassed,perc=Math.ceil(pasd*100/dur1);opts.auto.progress.updater.call(opts.auto.progress.bar[0],perc);},opts.auto.progress.interval);}
tmrs.auto=setTimeout(function(){if(opts.auto.progress)
{opts.auto.progress.updater.call(opts.auto.progress.bar[0],100);}
if(opts.auto.onTimeoutEnd)
{opts.auto.onTimeoutEnd.call($tt0,perc,dur2);}
if(crsl.isScrolling)
{$cfs.trigger(cf_e('play',conf),dir);}
else
{$cfs.trigger(cf_e(dir,conf),opts.auto);}},dur2);if(opts.auto.onTimeoutStart)
{opts.auto.onTimeoutStart.call($tt0,perc,dur2);}
return true;});$cfs.bind(cf_e('resume',conf),function(e){e.stopPropagation();if(scrl.isStopped)
{scrl.isStopped=false;crsl.isPaused=false;crsl.isScrolling=true;scrl.startTime=getTime();sc_startScroll(scrl,conf);}
else
{$cfs.trigger(cf_e('play',conf));}
return true;});$cfs.bind(cf_e('prev',conf)+' '+cf_e('next',conf),function(e,obj,num,clb,que){e.stopPropagation();if(crsl.isStopped||$cfs.is(':hidden'))
{e.stopImmediatePropagation();return debug(conf,'Carousel stopped or hidden: Not scrolling.');}
var minimum=(is_number(opts.items.minimum))?opts.items.minimum:opts.items.visible+1;if(minimum>itms.total)
{e.stopImmediatePropagation();return debug(conf,'Not enough items ('+itms.total+' total, '+minimum+' needed): Not scrolling.');}
var v=[obj,num,clb,que],t=['object','number/string','function','boolean'],a=cf_sortParams(v,t);obj=a[0];num=a[1];clb=a[2];que=a[3];var eType=e.type.slice(conf.events.prefix.length);if(!is_object(obj))
{obj={};}
if(is_function(clb))
{obj.onAfter=clb;}
if(is_boolean(que))
{obj.queue=que;}
obj=$.extend(true,{},opts[eType],obj);if(obj.conditions&&!obj.conditions.call($tt0,eType))
{e.stopImmediatePropagation();return debug(conf,'Callback "conditions" returned false.');}
if(!is_number(num))
{if(opts.items.filter!='*')
{num='visible';}
else
{var arr=[num,obj.items,opts[eType].items];for(var a=0,l=arr.length;a<l;a++)
{if(is_number(arr[a])||arr[a]=='page'||arr[a]=='visible'){num=arr[a];break;}}}
switch(num){case'page':e.stopImmediatePropagation();return $cfs.triggerHandler(cf_e(eType+'Page',conf),[obj,clb]);break;case'visible':if(!opts.items.visibleConf.variable&&opts.items.filter=='*')
{num=opts.items.visible;}
break;}}
if(scrl.isStopped)
{$cfs.trigger(cf_e('resume',conf));$cfs.trigger(cf_e('queue',conf),[eType,[obj,num,clb]]);e.stopImmediatePropagation();return debug(conf,'Carousel resumed scrolling.');}
if(obj.duration>0)
{if(crsl.isScrolling)
{if(obj.queue)
{if(obj.queue=='last')
{queu=[];}
if(obj.queue!='first'||queu.length==0)
{$cfs.trigger(cf_e('queue',conf),[eType,[obj,num,clb]]);}}
e.stopImmediatePropagation();return debug(conf,'Carousel currently scrolling.');}}
tmrs.timePassed=0;$cfs.trigger(cf_e('slide_'+eType,conf),[obj,num]);if(opts.synchronise)
{var s=opts.synchronise,c=[obj,num];for(var j=0,l=s.length;j<l;j++){var d=eType;if(!s[j][2])
{d=(d=='prev')?'next':'prev';}
if(!s[j][1])
{c[0]=s[j][0].triggerHandler('_cfs_triggerEvent',['configuration',d]);}
c[1]=num+s[j][3];s[j][0].trigger('_cfs_triggerEvent',['slide_'+d,c]);}}
return true;});$cfs.bind(cf_e('slide_prev',conf),function(e,sO,nI){e.stopPropagation();var a_itm=$cfs.children();if(!opts.circular)
{if(itms.first==0)
{if(opts.infinite)
{$cfs.trigger(cf_e('next',conf),itms.total-1);}
return e.stopImmediatePropagation();}}
sz_resetMargin(a_itm,opts);if(!is_number(nI))
{if(opts.items.visibleConf.variable)
{nI=gn_getVisibleItemsPrev(a_itm,opts,itms.total-1);}
else if(opts.items.filter!='*')
{var xI=(is_number(sO.items))?sO.items:gn_getVisibleOrg($cfs,opts);nI=gn_getScrollItemsPrevFilter(a_itm,opts,itms.total-1,xI);}
else
{nI=opts.items.visible;}
nI=cf_getAdjust(nI,opts,sO.items,$tt0);}
if(!opts.circular)
{if(itms.total-nI<itms.first)
{nI=itms.total-itms.first;}}
opts.items.visibleConf.old=opts.items.visible;if(opts.items.visibleConf.variable)
{var vI=cf_getItemsAdjust(gn_getVisibleItemsNext(a_itm,opts,itms.total-nI),opts,opts.items.visibleConf.adjust,$tt0);if(opts.items.visible+nI<=vI&&nI<itms.total)
{nI++;vI=cf_getItemsAdjust(gn_getVisibleItemsNext(a_itm,opts,itms.total-nI),opts,opts.items.visibleConf.adjust,$tt0);}
opts.items.visible=vI;}
else if(opts.items.filter!='*')
{var vI=gn_getVisibleItemsNextFilter(a_itm,opts,itms.total-nI);opts.items.visible=cf_getItemsAdjust(vI,opts,opts.items.visibleConf.adjust,$tt0);}
sz_resetMargin(a_itm,opts,true);if(nI==0)
{e.stopImmediatePropagation();return debug(conf,'0 items to scroll: Not scrolling.');}
debug(conf,'Scrolling '+nI+' items backward.');itms.first+=nI;while(itms.first>=itms.total)
{itms.first-=itms.total;}
if(!opts.circular)
{if(itms.first==0&&sO.onEnd)
{sO.onEnd.call($tt0,'prev');}
if(!opts.infinite)
{nv_enableNavi(opts,itms.first,conf);}}
$cfs.children().slice(itms.total-nI,itms.total).prependTo($cfs);if(itms.total<opts.items.visible+nI)
{$cfs.children().slice(0,(opts.items.visible+nI)-itms.total).clone(true).appendTo($cfs);}
var a_itm=$cfs.children(),i_old=gi_getOldItemsPrev(a_itm,opts,nI),i_new=gi_getNewItemsPrev(a_itm,opts),i_cur_l=a_itm.eq(nI-1),i_old_l=i_old.last(),i_new_l=i_new.last();sz_resetMargin(a_itm,opts);var pL=0,pR=0;if(opts.align)
{var p=cf_getAlignPadding(i_new,opts);pL=p[0];pR=p[1];}
var oL=(pL<0)?opts.padding[opts.d[3]]:0;var hiddenitems=false,i_skp=$();if(opts.items.visible<nI)
{i_skp=a_itm.slice(opts.items.visibleConf.old,nI);if(sO.fx=='directscroll')
{var orgW=opts.items[opts.d['width']];hiddenitems=i_skp;i_cur_l=i_new_l;sc_hideHiddenItems(hiddenitems);opts.items[opts.d['width']]='variable';}}
var $cf2=false,i_siz=ms_getTotalSize(a_itm.slice(0,nI),opts,'width'),w_siz=cf_mapWrapperSizes(ms_getSizes(i_new,opts,true),opts,!opts.usePadding),i_siz_vis=0,a_cfs={},a_wsz={},a_cur={},a_old={},a_new={},a_lef={},a_lef_vis={},a_dur=sc_getDuration(sO,opts,nI,i_siz);switch(sO.fx)
{case'cover':case'cover-fade':i_siz_vis=ms_getTotalSize(a_itm.slice(0,opts.items.visible),opts,'width');break;}
if(hiddenitems)
{opts.items[opts.d['width']]=orgW;}
sz_resetMargin(a_itm,opts,true);if(pR>=0)
{sz_resetMargin(i_old_l,opts,opts.padding[opts.d[1]]);}
if(pL>=0)
{sz_resetMargin(i_cur_l,opts,opts.padding[opts.d[3]]);}
if(opts.align)
{opts.padding[opts.d[1]]=pR;opts.padding[opts.d[3]]=pL;}
a_lef[opts.d['left']]=-(i_siz-oL);a_lef_vis[opts.d['left']]=-(i_siz_vis-oL);a_wsz[opts.d['left']]=w_siz[opts.d['width']];var _s_wrapper=function(){},_a_wrapper=function(){},_s_paddingold=function(){},_a_paddingold=function(){},_s_paddingnew=function(){},_a_paddingnew=function(){},_s_paddingcur=function(){},_a_paddingcur=function(){},_onafter=function(){},_moveitems=function(){},_position=function(){};switch(sO.fx)
{case'crossfade':case'cover':case'cover-fade':case'uncover':case'uncover-fade':$cf2=$cfs.clone(true).appendTo($wrp);break;}
switch(sO.fx)
{case'crossfade':case'uncover':case'uncover-fade':$cf2.children().slice(0,nI).remove();$cf2.children().slice(opts.items.visibleConf.old).remove();break;case'cover':case'cover-fade':$cf2.children().slice(opts.items.visible).remove();$cf2.css(a_lef_vis);break;}
$cfs.css(a_lef);scrl=sc_setScroll(a_dur,sO.easing,conf);a_cfs[opts.d['left']]=(opts.usePadding)?opts.padding[opts.d[3]]:0;if(opts[opts.d['width']]=='variable'||opts[opts.d['height']]=='variable')
{_s_wrapper=function(){$wrp.css(w_siz);};_a_wrapper=function(){scrl.anims.push([$wrp,w_siz]);};}
if(opts.usePadding)
{if(i_new_l.not(i_cur_l).length)
{a_cur[opts.d['marginRight']]=i_cur_l.data('_cfs_origCssMargin');if(pL<0)
{i_cur_l.css(a_cur);}
else
{_s_paddingcur=function(){i_cur_l.css(a_cur);};_a_paddingcur=function(){scrl.anims.push([i_cur_l,a_cur]);};}}
switch(sO.fx)
{case'cover':case'cover-fade':$cf2.children().eq(nI-1).css(a_cur);break;}
if(i_new_l.not(i_old_l).length)
{a_old[opts.d['marginRight']]=i_old_l.data('_cfs_origCssMargin');_s_paddingold=function(){i_old_l.css(a_old);};_a_paddingold=function(){scrl.anims.push([i_old_l,a_old]);};}
if(pR>=0)
{a_new[opts.d['marginRight']]=i_new_l.data('_cfs_origCssMargin')+opts.padding[opts.d[1]];_s_paddingnew=function(){i_new_l.css(a_new);};_a_paddingnew=function(){scrl.anims.push([i_new_l,a_new]);};}}
_position=function(){$cfs.css(a_cfs);};var overFill=opts.items.visible+nI-itms.total;_moveitems=function(){if(overFill>0)
{$cfs.children().slice(itms.total).remove();i_old=$($cfs.children().slice(itms.total-(opts.items.visible-overFill)).get().concat($cfs.children().slice(0,overFill).get()));}
sc_showHiddenItems(hiddenitems);if(opts.usePadding)
{var l_itm=$cfs.children().eq(opts.items.visible+nI-1);l_itm.css(opts.d['marginRight'],l_itm.data('_cfs_origCssMargin'));}};var cb_arguments=sc_mapCallbackArguments(i_old,i_skp,i_new,nI,'prev',a_dur,w_siz);_onafter=function(){sc_afterScroll($cfs,$cf2,sO);crsl.isScrolling=false;clbk.onAfter=sc_fireCallbacks($tt0,sO,'onAfter',cb_arguments,clbk);queu=sc_fireQueue($cfs,queu,conf);if(!crsl.isPaused)
{$cfs.trigger(cf_e('play',conf));}};crsl.isScrolling=true;tmrs=sc_clearTimers(tmrs);clbk.onBefore=sc_fireCallbacks($tt0,sO,'onBefore',cb_arguments,clbk);switch(sO.fx)
{case'none':$cfs.css(a_cfs);_s_wrapper();_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();_onafter();break;case'fade':scrl.anims.push([$cfs,{'opacity':0},function(){_s_wrapper();_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();scrl=sc_setScroll(a_dur,sO.easing,conf);scrl.anims.push([$cfs,{'opacity':1},_onafter]);sc_startScroll(scrl,conf);}]);break;case'crossfade':$cfs.css({'opacity':0});scrl.anims.push([$cf2,{'opacity':0}]);scrl.anims.push([$cfs,{'opacity':1},_onafter]);_a_wrapper();_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();break;case'cover':scrl.anims.push([$cf2,a_cfs,function(){_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();_onafter();}]);_a_wrapper();break;case'cover-fade':scrl.anims.push([$cfs,{'opacity':0}]);scrl.anims.push([$cf2,a_cfs,function(){_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();_onafter();}]);_a_wrapper();break;case'uncover':scrl.anims.push([$cf2,a_wsz,_onafter]);_a_wrapper();_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();break;case'uncover-fade':$cfs.css({'opacity':0});scrl.anims.push([$cfs,{'opacity':1}]);scrl.anims.push([$cf2,a_wsz,_onafter]);_a_wrapper();_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();break;default:scrl.anims.push([$cfs,a_cfs,function(){_moveitems();_onafter();}]);_a_wrapper();_a_paddingold();_a_paddingnew();_a_paddingcur();break;}
sc_startScroll(scrl,conf);cf_setCookie(opts.cookie,$cfs,conf);$cfs.trigger(cf_e('updatePageStatus',conf),[false,w_siz]);return true;});$cfs.bind(cf_e('slide_next',conf),function(e,sO,nI){e.stopPropagation();var a_itm=$cfs.children();if(!opts.circular)
{if(itms.first==opts.items.visible)
{if(opts.infinite)
{$cfs.trigger(cf_e('prev',conf),itms.total-1);}
return e.stopImmediatePropagation();}}
sz_resetMargin(a_itm,opts);if(!is_number(nI))
{if(opts.items.filter!='*')
{var xI=(is_number(sO.items))?sO.items:gn_getVisibleOrg($cfs,opts);nI=gn_getScrollItemsNextFilter(a_itm,opts,0,xI);}
else
{nI=opts.items.visible;}
nI=cf_getAdjust(nI,opts,sO.items,$tt0);}
var lastItemNr=(itms.first==0)?itms.total:itms.first;if(!opts.circular)
{if(opts.items.visibleConf.variable)
{var vI=gn_getVisibleItemsNext(a_itm,opts,nI),xI=gn_getVisibleItemsPrev(a_itm,opts,lastItemNr-1);}
else
{var vI=opts.items.visible,xI=opts.items.visible;}
if(nI+vI>lastItemNr)
{nI=lastItemNr-xI;}}
opts.items.visibleConf.old=opts.items.visible;if(opts.items.visibleConf.variable)
{var vI=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(a_itm,opts,nI,lastItemNr),opts,opts.items.visibleConf.adjust,$tt0);while(opts.items.visible-nI>=vI&&nI<itms.total)
{nI++;vI=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(a_itm,opts,nI,lastItemNr),opts,opts.items.visibleConf.adjust,$tt0);}
opts.items.visible=vI;}
else if(opts.items.filter!='*')
{var vI=gn_getVisibleItemsNextFilter(a_itm,opts,nI);opts.items.visible=cf_getItemsAdjust(vI,opts,opts.items.visibleConf.adjust,$tt0);}
sz_resetMargin(a_itm,opts,true);if(nI==0)
{e.stopImmediatePropagation();return debug(conf,'0 items to scroll: Not scrolling.');}
debug(conf,'Scrolling '+nI+' items forward.');itms.first-=nI;while(itms.first<0)
{itms.first+=itms.total;}
if(!opts.circular)
{if(itms.first==opts.items.visible&&sO.onEnd)
{sO.onEnd.call($tt0,'next');}
if(!opts.infinite)
{nv_enableNavi(opts,itms.first,conf);}}
if(itms.total<opts.items.visible+nI)
{$cfs.children().slice(0,(opts.items.visible+nI)-itms.total).clone(true).appendTo($cfs);}
var a_itm=$cfs.children(),i_old=gi_getOldItemsNext(a_itm,opts),i_new=gi_getNewItemsNext(a_itm,opts,nI),i_cur_l=a_itm.eq(nI-1),i_old_l=i_old.last(),i_new_l=i_new.last();sz_resetMargin(a_itm,opts);var pL=0,pR=0;if(opts.align)
{var p=cf_getAlignPadding(i_new,opts);pL=p[0];pR=p[1];}
var hiddenitems=false,i_skp=$();if(opts.items.visibleConf.old<nI)
{i_skp=a_itm.slice(opts.items.visibleConf.old,nI);if(sO.fx=='directscroll')
{var orgW=opts.items[opts.d['width']];hiddenitems=i_skp;i_cur_l=i_old_l;sc_hideHiddenItems(hiddenitems);opts.items[opts.d['width']]='variable';}}
var $cf2=false,i_siz=ms_getTotalSize(a_itm.slice(0,nI),opts,'width'),w_siz=cf_mapWrapperSizes(ms_getSizes(i_new,opts,true),opts,!opts.usePadding),i_siz_vis=0,a_cfs={},a_cfs_vis={},a_cur={},a_old={},a_lef={},a_dur=sc_getDuration(sO,opts,nI,i_siz);switch(sO.fx)
{case'uncover':case'uncover-fade':i_siz_vis=ms_getTotalSize(a_itm.slice(0,opts.items.visibleConf.old),opts,'width');break;}
if(hiddenitems)
{opts.items[opts.d['width']]=orgW;}
if(opts.align)
{if(opts.padding[opts.d[1]]<0)
{opts.padding[opts.d[1]]=0;}}
sz_resetMargin(a_itm,opts,true);sz_resetMargin(i_old_l,opts,opts.padding[opts.d[1]]);if(opts.align)
{opts.padding[opts.d[1]]=pR;opts.padding[opts.d[3]]=pL;}
a_lef[opts.d['left']]=(opts.usePadding)?opts.padding[opts.d[3]]:0;var _s_wrapper=function(){},_a_wrapper=function(){},_s_paddingold=function(){},_a_paddingold=function(){},_s_paddingcur=function(){},_a_paddingcur=function(){},_onafter=function(){},_moveitems=function(){},_position=function(){};switch(sO.fx)
{case'crossfade':case'cover':case'cover-fade':case'uncover':case'uncover-fade':$cf2=$cfs.clone(true).appendTo($wrp);$cf2.children().slice(opts.items.visibleConf.old).remove();break;}
switch(sO.fx)
{case'crossfade':case'cover':case'cover-fade':$cfs.css('zIndex',1);$cf2.css('zIndex',0);break;}
scrl=sc_setScroll(a_dur,sO.easing,conf);a_cfs[opts.d['left']]=-i_siz;a_cfs_vis[opts.d['left']]=-i_siz_vis;if(pL<0)
{a_cfs[opts.d['left']]+=pL;}
if(opts[opts.d['width']]=='variable'||opts[opts.d['height']]=='variable')
{_s_wrapper=function(){$wrp.css(w_siz);};_a_wrapper=function(){scrl.anims.push([$wrp,w_siz]);};}
if(opts.usePadding)
{var i_new_l_m=i_new_l.data('_cfs_origCssMargin');if(pR>=0)
{i_new_l_m+=opts.padding[opts.d[1]];}
i_new_l.css(opts.d['marginRight'],i_new_l_m);if(i_cur_l.not(i_old_l).length)
{a_old[opts.d['marginRight']]=i_old_l.data('_cfs_origCssMargin');}
_s_paddingold=function(){i_old_l.css(a_old);};_a_paddingold=function(){scrl.anims.push([i_old_l,a_old]);};var i_cur_l_m=i_cur_l.data('_cfs_origCssMargin');if(pL>0)
{i_cur_l_m+=opts.padding[opts.d[3]];}
a_cur[opts.d['marginRight']]=i_cur_l_m;_s_paddingcur=function(){i_cur_l.css(a_cur);};_a_paddingcur=function(){scrl.anims.push([i_cur_l,a_cur]);};}
_position=function(){$cfs.css(a_lef);};var overFill=opts.items.visible+nI-itms.total;_moveitems=function(){if(overFill>0)
{$cfs.children().slice(itms.total).remove();}
var l_itm=$cfs.children().slice(0,nI).appendTo($cfs).last();if(overFill>0)
{i_new=gi_getCurrentItems(a_itm,opts);}
sc_showHiddenItems(hiddenitems);if(opts.usePadding)
{if(itms.total<opts.items.visible+nI){var i_cur_l=$cfs.children().eq(opts.items.visible-1);i_cur_l.css(opts.d['marginRight'],i_cur_l.data('_cfs_origCssMargin')+opts.padding[opts.d[1]]);}
l_itm.css(opts.d['marginRight'],l_itm.data('_cfs_origCssMargin'));}};var cb_arguments=sc_mapCallbackArguments(i_old,i_skp,i_new,nI,'next',a_dur,w_siz);_onafter=function(){$cfs.css('zIndex',$cfs.data('_cfs_origCssZindex'));sc_afterScroll($cfs,$cf2,sO);crsl.isScrolling=false;clbk.onAfter=sc_fireCallbacks($tt0,sO,'onAfter',cb_arguments,clbk);queu=sc_fireQueue($cfs,queu,conf);if(!crsl.isPaused)
{$cfs.trigger(cf_e('play',conf));}};crsl.isScrolling=true;tmrs=sc_clearTimers(tmrs);clbk.onBefore=sc_fireCallbacks($tt0,sO,'onBefore',cb_arguments,clbk);switch(sO.fx)
{case'none':$cfs.css(a_cfs);_s_wrapper();_s_paddingold();_s_paddingcur();_position();_moveitems();_onafter();break;case'fade':scrl.anims.push([$cfs,{'opacity':0},function(){_s_wrapper();_s_paddingold();_s_paddingcur();_position();_moveitems();scrl=sc_setScroll(a_dur,sO.easing,conf);scrl.anims.push([$cfs,{'opacity':1},_onafter]);sc_startScroll(scrl,conf);}]);break;case'crossfade':$cfs.css({'opacity':0});scrl.anims.push([$cf2,{'opacity':0}]);scrl.anims.push([$cfs,{'opacity':1},_onafter]);_a_wrapper();_s_paddingold();_s_paddingcur();_position();_moveitems();break;case'cover':$cfs.css(opts.d['left'],$wrp[opts.d['width']]());scrl.anims.push([$cfs,a_lef,_onafter]);_a_wrapper();_s_paddingold();_s_paddingcur();_moveitems();break;case'cover-fade':$cfs.css(opts.d['left'],$wrp[opts.d['width']]());scrl.anims.push([$cf2,{'opacity':0}]);scrl.anims.push([$cfs,a_lef,_onafter]);_a_wrapper();_s_paddingold();_s_paddingcur();_moveitems();break;case'uncover':scrl.anims.push([$cf2,a_cfs_vis,_onafter]);_a_wrapper();_s_paddingold();_s_paddingcur();_position();_moveitems();break;case'uncover-fade':$cfs.css({'opacity':0});scrl.anims.push([$cfs,{'opacity':1}]);scrl.anims.push([$cf2,a_cfs_vis,_onafter]);_a_wrapper();_s_paddingold();_s_paddingcur();_position();_moveitems();break;default:scrl.anims.push([$cfs,a_cfs,function(){_position();_moveitems();_onafter();}]);_a_wrapper();_a_paddingold();_a_paddingcur();break;}
sc_startScroll(scrl,conf);cf_setCookie(opts.cookie,$cfs,conf);$cfs.trigger(cf_e('updatePageStatus',conf),[false,w_siz]);return true;});$cfs.bind(cf_e('slideTo',conf),function(e,num,dev,org,obj,dir,clb){e.stopPropagation();var v=[num,dev,org,obj,dir,clb],t=['string/number/object','number','boolean','object','string','function'],a=cf_sortParams(v,t);obj=a[3];dir=a[4];clb=a[5];num=gn_getItemIndex(a[0],a[1],a[2],itms,$cfs);if(num==0)
{return false;}
if(!is_object(obj))
{obj=false;}
if(dir!='prev'&&dir!='next')
{if(opts.circular)
{dir=(num<=itms.total/2)?'next':'prev';}
else
{dir=(itms.first==0||itms.first>num)?'next':'prev';}}
if(dir=='prev')
{num=itms.total-num;}
$cfs.trigger(cf_e(dir,conf),[obj,num,clb]);return true;});$cfs.bind(cf_e('prevPage',conf),function(e,obj,clb){e.stopPropagation();var cur=$cfs.triggerHandler(cf_e('currentPage',conf));return $cfs.triggerHandler(cf_e('slideToPage',conf),[cur-1,obj,'prev',clb]);});$cfs.bind(cf_e('nextPage',conf),function(e,obj,clb){e.stopPropagation();var cur=$cfs.triggerHandler(cf_e('currentPage',conf));return $cfs.triggerHandler(cf_e('slideToPage',conf),[cur+1,obj,'next',clb]);});$cfs.bind(cf_e('slideToPage',conf),function(e,pag,obj,dir,clb){e.stopPropagation();if(!is_number(pag))
{pag=$cfs.triggerHandler(cf_e('currentPage',conf));}
var ipp=opts.pagination.items||opts.items.visible,max=Math.ceil(itms.total/ipp)-1;if(pag<0)
{pag=max;}
if(pag>max)
{pag=0;}
return $cfs.triggerHandler(cf_e('slideTo',conf),[pag*ipp,0,true,obj,dir,clb]);});$cfs.bind(cf_e('jumpToStart',conf),function(e,s){e.stopPropagation();if(s)
{s=gn_getItemIndex(s,0,true,itms,$cfs);}
else
{s=0;}
s+=itms.first;if(s!=0)
{if(itms.total>0)
{while(s>itms.total)
{s-=itms.total;}}
$cfs.prepend($cfs.children().slice(s,itms.total));}
return true;});$cfs.bind(cf_e('synchronise',conf),function(e,s){e.stopPropagation();if(s)
{s=cf_getSynchArr(s);}
else if(opts.synchronise)
{s=opts.synchronise;}
else
{return debug(conf,'No carousel to synchronise.');}
var n=$cfs.triggerHandler(cf_e('currentPosition',conf)),x=true;for(var j=0,l=s.length;j<l;j++)
{if(!s[j][0].triggerHandler(cf_e('slideTo',conf),[n,s[j][3],true]))
{x=false;}}
return x;});$cfs.bind(cf_e('queue',conf),function(e,dir,opt){e.stopPropagation();if(is_function(dir))
{dir.call($tt0,queu);}
else if(is_array(dir))
{queu=dir;}
else if(!is_undefined(dir))
{queu.push([dir,opt]);}
return queu;});$cfs.bind(cf_e('insertItem',conf),function(e,itm,num,org,dev){e.stopPropagation();var v=[itm,num,org,dev],t=['string/object','string/number/object','boolean','number'],a=cf_sortParams(v,t);itm=a[0];num=a[1];org=a[2];dev=a[3];if(is_object(itm)&&!is_jquery(itm))
{itm=$(itm);}
else if(is_string(itm))
{itm=$(itm);}
if(!is_jquery(itm)||itm.length==0)
{return debug(conf,'Not a valid object.');}
if(is_undefined(num))
{num='end';}
sz_storeMargin(itm,opts);sz_storeOrigCss(itm);var orgNum=num,before='before';if(num=='end')
{if(org)
{if(itms.first==0)
{num=itms.total-1;before='after';}
else
{num=itms.first;itms.first+=itm.length;}
if(num<0)
{num=0;}}
else
{num=itms.total-1;before='after';}}
else
{num=gn_getItemIndex(num,dev,org,itms,$cfs);}
var $cit=$cfs.children().eq(num);if($cit.length)
{$cit[before](itm);}
else
{debug(conf,'Correct insert-position not found! Appending item to the end.');$cfs.append(itm);}
if(orgNum!='end'&&!org)
{if(num<itms.first)
{itms.first+=itm.length;}}
itms.total=$cfs.children().length;if(itms.first>=itms.total)
{itms.first-=itms.total;}
$cfs.trigger(cf_e('updateSizes',conf));$cfs.trigger(cf_e('linkAnchors',conf));return true;});$cfs.bind(cf_e('removeItem',conf),function(e,num,org,dev){e.stopPropagation();var v=[num,org,dev],t=['string/number/object','boolean','number'],a=cf_sortParams(v,t);num=a[0];org=a[1];dev=a[2];var removed=false;if(num instanceof $&&num.length>1)
{$removed=$();num.each(function(i,el){var $rem=$cfs.trigger(cf_e('removeItem',conf),[$(this),org,dev]);if($rem)
{$removed=$removed.add($rem);}});return $removed;}
if(is_undefined(num)||num=='end')
{$removed=$cfs.children().last();}
else
{num=gn_getItemIndex(num,dev,org,itms,$cfs);var $removed=$cfs.children().eq(num);if($removed.length)
{if(num<itms.first)
{itms.first-=$removed.length;}}}
if($removed&&$removed.length)
{$removed.detach();itms.total=$cfs.children().length;$cfs.trigger(cf_e('updateSizes',conf));}
return $removed;});$cfs.bind(cf_e('onBefore',conf)+' '+cf_e('onAfter',conf),function(e,fn){e.stopPropagation();var eType=e.type.slice(conf.events.prefix.length);if(is_array(fn))
{clbk[eType]=fn;}
if(is_function(fn))
{clbk[eType].push(fn);}
return clbk[eType];});$cfs.bind(cf_e('currentPosition',conf),function(e,fn){e.stopPropagation();if(itms.first==0)
{var val=0;}
else
{var val=itms.total-itms.first;}
if(is_function(fn))
{fn.call($tt0,val);}
return val;});$cfs.bind(cf_e('currentPage',conf),function(e,fn){e.stopPropagation();var ipp=opts.pagination.items||opts.items.visible,max=Math.ceil(itms.total/ipp-1),nr;if(itms.first==0)
{nr=0;}
else if(itms.first<itms.total%ipp)
{nr=0;}
else if(itms.first==ipp&&!opts.circular)
{nr=max;}
else
{nr=Math.round((itms.total-itms.first)/ipp);}
if(nr<0)
{nr=0;}
if(nr>max)
{nr=max;}
if(is_function(fn))
{fn.call($tt0,nr);}
return nr;});$cfs.bind(cf_e('currentVisible',conf),function(e,fn){e.stopPropagation();var $i=gi_getCurrentItems($cfs.children(),opts);if(is_function(fn))
{fn.call($tt0,$i);}
return $i;});$cfs.bind(cf_e('slice',conf),function(e,f,l,fn){e.stopPropagation();if(itms.total==0)
{return false;}
var v=[f,l,fn],t=['number','number','function'],a=cf_sortParams(v,t);f=(is_number(a[0]))?a[0]:0;l=(is_number(a[1]))?a[1]:itms.total;fn=a[2];f+=itms.first;l+=itms.first;if(items.total>0)
{while(f>itms.total)
{f-=itms.total;}
while(l>itms.total)
{l-=itms.total;}
while(f<0)
{f+=itms.total;}
while(l<0)
{l+=itms.total;}}
var $iA=$cfs.children(),$i;if(l>f)
{$i=$iA.slice(f,l);}
else
{$i=$($iA.slice(f,itms.total).get().concat($iA.slice(0,l).get()));}
if(is_function(fn))
{fn.call($tt0,$i);}
return $i;});$cfs.bind(cf_e('isPaused',conf)+' '+cf_e('isStopped',conf)+' '+cf_e('isScrolling',conf),function(e,fn){e.stopPropagation();var eType=e.type.slice(conf.events.prefix.length),value=crsl[eType];if(is_function(fn))
{fn.call($tt0,value);}
return value;});$cfs.bind(cf_e('configuration',conf),function(e,a,b,c){e.stopPropagation();var reInit=false;if(is_function(a))
{a.call($tt0,opts);}
else if(is_object(a))
{opts_orig=$.extend(true,{},opts_orig,a);if(b!==false)reInit=true;else opts=$.extend(true,{},opts,a);}
else if(!is_undefined(a))
{if(is_function(b))
{var val=eval('opts.'+a);if(is_undefined(val))
{val='';}
b.call($tt0,val);}
else if(!is_undefined(b))
{if(typeof c!=='boolean')c=true;eval('opts_orig.'+a+' = b');if(c!==false)reInit=true;else eval('opts.'+a+' = b');}
else
{return eval('opts.'+a);}}
if(reInit)
{sz_resetMargin($cfs.children(),opts);FN._init(opts_orig);FN._bind_buttons();var sz=sz_setSizes($cfs,opts);$cfs.trigger(cf_e('updatePageStatus',conf),[true,sz]);}
return opts;});$cfs.bind(cf_e('linkAnchors',conf),function(e,$con,sel){e.stopPropagation();if(is_undefined($con))
{$con=$('body');}
else if(is_string($con))
{$con=$($con);}
if(!is_jquery($con)||$con.length==0)
{return debug(conf,'Not a valid object.');}
if(!is_string(sel))
{sel='a.caroufredsel';}
$con.find(sel).each(function(){var h=this.hash||'';if(h.length>0&&$cfs.children().index($(h))!=-1)
{$(this).unbind('click').click(function(e){e.preventDefault();$cfs.trigger(cf_e('slideTo',conf),h);});}});return true;});$cfs.bind(cf_e('updatePageStatus',conf),function(e,build,sizes){e.stopPropagation();if(!opts.pagination.container)
{return;}
var ipp=opts.pagination.items||opts.items.visible,pgs=Math.ceil(itms.total/ipp);if(build)
{if(opts.pagination.anchorBuilder)
{opts.pagination.container.children().remove();opts.pagination.container.each(function(){for(var a=0;a<pgs;a++)
{var i=$cfs.children().eq(gn_getItemIndex(a*ipp,0,true,itms,$cfs));$(this).append(opts.pagination.anchorBuilder.call(i[0],a+1));}});}
opts.pagination.container.each(function(){$(this).children().unbind(opts.pagination.event).each(function(a){$(this).bind(opts.pagination.event,function(e){e.preventDefault();$cfs.trigger(cf_e('slideTo',conf),[a*ipp,-opts.pagination.deviation,true,opts.pagination]);});});});}
var selected=$cfs.triggerHandler(cf_e('currentPage',conf))+opts.pagination.deviation;if(selected>=pgs)
{selected=0;}
if(selected<0)
{selected=pgs-1;}
opts.pagination.container.each(function(){$(this).children().removeClass(cf_c('selected',conf)).eq(selected).addClass(cf_c('selected',conf));});return true;});$cfs.bind(cf_e('updateSizes',conf),function(e){var vI=opts.items.visible,a_itm=$cfs.children(),avail_primary=ms_getParentSize($wrp,opts,'width');itms.total=a_itm.length;if(crsl.primarySizePercentage)
{opts.maxDimension=avail_primary;opts[opts.d['width']]=ms_getPercentage(avail_primary,crsl.primarySizePercentage);}
else
{opts.maxDimension=ms_getMaxDimension(opts,avail_primary);}
if(opts.responsive)
{opts.items.width=opts.items.sizesConf.width;opts.items.height=opts.items.sizesConf.height;opts=in_getResponsiveValues(opts,a_itm,avail_primary);vI=opts.items.visible;sz_setResponsiveSizes(opts,a_itm);}
else if(opts.items.visibleConf.variable)
{vI=gn_getVisibleItemsNext(a_itm,opts,0);}
else if(opts.items.filter!='*')
{vI=gn_getVisibleItemsNextFilter(a_itm,opts,0);}
if(!opts.circular&&itms.first!=0&&vI>itms.first){if(opts.items.visibleConf.variable)
{var nI=gn_getVisibleItemsPrev(a_itm,opts,itms.first)-itms.first;}
else if(opts.items.filter!='*')
{var nI=gn_getVisibleItemsPrevFilter(a_itm,opts,itms.first)-itms.first;}
else
{var nI=opts.items.visible-itms.first;}
debug(conf,'Preventing non-circular: sliding '+nI+' items backward.');$cfs.trigger(cf_e('prev',conf),nI);}
opts.items.visible=cf_getItemsAdjust(vI,opts,opts.items.visibleConf.adjust,$tt0);opts.items.visibleConf.old=opts.items.visible;opts=in_getAlignPadding(opts,a_itm);var sz=sz_setSizes($cfs,opts);$cfs.trigger(cf_e('updatePageStatus',conf),[true,sz]);nv_showNavi(opts,itms.total,conf);nv_enableNavi(opts,itms.first,conf);return sz;});$cfs.bind(cf_e('destroy',conf),function(e,orgOrder){e.stopPropagation();tmrs=sc_clearTimers(tmrs);$cfs.data('_cfs_isCarousel',false);$cfs.trigger(cf_e('finish',conf));if(orgOrder)
{$cfs.trigger(cf_e('jumpToStart',conf));}
sz_restoreOrigCss($cfs.children());sz_restoreOrigCss($cfs);FN._unbind_events();FN._unbind_buttons();if(conf.wrapper=='parent')
{sz_restoreOrigCss($wrp);}
else
{$wrp.replaceWith($cfs);}
return true;});$cfs.bind(cf_e('debug',conf),function(e){debug(conf,'Carousel width: '+opts.width);debug(conf,'Carousel height: '+opts.height);debug(conf,'Item widths: '+opts.items.width);debug(conf,'Item heights: '+opts.items.height);debug(conf,'Number of items visible: '+opts.items.visible);if(opts.auto.play)
{debug(conf,'Number of items scrolled automatically: '+opts.auto.items);}
if(opts.prev.button)
{debug(conf,'Number of items scrolled backward: '+opts.prev.items);}
if(opts.next.button)
{debug(conf,'Number of items scrolled forward: '+opts.next.items);}
return conf.debug;});$cfs.bind('_cfs_triggerEvent',function(e,n,o){e.stopPropagation();return $cfs.triggerHandler(cf_e(n,conf),o);});};FN._unbind_events=function(){$cfs.unbind(cf_e('',conf));$cfs.unbind(cf_e('',conf,false));$cfs.unbind('_cfs_triggerEvent');};FN._bind_buttons=function(){FN._unbind_buttons();nv_showNavi(opts,itms.total,conf);nv_enableNavi(opts,itms.first,conf);if(opts.auto.pauseOnHover)
{var pC=bt_pauseOnHoverConfig(opts.auto.pauseOnHover);$wrp.bind(cf_e('mouseenter',conf,false),function(){$cfs.trigger(cf_e('pause',conf),pC);}).bind(cf_e('mouseleave',conf,false),function(){$cfs.trigger(cf_e('resume',conf));});}
if(opts.auto.button)
{opts.auto.button.bind(cf_e(opts.auto.event,conf,false),function(e){e.preventDefault();var ev=false,pC=null;if(crsl.isPaused)
{ev='play';}
else if(opts.auto.pauseOnEvent)
{ev='pause';pC=bt_pauseOnHoverConfig(opts.auto.pauseOnEvent);}
if(ev)
{$cfs.trigger(cf_e(ev,conf),pC);}});}
if(opts.prev.button)
{opts.prev.button.bind(cf_e(opts.prev.event,conf,false),function(e){e.preventDefault();$cfs.trigger(cf_e('prev',conf));});if(opts.prev.pauseOnHover)
{var pC=bt_pauseOnHoverConfig(opts.prev.pauseOnHover);opts.prev.button.bind(cf_e('mouseenter',conf,false),function(){$cfs.trigger(cf_e('pause',conf),pC);}).bind(cf_e('mouseleave',conf,false),function(){$cfs.trigger(cf_e('resume',conf));});}}
if(opts.next.button)
{opts.next.button.bind(cf_e(opts.next.event,conf,false),function(e){e.preventDefault();$cfs.trigger(cf_e('next',conf));});if(opts.next.pauseOnHover)
{var pC=bt_pauseOnHoverConfig(opts.next.pauseOnHover);opts.next.button.bind(cf_e('mouseenter',conf,false),function(){$cfs.trigger(cf_e('pause',conf),pC);}).bind(cf_e('mouseleave',conf,false),function(){$cfs.trigger(cf_e('resume',conf));});}}
if(opts.pagination.container)
{if(opts.pagination.pauseOnHover)
{var pC=bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);opts.pagination.container.bind(cf_e('mouseenter',conf,false),function(){$cfs.trigger(cf_e('pause',conf),pC);}).bind(cf_e('mouseleave',conf,false),function(){$cfs.trigger(cf_e('resume',conf));});}}
if(opts.prev.key||opts.next.key)
{$(document).bind(cf_e('keyup',conf,false,true,true),function(e){var k=e.keyCode;if(k==opts.next.key)
{e.preventDefault();$cfs.trigger(cf_e('next',conf));}
if(k==opts.prev.key)
{e.preventDefault();$cfs.trigger(cf_e('prev',conf));}});}
if(opts.pagination.keys)
{$(document).bind(cf_e('keyup',conf,false,true,true),function(e){var k=e.keyCode;if(k>=49&&k<58)
{k=(k-49)*opts.items.visible;if(k<=itms.total)
{e.preventDefault();$cfs.trigger(cf_e('slideTo',conf),[k,0,true,opts.pagination]);}}});}
if($.fn.swipe)
{var isTouch='ontouchstart'in window;if((isTouch&&opts.swipe.onTouch)||(!isTouch&&opts.swipe.onMouse))
{var scP=$.extend(true,{},opts.prev,opts.swipe),scN=$.extend(true,{},opts.next,opts.swipe),swP=function(){$cfs.trigger(cf_e('prev',conf),[scP])},swN=function(){$cfs.trigger(cf_e('next',conf),[scN])};switch(opts.direction)
{case'up':case'down':opts.swipe.options.swipeUp=swN;opts.swipe.options.swipeDown=swP;break;default:opts.swipe.options.swipeLeft=swN;opts.swipe.options.swipeRight=swP;}
if(crsl.swipe)
{$cfs.swipe('destroy');}
$wrp.swipe(opts.swipe.options);$wrp.css('cursor','move');crsl.swipe=true;}}
if($.fn.mousewheel)
{if(opts.mousewheel)
{var mcP=$.extend(true,{},opts.prev,opts.mousewheel),mcN=$.extend(true,{},opts.next,opts.mousewheel);if(crsl.mousewheel)
{$wrp.unbind(cf_e('mousewheel',conf,false));}
$wrp.bind(cf_e('mousewheel',conf,false),function(e,delta){e.preventDefault();if(delta>0)
{$cfs.trigger(cf_e('prev',conf),[mcP]);}
else
{$cfs.trigger(cf_e('next',conf),[mcN]);}});crsl.mousewheel=true;}}
if(opts.auto.play)
{$cfs.trigger(cf_e('play',conf),opts.auto.delay);}
if(crsl.upDateOnWindowResize)
{var resizeFn=function(e){$cfs.trigger(cf_e('finish',conf));if(opts.auto.pauseOnResize&&!crsl.isPaused)
{$cfs.trigger(cf_e('play',conf));}
sz_resetMargin($cfs.children(),opts);$cfs.trigger(cf_e('updateSizes',conf));};var $w=$(window),onResize=null;if($.debounce&&conf.onWindowResize=='debounce')
{onResize=$.debounce(200,resizeFn);}
else if($.throttle&&conf.onWindowResize=='throttle')
{onResize=$.throttle(300,resizeFn);}
else
{var _windowWidth=0,_windowHeight=0;onResize=function(){var nw=$w.width(),nh=$w.height();if(nw!=_windowWidth||nh!=_windowHeight)
{resizeFn();_windowWidth=nw;_windowHeight=nh;}};}
$w.bind(cf_e('resize',conf,false,true,true),onResize);}};FN._unbind_buttons=function(){var ns1=cf_e('',conf),ns2=cf_e('',conf,false);ns3=cf_e('',conf,false,true,true);$(document).unbind(ns3);$(window).unbind(ns3);$wrp.unbind(ns2);if(opts.auto.button)
{opts.auto.button.unbind(ns2);}
if(opts.prev.button)
{opts.prev.button.unbind(ns2);}
if(opts.next.button)
{opts.next.button.unbind(ns2);}
if(opts.pagination.container)
{opts.pagination.container.unbind(ns2);if(opts.pagination.anchorBuilder)
{opts.pagination.container.children().remove();}}
if(crsl.swipe)
{$cfs.swipe('destroy');$wrp.css('cursor','default');crsl.swipe=false;}
if(crsl.mousewheel)
{crsl.mousewheel=false;}
nv_showNavi(opts,'hide',conf);nv_enableNavi(opts,'removeClass',conf);};if(is_boolean(configs))
{configs={'debug':configs};}
var crsl={'direction':'next','isPaused':true,'isScrolling':false,'isStopped':false,'mousewheel':false,'swipe':false},itms={'total':$cfs.children().length,'first':0},tmrs={'auto':null,'progress':null,'startTime':getTime(),'timePassed':0},scrl={'isStopped':false,'duration':0,'startTime':0,'easing':'','anims':[]},clbk={'onBefore':[],'onAfter':[]},queu=[],conf=$.extend(true,{},$.fn.carouFredSel.configs,configs),opts={},opts_orig=$.extend(true,{},options),$wrp=(conf.wrapper=='parent')?$cfs.parent():$cfs.wrap('<'+conf.wrapper.element+' class="'+conf.wrapper.classname+'" />').parent();conf.selector=$cfs.selector;conf.serialNumber=$.fn.carouFredSel.serialNumber++;conf.transition=(conf.transition&&$.fn.transition)?'transition':'animate';FN._init(opts_orig,true,starting_position);FN._build();FN._bind_events();FN._bind_buttons();if(is_array(opts.items.start))
{var start_arr=opts.items.start;}
else
{var start_arr=[];if(opts.items.start!=0)
{start_arr.push(opts.items.start);}}
if(opts.cookie)
{start_arr.unshift(parseInt(cf_getCookie(opts.cookie),10));}
if(start_arr.length>0)
{for(var a=0,l=start_arr.length;a<l;a++)
{var s=start_arr[a];if(s==0)
{continue;}
if(s===true)
{s=window.location.hash;if(s.length<1)
{continue;}}
else if(s==='random')
{s=Math.floor(Math.random()*itms.total);}
if($cfs.triggerHandler(cf_e('slideTo',conf),[s,0,true,{fx:'none'}]))
{break;}}}
var siz=sz_setSizes($cfs,opts),itm=gi_getCurrentItems($cfs.children(),opts);if(opts.onCreate)
{opts.onCreate.call($tt0,{'width':siz.width,'height':siz.height,'items':itm});}
$cfs.trigger(cf_e('updatePageStatus',conf),[true,siz]);$cfs.trigger(cf_e('linkAnchors',conf));if(conf.debug)
{$cfs.trigger(cf_e('debug',conf));}
return $cfs;};$.fn.carouFredSel.serialNumber=1;$.fn.carouFredSel.defaults={'synchronise':false,'infinite':true,'circular':true,'responsive':false,'direction':'left','items':{'start':0},'scroll':{'easing':'swing','duration':500,'pauseOnHover':false,'event':'click','queue':false}};$.fn.carouFredSel.configs={'debug':false,'transition':false,'onWindowResize':'throttle','events':{'prefix':'','namespace':'cfs'},'wrapper':{'element':'div','classname':'caroufredsel_wrapper'},'classnames':{}};$.fn.carouFredSel.pageAnchorBuilder=function(nr){return'<a href="#"><span>'+nr+'</span></a>';};$.fn.carouFredSel.progressbarUpdater=function(perc){$(this).css('width',perc+'%');};$.fn.carouFredSel.cookie={get:function(n){n+='=';var ca=document.cookie.split(';');for(var a=0,l=ca.length;a<l;a++)
{var c=ca[a];while(c.charAt(0)==' ')
{c=c.slice(1);}
if(c.indexOf(n)==0)
{return c.slice(n.length);}}
return 0;},set:function(n,v,d){var e="";if(d)
{var date=new Date();date.setTime(date.getTime()+(d*24*60*60*1000));e="; expires="+date.toGMTString();}
document.cookie=n+'='+v+e+'; path=/';},remove:function(n){$.fn.carouFredSel.cookie.set(n,"",-1);}};function sc_setScroll(d,e,c){if(c.transition=='transition')
{if(e=='swing')
{e='ease';}}
return{anims:[],duration:d,orgDuration:d,easing:e,startTime:getTime()};}
function sc_startScroll(s,c){for(var a=0,l=s.anims.length;a<l;a++)
{var b=s.anims[a];if(!b)
{continue;}
b[0][c.transition](b[1],s.duration,s.easing,b[2]);}}
function sc_stopScroll(s,finish){if(!is_boolean(finish))
{finish=true;}
if(is_object(s.pre))
{sc_stopScroll(s.pre,finish);}
for(var a=0,l=s.anims.length;a<l;a++)
{var b=s.anims[a];b[0].stop(true);if(finish)
{b[0].css(b[1]);if(is_function(b[2]))
{b[2]();}}}
if(is_object(s.post))
{sc_stopScroll(s.post,finish);}}
function sc_afterScroll($c,$c2,o){if($c2)
{$c2.remove();}
switch(o.fx){case'fade':case'crossfade':case'cover-fade':case'uncover-fade':$c.css('opacity',1);$c.css('filter','');break;}}
function sc_fireCallbacks($t,o,b,a,c){if(o[b])
{o[b].call($t,a);}
if(c[b].length)
{for(var i=0,l=c[b].length;i<l;i++)
{c[b][i].call($t,a);}}
return[];}
function sc_fireQueue($c,q,c){if(q.length)
{$c.trigger(cf_e(q[0][0],c),q[0][1]);q.shift();}
return q;}
function sc_hideHiddenItems(hiddenitems){hiddenitems.each(function(){var hi=$(this);hi.data('_cfs_isHidden',hi.is(':hidden')).hide();});}
function sc_showHiddenItems(hiddenitems){if(hiddenitems)
{hiddenitems.each(function(){var hi=$(this);if(!hi.data('_cfs_isHidden'))
{hi.show();}});}}
function sc_clearTimers(t){if(t.auto)
{clearTimeout(t.auto);}
if(t.progress)
{clearInterval(t.progress);}
return t;}
function sc_mapCallbackArguments(i_old,i_skp,i_new,s_itm,s_dir,s_dur,w_siz){return{'width':w_siz.width,'height':w_siz.height,'items':{'old':i_old,'skipped':i_skp,'visible':i_new},'scroll':{'items':s_itm,'direction':s_dir,'duration':s_dur}};}
function sc_getDuration(sO,o,nI,siz){var dur=sO.duration;if(sO.fx=='none')
{return 0;}
if(dur=='auto')
{dur=o.scroll.duration/o.scroll.items*nI;}
else if(dur<10)
{dur=siz/dur;}
if(dur<1)
{return 0;}
if(sO.fx=='fade')
{dur=dur/2;}
return Math.round(dur);}
function nv_showNavi(o,t,c){var minimum=(is_number(o.items.minimum))?o.items.minimum:o.items.visible+1;if(t=='show'||t=='hide')
{var f=t;}
else if(minimum>t)
{debug(c,'Not enough items ('+t+' total, '+minimum+' needed): Hiding navigation.');var f='hide';}
else
{var f='show';}
var s=(f=='show')?'removeClass':'addClass',h=cf_c('hidden',c);if(o.auto.button)
{o.auto.button[f]()[s](h);}
if(o.prev.button)
{o.prev.button[f]()[s](h);}
if(o.next.button)
{o.next.button[f]()[s](h);}
if(o.pagination.container)
{o.pagination.container[f]()[s](h);}}
function nv_enableNavi(o,f,c){if(o.circular||o.infinite)return;var fx=(f=='removeClass'||f=='addClass')?f:false,di=cf_c('disabled',c);if(o.auto.button&&fx)
{o.auto.button[fx](di);}
if(o.prev.button)
{var fn=fx||(f==0)?'addClass':'removeClass';o.prev.button[fn](di);}
if(o.next.button)
{var fn=fx||(f==o.items.visible)?'addClass':'removeClass';o.next.button[fn](di);}}
function go_getObject($tt,obj){if(is_function(obj))
{obj=obj.call($tt);}
else if(is_undefined(obj))
{obj={};}
return obj;}
function go_getItemsObject($tt,obj){obj=go_getObject($tt,obj);if(is_number(obj))
{obj={'visible':obj};}
else if(obj=='variable')
{obj={'visible':obj,'width':obj,'height':obj};}
else if(!is_object(obj))
{obj={};}
return obj;}
function go_getScrollObject($tt,obj){obj=go_getObject($tt,obj);if(is_number(obj))
{if(obj<=50)
{obj={'items':obj};}
else
{obj={'duration':obj};}}
else if(is_string(obj))
{obj={'easing':obj};}
else if(!is_object(obj))
{obj={};}
return obj;}
function go_getNaviObject($tt,obj){obj=go_getObject($tt,obj);if(is_string(obj))
{var temp=cf_getKeyCode(obj);if(temp==-1)
{obj=$(obj);}
else
{obj=temp;}}
return obj;}
function go_getAutoObject($tt,obj){obj=go_getNaviObject($tt,obj);if(is_jquery(obj))
{obj={'button':obj};}
else if(is_boolean(obj))
{obj={'play':obj};}
else if(is_number(obj))
{obj={'timeoutDuration':obj};}
if(obj.progress)
{if(is_string(obj.progress)||is_jquery(obj.progress))
{obj.progress={'bar':obj.progress};}}
return obj;}
function go_complementAutoObject($tt,obj){if(is_function(obj.button))
{obj.button=obj.button.call($tt);}
if(is_string(obj.button))
{obj.button=$(obj.button);}
if(!is_boolean(obj.play))
{obj.play=true;}
if(!is_number(obj.delay))
{obj.delay=0;}
if(is_undefined(obj.pauseOnEvent))
{obj.pauseOnEvent=true;}
if(!is_boolean(obj.pauseOnResize))
{obj.pauseOnResize=true;}
if(!is_number(obj.timeoutDuration))
{obj.timeoutDuration=(obj.duration<10)?2500:obj.duration*5;}
if(obj.progress)
{if(is_function(obj.progress.bar))
{obj.progress.bar=obj.progress.bar.call($tt);}
if(is_string(obj.progress.bar))
{obj.progress.bar=$(obj.progress.bar);}
if(obj.progress.bar)
{if(!is_function(obj.progress.updater))
{obj.progress.updater=$.fn.carouFredSel.progressbarUpdater;}
if(!is_number(obj.progress.interval))
{obj.progress.interval=50;}}
else
{obj.progress=false;}}
return obj;}
function go_getPrevNextObject($tt,obj){obj=go_getNaviObject($tt,obj);if(is_jquery(obj))
{obj={'button':obj};}
else if(is_number(obj))
{obj={'key':obj};}
return obj;}
function go_complementPrevNextObject($tt,obj){if(is_function(obj.button))
{obj.button=obj.button.call($tt);}
if(is_string(obj.button))
{obj.button=$(obj.button);}
if(is_string(obj.key))
{obj.key=cf_getKeyCode(obj.key);}
return obj;}
function go_getPaginationObject($tt,obj){obj=go_getNaviObject($tt,obj);if(is_jquery(obj))
{obj={'container':obj};}
else if(is_boolean(obj))
{obj={'keys':obj};}
return obj;}
function go_complementPaginationObject($tt,obj){if(is_function(obj.container))
{obj.container=obj.container.call($tt);}
if(is_string(obj.container))
{obj.container=$(obj.container);}
if(!is_number(obj.items))
{obj.items=false;}
if(!is_boolean(obj.keys))
{obj.keys=false;}
if(!is_function(obj.anchorBuilder)&&!is_false(obj.anchorBuilder))
{obj.anchorBuilder=$.fn.carouFredSel.pageAnchorBuilder;}
if(!is_number(obj.deviation))
{obj.deviation=0;}
return obj;}
function go_getSwipeObject($tt,obj){if(is_function(obj))
{obj=obj.call($tt);}
if(is_undefined(obj))
{obj={'onTouch':false};}
if(is_true(obj))
{obj={'onTouch':obj};}
else if(is_number(obj))
{obj={'items':obj};}
return obj;}
function go_complementSwipeObject($tt,obj){if(!is_boolean(obj.onTouch))
{obj.onTouch=true;}
if(!is_boolean(obj.onMouse))
{obj.onMouse=false;}
if(!is_object(obj.options))
{obj.options={};}
if(!is_boolean(obj.options.triggerOnTouchEnd))
{obj.options.triggerOnTouchEnd=false;}
return obj;}
function go_getMousewheelObject($tt,obj){if(is_function(obj))
{obj=obj.call($tt);}
if(is_true(obj))
{obj={};}
else if(is_number(obj))
{obj={'items':obj};}
else if(is_undefined(obj))
{obj=false;}
return obj;}
function go_complementMousewheelObject($tt,obj){return obj;}
function gn_getItemIndex(num,dev,org,items,$cfs){if(is_string(num))
{num=$(num,$cfs);}
if(is_object(num))
{num=$(num,$cfs);}
if(is_jquery(num))
{num=$cfs.children().index(num);if(!is_boolean(org))
{org=false;}}
else
{if(!is_boolean(org))
{org=true;}}
if(!is_number(num))
{num=0;}
if(!is_number(dev))
{dev=0;}
if(org)
{num+=items.first;}
num+=dev;if(items.total>0)
{while(num>=items.total)
{num-=items.total;}
while(num<0)
{num+=items.total;}}
return num;}
function gn_getVisibleItemsPrev(i,o,s){var t=0,x=0;for(var a=s;a>=0;a--)
{var j=i.eq(a);t+=(j.is(':visible'))?j[o.d['outerWidth']](true):0;if(t>o.maxDimension)
{return x;}
if(a==0)
{a=i.length;}
x++;}}
function gn_getVisibleItemsPrevFilter(i,o,s){return gn_getItemsPrevFilter(i,o.items.filter,o.items.visibleConf.org,s);}
function gn_getScrollItemsPrevFilter(i,o,s,m){return gn_getItemsPrevFilter(i,o.items.filter,m,s);}
function gn_getItemsPrevFilter(i,f,m,s){var t=0,x=0;for(var a=s,l=i.length;a>=0;a--)
{x++;if(x==l)
{return x;}
var j=i.eq(a);if(j.is(f))
{t++;if(t==m)
{return x;}}
if(a==0)
{a=l;}}}
function gn_getVisibleOrg($c,o){return o.items.visibleConf.org||$c.children().slice(0,o.items.visible).filter(o.items.filter).length;}
function gn_getVisibleItemsNext(i,o,s){var t=0,x=0;for(var a=s,l=i.length-1;a<=l;a++)
{var j=i.eq(a);t+=(j.is(':visible'))?j[o.d['outerWidth']](true):0;if(t>o.maxDimension)
{return x;}
x++;if(x==l+1)
{return x;}
if(a==l)
{a=-1;}}}
function gn_getVisibleItemsNextTestCircular(i,o,s,l){var v=gn_getVisibleItemsNext(i,o,s);if(!o.circular)
{if(s+v>l)
{v=l-s;}}
return v;}
function gn_getVisibleItemsNextFilter(i,o,s){return gn_getItemsNextFilter(i,o.items.filter,o.items.visibleConf.org,s,o.circular);}
function gn_getScrollItemsNextFilter(i,o,s,m){return gn_getItemsNextFilter(i,o.items.filter,m+1,s,o.circular)-1;}
function gn_getItemsNextFilter(i,f,m,s,c){var t=0,x=0;for(var a=s,l=i.length-1;a<=l;a++)
{x++;if(x>=l)
{return x;}
var j=i.eq(a);if(j.is(f))
{t++;if(t==m)
{return x;}}
if(a==l)
{a=-1;}}}
function gi_getCurrentItems(i,o){return i.slice(0,o.items.visible);}
function gi_getOldItemsPrev(i,o,n){return i.slice(n,o.items.visibleConf.old+n);}
function gi_getNewItemsPrev(i,o){return i.slice(0,o.items.visible);}
function gi_getOldItemsNext(i,o){return i.slice(0,o.items.visibleConf.old);}
function gi_getNewItemsNext(i,o,n){return i.slice(n,o.items.visible+n);}
function sz_storeMargin(i,o,d){if(o.usePadding)
{if(!is_string(d))
{d='_cfs_origCssMargin';}
i.each(function(){var j=$(this),m=parseInt(j.css(o.d['marginRight']),10);if(!is_number(m))
{m=0;}
j.data(d,m);});}}
function sz_resetMargin(i,o,m){if(o.usePadding)
{var x=(is_boolean(m))?m:false;if(!is_number(m))
{m=0;}
sz_storeMargin(i,o,'_cfs_tempCssMargin');i.each(function(){var j=$(this);j.css(o.d['marginRight'],((x)?j.data('_cfs_tempCssMargin'):m+j.data('_cfs_origCssMargin')));});}}
function sz_storeOrigCss(i){i.each(function(){var j=$(this);j.data('_cfs_origCss',j.attr('style')||'');});}
function sz_restoreOrigCss(i){i.each(function(){var j=$(this);j.attr('style',j.data('_cfs_origCss')||'');});}
function sz_setResponsiveSizes(o,all){var visb=o.items.visible,newS=o.items[o.d['width']],seco=o[o.d['height']],secp=is_percentage(seco);all.each(function(){var $t=$(this),nw=newS-ms_getPaddingBorderMargin($t,o,'Width');$t[o.d['width']](nw);if(secp)
{$t[o.d['height']](ms_getPercentage(nw,seco));}});}
function sz_setSizes($c,o){var $w=$c.parent(),$i=$c.children(),$v=gi_getCurrentItems($i,o),sz=cf_mapWrapperSizes(ms_getSizes($v,o,true),o,false);$w.css(sz);if(o.usePadding)
{var p=o.padding,r=p[o.d[1]];if(o.align&&r<0)
{r=0;}
var $l=$v.last();$l.css(o.d['marginRight'],$l.data('_cfs_origCssMargin')+r);$c.css(o.d['top'],p[o.d[0]]);$c.css(o.d['left'],p[o.d[3]]);}
$c.css(o.d['width'],sz[o.d['width']]+(ms_getTotalSize($i,o,'width')*2));$c.css(o.d['height'],ms_getLargestSize($i,o,'height'));return sz;}
function ms_getSizes(i,o,wrapper){return[ms_getTotalSize(i,o,'width',wrapper),ms_getLargestSize(i,o,'height',wrapper)];}
function ms_getLargestSize(i,o,dim,wrapper){if(!is_boolean(wrapper))
{wrapper=false;}
if(is_number(o[o.d[dim]])&&wrapper)
{return o[o.d[dim]];}
if(is_number(o.items[o.d[dim]]))
{return o.items[o.d[dim]];}
dim=(dim.toLowerCase().indexOf('width')>-1)?'outerWidth':'outerHeight';return ms_getTrueLargestSize(i,o,dim);}
function ms_getTrueLargestSize(i,o,dim){var s=0;for(var a=0,l=i.length;a<l;a++)
{var j=i.eq(a);var m=(j.is(':visible'))?j[o.d[dim]](true):0;if(s<m)
{s=m;}}
return s;}
function ms_getTotalSize(i,o,dim,wrapper){if(!is_boolean(wrapper))
{wrapper=false;}
if(is_number(o[o.d[dim]])&&wrapper)
{return o[o.d[dim]];}
if(is_number(o.items[o.d[dim]]))
{return o.items[o.d[dim]]*i.length;}
var d=(dim.toLowerCase().indexOf('width')>-1)?'outerWidth':'outerHeight',s=0;for(var a=0,l=i.length;a<l;a++)
{var j=i.eq(a);s+=(j.is(':visible'))?j[o.d[d]](true):0;}
return s;}
function ms_getParentSize($w,o,d){var isVisible=$w.is(':visible');if(isVisible)
{$w.hide();}
var s=$w.parent()[o.d[d]]();if(isVisible)
{$w.show();}
return s;}
function ms_getMaxDimension(o,a){return(is_number(o[o.d['width']]))?o[o.d['width']]:a;}
function ms_hasVariableSizes(i,o,dim){var s=false,v=false;for(var a=0,l=i.length;a<l;a++)
{var j=i.eq(a);var c=(j.is(':visible'))?j[o.d[dim]](true):0;if(s===false)
{s=c;}
else if(s!=c)
{v=true;}
if(s==0)
{v=true;}}
return v;}
function ms_getPaddingBorderMargin(i,o,d){return i[o.d['outer'+d]](true)-i[o.d[d.toLowerCase()]]();}
function ms_getPercentage(s,o){if(is_percentage(o))
{o=parseInt(o.slice(0,-1),10);if(!is_number(o))
{return s;}
s*=o/100;}
return s;}
function cf_e(n,c,pf,ns,rd){if(!is_boolean(pf))
{pf=true;}
if(!is_boolean(ns))
{ns=true;}
if(!is_boolean(rd))
{rd=false;}
if(pf)
{n=c.events.prefix+n;}
if(ns)
{n=n+'.'+c.events.namespace;}
if(ns&&rd)
{n+=c.serialNumber;}
return n;}
function cf_c(n,c){return(is_string(c.classnames[n]))?c.classnames[n]:n;}
function cf_mapWrapperSizes(ws,o,p){if(!is_boolean(p))
{p=true;}
var pad=(o.usePadding&&p)?o.padding:[0,0,0,0];var wra={};wra[o.d['width']]=ws[0]+pad[1]+pad[3];wra[o.d['height']]=ws[1]+pad[0]+pad[2];return wra;}
function cf_sortParams(vals,typs){var arr=[];for(var a=0,l1=vals.length;a<l1;a++)
{for(var b=0,l2=typs.length;b<l2;b++)
{if(typs[b].indexOf(typeof vals[a])>-1&&is_undefined(arr[b]))
{arr[b]=vals[a];break;}}}
return arr;}
function cf_getPadding(p){if(is_undefined(p))
{return[0,0,0,0];}
if(is_number(p))
{return[p,p,p,p];}
if(is_string(p))
{p=p.split('px').join('').split('em').join('').split(' ');}
if(!is_array(p))
{return[0,0,0,0];}
for(var i=0;i<4;i++)
{p[i]=parseInt(p[i],10);}
switch(p.length)
{case 0:return[0,0,0,0];case 1:return[p[0],p[0],p[0],p[0]];case 2:return[p[0],p[1],p[0],p[1]];case 3:return[p[0],p[1],p[2],p[1]];default:return[p[0],p[1],p[2],p[3]];}}
function cf_getAlignPadding(itm,o){var x=(is_number(o[o.d['width']]))?Math.ceil(o[o.d['width']]-ms_getTotalSize(itm,o,'width')):0;switch(o.align)
{case'left':return[0,x];case'right':return[x,0];case'center':default:return[Math.ceil(x/2),Math.floor(x/2)];}}
function cf_getDimensions(o){var dm=[['width','innerWidth','outerWidth','height','innerHeight','outerHeight','left','top','marginRight',0,1,2,3],['height','innerHeight','outerHeight','width','innerWidth','outerWidth','top','left','marginBottom',3,2,1,0]];var dl=dm[0].length,dx=(o.direction=='right'||o.direction=='left')?0:1;var dimensions={};for(var d=0;d<dl;d++)
{dimensions[dm[0][d]]=dm[dx][d];}
return dimensions;}
function cf_getAdjust(x,o,a,$t){var v=x;if(is_function(a))
{v=a.call($t,v);}
else if(is_string(a))
{var p=a.split('+'),m=a.split('-');if(m.length>p.length)
{var neg=true,sta=m[0],adj=m[1];}
else
{var neg=false,sta=p[0],adj=p[1];}
switch(sta)
{case'even':v=(x%2==1)?x-1:x;break;case'odd':v=(x%2==0)?x-1:x;break;default:v=x;break;}
adj=parseInt(adj,10);if(is_number(adj))
{if(neg)
{adj=-adj;}
v+=adj;}}
if(!is_number(v)||v<1)
{v=1;}
return v;}
function cf_getItemsAdjust(x,o,a,$t){return cf_getItemAdjustMinMax(cf_getAdjust(x,o,a,$t),o.items.visibleConf);}
function cf_getItemAdjustMinMax(v,i){if(is_number(i.min)&&v<i.min)
{v=i.min;}
if(is_number(i.max)&&v>i.max)
{v=i.max;}
if(v<1)
{v=1;}
return v;}
function cf_getSynchArr(s){if(!is_array(s))
{s=[[s]];}
if(!is_array(s[0]))
{s=[s];}
for(var j=0,l=s.length;j<l;j++)
{if(is_string(s[j][0]))
{s[j][0]=$(s[j][0]);}
if(!is_boolean(s[j][1]))
{s[j][1]=true;}
if(!is_boolean(s[j][2]))
{s[j][2]=true;}
if(!is_number(s[j][3]))
{s[j][3]=0;}}
return s;}
function cf_getKeyCode(k){if(k=='right')
{return 39;}
if(k=='left')
{return 37;}
if(k=='up')
{return 38;}
if(k=='down')
{return 40;}
return-1;}
function cf_setCookie(n,$c,c){if(n)
{var v=$c.triggerHandler(cf_e('currentPosition',c));$.fn.carouFredSel.cookie.set(n,v);}}
function cf_getCookie(n){var c=$.fn.carouFredSel.cookie.get(n);return(c=='')?0:c;}
function in_mapCss($elem,props){var css={};for(var p=0,l=props.length;p<l;p++)
{css[props[p]]=$elem.css(props[p]);}
return css;}
function in_complementItems(obj,opt,itm,sta){if(!is_object(obj.visibleConf))
{obj.visibleConf={};}
if(!is_object(obj.sizesConf))
{obj.sizesConf={};}
if(obj.start==0&&is_number(sta))
{obj.start=sta;}
if(is_object(obj.visible))
{obj.visibleConf.min=obj.visible.min;obj.visibleConf.max=obj.visible.max;obj.visible=false;}
else if(is_string(obj.visible))
{if(obj.visible=='variable')
{obj.visibleConf.variable=true;}
else
{obj.visibleConf.adjust=obj.visible;}
obj.visible=false;}
else if(is_function(obj.visible))
{obj.visibleConf.adjust=obj.visible;obj.visible=false;}
if(!is_string(obj.filter))
{obj.filter=(itm.filter(':hidden').length>0)?':visible':'*';}
if(!obj[opt.d['width']])
{if(opt.responsive)
{debug(true,'Set a '+opt.d['width']+' for the items!');obj[opt.d['width']]=ms_getTrueLargestSize(itm,opt,'outerWidth');}
else
{obj[opt.d['width']]=(ms_hasVariableSizes(itm,opt,'outerWidth'))?'variable':itm[opt.d['outerWidth']](true);}}
if(!obj[opt.d['height']])
{obj[opt.d['height']]=(ms_hasVariableSizes(itm,opt,'outerHeight'))?'variable':itm[opt.d['outerHeight']](true);}
obj.sizesConf.width=obj.width;obj.sizesConf.height=obj.height;return obj;}
function in_complementVisibleItems(opt,avl){if(opt.items[opt.d['width']]=='variable')
{opt.items.visibleConf.variable=true;}
if(!opt.items.visibleConf.variable){if(is_number(opt[opt.d['width']]))
{opt.items.visible=Math.floor(opt[opt.d['width']]/opt.items[opt.d['width']]);}
else
{opt.items.visible=Math.floor(avl/opt.items[opt.d['width']]);opt[opt.d['width']]=opt.items.visible*opt.items[opt.d['width']];if(!opt.items.visibleConf.adjust)
{opt.align=false;}}
if(opt.items.visible=='Infinity'||opt.items.visible<1)
{debug(true,'Not a valid number of visible items: Set to "variable".');opt.items.visibleConf.variable=true;}}
return opt;}
function in_complementPrimarySize(obj,opt,all){if(obj=='auto')
{obj=ms_getTrueLargestSize(all,opt,'outerWidth');}
return obj;}
function in_complementSecondarySize(obj,opt,all){if(obj=='auto')
{obj=ms_getTrueLargestSize(all,opt,'outerHeight');}
if(!obj)
{obj=opt.items[opt.d['height']];}
return obj;}
function in_getAlignPadding(o,all){var p=cf_getAlignPadding(gi_getCurrentItems(all,o),o);o.padding[o.d[1]]=p[1];o.padding[o.d[3]]=p[0];return o;}
function in_getResponsiveValues(o,all,avl){var visb=cf_getItemAdjustMinMax(Math.ceil(o[o.d['width']]/o.items[o.d['width']]),o.items.visibleConf);if(visb>all.length)
{visb=all.length;}
var newS=Math.floor(o[o.d['width']]/visb);o.items.visible=visb;o.items[o.d['width']]=newS;o[o.d['width']]=visb*newS;return o;}
function bt_pauseOnHoverConfig(p){if(is_string(p))
{var i=(p.indexOf('immediate')>-1)?true:false,r=(p.indexOf('resume')>-1)?true:false;}
else
{var i=r=false;}
return[i,r];}
function bt_mousesheelNumber(mw){return(is_number(mw))?mw:null}
function is_null(a){return(a===null);}
function is_undefined(a){return(is_null(a)||typeof a=='undefined'||a===''||a==='undefined');}
function is_array(a){return(a instanceof Array);}
function is_jquery(a){return(a instanceof jQuery);}
function is_object(a){return((a instanceof Object||typeof a=='object')&&!is_null(a)&&!is_jquery(a)&&!is_array(a)&&!is_function(a));}
function is_number(a){return((a instanceof Number||typeof a=='number')&&!isNaN(a));}
function is_string(a){return((a instanceof String||typeof a=='string')&&!is_undefined(a)&&!is_true(a)&&!is_false(a));}
function is_function(a){return(a instanceof Function||typeof a=='function');}
function is_boolean(a){return(a instanceof Boolean||typeof a=='boolean'||is_true(a)||is_false(a));}
function is_true(a){return(a===true||a==='true');}
function is_false(a){return(a===false||a==='false');}
function is_percentage(x){return(is_string(x)&&x.slice(-1)=='%');}
function getTime(){return new Date().getTime();}
function deprecated(o,n){debug(true,o+' is DEPRECATED, support for it will be removed. Use '+n+' instead.');}
function debug(d,m){if(!is_undefined(window.console)&&!is_undefined(window.console.log))
{if(is_object(d))
{var s=' ('+d.selector+')';d=d.debug;}
else
{var s='';}
if(!d)
{return false;}
if(is_string(m))
{m='carouFredSel'+s+': '+m;}
else
{m=['carouFredSel'+s+':',m];}
window.console.log(m);}
return false;}
$.extend($.easing,{'quadratic':function(t){var t2=t*t;return t*(-t2*t+4*t2-6*t+4);},'cubic':function(t){return t*(4*t*t-9*t+6);},'elastic':function(t){var t2=t*t;return t*(33*t2*t2-106*t2*t+126*t2-67*t+15);}});})(jQuery);
(function($){$(document).ready(function(){var tmls_forms=$('.tmls_form.tmls_notready');var tmls_sliders=$('.tmls.tmls_notready .tmls_slider, .tmls.tmls_notready .tmls_slider2');var tmls_style3=$('.style3.tmls_style3_notready');if(self!=top){$.tmls_findNotReadyInserted();}
else{if(tmls_forms.length)
{tmls_forms.each(function(){$(this).removeClass('tmls_notready');$.tmls_runFormsScripts($(this));});}
if(tmls_sliders.length)
{tmls_sliders.each(function(){$(this).parent().removeClass('tmls_notready');$.tmls_runSlidersScripts($(this));});}
if(tmls_style3.length)
{tmls_style3.each(function(){$(this).removeClass('tmls_style3_notready');$.tmls_runStyle3Scripts($(this));});}}});$.tmls_findNotReadyInserted=function(){var tmls_forms=$('.tmls_form.tmls_notready');var tmls_sliders=$('.tmls.tmls_notready .tmls_slider, .tmls.tmls_notready .tmls_slider2');var tmls_style3=$('.style3.tmls_style3_notready');if(tmls_forms.length)
{tmls_forms.each(function(){$(this).removeClass('tmls_notready');$.tmls_runFormsScripts($(this));});}
if(tmls_sliders.length)
{tmls_sliders.each(function(){$.tmls_runSlidersScripts($(this));$(this).parent().parent().removeClass('tmls_notready');});}
if(tmls_style3.length)
{tmls_style3.each(function(){$(this).removeClass('tmls_style3_notready');$.tmls_runStyle3Scripts($(this));});}
setTimeout(function(){$.tmls_findNotReadyInserted();},1000);}
$.tmls_runFormsScripts=function(tmls_form){var tmls_form_submit=tmls_form.find('.tmls_form_submit');if(tmls_form_submit.length)
{tmls_form_submit.mouseover(function(){$(this).css('color',$(this).attr('data-hoverfontcolor'));$(this).css('border-color',$(this).attr('data-hoverbordercolor'));$(this).css('background-color',$(this).attr('data-hoverbgcolor'));});tmls_form_submit.mouseleave(function(){$(this).css('color',$(this).attr('data-fontcolor'));$(this).css('border-color',$(this).attr('data-bordercolor'));$(this).css('background-color',$(this).attr('data-bgcolor'));});}}
$.tmls_runSlidersScripts=function(tmls_slider){var tmls_visible_slider_buttons=tmls_slider.parent().parent().find('.tmls_next_prev.tmls_visible');tmls_slider_play(tmls_slider);tmls_slider.parent().parent().mouseenter(function(){$(this).children('.tmls_show_on_hover').slideToggle();});tmls_slider.parent().parent().mouseleave(function(){$(this).children('.tmls_show_on_hover').slideToggle();});tmls_visible_slider_buttons.fadeIn();}
$.tmls_runStyle3Scripts=function(tmls_style3){var tmls_style3_names=tmls_style3.find('.tmls_name');if(tmls_style3_names.length){tmls_style3_names.each(function(){var tmls_style3_infos_height_sum=($(this).height()+2.5+$(this).parent().children('.tmls_position').height()+$(this).parent().children('.tmls_rating').height()+5);var tmls_style3_img_height=$(this).parent().children('.tmls_image').height();if(tmls_style3_infos_height_sum<tmls_style3_img_height&&$(this).parent().children('.tmls_image').css('display')!='none'){$(this).css('padding-top',(tmls_style3_img_height/2)-(tmls_style3_infos_height_sum/2));}
else{$(this).css('padding-top',0);}});}}
$(window).load(function(){var tmls_sliders=$('.tmls_slider, .tmls_slider2');tmls_sliders.each(function(){tmls_slider_play($(this));});});$(window).resize(function(){var tmls_sliders=$('.tmls_slider, .tmls_slider2');var tmls_style3=$('.style3');tmls_slider_play(tmls_sliders);if(tmls_style3.length)
{tmls_style3.each(function(){$.tmls_runStyle3Scripts($(this));});}});function tmls_slider_play(tmls_slider){tmls_slider.carouFredSel({responsive:true,width:'variable',height:'variable',prev:{button:function(){return $(this).parents().children(".tmls_next_prev").children(".tmls_prev");}},next:{button:function(){return $(this).parents().children(".tmls_next_prev").children(".tmls_next");}},pagination:{container:function(){return $(this).parents().next().children('.tmls_paginationContainer');},anchorBuilder:function(nr){return"<div class='tmls_image_container "+$(this).attr('data-imageradius')+"'><div class='tmls_image' style='"+$(this).attr('data-bgimg')+"'></div><div class='tmls_image_overlay' style='background-color:"+$(this).parent().attr('data-slider2unselectedoverlaybgcolor')+"'></div></div>";}},scroll:{items:1,duration:tmls_slider.data('scrollduration'),fx:tmls_slider.data('transitioneffect')},auto:{play:tmls_slider.data('autoplay'),timeoutDuration:tmls_slider.data('pauseduration'),pauseOnHover:tmls_slider.data('pauseonhover')},items:{width:700},swipe:{onMouse:false,onTouch:true}});}})(jQuery);
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";!function(t){var e=function(t){var e=/#new_tab$/;"A"===t.tagName&&e.test(t.getAttribute("href"))&&(t.setAttribute("target","_blank"),t.setAttribute("href",t.getAttribute("href").replace(e,"")))};t.addEventListener("click",function(t){return e(t.target)}),t.addEventListener("DOMContentLoaded",function(){for(var n=t.getElementsByTagName("A"),r=0;r<n.length;r++)e(n[r])})}(document);
},{}]},{},[1])
;
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(s){var c,l,u=!(s.detectSwipe={version:"2.1.2",enabled:"ontouchstart"in document.documentElement,preventDefault:!0,threshold:20});function f(){this.removeEventListener("touchmove",t),this.removeEventListener("touchend",f),u=!1}function t(e){if(s.detectSwipe.preventDefault&&e.preventDefault(),u){var t,n=e.touches[0].pageX,i=e.touches[0].pageY,r=c-n,a=l-i,o=window.devicePixelRatio||1;Math.abs(r)*o>=s.detectSwipe.threshold?t=0<r?"left":"right":Math.abs(a)*o>=s.detectSwipe.threshold&&(t=0<a?"up":"down"),t&&(f.call(this),s(this).trigger("swipe",t).trigger("swipe"+t))}}function e(e){1==e.touches.length&&(c=e.touches[0].pageX,l=e.touches[0].pageY,u=!0,this.addEventListener("touchmove",t,!1),this.addEventListener("touchend",f,!1))}s.event.special.swipe={setup:function(){this.addEventListener&&this.addEventListener("touchstart",e,!1)}},s.each(["left","up","down","right"],function(){s.event.special["swipe"+this]={setup:function(){s(this).on("swipe",s.noop)}}})}),function(u){"use strict";if(void 0!==u)if(u.fn.jquery.match(/-ajax/))"console"in window&&window.console.info("Featherlight needs regular jQuery, not the slim version.");else{var i=[],r=function(t){return i=u.grep(i,function(e){return e!==t&&0<e.$instance.closest("body").length})},a={allow:1,allowfullscreen:1,frameborder:1,height:1,longdesc:1,marginheight:1,marginwidth:1,mozallowfullscreen:1,name:1,referrerpolicy:1,sandbox:1,scrolling:1,src:1,srcdoc:1,style:1,webkitallowfullscreen:1,width:1},n={keyup:"onKeyUp",resize:"onResize"},o=function(e){u.each(c.opened().reverse(),function(){if(!e.isDefaultPrevented()&&!1===this[n[e.type]](e))return e.preventDefault(),e.stopPropagation(),!1})},s=function(e){if(e!==c._globalHandlerInstalled){c._globalHandlerInstalled=e;var t=u.map(n,function(e,t){return t+"."+c.prototype.namespace}).join(" ");u(window)[e?"on":"off"](t,o)}};c.prototype={constructor:c,namespace:"featherlight",targetAttr:"data-featherlight",variant:null,resetCss:!1,background:null,openTrigger:"click",closeTrigger:"click",filter:null,root:"body",openSpeed:250,closeSpeed:250,closeOnClick:"background",closeOnEsc:!0,closeIcon:"&#10005;",loading:"",persist:!1,otherClose:null,beforeOpen:u.noop,beforeContent:u.noop,beforeClose:u.noop,afterOpen:u.noop,afterContent:u.noop,afterClose:u.noop,onKeyUp:u.noop,onResize:u.noop,type:null,contentFilters:["jquery","image","html","ajax","iframe","text"],setup:function(e,t){"object"!=typeof e||e instanceof u!=!1||t||(t=e,e=void 0);var n=u.extend(this,t,{target:e}),i=n.resetCss?n.namespace+"-reset":n.namespace,r=u(n.background||['<div class="'+i+"-loading "+i+'">','<div class="'+i+'-content">','<button class="'+i+"-close-icon "+n.namespace+'-close" aria-label="Close">',n.closeIcon,"</button>",'<div class="'+n.namespace+'-inner">'+n.loading+"</div>","</div>","</div>"].join("")),a="."+n.namespace+"-close"+(n.otherClose?","+n.otherClose:"");return n.$instance=r.clone().addClass(n.variant),n.$instance.on(n.closeTrigger+"."+n.namespace,function(e){if(!e.isDefaultPrevented()){var t=u(e.target);("background"===n.closeOnClick&&t.is("."+n.namespace)||"anywhere"===n.closeOnClick||t.closest(a).length)&&(n.close(e),e.preventDefault())}}),this},getContent:function(){if(!1!==this.persist&&this.$content)return this.$content;var t=this,e=this.constructor.contentFilters,n=function(e){return t.$currentTarget&&t.$currentTarget.attr(e)},i=n(t.targetAttr),r=t.target||i||"",a=e[t.type];if(!a&&r in e&&(a=e[r],r=t.target&&i),r=r||n("href")||"",!a)for(var o in e)t[o]&&(a=e[o],r=t[o]);if(!a){var s=r;if(r=null,u.each(t.contentFilters,function(){return(a=e[this]).test&&(r=a.test(s)),!r&&a.regex&&s.match&&s.match(a.regex)&&(r=s),!r}),!r)return"console"in window&&window.console.error("Featherlight: no content filter found "+(s?' for "'+s+'"':" (no target specified)")),!1}return a.process.call(t,r)},setContent:function(e){return this.$instance.removeClass(this.namespace+"-loading"),this.$instance.toggleClass(this.namespace+"-iframe",e.is("iframe")),this.$instance.find("."+this.namespace+"-inner").not(e).slice(1).remove().end().replaceWith(u.contains(this.$instance[0],e[0])?"":e),this.$content=e.addClass(this.namespace+"-inner"),this},open:function(t){var n=this;if(n.$instance.hide().appendTo(n.root),!(t&&t.isDefaultPrevented()||!1===n.beforeOpen(t))){t&&t.preventDefault();var e=n.getContent();if(e)return i.push(n),s(!0),n.$instance.fadeIn(n.openSpeed),n.beforeContent(t),u.when(e).always(function(e){n.setContent(e),n.afterContent(t)}).then(n.$instance.promise()).done(function(){n.afterOpen(t)})}return n.$instance.detach(),u.Deferred().reject().promise()},close:function(e){var t=this,n=u.Deferred();return!1===t.beforeClose(e)?n.reject():(0===r(t).length&&s(!1),t.$instance.fadeOut(t.closeSpeed,function(){t.$instance.detach(),t.afterClose(e),n.resolve()})),n.promise()},resize:function(e,t){if(e&&t){this.$content.css("width","").css("height","");var n=Math.max(e/(this.$content.parent().width()-1),t/(this.$content.parent().height()-1));1<n&&(n=t/Math.floor(t/n),this.$content.css("width",e/n+"px").css("height",t/n+"px"))}},chainCallbacks:function(e){for(var t in e)this[t]=u.proxy(e[t],this,u.proxy(this[t],this))}},u.extend(c,{id:0,autoBind:"[data-featherlight]",defaults:c.prototype,contentFilters:{jquery:{regex:/^[#.]\w/,test:function(e){return e instanceof u&&e},process:function(e){return!1!==this.persist?u(e):u(e).clone(!0)}},image:{regex:/\.(png|jpg|jpeg|gif|tiff?|bmp|svg)(\?\S*)?$/i,process:function(e){var t=u.Deferred(),n=new Image,i=u('<img src="'+e+'" alt="" class="'+this.namespace+'-image" />');return n.onload=function(){i.naturalWidth=n.width,i.naturalHeight=n.height,t.resolve(i)},n.onerror=function(){t.reject(i)},n.src=e,t.promise()}},html:{regex:/^\s*<[\w!][^<]*>/,process:function(e){return u(e)}},ajax:{regex:/./,process:function(e){var n=u.Deferred(),i=u("<div></div>").load(e,function(e,t){"error"!==t&&n.resolve(i.contents()),n.fail()});return n.promise()}},iframe:{process:function(e){var t=new u.Deferred,n=u("<iframe/>"),i=function(e,t){var n={},i=new RegExp("^"+t+"([A-Z])(.*)");for(var r in e){var a=r.match(i);a&&(n[(a[1]+a[2].replace(/([A-Z])/g,"-$1")).toLowerCase()]=e[r])}return n}(this,"iframe"),r=function(e,t){var n={};for(var i in e)i in t&&(n[i]=e[i],delete e[i]);return n}(i,a);return n.hide().attr("src",e).attr(r).css(i).on("load",function(){t.resolve(n.show())}).appendTo(this.$instance.find("."+this.namespace+"-content")),t.promise()}},text:{process:function(e){return u("<div>",{text:e})}}},functionAttributes:["beforeOpen","afterOpen","beforeContent","afterContent","beforeClose","afterClose"],readElementConfig:function(e,t){var i=this,r=new RegExp("^data-"+t+"-(.*)"),a={};return e&&e.attributes&&u.each(e.attributes,function(){var e=this.name.match(r);if(e){var t=this.value,n=u.camelCase(e[1]);if(0<=u.inArray(n,i.functionAttributes))t=new Function(t);else try{t=JSON.parse(t)}catch(e){}a[n]=t}}),a},extend:function(e,t){var n=function(){this.constructor=e};return n.prototype=this.prototype,e.prototype=new n,e.__super__=this.prototype,u.extend(e,this,t),e.defaults=e.prototype,e},attach:function(r,a,o){var s=this;"object"!=typeof a||a instanceof u!=!1||o||(o=a,a=void 0);var c,e=(o=u.extend({},o)).namespace||s.defaults.namespace,l=u.extend({},s.defaults,s.readElementConfig(r[0],e),o),t=function(e){var t=u(e.currentTarget),n=u.extend({$source:r,$currentTarget:t},s.readElementConfig(r[0],l.namespace),s.readElementConfig(e.currentTarget,l.namespace),o),i=c||t.data("featherlight-persisted")||new s(a,n);"shared"===i.persist?c=i:!1!==i.persist&&t.data("featherlight-persisted",i),n.$currentTarget.blur&&n.$currentTarget.blur(),i.open(e)};return r.on(l.openTrigger+"."+l.namespace,l.filter,t),{filter:l.filter,handler:t}},current:function(){var e=this.opened();return e[e.length-1]||null},opened:function(){var t=this;return r(),u.grep(i,function(e){return e instanceof t})},close:function(e){var t=this.current();if(t)return t.close(e)},_onReady:function(){var i=this;if(i.autoBind){var r=u(i.autoBind);r.each(function(){i.attach(u(this))}),u(document).on("click",i.autoBind,function(e){if(!e.isDefaultPrevented()){var t=u(e.currentTarget);if(r.length!==(r=r.add(t)).length){var n=i.attach(t);(!n.filter||0<u(e.target).parentsUntil(t,n.filter).length)&&n.handler(e)}}})}},_callbackChain:{onKeyUp:function(e,t){return 27===t.keyCode?(this.closeOnEsc&&u.featherlight.close(t),!1):e(t)},beforeOpen:function(e,t){return u(document.documentElement).addClass("with-featherlight"),this._previouslyActive=document.activeElement,this._$previouslyTabbable=u("a, input, select, textarea, iframe, button, iframe, [contentEditable=true]").not("[tabindex]").not(this.$instance.find("button")),this._$previouslyWithTabIndex=u("[tabindex]").not('[tabindex="-1"]'),this._previousWithTabIndices=this._$previouslyWithTabIndex.map(function(e,t){return u(t).attr("tabindex")}),this._$previouslyWithTabIndex.add(this._$previouslyTabbable).attr("tabindex",-1),document.activeElement.blur&&document.activeElement.blur(),e(t)},afterClose:function(e,t){var n=e(t),i=this;return this._$previouslyTabbable.removeAttr("tabindex"),this._$previouslyWithTabIndex.each(function(e,t){u(t).attr("tabindex",i._previousWithTabIndices[e])}),this._previouslyActive.focus(),0===c.opened().length&&u(document.documentElement).removeClass("with-featherlight"),n},onResize:function(e,t){return this.resize(this.$content.naturalWidth,this.$content.naturalHeight),e(t)},afterContent:function(e,t){var n=e(t);return this.$instance.find("[autofocus]:not([disabled])").focus(),this.onResize(t),n}}}),u.featherlight=c,u.fn.featherlight=function(e,t){return c.attach(this,e,t),this},u(document).ready(function(){c._onReady()})}else"console"in window&&window.console.info("Too much lightness, Featherlight needs jQuery.");function c(e,t){if(!(this instanceof c)){var n=new c(e,t);return n.open(),n}this.id=c.id++,this.setup(e,t),this.chainCallbacks(c._callbackChain)}}(jQuery),function(a){"use strict";var e=function(e){window.console&&window.console.warn&&window.console.warn("FeatherlightGallery: "+e)};if(void 0===a)return e("Too much lightness, Featherlight needs jQuery.");if(!a.featherlight)return e("Load the featherlight plugin before the gallery plugin");var t="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,n=a.event&&a.event.special.swipeleft&&a,i=window.Hammer&&function(e){var t=new window.Hammer.Manager(e[0]);return t.add(new window.Hammer.Swipe),t},r=t&&(n||i);t&&!r&&e("No compatible swipe library detected; one must be included before featherlightGallery for swipe motions to navigate the galleries.");var o={afterClose:function(e,t){var n=this;return n.$instance.off("next."+n.namespace+" previous."+n.namespace),n._swiper&&(n._swiper.off("swipeleft",n._swipeleft).off("swiperight",n._swiperight),n._swiper=null),e(t)},beforeOpen:function(e,t){var n=this;return n.$instance.on("next."+n.namespace+" previous."+n.namespace,function(e){var t="next"===e.type?1:-1;n.navigateTo(n.currentNavigation()+t)}),r&&(n._swiper=r(n.$instance).on("swipeleft",n._swipeleft=function(){n.$instance.trigger("next")}).on("swiperight",n._swiperight=function(){n.$instance.trigger("previous")}),n.$instance.addClass(this.namespace+"-swipe-aware",r)),n.$instance.find("."+n.namespace+"-content").append(n.createNavigation("previous")).append(n.createNavigation("next")),e(t)},beforeContent:function(e,t){var n=this.currentNavigation(),i=this.slides().length;return this.$instance.toggleClass(this.namespace+"-first-slide",0===n).toggleClass(this.namespace+"-last-slide",n===i-1),e(t)},onKeyUp:function(e,t){var n={37:"previous",39:"next"}[t.keyCode];return n?(this.$instance.trigger(n),!1):e(t)}};function s(e,t){if(!(this instanceof s)){var n=new s(a.extend({$source:e,$currentTarget:e.first()},t));return n.open(),n}a.featherlight.apply(this,arguments),this.chainCallbacks(o)}a.featherlight.extend(s,{autoBind:"[data-featherlight-gallery]"}),a.extend(s.prototype,{previousIcon:"&#9664;",nextIcon:"&#9654;",galleryFadeIn:100,galleryFadeOut:300,slides:function(){return this.filter?this.$source.find(this.filter):this.$source},images:function(){return e("images is deprecated, please use slides instead"),this.slides()},currentNavigation:function(){return this.slides().index(this.$currentTarget)},navigateTo:function(e){var t=this,n=t.slides(),i=n.length,r=t.$instance.find("."+t.namespace+"-inner");return e=(e%i+i)%i,t.$currentTarget=n.eq(e),t.beforeContent(),a.when(t.getContent(),r.fadeTo(t.galleryFadeOut,.2)).always(function(e){t.setContent(e),t.afterContent(),e.fadeTo(t.galleryFadeIn,1)})},createNavigation:function(t){var n=this;return a('<span title="'+t+'" class="'+this.namespace+"-"+t+'"><span>'+this[t+"Icon"]+"</span></span>").click(function(e){a(this).trigger(t+"."+n.namespace),e.preventDefault()})}}),a.featherlightGallery=s,a.fn.featherlightGallery=function(e){return s.attach(this,e),this},a(document).ready(function(){s._onReady()})}(jQuery),function(e,i,t){"use strict";var n=i(document.body);function r(e,t){return/(.png|.jpg|.jpeg|.gif|.tiff|.bmp)$/.test(i(t).attr("href").toLowerCase().split("?")[0].split("#")[0])}function a(e,t){var n=i(t).find("a[data-featherlight]");n.attr("data-featherlight")&&n.featherlightGallery({previousIcon:"",nextIcon:""})}function o(){var e;i.featherlight.defaults.closeIcon="",n.find("a[href]").filter(r).attr("data-featherlight","image"),0!==(e=n.find('[class*="gallery"]')).length&&i.each(e,a),n.hasClass("wp-featherlight-captions")&&(i.featherlight.prototype.afterContent=function(){var e=this.$instance,t=function(e){var t=e.parent().find(".wp-caption-text");if(0!==t.length)return t;var n=e.parent().find("figcaption");if(0!==n.length)return n;var i=e.parents(".gallery-item");if(0!==i.length)return i.find(".wp-caption-text");var r=e.parents(".blocks-gallery-item");if(0!==r.length)return r.find("figcaption");var a=e.parents(".tiled-gallery-item");return 0!==a.length?a.find(".tiled-gallery-caption"):""}(this.$currentTarget);e.find(".caption").remove(),0!==t.length&&(i('<div class="caption">').appendTo(e.find(".featherlight-content"))[0].innerHTML=t.html())})}i(document).ready(function(){o()})}(0,jQuery);
!function(n){var i={common:{init:function(){},finalize:function(){}},home:{init:function(){},finalize:function(){}},about_us:{init:function(){}}},o={fire:function(n,o,e){var t,f=i;o=void 0===o?"init":o,t=""!==n,t=t&&f[n],t=t&&"function"==typeof f[n][o],t&&f[n][o](e)},loadEvents:function(){o.fire("common"),n.each(document.body.className.replace(/-/g,"_").split(/\s+/),function(n,i){o.fire(i),o.fire(i,"finalize")}),o.fire("common","finalize")}};n(document).ready(o.loadEvents)}(jQuery);
var _ioq = _ioq || [];
function L10iAdmin(_ioq, config) {
    var ioq = _ioq;
    var io = _ioq.io;
    var eventTests = [];
    var eventBindReported = [];
    this.init = function init() {
        ioq.log(ioq.name + ':admin.init()');//
        if (!ioq.settings.admin) {
            return;
        }
        var ths = this;
        io('addCallback', 'bindEvent', ths.bindEventCallback);
        io('addCallback', 'triggerEventAlter', ths.triggerEventAlterCallback);
        io('addCallback', 'triggerEvent', ths.triggerEventCallback);
        io('addCallback', 'domReady', this.domReady, this);
    };
    this.domReady = function () {
        if (ioq.$content) {
            ioq.$content.css('outline', '3px dashed #44FF44');
        }
    };
    this.bindEventCallback = function bindEventCallback(evtDef, $target) {
        var evt = {};
        var options = {
            test: 1,
            admin: {
                bindTarget: []
            }
        };
        $target.each(function(index, value) {
            var evt = {};
            var $value = jQuery(value);
            var ret = 0;
            if (evtDef.onHandler) {
                evt.data = {
                    io: {
                        options: options
                    }
                };
                evt.target = value;
                ret = evtDef.onHandler(evt);
            }
            else {
                ret = _ioq.defEventHandler(evtDef, $value, evt, options);
            }
        });
        var logObj = {
            eventDef: evtDef,
            bindTarget: options.admin.bindTarget
        };
    };
    this.setBindTarget = function ($target) {
        /*
        var overlay = document.createElement('div');
        var rect = $target.get(0).getBoundingClientRect();
        overlay.className = 'io-bind-target-overlay';
        overlay.style.top = rect.top +'px';
        overlay.style.left = rect.left +'px';
        overlay.style.width = rect.width +'px';
        overlay.style.height = rect.height +'px';
        document.body.appendChild( overlay );
        console.log(overlay);
        */
        var $highlight = $target;
        var $wide_child;
        var maxWidth = $target.width();
        var $children = $target.children();
        if ($children.length) {
            $wide_child = $children.each( function (index, value) {
                var $value = jQuery(value);
                if ($value.width() > maxWidth) {
                    $wide_child = $value;
                    maxWidth = $value.width();
                }
                return $wide_child;
            });
        }
        if ($wide_child && $wide_child.width() > $highlight.width()) {
            $highlight = $wide_child;
        }
        $highlight.css('outline', '3px solid #44FF44');
        if (ioq.isDebug()) {
            $target.addClass('io-admin-bind-target');
        }
    };
    this.triggerEventAlterCallback = function triggerEventAlterCallback(trigEvt, $target, event, options, evtDef) {
        if (!options.test)  {
            options.test = 2;
        }
    };
    this.triggerEventCallback = function triggerEventCallback(trigEvt, $target, event, options, evtDef, gaEvt) {
        if (!options.test)  {
            return;
        }
        var target;
        var prevent = 0;
        if (ioq.location.params['io-admin-prevent'] && ioq.isFunction(event.preventDefault)) {
            event.preventDefault();
        }
        var logObj = {
            eventDef: evtDef
        };
        if (options.test == 1) {
            if (ioq.isObject(gaEvt) && gaEvt.eventCategory) {
                if (ioq.is$Object($target)) {
                    options.admin.bindTarget.push($target.get(0));
                }
            }
            io('admin:setBindTarget', $target);
            return;
        }
        if (options.test == 2) {
            ds = '';
            for (i in gaEvt) {
                if (ds) {
                    ds += ',';
                }
                ds += '\n  ' + i + ': ';
                if (ioq.isString(gaEvt[i])) {
                    ds += "'" + gaEvt[i] + "'";
                }
                else {
                    ds += gaEvt[i];
                }
            }
            alert("ga.send.event: {" + ds + '\n}');
            logObj.target$ = $target;
            logObj.event = event;
            logObj.trigEvt = trigEvt;
            logObj.gaEvt = gaEvt;
            logObj.options = options;
        }
    };
    _l10iq.push(['addCallback', 'configReady', this.init, this]);
}
_ioq.push(['providePlugin', 'admin', L10iAdmin, {}]);
var _ioq=_ioq||[];function L10iFormTracker(_ioq,config){var ioq=_ioq;var io=_ioq.io;var $=jQuery;var ths={};this.formDefs={};this.init=function init(){var ths=this;$('form').not('.formtracker-0').on('submit',ths.eventHandler);};ths.trackForm=function trackForm(def){if(ioq.isArray(def)){for(var i=0;i<def.length;i++){ths.trackFormInit(def[i]);}}
else{ths.trackFormInit(def);}};ths.trackFormInit=function trackFormInit(def){var $obj,$this,$onObj,enable=1,$dataField,def2;if(ioq.isNull(def)){def={};}
if(!ioq.isNull(def.landingpage)){def.landingpage=ths.trackLandingpage(def.landingpage);}
if(ioq.isNull(def.selector)){def.selector='body';def.onSelector=def.onSelector||'form';}
def.oa=def.oa||{};def.oa.rc=def.oa.rc||'form';if(!def.oa.rt&&def.formType){def.oa.rt=def.formType;}
if(!def.oa.rk&&def.formId){def.oa.rk=def.formId;}
if(!def.oa.ri){def.oa.ri=def.formUri||':'+def.formType+':'+def.formId;}
def.eventAction=def.eventAction||def.formTitle||ioq.settings.pageTitle;def.eventLabel=def.eventLabel||def.oa.ri;$obj=ioq.jQuerySelect(def);if(def.onSelector){$onObj=$obj.find(def.onSelector);}
else{$onObj=$obj;}
$onObj.each(function(){$this=$(this);if(ths.processFormSpecialFields(def,$this)){enable=0;}});if($onObj.length&&def.trackView){delete def.trackView;evtDef=ioq.objectMerge({},def);evtDef.eventCategory='Form view';evtDef.onEvent='pageview';evtDef.eid='formView';evtDef.nonInteraction=1;io('event',evtDef);}
if(ioq._apiLevel=='pro'){ths.setCookie('l10i_lf',ioq.settings.pageUri,1);}
return def;};ths.processFormSpecialFields=function(def,$obj,event){var pf='io';if($obj.is('form')){var enabled=$obj.find('input[name="'+pf+'_track_form"]').val();if((enabled=='0')||(enabled=='false')){return true;}
var $dataField=$obj.find('input[name="'+pf+'_submit_data"]');if($dataField.length==0){$dataField=$obj.find('input[name="submitted['+pf+'_submit_data]"]');}
if($dataField.length==1){var formSubmit=ths.constFormSubmit(null,$obj);formSubmit=JSON.stringify(formSubmit);$dataField.val(formSubmit);return true;}}
return false;};this.setFormDef=function setFormDef(name,def){var i,a;if(ioq.isArray(name)){for(var i=0;i<name.length;i++){a=name[i];if(a[0]&&a[1]&&ioq.isObject(a[1])){this.formDefs[a[0]]=a[1];}}}
else{this.formDefs[name]=obj;}};this.getFormDef=function getFormDef(name,defaultValue){if(name==undefined){return this.linkTypeDefs;}
if(this.linkTypeDefs[name]===undefined){return defaultValue;}
return this.linkTypeDefs[name];};this.eventHandler=function eventHandler(event){};this.init();return ths;}
_ioq.push(['providePlugin','formtracker',L10iFormTracker,{}]);
var _ioq=_ioq||[];function L10iLinkTracker(_ioq,config){var ioq=_ioq;var io=_ioq.io;this.hrefTypeDefs={};this.hrefTypeDefs.external={title:'External link'};this.hrefTypeDefs.download={title:'Download link'};this.hrefTypeDefs.mailto={title:'Mailto link'};this.hrefTypeDefs.tel={title:'Tel link'};this.linkTypeDefs={};this.linkTypeDefs.internal={title:'Internal link',track:0};this.linkTypeDefs.external={title:'External link',track:1};this.linkTypeDefs.download={title:'Download link',track:1};this.linkTypeDefs.mailto={title:'Mailto link',track:1};this.linkTypeDefs.tel={title:'Tel link',track:1};this.linkClicks=[];this.init=function init(){ioq.log(ioq.name+':linktracker.init()');var ths=this;var evtDef={key:'linktracker_link_click',selector:'a',selectorNot:'.io-link-ignore',onEvent:'click',onHandler:function(event){ths.handleLinkEvent(event)},transport:'beacon'};io('event',evtDef);return;};this.setLinkTypeDef=function setLinkTypeDef(name,def){var i,a;if(ioq.isArray(name)){for(var i=0;i<name.length;i++){a=name[i];if(a[0]&&a[1]&&ioq.isObject(a[1])){this.linkTypeDefs[a[0]]=a[1];}}}
else{this.linkTypeDefs[name]=obj;}};this.getLinkTypeDef=function getLinkTypeDef(name,defaultValue){if(name==undefined){return this.linkTypeDefs;}
if(this.linkTypeDefs[name]===undefined){return defaultValue;}
return this.linkTypeDefs[name];};this.addHrefType=function addHrefType(name,obj){this.hrefTypeDefs[name]=obj;};this.removeHrefType=function removeHrefType(name){if(this.hrefTypeDefs[name]){delete(this.hrefTypeDefs[name]);}};this.getLinkClicks=function(){return this.linkClicks;};this.handleLinkEvent=function handleLinkEvent(event){var i,v,attributes={},linkDef;var f={event:event,hrefTypeDefs:this.hrefTypeDefs,linkTypeDefs:this.linkTypeDefs};v=_ioq.getEventArgsFromEvent(event);f.evtDef=v[0],f.$obj=v[1],f.options=v[3];f.eventType=event.type;if(!f.eventType&&f.evtDef.onEvent){f.eventType=f.evtDef.onEvent;}
f.href=f.$obj.attr('href');if(!f.href){return;}
f.$obj.objSettings=f.$obj.objSettings||ioq.getObjSettings(f.$obj);if(f.$obj.objSettings['link-ignore']||f.$obj.objSettings['link-'+f.eventType+'ignore']){return;}
f.hrefType='';if(!f.hrefType){var downloadPattern=/\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav|png|jpg|jpeg|gif)$/i;f.hrefObj=_ioq.parseUrl(f.href);f.hrefObj.external=(f.hrefObj.hostname!=ioq.location.hostname);if(f.href.substr(0,7)=='mailto:'){f.hrefType='mailto';}
else if(f.href.substr(0,4)=='tel:'){f.hrefType='tel';}
else if(f.href.substr(0,11)=='javascript:'){f.hrefType='javascript';}
else if(f.hrefObj.external){f.hrefType='external';}
else if(f.href.match(downloadPattern)){f.hrefType='download';}
else{f.hrefType='internal';}}
f.linkType=f.hrefType;if(f.$obj.objSettings['link-type']){f.linkType=f.$obj.objSettings['link-type'];}
ioq.triggerCallbacks('handleLinkEventAlter',f);linkDef=f.linkTypeDefs[f.linkType]||{};if(linkDef.track||f.$obj.objSettings['link-track']||f.$obj.objSettings['link-'+f.eventType+'-track']){console.log();f.evtDef.eventCategory=linkDef.title;if(f.eventType){f.evtDef.eventCategory+=' '+f.eventType}
if(linkDef.clickMode){f.evtDef.mode=linkDef.clickMode;}
if(linkDef.clickValue){f.evtDef.eventValue=linkDef.clickValue;}
delete(f.evtDef.const);}
v={event:f.event,hrefType:f.hrefType,timeDelta:ioq.getTimeDelta()};this.linkClicks.push(v);if(f.evtDef.eventCategory){return _ioq.defEventHandler(f.evtDef,f.$obj,f.event,f.options);}};this.init();}
_ioq.push(['providePlugin','linktracker',L10iLinkTracker,{}]);
var _ioq=_ioq||[];function L10iPageTracker(_ioq,config){var ioq=_ioq;var io=_ioq.io;var $;var $win;var depthEventsSent=0;this.linkClicksIgnored=[];this.init=function init(){ioq.log(ioq.name+':pagetracker.init()');var ths=this;$=jQuery;$win=$(window);ioq.addCallback('timeInterval.30',ths.handlePageConsumedTime,this);ioq.addCallback('timeInterval.900',ths.handlePageAbandoned,this);$win.on('beforeunload',function(event){ths.handleUnload(event);});};this.handlePageConsumedTime=function(){ioq.log('PageTracker::handlePageConsumedTime()');var
ths=this,scroll=ioq.get('p.scroll',{});if(this.isDeepScroll(scroll)){this.sendPageConsumedEvent();}
else{ioq.addCallback('scroll',this.handlePageConsumedScroll,this);}};this.handlePageConsumedScroll=function(scroll){ioq.log(ioq.name+':pagetracker.handlePageConsumedScroll()');if(this.isDeepScroll(scroll)){ioq.removeCallback('scroll',this.handlePageConsumedScroll,this);this.sendPageConsumedEvent();}};this.isDeepScroll=function(scroll){if(scroll.contentBottomMax!=scroll.bottomMax){return(scroll.contentBottomMaxPer>90);}
else{if(scroll.bottomMaxPer>80){return 1;}
var $comments=$('#comments.comments-area');if($comments.length){var d=ioq.getElementDimensions($comments);var bmp=100*scroll.bottomMax/d.top;if(bmp>85){return 1;}}
return 0;}};this.sendPageConsumedEvent=function(){ioq.log('PageTracker::sendPageConsumedEvent()');if(ioq.getTimeDelta()>3600){return;}
var evtDef={eventCategory:'Page consumed!',eventAction:'[[title]]',eventLabel:'[[uri]]',eventValue:ioq.get('c.scorings.events.pagetracker_page_consumed',0),nonInteraction:false};io('event',evtDef);};this.formatPer=function formatPer(value){value=value||0;return Math.round(Math.min(100,Math.max(0,value)));};this.handlePageAbandoned=function handlePageAbandoned(){return this.sendPageDepthEvents();};this.handleUnload=function handleUnload(event){var linkClicks=[],lastI,lastClick;if(_ioq.plugins.linktracker&&_ioq.isFunction(_ioq.plugins.linktracker.getLinkClicks)){linkClicks=_ioq.plugins.linktracker.getLinkClicks();}
if(lastI=linkClicks.length){lastI--;lastClick=linkClicks[lastI];if(lastClick.hrefType&&lastClick.timeDelta&&(lastClick.hrefType=='mailto'||lastClick.hrefType=='tel')&&(ioq.getTimeDelta()-lastClick.timeDelta<2)){if(this.linkClicksIgnored.indexOf(lastI)==-1){this.linkClicksIgnored.push(lastI);return;}}}
this.sendPageDepthEvents();};this.sendPageDepthEvents=function(){if(this.depthEventsSent){return;}
this.depthEventsSent=1;if(ioq.getTimeDelta()>3600){return;}
var td0,m,s,si,inc,scroll;var maxTime=600;var td=ioq.getVisibleTime();if(td>maxTime){td=maxTime;}
var tdr=Math.round(td);var ts=[];if(td<120){inc=10;}
else if(td<300){inc=30;}
else if(td<600){inc=60;}
if(inc){m=Math.floor(tdr/60);s=tdr%60;si=(inc*Math.floor(s/inc));ts.push((m<10)?'0'+m:m);ts.push(':');ts.push((si<10)?'0'+si:si);ts.push(' - ');td0=tdr+inc;m=Math.floor(td0/60);s=td0%60;si=(inc*Math.floor(s/inc));ts.push((m<10)?'0'+m:m);ts.push(':');ts.push((si<10)?'0'+si:si);ts=ts.join('');}
else{ts='10:00+';}
var evtDef={eventCategory:'Page time',eventAction:ts,eventLabel:''+tdr,eventValue:tdr,nonInteraction:true,transport:'beacon',domEventType:'beforeunload'};io('event',evtDef);scroll=ioq.get('p.scroll',{});if(scroll.contentBottomMaxPer){var sd=this.formatPer(scroll.contentBottomMaxPer);var sdr=(Math.round(sd/10)*10);ts='';if(sdr<10){ts='~  ';}
else if(sdr<100){ts='~';}
var evtDef={eventCategory:'Page scroll',eventAction:ts+sdr+'%',eventLabel:''+sd,eventValue:sd,nonInteraction:true,transport:'beacon',domEventType:'beforeunload',metric8:1,metric9:tdr,metric10:scroll.pageMax,metric11:this.formatPer(scroll.bottomMaxPer),metric12:this.formatPer(scroll.bottomInitPer)};io('event',evtDef);}
io('ga.send','timing','Page visibility','visible',Math.round(1000*td));};_ioq.push(['addCallback','domReady',this.init,this]);}
_ioq.push(['providePlugin','pagetracker',L10iPageTracker,{}]);
var _l10iq=_l10iq||[];function L10iSocialTracker(_ioq,config){var ioq=_ioq;var io=_ioq.io;this.socialDefs=[];this.socialDefs.push({key:'facebook',title:'Facebook',hostname:['facebook.com'],share:[{pathname:'/sharer.php'},{pathname:'/dialog/share'}]});this.socialDefs.push({key:'googleplus',title:'Google+',hostname:['plus.google.com'],share:[{pathname:'/share'}]});this.socialDefs.push({key:'instagram',title:'Instagram',hostname:['instagram.com']});this.socialDefs.push({key:'linkedin',title:'LinkedIn',hostname:['linkedin.com'],share:[{pathname:'/shareArticle'}]});this.socialDefs.push({key:'pinerest',title:'Pinterest',hostname:['pinterest.com'],share:[{pathname:'/pin/create/bookmarklet'}]});this.socialDefs.push({key:'twitter',title:'Twitter',hostname:['twitter.com'],share:[{pathname:'/intent/tweet'}]});this.socialDefs.push({key:'youtube',title:'YouTube',hostname:['youtube.com'],share:[{pathname:'/intent/tweet'}]});this.socialHostnames={};this.socialNames={};this.init=function init(){var ths=this,i,v,j,w;for(i=0;i<this.socialDefs.length;i++){v=this.socialDefs[i];this.socialNames[v.key]=i;for(j=0;j<v.hostname.length;j++){this.socialHostnames[v.hostname[j]]=i}}
ioq.addCallback('handleLinkEventAlter',this.handleLinkEventAlter,this);};this.addSocialDef=function(name,def){this.socialDefs[name]=def;};this.handleLinkEventAlter=function handleLinkEventAlter(f){var action,net,def,hostname,i,v;if(f.hrefType=='external'){if(!f.hrefObj){f.hrefObj=ioq.parseUrl(f.href);}
hostname=(f.hrefObj.hostname.substr(0,4)=='www.')?f.hrefObj.hostname.substring(4):f.hrefObj.hostname;if(this.socialHostnames[hostname]!=undefined){var def=this.socialDefs[this.socialHostnames[hostname]];if(f.hrefObj.pathname.substr(-1)=='/'){f.hrefObj.pathname=f.hrefObj.pathname.slice(0,-1);}
var action='profile';if(def.share&&ioq.isArray(def.share)){for(i=0;i<def.share.length;i++){v=def.share[i];if(v.pathname&&(v.pathname==f.hrefObj.pathname)){action='share';break;}}}}}
if(f.$obj.objSettings['social-action']){action=f.$obj.objSettings['social-action'];}
if(!action){return f;}
if(f.$obj.objSettings['social-network']){net=f.$obj.objSettings['social-network'];}
var eventKey='socialtracker_social_'+action+'_'+f.eventType;if(ioq.eventDefsIndex[eventKey]){f.evtDef=ioq.eventDefs[ioq.eventDefsIndex[eventKey]];f.evtDef.eventAction=f.evtDef.socialNetwork=net||def.title;f.evtDef.socialAction=action;f.linkType='social';}
else if(action&&net){f.evtDef={};f.evtDef.eventCategory='Social '+action+' '+f.eventType;f.evtDef.eventCategory='Social '+action+' '+f.eventType;f.evtDef.eventAction=f.evtDef.socialNetwork=net;f.evtDef.socialAction=action;f.linkType='social';}
return f;};this.eventHandlerAlter=function eventHandlerAlter(evtDef,$target,event,options){var a,href,parsedHref;if(!evtDef.socialNetwork){a=$target.attr('data-io-social-network');if(a){evtDef.socialNetwork=a;}}
if(!evtDef.eventAction&&evtDef.socialNetwork){evtDef.eventAction=evtDef.socialNetwork;}};this.eventHandler=function eventHandler(evtDef,$target,event,options){if(evtDef.socialNetwork&&evtDef.socialAction){var socialDef={socialNetwork:evtDef.socialNetwork,socialAction:evtDef.socialAction,socialTarget:_ioq.location.href,hitType:'social'};if(!options.test){io('ga.send',socialDef);}}};this.init();}
_l10iq.push(['providePlugin','socialtracker',L10iSocialTracker,{}]);
var _l10iq=_l10iq||[];var tag=document.createElement('script');tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);function L10iYouTube(_ioq){var ioq=_ioq;var io=_ioq.io;this.playerState={};this.players={};this.playerEvents={};this.playerObjSettings={};this.domReady=false;this.apiReady=false;this.ready=false;this.init=function init(){this.domReady=true;if(!this.ready&&this.apiReady){this.trackYouTube();this.ready=true;}};this.apiInit=function(){this.apiReady=true;if(!this.ready&&this.domReady){this.trackYouTube();this.ready=true;}};this.trackPlayer=function(player,videoId,objSettings){player.addEventListener('onReady',function(event){io('youtube:onPlayerReady',event);});player.addEventListener('onStateChange',function(event){io('youtube:onPlayerStateChange',event);});this.players[videoId]=player;this.playerState[videoId]={state:-1,paused:true};this.playerEvents[videoId]={play:0,consumed:0};this.playerObjSettings[videoId]=objSettings||{};};this.trackYouTube=function(){jQuery('iframe').each(function(){var video=jQuery(this);if(video.attr('src')!==undefined){var vidSrc=video.attr('src');var regex=/h?t?t?p?s?\:?\/\/www\.youtube\.com\/embed\/([\w-]{11})(?:\?.*)?/;var matches=vidSrc.match(regex);if(matches&&matches.length>1){video.before('<a name="video-'+matches[1]+'"></a>');video.attr('id',matches[1]);var width=video.width();var height=video.height();jQuery('iframe#'+matches[1]).replaceWith('<div id="'+matches[1]+'"></div>');var player=new YT.Player(matches[1],{videoId:matches[1],height:height,width:width});io('youtube:trackPlayer',player,matches[1],ioq.getObjSettings(video));if(ioq.location.params['io-admin']&&ioq.hasPlugin('admin')){$target=jQuery('iframe#'+matches[1]);io('admin:setBindTarget',$target);}}}});};this.onPlayerReady=function(event){};this.onPlayerStateChange=function(event){if(event.target==undefined){return;}
var videoData={};if(event.target.getVideoData){videoData=event.target.getVideoData();}
else if(event.target.j&&event.target.j.videoData){videoData=event.target.j.videoData;}
if(!videoData.video_id){return;}
var id=videoData.video_id;var title=((videoData.title)?videoData.title:'(not set)');var player=this.players[id];var playerEvents=this.playerEvents[id];var ga_event={eventCategory:"Video event",eventAction:"YouTube: "+title,eventLabel:":youtube:"+id,eventValue:0,nonInteraction:false,objSettings:this.playerObjSettings[id]||{}};ga_event.oa={rs:'youtube',rc:'video',rk:id,domi:id};var $target_obj=jQuery(event.target);var duration=player.getDuration();var playTime=player.getCurrentTime();var positionPer=Math.round(100*playTime/duration);if(event.data==YT.PlayerState.PLAYING){ga_event.eventCategory='Video play';ga_event.eventValue=0;if(!playerEvents.play){ga_event.eventCategory+='!'
ga_event.eventValue=io('get','c.scorings.events.youtube_video_play',0);}
ga_event.eid='videoPlay';event.type='play';ioq.defEventHandler(ga_event,$target_obj,event);this.playerEvents[id].play++;this.playerState[id].paused=false;}
else if(event.data==YT.PlayerState.ENDED&&!this.playerState[id].paused){ga_event.eventCategory='Video scroll';ga_event.eventValue=100;ga_event.eid='videoScroll';var ga_event3={};if(!playerEvents.consumed){ga_event3=jQuery.extend({},ga_event);ga_event3.eventCategory='Video consumed!';ga_event3.eventValue=ioq.get('c.scorings.events.youtube_video_consumed',0);ga_event3.eid='videoConsumed';}
ga_event.metric8=1;ga_event.metric9=Math.round(duration);ga_event.metric10=Math.round(duration);ga_event.metric11=100;ga_event.metric12=0;event.type='scroll';ioq.defEventHandler(ga_event,$target_obj,event);if(ga_event3.eid){event.type='consumed';ioq.defEventHandler(ga_event3,$target_obj,event);this.playerEvents[id].consumed++;}}
else if(event.data==YT.PlayerState.PAUSED&&!this.playerState[id].paused){ga_event.eventCategory='Video stop';ga_event.eid='videoStop';var ga_event2=jQuery.extend({},ga_event);ga_event2.eventCategory='Video scroll';ga_event2.eventValue=positionPer;var ga_event3={};if(!playerEvents.consumed&&positionPer>=90){ga_event3=jQuery.extend({},ga_event);ga_event3.eventCategory='Video consumed!';ga_event3.eventValue=ioq.get('c.scorings.events.youtube_video_consumed',0);ga_event3.eid='videoConsumed';}
ga_event2.eid='videoScroll';ga_event2.metric8=1;ga_event2.metric9=Math.round(positionPer);ga_event2.metric10=Math.round(duration);ga_event2.metric11=Math.round(positionPer);ga_event2.metric12=0;event.type='stop';ioq.defEventHandler(ga_event,$target_obj,event);event.type='scroll';ioq.defEventHandler(ga_event2,$target_obj,event);if(ga_event3.eid){event.type='consumed';ioq.defEventHandler(ga_event3,$target_obj,event);this.playerEvents[id].consumed++;}
this.playerState[id].paused=true;}};_l10iq.push(['addCallback','domReady',this.init,this]);}
_l10iq.push(['providePlugin','youtube',L10iYouTube,{}]);function onYouTubeIframeAPIReady(){_l10iq.push(['youtube:apiInit']);};

/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */
!function(t,e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Spinner=e()}(this,function(){"use strict";function t(t,e){var i,o=document.createElement(t||"div");for(i in e)o[i]=e[i];return o}function e(t){for(var e=1,i=arguments.length;e<i;e++)t.appendChild(arguments[e]);return t}function i(t,e,i,o){var r=["opacity",e,~~(100*t),i,o].join("-"),n=.01+i/o*100,s=Math.max(1-(1-t)/e*(100-n),t),a=l.substring(0,l.indexOf("Animation")).toLowerCase(),f=a&&"-"+a+"-"||"";return p[r]||(c.insertRule("@"+f+"keyframes "+r+"{0%{opacity:"+s+"}"+n+"%{opacity:"+t+"}"+(n+.01)+"%{opacity:1}"+(n+e)%100+"%{opacity:"+t+"}100%{opacity:"+s+"}}",c.cssRules.length),p[r]=1),r}function o(t,e){var i,o,r=t.style;if(void 0!==r[e])return e;for(e=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<f.length;o++)if(i=f[o]+e,void 0!==r[i])return i}function r(t,e){for(var i in e)t.style[o(t,i)||i]=e[i];return t}function n(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)void 0===t[o]&&(t[o]=i[o])}return t}function s(t){for(var e={x:t.offsetLeft,y:t.offsetTop};t=t.offsetParent;)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}function a(t){if(void 0===this)return new a(t);this.opts=n(t||{},a.defaults,d)}var l,f=["webkit","Moz","ms","O"],p={},c=function(){var i=t("style",{type:"text/css"});return e(document.getElementsByTagName("head")[0],i),i.sheet||i.styleSheet}(),d={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};a.defaults={},n(a.prototype,{spin:function(e){this.stop();var i,o,n=this,a=n.opts,f=n.el=r(t(0,{className:a.className}),{position:a.position,width:0,zIndex:a.zIndex}),p=a.radius+a.length+a.width;if(e&&(e.insertBefore(f,e.firstChild||null),o=s(e),i=s(f),r(f,{left:("auto"==a.left?o.x-i.x+(e.offsetWidth>>1):parseInt(a.left,10)+p)+"px",top:("auto"==a.top?o.y-i.y+(e.offsetHeight>>1):parseInt(a.top,10)+p)+"px"})),f.setAttribute("role","progressbar"),n.lines(f,n.opts),!l){var c,d=0,u=(a.lines-1)*(1-a.direction)/2,h=a.fps,y=h/a.speed,m=(1-a.opacity)/(y*a.trail/100),v=y/a.lines;!function t(){d++;for(var e=0;e<a.lines;e++)c=Math.max(1-(d+(a.lines-e)*v)%y*m,a.opacity),n.opacity(f,e*a.direction+u,c,a);n.timeout=n.el&&setTimeout(t,~~(1e3/h))}()}return n},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=void 0),this},lines:function(o,n){function s(e,i){return r(t(),{position:"absolute",width:n.length+n.width+"px",height:n.width+"px",background:e,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/n.lines*f+n.rotate)+"deg) translate("+n.radius+"px,0)",borderRadius:(n.corners*n.width>>1)+"px"})}for(var a,f=0,p=(n.lines-1)*(1-n.direction)/2;f<n.lines;f++)a=r(t(),{position:"absolute",top:1+~(n.width/2)+"px",transform:n.hwaccel?"translate3d(0,0,0)":"",opacity:n.opacity,animation:l&&i(n.opacity,n.trail,p+f*n.direction,n.lines)+" "+1/n.speed+"s linear infinite"}),n.shadow&&e(a,r(s("#000","0 0 4px #000"),{top:"2px"})),e(o,e(a,s(n.color,"0 0 1px rgba(0,0,0,.1)")));return o},opacity:function(t,e,i){e<t.childNodes.length&&(t.childNodes[e].style.opacity=i)}});var u=r(t("group"),{behavior:"url(#default#VML)"});return!o(u,"transform")&&u.adj?function(){function i(e,i){return t("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',i)}c.addRule(".spin-vml","behavior:url(#default#VML)"),a.prototype.lines=function(t,o){function n(){return r(i("group",{coordsize:f+" "+f,coordorigin:-l+" "+-l}),{width:f,height:f})}function s(t,s,a){e(c,e(r(n(),{rotation:360/o.lines*t+"deg",left:~~s}),e(r(i("roundrect",{arcsize:o.corners}),{width:l,height:o.width,left:o.radius,top:-o.width>>1,filter:a}),i("fill",{color:o.color,opacity:o.opacity}),i("stroke",{opacity:0}))))}var a,l=o.length+o.width,f=2*l,p=2*-(o.width+o.length)+"px",c=r(n(),{position:"absolute",top:p,left:p});if(o.shadow)for(a=1;a<=o.lines;a++)s(a,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(a=1;a<=o.lines;a++)s(a);return e(t,c)},a.prototype.opacity=function(t,e,i,o){var r=t.firstChild;o=o.shadow&&o.lines||0,r&&e+o<r.childNodes.length&&(r=r.childNodes[e+o],r=r&&r.firstChild,(r=r&&r.firstChild)&&(r.opacity=i))}}():l=o(u,"animation"),a});

/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */
!function(e){if("object"==typeof exports)e(require("jquery"),require("spin"));else if("function"==typeof define&&define.amd)define(["jquery","spin"],e);else{if(!window.Spinner)throw new Error("Spin.js not present");e(window.jQuery,window.Spinner)}}(function(e,n){e.fn.spin=function(s,i){return this.each(function(){var t=e(this),r=t.data();if(r.spinner&&(r.spinner.stop(),delete r.spinner),!1!==s){if(s=e.extend({color:i||t.css("color")},e.fn.spin.presets[s]||s),void 0!==s.right&&void 0!==s.length&&void 0!==s.width&&void 0!==s.radius){var p=t.css("padding-left");p=void 0===p?0:parseInt(p,10),s.left=t.outerWidth()-2*(s.length+s.width+s.radius)-p-s.right,delete s.right}r.spinner=new n(s).spin(this)}})},e.fn.spin.presets={tiny:{lines:8,length:2,width:2,radius:3},small:{lines:8,length:4,width:3,radius:5},large:{lines:10,length:8,width:4,radius:8}}}),function(e){e.fn.spin.presets.wp={trail:60,speed:1.3},e.fn.spin.presets.small=e.extend({lines:8,length:2,width:2,radius:3},e.fn.spin.presets.wp),e.fn.spin.presets.medium=e.extend({lines:8,length:4,width:3,radius:5},e.fn.spin.presets.wp),e.fn.spin.presets.large=e.extend({lines:10,length:6,width:4,radius:7},e.fn.spin.presets.wp),e.fn.spin.presets["small-left"]=e.extend({left:5},e.fn.spin.presets.small),e.fn.spin.presets["small-right"]=e.extend({right:5},e.fn.spin.presets.small),e.fn.spin.presets["medium-left"]=e.extend({left:5},e.fn.spin.presets.medium),e.fn.spin.presets["medium-right"]=e.extend({right:5},e.fn.spin.presets.medium),e.fn.spin.presets["large-left"]=e.extend({left:5},e.fn.spin.presets.large),e.fn.spin.presets["large-right"]=e.extend({right:5},e.fn.spin.presets.large)}(jQuery);

/* jshint sub: true, onevar: false, multistr: true, devel: true, smarttabs: true */
/* global jetpackCarouselStrings, DocumentTouch */
jQuery(document).ready(function(e){var t,a,i,o,s,r,n,l,c,d,p,u,m,h,f,g,j,v,w,_=110,x=e("body").css("overflow"),b=e("html").css("overflow"),y="";window.innerWidth<=760&&(_=Math.round(window.innerWidth/760*110))<40&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)&&(_=0),void 0===Date.now&&(Date.now=function(){return(new Date).getTime()});var S=function(e){switch(e.which){case 38:e.preventDefault(),o.scrollTop(o.scrollTop()-100);break;case 40:e.preventDefault(),o.scrollTop(o.scrollTop()+100);break;case 39:e.preventDefault(),i.jp_carousel("next");break;case 37:case 8:e.preventDefault(),i.jp_carousel("previous");break;case 27:e.preventDefault(),o.jp_carousel("close")}},C=function(){clearTimeout(d),d=setTimeout(function(){i.jp_carousel("slides").jp_carousel("fitSlide",!0),i.jp_carousel("updateSlidePositions",!0),i.jp_carousel("fitMeta",!0)},200)},k=function(){if(!t){t=e("<div></div>").addClass("jp-carousel-overlay").css({position:"absolute",top:0,right:0,bottom:0,left:0});var d='<a class="jp-carousel-commentlink" href="#">'+jetpackCarouselStrings.comment+"</a>";Number(jetpackCarouselStrings.is_logged_in),d=e('<div class="jp-carousel-buttons">'+d+"</div>"),c=e('<h2 itemprop="caption description"></h2>'),p=e('<div class="jp-carousel-photo-info"></div>').append(c),f=e("<div></div>").addClass("jp-carousel-image-meta").css({float:"right","margin-top":"20px",width:"250px"}),f.append(d).append("<ul class='jp-carousel-image-exif' style='display:none;'></ul>").append("<a class='jp-carousel-image-download' style='display:none;'></a>").append("<div class='jp-carousel-image-map' style='display:none;'></div>"),g=e("<div></div>").addClass("jp-carousel-titleanddesc").css({width:"100%","margin-top":f.css("margin-top")});var m='<div id="jp-carousel-comment-form-container">';jetpackCarouselStrings.local_comments_commenting_as&&jetpackCarouselStrings.local_comments_commenting_as.length&&(1!==Number(jetpackCarouselStrings.is_logged_in)&&1===Number(jetpackCarouselStrings.comment_registration)?m+='<div id="jp-carousel-comment-form-commenting-as">'+jetpackCarouselStrings.local_comments_commenting_as+"</div>":(m+='<form id="jp-carousel-comment-form">',m+='<textarea name="comment" class="jp-carousel-comment-form-field jp-carousel-comment-form-textarea" id="jp-carousel-comment-form-comment-field" placeholder="'+jetpackCarouselStrings.write_comment+'"></textarea>',m+='<div id="jp-carousel-comment-form-submit-and-info-wrapper">',m+='<div id="jp-carousel-comment-form-commenting-as">'+jetpackCarouselStrings.local_comments_commenting_as+"</div>",m+='<input type="submit" name="submit" class="jp-carousel-comment-form-button" id="jp-carousel-comment-form-button-submit" value="'+jetpackCarouselStrings.post_comment+'" />',m+='<span id="jp-carousel-comment-form-spinner">&nbsp;</span>',m+='<div id="jp-carousel-comment-post-results"></div>',m+="</div>",m+="</form>")),m+="</div>",j=e(m).css({width:"100%","margin-top":"20px",color:"#999"}),a=e("<div></div>").addClass("jp-carousel-comments").css({width:"100%",bottom:"10px","margin-top":"20px"});var h=e('<div id="jp-carousel-comments-loading"><span>'+jetpackCarouselStrings.loading_comments+"</span></div>").css({width:"100%",bottom:"10px","margin-top":"20px"}),w=e(window).width()-2*_-(f.width()+40);w+="px",v=e("<div></div>").addClass("jp-carousel-left-column-wrapper").css({width:Math.floor(w)}).append(g).append(j).append(a).append(h);var x=e("<div></div>").addClass("jp-carousel-fadeaway");n=e("<div></div>").addClass("jp-carousel-info").css({top:Math.floor(e(window).height()/100*85),left:_,right:_}).append(p).append(f),window.innerWidth<=760?(p.remove().insertAfter(g),n.prepend(v)):n.append(v);var b=e(window).height()-parseInt(n.css("top"),10)+"px";s=e("<div><span></span></div>").addClass("jp-carousel-next-button").css({right:"15px"}).hide(),r=e("<div><span></span></div>").addClass("jp-carousel-previous-button").css({left:0}).hide(),s.add(r).css({position:"fixed",top:"40px",bottom:b,width:_}),i=e("<div></div>").addClass("jp-carousel").css({position:"absolute",top:0,bottom:b,left:0,right:0}),u=e('<div class="jp-carousel-close-hint"><span>&times;</span></div>').css({position:"fixed"}),o=e("<div></div>").addClass("jp-carousel-wrap").addClass("jp-carousel-transitions"),"white"===jetpackCarouselStrings.background_color&&o.addClass("jp-carousel-light"),o.attr("itemscope",""),o.attr("itemtype","https://schema.org/ImageGallery"),o.css({position:"fixed",top:0,right:0,bottom:0,left:0,"z-index":2147483647,"overflow-x":"hidden","overflow-y":"auto",direction:"ltr"}).hide().append(t).append(i).append(x).append(n).append(s).append(r).append(u).appendTo(e("body")).click(function(t){var a=e(t.target),s=a.parents("div.jp-carousel-wrap"),r=s.data("carousel-extra"),l=s.find("div.selected"),c=l.data("attachment-id");if(r=r||[],a.is(i)||a.parents().add(a).is(u))o.jp_carousel("close");else if(a.hasClass("jp-carousel-commentlink"))t.preventDefault(),t.stopPropagation(),e(window).unbind("keydown",S),o.animate({scrollTop:parseInt(n.position().top,10)},"fast"),e("#jp-carousel-comment-form-submit-and-info-wrapper").slideDown("fast"),e("#jp-carousel-comment-form-comment-field").focus();else if(a.hasClass("jp-carousel-comment-login")){var d=jetpackCarouselStrings.login_url+"%23jp-carousel-"+c;window.location.href=d}else if(a.parents("#jp-carousel-comment-form-container").length){var p=e("#jp-carousel-comment-form-comment-field").blur(function(){e(window).bind("keydown",S)}).focus(function(){e(window).unbind("keydown",S)}),m=e("#jp-carousel-comment-form-email-field").blur(function(){e(window).bind("keydown",S)}).focus(function(){e(window).unbind("keydown",S)}),h=e("#jp-carousel-comment-form-author-field").blur(function(){e(window).bind("keydown",S)}).focus(function(){e(window).unbind("keydown",S)}),f=e("#jp-carousel-comment-form-url-field").blur(function(){e(window).bind("keydown",S)}).focus(function(){e(window).unbind("keydown",S)});if(p&&p.attr("id")===a.attr("id"))e(window).unbind("keydown",S),e("#jp-carousel-comment-form-submit-and-info-wrapper").slideDown("fast");else if(a.is('input[type="submit"]')){t.preventDefault(),t.stopPropagation(),e("#jp-carousel-comment-form-spinner").spin("small","white");var g={action:"post_attachment_comment",nonce:jetpackCarouselStrings.nonce,blog_id:r.blog_id,id:c,comment:p.val()};if(!g.comment.length)return void i.jp_carousel("postCommentError",{field:"jp-carousel-comment-form-comment-field",error:jetpackCarouselStrings.no_comment_text});if(1!==Number(jetpackCarouselStrings.is_logged_in)&&(g.email=m.val(),g.author=h.val(),g.url=f.val(),1===Number(jetpackCarouselStrings.require_name_email))){if(!g.email.length||!g.email.match("@"))return void i.jp_carousel("postCommentError",{field:"jp-carousel-comment-form-email-field",error:jetpackCarouselStrings.no_comment_email});if(!g.author.length)return void i.jp_carousel("postCommentError",{field:"jp-carousel-comment-form-author-field",error:jetpackCarouselStrings.no_comment_author})}e.ajax({type:"POST",url:jetpackCarouselStrings.ajaxurl,data:g,dataType:"json",success:function(t){"approved"===t.comment_status?e("#jp-carousel-comment-post-results").slideUp("fast").html('<span class="jp-carousel-comment-post-success">'+jetpackCarouselStrings.comment_approved+"</span>").slideDown("fast"):"unapproved"===t.comment_status?e("#jp-carousel-comment-post-results").slideUp("fast").html('<span class="jp-carousel-comment-post-success">'+jetpackCarouselStrings.comment_unapproved+"</span>").slideDown("fast"):e("#jp-carousel-comment-post-results").slideUp("fast").html('<span class="jp-carousel-comment-post-error">'+jetpackCarouselStrings.comment_post_error+"</span>").slideDown("fast"),i.jp_carousel("clearCommentTextAreaValue"),i.jp_carousel("getComments",{attachment_id:c,offset:0,clear:!0}),e("#jp-carousel-comment-form-button-submit").val(jetpackCarouselStrings.post_comment),e("#jp-carousel-comment-form-spinner").spin(!1)},error:function(){i.jp_carousel("postCommentError",{field:"jp-carousel-comment-form-comment-field",error:jetpackCarouselStrings.comment_post_error})}})}}else a.parents(".jp-carousel-info").length||o.jp_carousel("next")}).bind("jp_carousel.afterOpen",function(){e(window).bind("keydown",S),e(window).bind("resize",C),i.opened=!0,C()}).bind("jp_carousel.beforeClose",function(){var t=e(window).scrollTop();e(window).unbind("keydown",S),e(window).unbind("resize",C),e(window).scrollTop(t),e(".jp-carousel-previous-button").hide(),e(".jp-carousel-next-button").hide()}).bind("jp_carousel.afterClose",function(){window.location.hash&&history.back&&history.back(),y="",i.opened=!1}).on("transitionend.jp-carousel ",".jp-carousel-slide",function(t){if("transform"===t.originalEvent.propertyName){var a=(Date.now()-l)/1e3/t.originalEvent.elapsedTime;o.off("transitionend.jp-carousel"),a>=2&&e(".jp-carousel-transitions").removeClass("jp-carousel-transitions")}}),e(".jp-carousel-wrap").touchwipe({wipeLeft:function(e){e.preventDefault(),i.jp_carousel("next")},wipeRight:function(e){e.preventDefault(),i.jp_carousel("previous")},preventDefaultEvents:!1}),s.add(r).click(function(e){e.preventDefault(),e.stopPropagation(),s.is(this)?i.jp_carousel("next"):i.jp_carousel("previous")})}},I=function(){e("a img[data-attachment-id]").each(function(){var t=e(this).parent();if(!t.parent(".gallery-icon").length&&void 0!==e(t).attr("href")){var a=!1;e(t).attr("href").split("?")[0]===e(this).attr("data-orig-file").split("?")[0]&&1===Number(jetpackCarouselStrings.single_image_gallery_media_file)&&(a=!0),e(t).attr("href")===e(this).attr("data-permalink")&&(a=!0),a&&(e(t).addClass("single-image-gallery"),e(t).data("carousel-extra",{blog_id:Number(jetpackCarouselStrings.blog_id)}))}})},D={testForData:function(t){return t=e(t),!(!t.length||!t.data("carousel-extra"))},testIfOpened:function(){return!(void 0===i||void 0===i.opened||!i.opened)},openOrSelectSlide:function(t){e(this).jp_carousel("testIfOpened")?i.jp_carousel("selectSlideAtIndex",t):e(this).jp_carousel("open",{start_index:t})},open:function(t){var a={items_selector:".gallery-item [data-attachment-id], .tiled-gallery-item [data-attachment-id], img[data-attachment-id]",start_index:0},s=e(this).data("carousel-extra");if(s&&(k(),!i.jp_carousel("testIfOpened")))return x=e("body").css("overflow"),e("body").css("overflow","hidden"),b=e("html").css("overflow"),e("html").css("overflow","hidden"),w=e(window).scrollTop(),o.data("carousel-extra",s),this.each(function(){var s=e(this);t&&e.extend(a,t),-1===a.start_index&&(a.start_index=0),o.trigger("jp_carousel.beforeOpen").fadeIn("fast",function(){o.trigger("jp_carousel.afterOpen"),i.jp_carousel("initSlides",s.find(a.items_selector),a.start_index).jp_carousel("selectSlideAtIndex",a.start_index)}),i.html("")})},selectSlideAtIndex:function(e){var t=this.jp_carousel("slides"),a=t.eq(e);return 0===a.length&&(a=t.eq(0)),i.jp_carousel("selectSlide",a,!1),this},close:function(){return e("body").css("overflow",x),e("html").css("overflow",b),this.jp_carousel("clearCommentTextAreaValue"),o.trigger("jp_carousel.beforeClose").fadeOut("fast",function(){o.trigger("jp_carousel.afterClose"),e(window).scrollTop(w)})},next:function(){this.jp_carousel("previousOrNext","nextSlide")},previous:function(){this.jp_carousel("previousOrNext","prevSlide")},previousOrNext:function(e){if(!this.jp_carousel("hasMultipleImages"))return!1;var t=i.jp_carousel(e);t&&(o.animate({scrollTop:0},"fast"),this.jp_carousel("clearCommentTextAreaValue"),this.jp_carousel("selectSlide",t))},selectedSlide:function(){return this.find(".selected")},setSlidePosition:function(e){return l=Date.now(),this.css({"-webkit-transform":"translate3d("+e+"px,0,0)","-moz-transform":"translate3d("+e+"px,0,0)","-ms-transform":"translate("+e+"px,0)","-o-transform":"translate("+e+"px,0)",transform:"translate3d("+e+"px,0,0)"})},updateSlidePositions:function(e){var t=this.jp_carousel("selectedSlide"),a=i.width(),o=t.width(),s=i.jp_carousel("prevSlide"),r=i.jp_carousel("nextSlide"),n=s.prev(),l=r.next(),c=Math.floor(.5*(a-o));t.jp_carousel("setSlidePosition",c).show(),i.jp_carousel("fitInfo",e),1==(h.is(t.prevAll())?1:-1)?(l.is(s)||l.jp_carousel("setSlidePosition",a+r.width()).show(),n.is(r)||n.jp_carousel("setSlidePosition",-n.width()-o).show()):l.is(s)||l.jp_carousel("setSlidePosition",a+o).show(),s.jp_carousel("setSlidePosition",Math.floor(-s.width()+.75*_)).show(),r.jp_carousel("setSlidePosition",Math.ceil(a-.75*_)).show()},selectSlide:function(t,a){h=this.find(".selected").removeClass("selected");var s,r,n=i.jp_carousel("slides").css({position:"fixed"}),l=e(t).addClass("selected").css({position:"relative"}),d=l.data("attachment-id"),p=i.jp_carousel("prevSlide"),u=i.jp_carousel("nextSlide"),m=p.prev(),f=u.next();i.jp_carousel("loadFullImage",l),c.hide(),0===u.length&&n.length<=2?e(".jp-carousel-next-button").hide():e(".jp-carousel-next-button").show(),0===p.length&&n.length<=2?e(".jp-carousel-previous-button").hide():e(".jp-carousel-previous-button").show(),s=l.add(p).add(m).add(u).add(f).jp_carousel("loadSlide"),n.not(s).hide(),i.jp_carousel("updateSlidePositions",a),o.trigger("jp_carousel.selectSlide",[l]),i.jp_carousel("getTitleDesc",{title:l.data("title"),desc:l.data("desc")});var g=l.data("image-meta");i.jp_carousel("updateExif",g),i.jp_carousel("updateFullSizeLink",l),i.jp_carousel("updateMap",g),i.jp_carousel("testCommentsOpened",l.data("comments-opened")),i.jp_carousel("getComments",{attachment_id:d,offset:0,clear:!0}),e("#jp-carousel-comment-post-results").slideUp(),l.data("caption")?(r=e("<div />").text(l.data("caption")).html(),r===e("<div />").text(l.data("title")).html()&&e(".jp-carousel-titleanddesc-title").fadeOut("fast").empty(),r===e("<div />").text(l.data("desc")).html()&&e(".jp-carousel-titleanddesc-desc").fadeOut("fast").empty(),c.html(l.data("caption")).fadeIn("slow")):c.fadeOut("fast").empty(),jetpackCarouselStrings.stats&&((new Image).src=document.location.protocol+"//pixel.wp.com/g.gif?"+jetpackCarouselStrings.stats+"&post="+encodeURIComponent(d)+"&rand="+Math.random()),e(u).add(p).each(function(){i.jp_carousel("loadFullImage",e(this))}),window.location.hash=y="#jp-carousel-"+d},slides:function(){return this.find(".jp-carousel-slide")},slideDimensions:function(){return{width:e(window).width()-2*_,height:Math.floor(e(window).height()/100*85-60)}},loadSlide:function(){return this.each(function(){var t=e(this);t.find("img").one("load",function(){t.jp_carousel("fitSlide",!1)})})},bestFit:function(){var e,t,a=i.jp_carousel("slideDimensions"),o=this.jp_carousel("originalDimensions"),s=o.width/o.height,r=1,n=1;return o.width>a.width&&(r=a.width/o.width),o.height>a.height&&(n=a.height/o.height),r<n?(e=a.width,t=Math.floor(e/s)):n<r?(t=a.height,e=Math.floor(t*s)):(e=o.width,t=o.height),{width:e,height:t}},fitInfo:function(){var e=this.jp_carousel("selectedSlide"),t=e.jp_carousel("bestFit");return p.css({left:Math.floor(.5*(n.width()-t.width)),width:Math.floor(t.width)}),this},fitMeta:function(t){var a={top:Math.floor(e(window).height()/100*85+5)+"px"},i={width:n.width()-(f.width()+80)+"px"};t?(n.animate(a),v.animate(i)):(n.animate(a),v.css(i))},fitSlide:function(){return this.each(function(){var t=e(this),a=t.jp_carousel("bestFit"),o=i.jp_carousel("slideDimensions");a.left=0,a.top=Math.floor(.5*(o.height-a.height))+40,t.css(a)})},texturize:function(t){return t=""+t,t=t.replace(/'/g,"&#8217;").replace(/&#039;/g,"&#8217;").replace(/[\u2019]/g,"&#8217;"),t=t.replace(/"/g,"&#8221;").replace(/&#034;/g,"&#8221;").replace(/&quot;/g,"&#8221;").replace(/[\u201D]/g,"&#8221;"),t=t.replace(/([\w]+)=&#[\d]+;(.+?)&#[\d]+;/g,'$1="$2"'),e.trim(t)},initSlides:function(t,a){t.length<2?e(".jp-carousel-next-button, .jp-carousel-previous-button").hide():e(".jp-carousel-next-button, .jp-carousel-previous-button").show(),t.each(function(){var t,a=e(this),o=a.data("orig-size")||"",s=i.jp_carousel("slideDimensions"),r=o.split(","),n=a.data("medium-file")||"",l=a.data("large-file")||"";o={width:parseInt(r[0],10),height:parseInt(r[1],10)},t=a.data("orig-file"),t=i.jp_carousel("selectBestImageSize",{orig_file:t,orig_width:o.width,orig_height:o.height,max_width:s.width,max_height:s.height,medium_file:n,large_file:l}),e(this).data("gallery-src",t)}),0!==a&&(e("<img/>")[0].src=e(t[a]).data("gallery-src"));var o=t.first().closest(".tiled-gallery.type-rectangular").length>0;return t.each(function(t){var s=e(this),r=s.data("attachment-id")||0,n=s.data("comments-opened")||0,l=s.data("image-meta")||{},c=s.data("orig-size")||"",d={width:s[0].naturalWidth,height:s[0].naturalHeight},p=s.data("image-title")||"",u=s.data("image-description")||"",m=s.parents(".gallery-item").find(".gallery-caption").html()||"",h=s.data("gallery-src")||"",f=s.data("medium-file")||"",g=s.data("large-file")||"",j=s.data("orig-file")||"",v=s.parents("div.tiled-gallery-item").find("div.tiled-gallery-caption").html();if(v&&(m=v),r&&c.length){p=i.jp_carousel("texturize",p),u=i.jp_carousel("texturize",u),m=i.jp_carousel("texturize",m);var w=e("<img/>").attr("src","data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7").css("width","100%").css("height","100%"),_=e('<div class="jp-carousel-slide" itemprop="associatedMedia" itemscope itemtype="https://schema.org/ImageObject"></div>').hide().css({left:t<a?-1e3:i.width()}).append(w).appendTo(i).data("src",h).data("title",p).data("desc",u).data("caption",m).data("attachment-id",r).data("permalink",s.parents("a").attr("href")).data("orig-size",c).data("comments-opened",n).data("image-meta",l).data("medium-file",f).data("large-file",g).data("orig-file",j).data("thumb-size",d);o&&_.data("preview-image",s.attr("src")).css({"background-image":'url("'+s.attr("src")+'")',"background-size":"100% 100%","background-position":"center center"}),_.jp_carousel("fitSlide",!1)}}),this},selectBestImageSize:function(e){if("object"!=typeof e&&(e={}),void 0===e.orig_file)return"";if(void 0===e.orig_width||void 0===e.max_width)return e.orig_file;if(void 0===e.medium_file||void 0===e.large_file)return e.orig_file;var t=document.createElement("a");t.href=e.large_file;var a=null!=t.hostname.match(/^i[\d]{1}.wp.com$/i),o=i.jp_carousel("getImageSizeParts",e.medium_file,e.orig_width,a),s=i.jp_carousel("getImageSizeParts",e.large_file,e.orig_width,a),r=parseInt(s[0],10),n=parseInt(s[1],10),l=parseInt(o[0],10),c=parseInt(o[1],10);if(e.orig_max_width=e.max_width,e.orig_max_height=e.max_height,void 0!==window.devicePixelRatio&&window.devicePixelRatio>1&&(e.max_width=e.max_width*window.devicePixelRatio,e.max_height=e.max_height*window.devicePixelRatio),r>=e.max_width||n>=e.max_height)return e.large_file;if(l>=e.max_width||c>=e.max_height)return e.medium_file;if(a){var d=e.large_file.lastIndexOf("?"),p=e.large_file;return-1!==d&&(p=e.large_file.substring(0,d),(e.orig_width>e.max_width||e.orig_height>e.max_height)&&(p+="?fit="+e.orig_max_width+"%2C"+e.orig_max_height)),p}return e.orig_file},getImageSizeParts:function(e,t,a){var i=a?e.replace(/.*=([\d]+%2C[\d]+).*$/,"$1"):e.replace(/.*-([\d]+x[\d]+)\..+$/,"$1"),o=i!==e?a?i.split("%2C"):i.split("x"):[t,0];return"9999"===o[0]&&(o[0]="0"),"9999"===o[1]&&(o[1]="0"),o},originalDimensions:function(){var t=e(this).data("orig-size").split(",");return{width:parseInt(t[0],10),height:parseInt(t[1],10)}},format:function(e){if("object"!=typeof e&&(e={}),e.text&&void 0!==e.text)return e.replacements&&void 0!==e.replacements?e.text.replace(/{(\d+)}/g,function(t,a){return void 0!==e.replacements[a]?e.replacements[a]:t}):e.text},shutterSpeed:function(e){return e>=1?Math.round(10*e)/10+"s":"1/"+Math.round(1/e)+"s"},parseTitleDesc:function(t){return!t.match(" ")&&t.match("_")?"":(e(["CIMG","DSC_","DSCF","DSCN","DUW","GEDC","IMG","JD","MGP","PICT","Imagen","Foto","DSC","Scan","SANY","SAM","Screen Shot [0-9]+"]).each(function(e,a){if(new RegExp("^"+a).test(t))return void(t="")}),t)},getTitleDesc:function(t){var a,o="",s="",r="";a=e("div.jp-carousel-titleanddesc","div.jp-carousel-wrap"),a.hide(),o=i.jp_carousel("parseTitleDesc",t.title)||"",s=i.jp_carousel("parseTitleDesc",t.desc)||"",(o.length||s.length)&&(e("<div />").html(o).text()===e("<div />").html(s).text()&&(o=""),r=o.length?'<div class="jp-carousel-titleanddesc-title">'+o+"</div>":"",r+=s.length?'<div class="jp-carousel-titleanddesc-desc">'+s+"</div>":"",a.html(r).fadeIn("slow")),e("div#jp-carousel-comment-form-container").css("margin-top","20px"),e("div#jp-carousel-comments-loading").css("margin-top","20px")},updateExif:function(t){if(!t||1!==Number(jetpackCarouselStrings.display_exif))return!1;var a=e("<ul class='jp-carousel-image-exif'></ul>");e.each(t,function(t,o){if(0!==parseFloat(o)&&o.length&&-1!==e.inArray(t,e.makeArray(jetpackCarouselStrings.meta_data))){switch(t){case"focal_length":o+="mm";break;case"shutter_speed":o=i.jp_carousel("shutterSpeed",o);break;case"aperture":o="f/"+o}a.append("<li><h5>"+jetpackCarouselStrings[t]+"</h5>"+o+"</li>")}}),e("div.jp-carousel-image-meta ul.jp-carousel-image-exif").replaceWith(a)},updateFullSizeLink:function(t){if(!t||!t.data)return!1;var a,o=t.data("orig-size").split(","),s=document.createElement("a");s.href=t.data("src").replace(/\?.+$/,""),a=null!==s.hostname.match(/^i[\d]{1}.wp.com$/i)?s.href:t.data("orig-file").replace(/\?.+$/,"");var r=e("<a>"+i.jp_carousel("format",{text:jetpackCarouselStrings.download_original,replacements:o})+"</a>").addClass("jp-carousel-image-download").attr("href",a).attr("target","_blank");e("div.jp-carousel-image-meta a.jp-carousel-image-download").replaceWith(r)},updateMap:function(t){if(t.latitude&&t.longitude&&1===Number(jetpackCarouselStrings.display_geo)){var a=t.latitude,i=t.longitude,o=e("div.jp-carousel-image-meta","div.jp-carousel-wrap"),s=e("<div></div>"),r="&scale=2&style=feature:all|element:all|invert_lightness:true|hue:0x0077FF|saturation:-50|lightness:-5|gamma:0.91";s.addClass("jp-carousel-image-map").html('<img width="154" height="154" src="https://maps.googleapis.com/maps/api/staticmap?\t\t\t\t\t\t\tcenter='+a+","+i+"&\t\t\t\t\t\t\tzoom=8&\t\t\t\t\t\t\tsize=154x154&\t\t\t\t\t\t\tsensor=false&\t\t\t\t\t\t\tmarkers=size:medium%7Ccolor:blue%7C"+a+","+i+r+'" class="gmap-main" />\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="gmap-topright"><div class="imgclip"><img width="175" height="154" src="https://maps.googleapis.com/maps/api/staticmap?\t\t\t\t\t\t\tcenter='+a+","+i+"&\t\t\t\t\t\t\tzoom=3&\t\t\t\t\t\t\tsize=175x154&\t\t\t\t\t\t\tsensor=false&\t\t\t\t\t\t\tmarkers=size:small%7Ccolor:blue%7C"+a+","+i+r+'"c /></div></div>\t\t\t\t\t\t\t\t\t\t\t\t\t').prependTo(o)}},testCommentsOpened:function(t){1===parseInt(t,10)?(e(".jp-carousel-buttons").fadeIn("fast"),j.fadeIn("fast")):(e(".jp-carousel-buttons").fadeOut("fast"),j.fadeOut("fast"))},getComments:function(t){if(clearInterval(m),"object"==typeof t&&void 0!==t.attachment_id&&t.attachment_id){(!t.offset||void 0===t.offset||t.offset<1)&&(t.offset=0);var a=e(".jp-carousel-comments"),o=e("#jp-carousel-comments-loading").show();t.clear&&a.hide().empty(),e.ajax({type:"GET",url:jetpackCarouselStrings.ajaxurl,dataType:"json",data:{action:"get_attachment_comments",nonce:jetpackCarouselStrings.nonce,id:t.attachment_id,offset:t.offset},success:function(s){t.clear&&a.fadeOut("fast").empty(),e(s).each(function(){var o=e("<div></div>").addClass("jp-carousel-comment").attr("id","jp-carousel-comment-"+this.id).html('<div class="comment-gravatar">'+this.gravatar_markup+'</div><div class="comment-author">'+this.author_markup+'</div><div class="comment-date">'+this.date_gmt+'</div><div class="comment-content">'+this.content+"</div>");a.append(o),clearInterval(m),m=setInterval(function(){e(".jp-carousel-overlay").height()-150<e(".jp-carousel-wrap").scrollTop()+e(window).height()&&(i.jp_carousel("getComments",{attachment_id:t.attachment_id,offset:t.offset+10,clear:!1}),clearInterval(m))},300)});var r=e(".jp-carousel div.selected");if(r&&r.data&&r.data("attachment-id")!=t.attachment_id)return a.fadeOut("fast"),void a.empty();e(".jp-carousel-overlay").height(e(window).height()+g.height()+j.height()+(a.height()>0?a.height():f.height())+200),a.show(),o.hide()},error:function(e,t,i){console.log("Comment get fail...",e,t,i),a.fadeIn("fast"),o.fadeOut("fast")}})}},postCommentError:function(t){"object"!=typeof t&&(t={}),t.field&&void 0!==t.field&&t.error&&void 0!==t.error&&(e("#jp-carousel-comment-post-results").slideUp("fast").html('<span class="jp-carousel-comment-post-error">'+t.error+"</span>").slideDown("fast"),e("#jp-carousel-comment-form-spinner").spin(!1))},setCommentIframeSrc:function(t){var a=e("#jp-carousel-comment-iframe");a&&a.length&&(a.attr("src",a.attr("src").replace(/(postid=)\d+/,"$1"+t)),a.attr("src",a.attr("src").replace(/(%23.+)?$/,"%23jp-carousel-"+t)))},clearCommentTextAreaValue:function(){var t=e("#jp-carousel-comment-form-comment-field");t&&t.val("")},nextSlide:function(){var e=this.jp_carousel("slides"),t=this.jp_carousel("selectedSlide");return 0===t.length||e.length>2&&t.is(e.last())?e.first():t.next()},prevSlide:function(){var e=this.jp_carousel("slides"),t=this.jp_carousel("selectedSlide");return 0===t.length||e.length>2&&t.is(e.first())?e.last():t.prev()},loadFullImage:function(t){var a=t.find("img:first");a.data("loaded")||(a.on("load.jetpack",function(){a.off("load.jetpack"),e(this).closest(".jp-carousel-slide").css("background-image","")}),!t.data("preview-image")||t.data("thumb-size")&&t.width()>t.data("thumb-size").width?a.attr("src",a.closest(".jp-carousel-slide").data("src")).attr("itemprop","image"):a.attr("src",t.data("preview-image")).attr("itemprop","image"),a.data("loaded",1))},hasMultipleImages:function(){return i.jp_carousel("slides").length>1}};e.fn.jp_carousel=function(t){return D[t]?D[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist on jQuery.jp_carousel"):D.open.apply(this,arguments)},e(document.body).on("click.jp-carousel","div.gallery,div.tiled-gallery, a.single-image-gallery",function(t){e(this).jp_carousel("testForData",t.currentTarget)&&(e(t.target).parent().hasClass("gallery-caption")||(t.preventDefault(),t.stopPropagation(),e(this).jp_carousel("open",{start_index:e(this).find(".gallery-item, .tiled-gallery-item").index(e(t.target).parents(".gallery-item, .tiled-gallery-item"))})))}),1===Number(jetpackCarouselStrings.single_image_gallery)&&(I(),e(document.body).on("post-load",function(){I()})),e(window).on("hashchange.jp-carousel",function(){var t,a,s,r,n=/jp-carousel-(\d+)/;if(!window.location.hash||!n.test(window.location.hash))return void(i&&i.opened&&o.jp_carousel("close"));if(window.location.hash!==y||!i.opened){if(window.location.hash&&i&&!i.opened&&history.back)return void history.back();y=window.location.hash,t=window.location.hash.match(n),a=parseInt(t[1],10),s=e("div.gallery, div.tiled-gallery, a.single-image-gallery"),s.each(function(t,i){if(e(i).find("img").each(function(t,o){if(e(o).data("attachment-id")===parseInt(a,10))return r={index:t,gallery:i},!1}),r)return e(r.gallery).jp_carousel("openOrSelectSlide",r.index),!1})}}),window.location.hash&&e(window).trigger("hashchange")}),function(e){e.fn.touchwipe=function(t){var a={min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:!0};return t&&e.extend(a,t),this.each(function(){function e(){this.removeEventListener("touchmove",t),o=null,r=!1}function t(t){if(a.preventDefaultEvents&&t.preventDefault(),r){var i=t.touches[0].pageX,n=t.touches[0].pageY,l=o-i,c=s-n;Math.abs(l)>=a.min_move_x?(e(),l>0?a.wipeLeft(t):a.wipeRight(t)):Math.abs(c)>=a.min_move_y&&(e(),c>0?a.wipeDown(t):a.wipeUp(t))}}function i(e){1===e.touches.length&&(o=e.touches[0].pageX,s=e.touches[0].pageY,r=!0,this.addEventListener("touchmove",t,!1))}var o,s,r=!1;"ontouchstart"in document.documentElement&&this.addEventListener("touchstart",i,!1)}),this}}(jQuery);