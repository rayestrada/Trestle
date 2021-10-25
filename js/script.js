/**
 * @file
 * A JavaScript file for the theme.
 *
 */

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundsize-csstransforms-cssvwunit-touchevents-webp-domprefixes-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,a,s;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],t=w[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),y.push((o?"":"no-")+s.join("-"))}}function i(e){var t=E.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?E.className.baseVal=t:E.className=t)}function a(e,t){return!!~(""+e).indexOf(t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(){var e=t.body;return e||(e=s(S?"svg":"body"),e.fake=!0),e}function c(e,n,r,o){var i,a,l,c,f="modernizr",d=s("div"),A=u();if(parseInt(r,10))for(;r--;)l=s("div"),l.id=o?o[r]:f+(r+1),d.appendChild(l);return i=s("style"),i.type="text/css",i.id="s"+f,(A.fake?A:d).appendChild(i),A.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=f,A.fake&&(A.style.background="",A.style.overflow="hidden",c=E.style.overflow,E.style.overflow="hidden",E.appendChild(A)),a=n(d,e),A.fake?(A.parentNode.removeChild(A),E.style.overflow=c,E.offsetHeight):d.parentNode.removeChild(d),!!a}function f(e,t){if("object"==typeof e)for(var n in e)k(e,n)&&f(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function d(e,t){return function(){return e.apply(t,arguments)}}function A(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?d(o,n||t):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(t[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,o,i){function u(){f&&(delete D.style,delete D.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var c=m(e,o);if(!r(c,"undefined"))return c}for(var f,d,A,p,h,g=["modernizr","tspan","samp"];!D.style&&g.length;)f=!0,D.modElem=s(g.shift()),D.style=D.modElem.style;for(A=e.length,d=0;A>d;d++)if(p=e[d],h=D.style[p],a(p,"-")&&(p=l(p)),D.style[p]!==n){if(i||r(o,"undefined"))return u(),"pfx"==t?p:!0;try{D.style[p]=o}catch(v){}if(D.style[p]!=h)return u(),"pfx"==t?p:!0}return u(),!1}function g(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+B.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?h(s,t,o,i):(s=(e+" "+x.join(a+" ")+a).split(" "),A(s,t,n))}function v(e,t,r){return g(e,n,n,t,r)}var y=[],w=[],b={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr;var C=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];b._prefixes=C;var E=t.documentElement,S="svg"===E.nodeName.toLowerCase();S||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=y.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),y.elements=n+" "+e,u(t)}function i(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function a(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||p.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function u(e){e||(e=t);var r=i(e);return!y.shivCSS||c||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,r),e}var c,f,d="3.7.3",A=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,f=!0}}();var y={elements:A.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:A.shivCSS!==!1,supportsUnknownElements:f,shivMethods:A.shivMethods!==!1,type:"default",shivDocument:u,createElement:a,createDocumentFragment:s,addElements:o};e.html5=y,u(t),"object"==typeof module&&module.exports&&(module.exports=y)}("undefined"!=typeof e?e:this,t);var _="Moz O ms Webkit",x=b._config.usePrefixes?_.toLowerCase().split(" "):[];b._domPrefixes=x;var B=b._config.usePrefixes?_.split(" "):[];b._cssomPrefixes=B;var T=b.testStyles=c;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",C.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");T(r,function(e){n=9===e.offsetTop})}return n}),T("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvwunit",r==n)});var k;!function(){var e={}.hasOwnProperty;k=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),b._l={},b.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},b._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){b.addTest=f}),Modernizr.addAsyncTest(function(){function e(e,t,n){function r(t){var r=t&&"load"===t.type?1==o.width:!1,i="webp"===e;f(e,i?new Boolean(r):r),n&&n(t)}var o=new Image;o.onerror=r,o.onload=r,o.src=t}var t=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],n=t.shift();e(n.name,n.uri,function(n){if(n&&"load"===n.type)for(var r=0;r<t.length;r++)e(t[r].name,t[r].uri)})});var Q={elem:s("modernizr")};Modernizr._q.push(function(){delete Q.elem});var D={style:Q.elem.style};Modernizr._q.unshift(function(){delete D.style});b.testProp=function(e,t,r){return h([e],n,t,r)};b.testAllProps=g,b.testAllProps=v,Modernizr.addTest("backgroundsize",v("backgroundSize","100%",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&v("transform","scale(1)",!0)}),o(),i(y),delete b.addTest,delete b.addAsyncTest;for(var z=0;z<Modernizr._q.length;z++)Modernizr._q[z]();e.Modernizr=Modernizr}(window,document);

