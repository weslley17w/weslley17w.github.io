!function(e){e('form[name="formcontact"]').submit(function(){var o=e('input[name="nome"]').val(),i=e('input[name="email"]').val(),n=e('textarea[name="messagem"]').val(),t="Nome: "+o+"|Email: "+i+"|Mensagem:<br>"+n;return e.ajax({url:"https://formspree.io/weslley17w@gmail.com",method:"POST",data:{message:t,_subject:"Email Do Blog"},dataType:"json"}).done(function(){alert("Obrigado, irei lhe responder o mais rapido possivel !!!!!    :)")}).fail(function(){alert("Mas que porra não deu certo, ")}).always(function(){}),!1}),skel.breakpoints({xlarge:"(max-width: 1680px)",large:"(max-width: 1280px)",medium:"(max-width: 980px)",small:"(max-width: 736px)",xsmall:"(max-width: 480px)"}),e(function(){var o=e(window),i=e("body");i.addClass("is-loading"),o.on("load",function(){window.setTimeout(function(){i.removeClass("is-loading")},100)}),skel.vars.touch&&i.addClass("is-touch");var n=e("form");n.find("textarea").each(function(){var o=e(this),i=e('<div class="textarea-wrapper"></div>');o.find('input[type="submit"]');o.wrap(i).attr("rows",1).css("overflow","hidden").css("resize","none").on("keydown",function(o){13==o.keyCode&&o.ctrlKey&&(o.preventDefault(),o.stopPropagation(),e(this).blur())}).on("blur focus",function(){o.val(e.trim(o.val()))}).on("input blur focus --init",function(){i.css("height",o.height()),o.css("height","auto").css("height",o.prop("scrollHeight")+"px")}).on("keyup",function(e){9==e.keyCode&&o.select()}).triggerHandler("--init"),("ie"==skel.vars.browser||skel.vars.mobile)&&o.css("max-height","10em").css("overflow-y","auto")}),n.placeholder(),skel.on("+medium -medium",function(){e.prioritize(".important\\28 medium\\29",skel.breakpoint("medium").active)});var t=e("#menu");t.wrapInner('<div class="inner"></div>'),t._locked=!1,t._lock=function(){return!t._locked&&(t._locked=!0,window.setTimeout(function(){t._locked=!1},350),!0)},t._show=function(){t._lock()&&i.addClass("is-menu-visible")},t._hide=function(){t._lock()&&i.removeClass("is-menu-visible")},t._toggle=function(){t._lock()&&i.toggleClass("is-menu-visible")},t.appendTo(i).on("click",function(e){e.stopPropagation()}).on("click","a",function(o){var i=e(this).attr("href");o.preventDefault(),o.stopPropagation(),t._hide(),"#menu"!=i&&window.setTimeout(function(){window.location.href=i},350)}).append('<a class="close" href="#menu">Close</a>'),i.on("click",'a[href="#menu"]',function(e){e.stopPropagation(),e.preventDefault(),t._toggle()}).on("click",function(e){t._hide()}).on("keydown",function(e){27==e.keyCode&&t._hide()})})}(jQuery);