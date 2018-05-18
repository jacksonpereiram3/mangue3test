/*
* PHLY - Versatile Coming Soon Template
* Build Date: October 2015
* Author: Madeon08
* Copyright (C) 2015 Madeon08
* This is a premium product available exclusively here : http://themeforest.net/user/Madeon08/portfolio
*/

/*  TABLE OF CONTENTS
---------------------------
1. Loading / Opening
2. Action Buttons
3. Scroll plugins
4. Newsletter
5. PhotoSwipe Gallery Init
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(window).load(function(){
    "use strict";
    
    setTimeout(function(){
        $('#preloader').velocity({
            
            opacity: "0",
            
            complete: function(){
                $("#loading").velocity("fadeOut", {
                    duration: 1000,
                    easing: [0.7,0,0.3,1],
                }); 
            }
        })
        
    },1000);
    
    setTimeout(function(){
        $('.global-overlay').velocity({
            
            translateX : "100%",
            opacity : "1",
            
        },
        
        {
            duration: 1000,
            easing: [0.7,0,0.3,1],
        })
        
        $(".map-container").addClass("fadeInRight").removeClass('opacity-0');
        
    },1000);
    
    setTimeout(function(){
        $('#left-side').velocity({
            
            opacity : "1",
            
            complete: function(){
                
                setTimeout(function() {
                    $('.text-intro').each(function(i) {
                        (function(self) {
                            setTimeout(function() {
                                $(self).addClass('animated-middle fadeInUp').removeClass('opacity-0');
                            },(i*150)+150);
                        })(this);
                    });
                }, 0);
            }
            
        },
        
        {
            duration: 1000,
            easing: [0.7,0,0.3,1],
        })
        
    },1600);
    
})

$(document).ready(function(){
    "use strict";
    
    /* ------------------------------------- */
    /* 2. Action Buttons ................... */
    /* ------------------------------------- */
    
    var overlay            = $(".overlay");
    var right_side_form    = $("#right-side");
    var right_side_clients = $("#right-side-clients");
    
    /**
    * abre ou fecha a tela de form
    * 
    * @param {string} status 
    * 
    */
    function toggleRightSideForm (status = null) {
        if (status === 'hidden') {
            right_side_form.toggleClass('hidden');
            if(right_side_form.hasClass('open') && right_side_form.hasClass('hidden')){
                right_side_form.toggleClass('open');
            }
            
            right_side_form.toggleClass("hide-right");
            $("#close-right-side-form").toggleClass("hide-close");
            $('.mCSB_scrollTools').toggleClass('mCSB_scrollTools-left');
            $("#mcs_container").mCustomScrollbar("scrollTo", "#right-side",{
                scrollInertia:500,
                callbacks:false
            });
        } else {
            right_side_form.toggleClass("hide-right");
            $("#close-right-side-form").toggleClass("hide-close");
            $('.mCSB_scrollTools').toggleClass('mCSB_scrollTools-left');
            $("#mcs_container").mCustomScrollbar("scrollTo", "#right-side",{
                scrollInertia:500,
                callbacks:false
            });
            right_side_form.toggleClass('hidden');
        }
        if(!right_side_form.hasClass('hidden')){
            right_side_form.toggleClass('open');
        }
        else if(right_side_form.hasClass('open') && right_side_clients.hasClass('hidden')){
            
            $('a#open-clients-info').on( "click", setTimeout( function() {
                event.preventDefault();
                right_side_form.toggleClass('open');
                right_side_clients.toggleClass('open');
                var target = "#" + this.getAttribute('data-target');
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 500, 'swing');
            }, 0));
        }
        else{
            right_side_form.removeClass('open');
        }
    }
    
    /**
    * abre ou fecha a tela de clients
    *
    * @param {string} status  
    * 
    */
    function toggleRightSideClients (status = null) {
        if (status === 'hidden') {
            right_side_clients.toggleClass('hidden');
            if(right_side_clients.hasClass('open') && right_side_clients.hasClass('hidden')){
                right_side_clients.toggleClass('open');
            }
            
            right_side_clients.toggleClass("hide-right-clients");
            $("#close-right-side-clients").toggleClass("hide-close");
            $('.mCSB_scrollTools').toggleClass('mCSB_scrollTools-left');
            $("#mcs_container").mCustomScrollbar("scrollTo", "#right-side-clients",{
                scrollInertia:500,
                callbacks:false
            });
        } else {
            right_side_clients.toggleClass("hide-right-clients");
            $("#close-right-side-clients").toggleClass("hide-close");
            $('.mCSB_scrollTools').toggleClass('mCSB_scrollTools-left');
            $("#mcs_container").mCustomScrollbar("scrollTo", "#right-side-clients",{
                scrollInertia:500,
                callbacks:false
            });
            right_side_clients.toggleClass('hidden');
        }
        if(!right_side_clients.hasClass('hidden')){
            right_side_clients.toggleClass('open');
        }
        else if(right_side_clients.hasClass('open') && right_side_form.hasClass('hidden')){
            
            $('a#open-more-info').on( "click", setTimeout( function() {
                event.preventDefault();
                right_side_clients.toggleClass('open');
                right_side_form.toggleClass('open');
                var target = "#" + this.getAttribute('data-target');
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 500, 'swing');
            }, 0));
        }
        else{
            right_side_clients.removeClass('open');
        }
    }
    
    /**
    * verifica se o formulário de contato já foi aberto
    * verifica se a página de clientes já foi aberta
    * verifica se o overlay já foi aberto
    * muda o status da tela de form
    * 
    * @param {boolean} right_side_form_is_hiden 
    * @param {boolean} right_side_clients_is_hiden 
    * @param {boolean} overlay_has_skew_part 
    * 
    */
    function switchToggleForm (right_side_form_is_hiden, right_side_clients_is_hiden, overlay_has_skew_part){
        if ( !right_side_form_is_hiden && !overlay_has_skew_part ) {
            overlay.toggleClass('skew-part');
            toggleRightSideForm();
        } 
        else if ( right_side_form_is_hiden && !overlay_has_skew_part && !right_side_clients_is_hiden ) {
            toggleRightSideClients('hidden');
            toggleRightSideForm();
        } else if ( right_side_form_is_hiden && overlay_has_skew_part  ) {
            overlay.toggleClass('skew-part');
            toggleRightSideForm('hidden');
        }
    }
    
    /**
    * verifica se o formulário de contato já foi aberto
    * verifica se a página de clientes já foi aberta
    * verifica se o overlay já foi aberto
    * muda o status da tela de clients
    * 
    * @param {boolean} right_side_form_is_hiden 
    * @param {boolean} right_side_clients_is_hiden 
    * @param {boolean} overlay_has_skew_part 
    * 
    */
    function switchToggleClient (right_side_form_is_hiden, right_side_clients_is_hiden, overlay_has_skew_part){
        if ( !right_side_clients_is_hiden && !overlay_has_skew_part ) {
            overlay.toggleClass('skew-part');
            toggleRightSideClients();
        } 
        else if ( right_side_clients_is_hiden && !overlay_has_skew_part && !right_side_form_is_hiden ) {
            toggleRightSideForm('hidden');
            toggleRightSideClients();
        } else if ( right_side_clients_is_hiden && overlay_has_skew_part  ) {
            overlay.toggleClass('skew-part');
            toggleRightSideClients('hidden');
        }
    }
    
    /** 
    * abre a tela de form
    * 
    */
    $('a#open-more-info').on( "click", function() {
        var right_side_form_is_hiden         = right_side_form.hasClass('hidden');
        var right_side_clients_is_hiden = right_side_clients.hasClass('hidden');
        var overlay_has_skew_part            = overlay.hasClass('skew-part');
        
        switchToggleForm(right_side_form_is_hiden,right_side_clients_is_hiden,overlay_has_skew_part);
        
    });
    
    /** 
    * abre a tela de clients
    * 
    */
    $('a#open-clients-info').on( "click", function() {
        var right_side_form_is_hiden         = right_side_form.hasClass('hidden');
        var right_side_clients_is_hiden = right_side_clients.hasClass('hidden');
        var overlay_has_skew_part            = overlay.hasClass('skew-part');
        
        switchToggleClient(right_side_form_is_hiden,right_side_clients_is_hiden,overlay_has_skew_part);
        
    });
    
    /**
    * fecha a tela de form
    * 
    */
    $('button#close-right-side-form').on( "click", function() {
        toggleRightSideForm('hidden');
        overlay.toggleClass('skew-part');
    });
    
    /**
    * fecha a tela de clients
    * 
    */
    $('button#close-right-side-clients').on( "click", function() {
        toggleRightSideClients('hidden');
        overlay.toggleClass('skew-part');
    });
    
    // Youtube Variant
    $('.expand-player').on( "click", function() {
        
        $('#left-side').velocity({
            
            opacity: "0",
            
            complete: function(){
                $('.global-overlay').velocity({
                    
                    translateX : "-100%",
                    opacity : "0",
                    
                },
                
                {
                    duration: 1000,
                    easing: [0.7,0,0.3,1],
                    delay: 500,
                })
            }
        })
    });
    
    $('.compress-player').on( "click", function() {
        
        $('.global-overlay').velocity({
            
            translateX : "100%",
            opacity : "1",
            
        },
        
        {
            duration: 1000,
            easing: [0.7,0,0.3,1],
            delay: 0,
            
            complete: function(){
                
                $('#left-side').velocity({
                    
                    opacity: "1",
                    
                })
                
            }
        })
    });
    
    /* ------------------------------------- */
    /* 3. Scroll plugins ................... */
    /* ------------------------------------- */
    
    $(function() {
        $('body').bind('mousewheel', function(event) {
            event.preventDefault();
            var scrollTop = this.scrollTop;
            this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -1));
            //console.log(event.deltaY, event.deltaFactor, event.originalEvent.deltaMode, event.originalEvent.wheelDelta);
        });
    });
    
    var ifTouchDevices = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);
    
    // ScrollBar on Desktop, not on Touch devices for a perfect ergonomy
    function scrollbar(){
        
        if (ifTouchDevices){
            $('body').addClass('scroll-touch');
            
            $('a#open-more-info').on( "click", function() {
                if(right_side_form.hasClass('open')){
                    event.preventDefault();
                    var target = "#" + this.getAttribute('data-target');
                    $('html, body').animate({
                        scrollTop: $(target).offset().top
                    }, 800, 'swing');
                }
            });
            
            $('a#open-clients-info').on( "click", function() {
                if(right_side_clients.hasClass('open')){
                    event.preventDefault();
                    var target = "#" + this.getAttribute('data-target');
                    $('html, body').animate({
                        scrollTop: $(target).offset().top
                    }, 800, 'swing');
                }
            });
        }
        
        else {
            $('body').mCustomScrollbar({
                scrollInertia: 150,
                axis            :"y"
            });
        }
    }
    
    scrollbar();
    
    // Tooltips used on YouTube buttons
    if (window.matchMedia("(min-width: 1025px)").matches) { 
        
        $(function () { $("[data-toggle='tooltip']").tooltip(); });
        
    }
    
    /* ------------------------------------- */
    /* 4. Newsletter ........................ */
    /* ------------------------------------- */
    
    $("#notifyMe").notifyMe();
    
    (function() {
        
        var dlgtrigger = document.querySelector( '[data-dialog]' ),
        somedialog = document.getElementById( dlgtrigger.getAttribute( 'data-dialog' ) ),
        dlg = new DialogFx( somedialog );
        
        dlgtrigger.addEventListener( 'click', dlg.toggle.bind(dlg) );
        
    })();
    
    /* ------------------------------------- */
    /* 5. PhotoSwipe Gallery Init .......... */
    /* ------------------------------------- */
    
    var initPhotoSwipeFromDOM = function(gallerySelector) {
        
        // parse slide data (url, title, size ...) from DOM elements 
        // (children of gallerySelector)
        var parseThumbnailElements = function(el) {
            var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
            
            for(var i = 0; i < numNodes; i++) {
                
                figureEl = thumbElements[i]; // <figure> element
                
                // include only element nodes 
                if(figureEl.nodeType !== 1) {
                    continue;
                }
                
                linkEl = figureEl.children[0]; // <a> element
                
                size = linkEl.getAttribute('data-size').split('x');
                
                // create slide object
                item = {
                    src: linkEl.getAttribute('href'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };
                
                
                
                if(figureEl.children.length > 1) {
                    // <figcaption> content
                    item.title = figureEl.children[1].innerHTML; 
                }
                
                if(linkEl.children.length > 0) {
                    // <img> thumbnail element, retrieving thumbnail url
                    item.msrc = linkEl.children[0].getAttribute('src');
                } 
                
                item.el = figureEl; // save link to element for getThumbBoundsFn
                items.push(item);
            }
            
            return items;
        };
        
        // find nearest parent element
        var closest = function closest(el, fn) {
            return el && ( fn(el) ? el : closest(el.parentNode, fn) );
        };
        
        // triggers when user clicks on thumbnail
        var onThumbnailsClick = function(e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            
            var eTarget = e.target || e.srcElement;
            
            // find root element of slide
            var clickedListItem = closest(eTarget, function(el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });
            
            if(!clickedListItem) {
                return;
            }
            
            // find index of clicked item by looping through all child nodes
            // alternatively, you may define index via data- attribute
            var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
            
            for (var i = 0; i < numChildNodes; i++) {
                if(childNodes[i].nodeType !== 1) { 
                    continue; 
                }
                
                if(childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }
            
            
            
            if(index >= 0) {
                // open PhotoSwipe if valid index found
                openPhotoSwipe( index, clickedGallery );
            }
            return false;
        };
        
        // parse picture index and gallery index from URL (#&pid=1&gid=2)
        var photoswipeParseHash = function() {
            var hash = window.location.hash.substring(1),
            params = {};
            
            if(hash.length < 5) {
                return params;
            }
            
            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if(!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');  
                if(pair.length < 2) {
                    continue;
                }           
                params[pair[0]] = pair[1];
            }
            
            if(params.gid) {
                params.gid = parseInt(params.gid, 10);
            }
            
            return params;
        };
        
        var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
            
            items = parseThumbnailElements(galleryElement);
            
            // define options (if needed)
            options = {
                
                // define gallery index (for URL)
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                
                getThumbBoundsFn: function(index) {
                    // See Options -> getThumbBoundsFn section of documentation for more info
                    var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 
                    
                    return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                }
                
            };
            
            // PhotoSwipe opened from URL
            if(fromURL) {
                if(options.galleryPIDs) {
                    // parse real index when custom PIDs are used 
                    // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                    for(var j = 0; j < items.length; j++) {
                        if(items[j].pid === index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    // in URL indexes start from 1
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }
            
            // exit if index not found
            if( isNaN(options.index) ) {
                return;
            }
            
            if(disableAnimation) {
                options.showAnimationDuration = 0;
            }
            
            // Pass data to PhotoSwipe and initialize it
            gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };
        
        // loop through all gallery elements and bind events
        var galleryElements = document.querySelectorAll( gallerySelector );
        
        for(var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i+1);
            galleryElements[i].onclick = onThumbnailsClick;
        }
        
        // Parse URL and open gallery if it contains #&pid=3&gid=1
        var hashData = photoswipeParseHash();
        if(hashData.pid && hashData.gid) {
            openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
        }
    };
    
    // execute above function
    initPhotoSwipeFromDOM('.my-gallery');
    
});