// A lightweight throttle Function
// https://remysharp.com/2010/07/21/throttling-function-calls
function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 100);
  var last,
    deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date,
      args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    }
    else {
      last = now;
      fn.apply(context, args);
    }
  };
}

/**
 * MENU
 */
(function ($) {
  $(function () {

    // ACCESSIBILITY HOVERS
    $('#navigation a').focus(function () {
      $(this).parents('li').addClass('hover');
    });
    $('#navigation a').blur(function () {
      $(this).parents('li').removeClass('hover');
    });

    // JS SUBMENU NO TOUCH
    $('.no-touchevents #navigation .content > ul.menu > li:not(.search)').mouseenter(function () {
      $(this).addClass('hover').siblings().removeClass('hover');
    });
    $('.no-touchevents #navigation .content > ul.menu > li').mouseleave(function () {
      $(this).removeClass('hover').siblings().removeClass('hover');
    });

    // JS SUBMENU TOUCHSCREEN
    $('.touchevents #navigation .region-navigation .main-menu .menu > li > a').click(function (e) {
      if (!$(this).closest('li').hasClass('hover') && $(this).next('.menu').length > 0) {
        e.preventDefault();
        $(this).closest('li').addClass('hover').siblings().removeClass('hover');
      }
    });
    // prevent top level menu items from triggering body click which will hide the submenu
    $('.touchevents #navigation .region-navigation a').click(function (e) {
      e.stopPropagation();
    });
    // hide submenu when body is clicked
    $('.touchevents #page').click(function (e) {
      $('#navigation *').removeClass('hover');
    });


    // SITE SEARCH BLOCK
    $('.no-touchevents #navigation li.search a').click(function (e) {
      e.preventDefault();
      if ($(this).closest('#navigation'))
        $(this).closest('#navigation').toggleClass('expanded');
    });


    /* MOBILE MENU TOGGLE */
    $(document).on('click', 'a.mobile-menu-trigger', function (e) {
      e.preventDefault();
      $('body').toggleClass('menu-active');
    });

    $('#navigation li > ul.menu').each(function () {
      $(this).parent().prepend('<li class="parentlink"><a href="#">' + $(this).prev('a').text() + '</a></li>');
    });

    $('#navigation li > li.parentlink').click(function (e) {
      e.preventDefault();
      $(this).parent('li').toggleClass('reveal');
    });

    // keyboard accessibility
    $('.no-touchevents #navigation li > li.parentlink a').on('focus', function () {
      // remove class from all li's that do not have focus
      $('ul.sub-menu').parent('li').removeClass('reveal');
      $(this).closest('li.menu__item').addClass('reveal');
    });

    $('.no-touchevents #content a').on('focus', function () {
      $('body').removeClass('noscroll');
      $('#navigation').find('li').removeClass('reveal');
      $('.region-navigation').removeClass('menu-active');
    });
  });

})(jQuery);


/**
 * TABLE
 */
