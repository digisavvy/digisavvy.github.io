/*!
 * Custom v1.0
 * Contains handlers for the offcanvas menu
 *
 * @package some_like_it_neat
 * Code generously borrowed with modification from https://designorbital.com
 */
(function($){'use strict';var slin={menuInit:function(){$('.site-header-menu .page_item_has_children > a, .site-header-menu .menu-item-has-children > a').append('<button class="dropdown-toggle" aria-expanded="false"/>');$('.site-header-menu .dropdown-toggle').off('click').on('click',function(e){e.preventDefault();$(this).toggleClass('toggle-on');$(this).parent().next('.children, .sub-menu').toggleClass('toggle-on');$(this).attr('aria-expanded',$(this).attr('aria-expanded')==='false'?'true':'false');});},offCanvasMenuInit:function(){var siteHeader=$('.site-header');var mainNav=$('.main-navigation-inside');setTimeout(function(){var siteHeaderHeight=siteHeader.outerHeight();mainNav.css({'margin-top':siteHeaderHeight,'height':'calc(100% - '+siteHeaderHeight+'px)'});},500);},overlayInit:function(){var overlay=$('.overlay');var hamburger=$('.hamburger');var sidebarOpen=$('.sidebar-control-wrapper');var sidebarClose=$('.sidebar-close-control');hamburger.off('click').on('click',function(e){e.preventDefault();e.stopPropagation();slin.overlayActionInit('menu');});sidebarOpen.off('click').on('click',function(e){e.preventDefault();e.stopPropagation();slin.overlayActionInit('sidebar');});sidebarClose.off('click').on('click',function(){slin.overlayActionInit('close');});overlay.off('click').on('click',function(){slin.overlayActionInit('close');});},overlayActionInit:function(overlayAction){var body=$('body');var hamburger=$('.hamburger');var sidebarClose=$('.sidebar-close-control');if(body.hasClass('has-overlay-open')){hamburger.removeClass('active');body.removeClass('has-menu-open');body.removeClass('has-sidebar-open');sidebarClose.removeClass('active');body.removeClass('has-overlay-open');}else{if('menu'===overlayAction){hamburger.addClass('active');body.addClass('has-menu-open');body.addClass('has-overlay-open');}else if('sidebar'===overlayAction){body.addClass('has-sidebar-open');setTimeout(function(){sidebarClose.addClass('active');},1000);body.addClass('has-overlay-open');}}}};$(document).ready(function(){slin.menuInit();slin.offCanvasMenuInit();slin.overlayInit();});$(window).on('debouncedresize',function(){slin.offCanvasMenuInit();});$(document).keyup(function(e){if(e.keyCode===27){slin.overlayActionInit('esc');}});})(jQuery);