(function ($) {
  // DOC READY
  $(function(){
    // Responsive data tables with headers
    ///* REMOVE THIS TO USE JS RESPONSIVE TABLES
    $('table.data').each(function () {
      var headertext = [],
        headers = $(this).find('thead th'),
        tablerows = $(this).find('tbody tr');

      if (headers.length) {
        // Grab headers and put them into array
        headers.each(function (i) {
          var current = headers[i];
          headertext.push(current.textContent.replace(/\r?\n|\r/, ""));
          // add class to empty header cells
          if(!current.textContent) {
            $(this).addClass('empty-header-cell');
          }
        });

        // set attribute on each cell within a row
        tablerows.each(function () {
          $(this).children().each(function (i) {
            if (headertext[i]) {
              $(this).attr('data-th', headertext[i]).addClass('labeled');
            }
          });
        });
      }
    });
    //*/
  });  // END DOC READY
})(jQuery);

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($) {
  $(function () {

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 200) {
        $('body.front').addClass('expanded');
        $('.front #header').addClass('fixed');
      }
      else {
        $('body.front').removeClass('expanded');
        $('.front #header').removeClass('fixed');
        $('.front #navigation').removeClass('expanded');
      }
    });

    $('body.not-front').addClass('expanded');
    $('.not-front #header').addClass('fixed');

    $('ul.horizontal-tabs-list').each(function(){
      if ($(this).children().length == 1) {
        $(this).parent().addClass('hide-tabs');
      }
    });

// check if there is more than one tab in horizontal list
if ($("ul.horizontal-tabs-list").children().length > 1)  {

    var tabcontainer = '.view-rows-as-tabs',
        tabcontent = '.tab-item',
        tablabel = '.field--date-type .field-items .field-item';
      // prepare the tabs for interaction
      $(tabcontainer).each(function () {
        // add class to provide default state
        $(this).addClass('tm-tab-enabled');
        $(this).find(tablabel).addClass('tm-tab-label');
        // empty string to append tab links
        var tablinks = '';
        var tabcount = '';
        // loop through tab content
        $(this).find(tabcontent).each(function (i) {
          var regex = /(\s\|\s)/g;
          var str = $(this).find(tablabel).html();
          var subst = '';
          var result = str.replace(regex, subst);
          var tablink = '<a href="#" data-tab="tab-number-' + i + '">' + result + '</a>';
          if (i > 0) {
            // hide the tab content that is not the first one
            $(this).addClass('tm-tab-hide');
            tablink = '<li>' + tablink + '</li>';
          }
          else {
            // make the first tab link active
            tablink = '<li class="active">' + tablink + '</li>';
          }
          tablinks += tablink;
          // add an index specific class to content
          $(this).addClass('tm-tab-content').addClass('tab-number-' + i);
          tabcount = i+1;
        });
        // add the tablinks to the markup
        $(this).prepend('<ul class="tm-tab-links tab-count-' + tabcount + '">' + tablinks + '</ul>');
      });
      // trigger click events on the tabs we created
      $('.tm-tab-links a').click(function (e) {
        e.preventDefault();
        var tab = $(this).data('tab');
        // track active state of the tabcontent
        $(this).closest(tabcontainer).find(tabcontent).addClass('tm-tab-hide');
        $(this).closest(tabcontainer).find('.' + tab).removeClass('tm-tab-hide');
        // track active state of the links
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
      });
      
};

      


  });
})(jQuery);




// modify addthis markup after it has loaded

var timer = '';
var counter = 0;

// run addThisTimer every 100ms
function addthisReady(evt) {
  timer = setInterval(function(){ addThisTimer() }, 100);
}

// Listen for the ready event
addthis.addEventListener('addthis.ready', addthisReady);

// check for title attributes and stop
function addThisTimer() {
    if(jQuery('.addthis_toolbox a').attr('title')){
      stopAddThisTimer();
    }
    
}

// stop the timer and append link text
function stopAddThisTimer() {
    clearInterval(timer);
    jQuery('.addthis_toolbox a').each(function(){
      var linkText = jQuery(this).attr('title');
      jQuery(this).prepend('<span class="element-invisible">'+linkText+'</span>');
    });
}

// search bar focus
(function ($) {
  $(function () {
    $('#block-system-main-menu li.search').click(function () {
      $('#search-api-page-search-form-sitewide #edit-keys-2').focus();
    })
  });
})(jQuery);
