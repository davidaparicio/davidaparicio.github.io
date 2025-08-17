var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function ($) {
	$(document).ready(function(){

        $('.top').on('click',function (e) {
            $('html, body').stop().animate({
                scrollTop: 0
            }, 800);

            e.preventDefault();
        });

	    //Masterhead fixed
	    function masterhead () {
	    	if ($(window).width() > 600) {
			    $(window).scroll(function () {


			    	footer = $('footer').offset().top - 250;


			        if ($(this).scrollTop() > 110) {
			            $('header').addClass('transparent');
			        }else {
			            $('header').removeClass('transparent');
			        }

			        if ($(this).scrollTop() > footer) {

				       $("header").stop(true).fadeTo(400, 0);
				       $(".inner_nav").stop(true).fadeTo(50, 0);
			        }else {
			        	$("header").stop(true).fadeTo(400, 1);
			         	$(".inner_nav").stop(true).fadeTo(50, 1);
			        }
			    });
			}else {

				$(window).scroll(function () {


			    	var footer = $('footer').offset().top - 200;


			        if ($(this).scrollTop() > 110) {
			            $('header').addClass('transparent');
			        }else {
			            $('header').removeClass('transparent');
			        }

			        if ($(this).scrollTop() > footer) {

				       $("header").stop(true).fadeTo(400, 0);
				       $(".inner_nav").stop(true).fadeTo(50, 0);
			        }else {
			        	$("header").stop(true).fadeTo(400, 1);
			         	$(".inner_nav").stop(true).fadeTo(50, 1);
			        }
			    });

			}
	    }

	    masterhead();

	    $(window).resize(function () {
	    	masterhead();
	    });

	    // Responsive menu

	    $('.navbar-toggle').on('click',function () {
	        $('.navbar-collapse').toggleClass('collapse');
	    });

		//Highlight nav links as you scroll
	    $('.nav_wrapper').visualNav({
	    	link : 'a.menu.highlight',
	        fitContent : true,
	        easing     : [ 'swing', 'easeInCirc' ]
	    });

	    function stickyTitles(stickies) {

	        this.load = function() {

	            stickies.each(function(){

	                var thisSticky = $(this).wrap('<div class="followWrap" />');
	                thisSticky.parent().height(thisSticky.outerHeight());

	                $.data(thisSticky[0], 'pos', thisSticky.offset().top);

	            });
	        }

	        this.scroll = function() {

	            stickies.each(function(i){


	                var thisSticky = $(this),
	                    nextSticky = stickies.eq(i+1),
	                    prevSticky = stickies.eq(i-1),
	                    pos = $.data(thisSticky[0], 'pos');

	                if (pos <= $(window).scrollTop()) {

	                    thisSticky.addClass("fixed");

	                    if ( thisSticky.hasClass('nav_wrapper')) {
	                        $('.nav_wrapper').css('background','rgba(255,255,255,0.97)');
	                        $('.inner_logo img').stop().fadeIn(50);
	                    }

	                    if (nextSticky.length > 0 && thisSticky.offset().top >= $.data(nextSticky[0], 'pos') - thisSticky.outerHeight()) {

	                        thisSticky.addClass("absolute").css("top", $.data(nextSticky[0], 'pos') - thisSticky.outerHeight());

	                    }

	                } else {

	                    thisSticky.removeClass("fixed");

	                    if ( thisSticky.hasClass('nav_wrapper')) {
	                         $('.nav_wrapper').css('background','#fff');
	                        $('.inner_logo img').stop().fadeOut(50);
	                    }

	                    if (prevSticky.length > 0 && $(window).scrollTop() <= $.data(thisSticky[0], 'pos')  - prevSticky.outerHeight()) {

	                        prevSticky.removeClass("absolute").removeAttr("style");

	                    }

	                }
	            });
	        }
	    }


	    if ( $('.inner_nav').length && $(window).width() > 1024 ) {
	        var newStickies = new stickyTitles($(".followMe")),
	            innerNav = $('.inner_nav').offset().top;

	        newStickies.load();

	        $(window).on("scroll", function() {

	            newStickies.scroll();

	        });

	    }

		/* flexslider */
		$('.flexslider').flexslider({
	        animation: 'slide',
	        pauseOnHover: true,
	        touch: false
	    });

		/* widget hover effects */
	    if ( $('.widget').length ) {
	    	$('.widget').hover(function () {
	    		$(this).find('.border').show();
	    	}, function () {
	    		$(this).find('.border').hide();
	    	});
	    }

// Merged stuff.
	 //    if ($(window).width() > 725) {
		//     //show blocks on click
		//     $('.feature_content.api').click(function (e) {

		//         if ($('.api_block').is(':visible')) {
		//             $('.features').removeClass('expanded');
		//             $('.features').animate({ height: '435px'},300);
		//             $('.api_block').hide();
		//         }else {
		//             $('.features').addClass('expanded');
		//             $('.features').animate({ height: '900px'},300);
		//             $('.documentation_block,.reporting_block').hide();
		//             $('.api_block').fadeIn('slow');
		//         }
		//     	e.preventDefault();
		//     });

		//     $('.feature_content.documentation').click(function (e) {
		//         if ($('.documentation_block').is(':visible')) {
		//             $('.features').removeClass('expanded');
		//             $('.features').animate({ height: '435px'},300);
		//             $('.documentation_block').hide();
		//         }else {
		//             $('.features').addClass('expanded');
		//             $('.features').animate({ height: '900px'},300);
		//             $('.api_block,.reporting_block').hide();
		//             $('.documentation_block').fadeIn('slow');
		//         }

		//     	e.preventDefault();
		//     });

		//     $('.feature_content.reporting').click(function (e) {
		//         if ($('.reporting_block').is(':visible')) {
		//             $('.features').removeClass('expanded');
		//             $('.features').animate({ height: '435px'},300);
		//             $('.reporting_block').hide();
		//         }else {
		//              $('.features').addClass('expanded');
		//             $('.features').animate({ height: '900px'},300);
		//             $('.api_block,.documentation_block').hide();
		//             $('.reporting_block').fadeIn('slow');
		//         }

		//     	e.preventDefault();

		//     });
		// }else {
		// 	$('.feature_content').click(function(e) {
		// 		e.preventDefault();
		// 	});
		// }


	    //show blocks on click
	    $('.feature_content.api').click(function (e) {

	        if ($('.api_block').is(':visible')) {
	            $('.features').removeClass('expanded');
	            $('.features').animate({ height: '435px'},300);
	            $('.api_block').hide();
	        }else {
	            $('.features').addClass('expanded');
	            $('.features').animate({ height: '900px'},300);
	            $('.documentation_block,.reporting_block').hide();
	            $('.api_block').fadeIn('slow');
	        }
	    	e.preventDefault();
	    });

	    $('.feature_content.documentation').click(function (e) {
	        if ($('.documentation_block').is(':visible')) {
	            $('.features').removeClass('expanded');
	            $('.features').animate({ height: '435px'},300);
	            $('.documentation_block').hide();
	        }else {
	            $('.features').addClass('expanded');
	            $('.features').animate({ height: '900px'},300);
	            $('.api_block,.reporting_block').hide();
	            $('.documentation_block').fadeIn('slow');
	        }

	    	e.preventDefault();
	    });

	    $('.feature_content.reporting').click(function (e) {
	        if ($('.reporting_block').is(':visible')) {
	            $('.features').removeClass('expanded');
	            $('.features').animate({ height: '435px'},300);
	            $('.reporting_block').hide();
	        }else {
	             $('.features').addClass('expanded');
	            $('.features').animate({ height: '900px'},300);
	            $('.api_block,.documentation_block').hide();
	            $('.reporting_block').fadeIn('slow');
	        }

	    	e.preventDefault();

	    });

	    $('.sidebar>ul>li>ul, .sidebar>ul>li>ul>li>ul, .sidebar>ul>li>ul>li>ul>li>ul').each(function () {
	        if ($(this).children().length > 0) {
	            $(this).parent().find('a:first').prepend('<span class="drop_down"></span>');

	            $(this).parent().children('a').on('click', function (e) {
	                $(this).parent().find('span').first().toggleClass('down');
	                $(this).parent().find('ul').first().toggleClass('open_drop');
	                $(this).parent().find('ul').first().toggle();

	                e.preventDefault();
	            });
	        }
	    });

	    // Restlet API Platform on home page
	    $(document).on("click", "#platform-blocks > li > div", function() {
	    	$(this).parents('li').siblings().removeClass('block-expanded');
			$(this).parents('li').toggleClass('block-expanded');
			if ($(this).hasClass('block-expanded')) {
				var top = $(this).find('.dropdown').offset().top - 100;
				$('html,body').animate({
					scrollTop: top
			},400);
		}
		});



	    // $('.framework_desktop_view #framework_widget').click(function () {
	    //     $('.dropdown_2,.dropdown_3,.dropdown_4').hide();
	    //     $(this).siblings().removeClass('active');
	    //     $(this).toggleClass('active');
	    //     $('.dropdown_1').toggle();

	    //     if ($('.dropdown_1').is(':visible'))  {
	    //         $('.platform').animate ({ height: '1072px'},1000);
	    //     } else {
	    //         $('.platform').animate ({ height: '664px'},1000);
	    //     }
	    // });

	    // $('.framework_desktop_view #apiSpark_widget').click(function () {
	    //     $('.dropdown_1,.dropdown_3,.dropdown_4').hide();
	    //     $(this).siblings().removeClass('active');
	    //     $(this).toggleClass('active');
	    //     $('.dropdown_2').toggle();

	    //     if ($('.dropdown_2').is(':visible'))  {
	    //         $('.platform').animate ({ height: '1072px'},1000);
	    //     } else {
	    //         $('.platform').animate ({ height: '664px'},1000);
	    //     }
	    // });

	    // $('.framework_desktop_view #studio_widget').click(function () {
	    //     $('.dropdown_2,.dropdown_1,.dropdown_4').hide();
	    //     $(this).siblings().removeClass('active');
	    //     $(this).toggleClass('active');
	    //     $('.dropdown_3').toggle();

	    //     if ($('.dropdown_3').is(':visible'))  {
	    //         $('.platform').animate ({ height: '1072px'},1000);
	    //     } else {
	    //         $('.platform').animate ({ height: '664px'},1000);
	    //     }
	    // });

	   /* $('.framework_desktop_view #dhc_widget').click(function () {
	        $('.dropdown_1,.dropdown_2,.dropdown_3').hide();
	        $(this).siblings().removeClass('active');
	        $(this).toggleClass('active');
	        $('.dropdown_4').toggle();

	        if ($('.dropdown_4').is(':visible'))  {
	            $('.platform').animate ({ height: '1072px'},1000);
	        } else {
	            $('.platform').animate ({ height: '664px'},1000);
	        }
	    });*/

	   /* $('.framework_mobile_view #framework_widget').click(function () {
	        $('.dropdown_2,.dropdown_3').hide();
	        $(this).siblings().removeClass('active');
	        $(this).toggleClass('active');
	        $('.dropdown_1').toggle();
	    });

	    $('.framework_mobile_view #apiSpark_widget').click(function () {
	        $('.dropdown_1,.dropdown_3').hide();
	        $(this).siblings().removeClass('active');
	        $(this).toggleClass('active');
	        $('.dropdown_2').toggle();
	    });

	     $('.framework_mobile_view #studio_widget').click(function () {
	        $('.dropdown_2,.dropdown_1').hide();
	        $(this).siblings().removeClass('active');
	        $(this).toggleClass('active');
	        $('.dropdown_3').toggle();
	    });*/

	    // get last string in URL
	    if ($('.technical_documentation').length) {
	    	$elem = $('a[href="' + window.location.pathname + '"]');
	    	$elem.parents('ul').prev('a').trigger('click');
	    }

	    if ($('.technical_documentation.faq').length) {
			$('ol:first li > a').on('click',function (e) {
				if(this.hash){
					var hash = this.hash.substr(1);
					var $toElement = $("[name="+hash+"]");
					var toPosition = $toElement.position().top;
					//scroll to element
					$("body,html").animate({
						scrollTop : toPosition
					},2000,"easeOutExpo")
				}
				e.preventDefault();
			});
	    }

	    // Footer inview
	    /*$("footer").inViewport(function(){
	       $("header").stop(true).fadeTo(400, 0);
	       $(".inner_nav").stop(true).fadeTo(400, 0);
	    }, function(){
	         $("header").stop(true).fadeTo(400, 1);
	         $(".inner_nav").stop(true).fadeTo(400, 1);
	    });*/



	    //scroll to second level nav click
	    if ($('.inner_nav').length) {
	        $(".inner_nav .nav li > a.menu.highlight").click(function(event){
	            event.preventDefault();
	            $('html,body').stop().animate({scrollTop:$(this.hash).offset().top - 55}, 700);
	        });
	    }

	    if ( $('.popup-youtube, .popup-vimeo').length ) {
	        $('.popup-youtube, .popup-vimeo').magnificPopup({
	            disableOn: 700,
	            type: 'iframe',
	            mainClass: 'mfp-fade',
	            removalDelay: 160,
	            preloader: false,
	            fixedContentPos: false,
	            callbacks: {
				    open: function() {
				         if($('#video-link').length) {
				            var el = this.st.el;
				            var data = el.data();
				            mixpanel.track("Clicked to watch a video", {
				                "Product": data.product,
				                "Location": data.location,
				                "Title": data.title
				            });
				         }

				    	if ($('.promo .owl-carousel').length) {
				    		var owl = $("#full-width");
				    		owl.trigger('owl.stop');
				    	}
				    },
				    close: function() {
				      // Will fire when popup is closed
				      var owl = $("#full-width");
				      owl.trigger('owl.play',4000);
				    }
				}
	        });
	    }

	    function pricing () {

	        var users = ["10", "50", "100", "200", "500", "1000", "2000", "Enterprise Plan" ],
	            labels = ["10", "50", "100", "200", "500", "1000", "2000", "More" ],
	            prices = ["FREE","$19/month","$49/month","$99/month","$249/month","$499/month","$999/month","Please Contact Us"];

	        $("#price_slider").slider({ max: 7, value: 0 });
	        $("#price_slider").slider("pips" , {
	            rest: "label",
	            labels: labels
	        });

	        //set default text
	        $('.price_label_wrapper span strong').text(prices[0]);
	        $(".users_wrapper span strong").text( users[0] + " Concurrent Clients" );
	        $('.ui-slider-pip-selected-initial').find('.ui-slider-label').addClass('selected_label');
	        $('.ui-slider-pip-selected-initial').prevAll().find('.ui-slider-label').addClass('selected_label');

	        $("#price_slider").on("slidechange slide", function(e,ui) {
	            $('.price_label_wrapper span strong').text(prices[ui.value]);
	            if (users[ui.value] == "Enterprise Plan") {
	            	$(".users_wrapper span strong").text( users[ui.value] + "s" );
	            }else {
	            	 $(".users_wrapper span strong").text( users[ui.value] + " Concurrent Clients" );
	            }
	            $('.fill').css('width',$('.ui-slider-pip-selected').css('left'));
	            $('.ui-slider-pip-selected').find('.ui-slider-label').addClass('selected_label');
	            $('.ui-slider-pip-selected').prevAll().find('.ui-slider-label').addClass('selected_label');
	            $('.ui-slider-pip-selected').nextAll().find('.ui-slider-label').removeClass('selected_label');
	        });
	    }

	   pricing();

	   //tooltip
	   $('.activate_popup').on('click',function (e) {

	   		/*var w = $(this).width + 45,
	   			h,
	   			inner = $('<span class="popover right" role="tooltip"><span class="arrow"></span> <h3 class="popover-title">Popover title</h3><span class="popover-content">And here\'s some amazing content. It\'s very engaging. Right?</span></span>');

	   		if (!$(this).parents('.popup_wrapper').length) {
		   		$(this).wrap('<span class="popup_wrapper"></span>');
		   		$('.popup_wrapper').append(inner);

		   		h = $(this).parent().find('.popover').outerHeight(true) /2;

		   		$(this).parent().find('.popover').toggleClass('in');
		   		$(this).parent().find('.popover').css({
		   			left: w,
		   			top: -h
		   		}).toggle();

		   	}*/

		   	var w = $(this).width() + 15,
				h,
				title =  $(this).attr('data-term'),
				tooltip = $(this).attr('data-definition'),
				inner = $('<span class="popover right" role="tooltip"><span class="arrow"></span> <h3 class="popover-title">' + title + '</h3><span class="popover-content">' + tooltip + '</span></span>');

				if (!$(this).parents('.popup_wrapper').length) {
					$(this).wrap('<span class="popup_wrapper"></span>');
					$('.popup_wrapper').append(inner);

					h = $(this).parent().find('.popover').outerHeight(true) /2

				   	$(this).parent().find('.popover').toggleClass('in');

				   	$(this).parent().find('.popover').css({

				   		left: w,

				   		top: -h

			   		}).toggle();
				}else {
					$(this).unwrap();
					$('.popover').remove();
				}

		   		e.preventDefault();

		});

		$('.only-edition.open-popup-link').magnificPopup({
		  	type:'inline',
		  	midClick: true,
		  	callbacks: {
			    open: function() {

			      	var release = $('#id_release').find('option:selected').text().toLowerCase(),
			      		edition = $('#id_edition').find('option:selected').attr('data-short-title'),
						distribution = $('#id_distribution').find('option:selected').attr('data-short-title');

						if ($('.flex-disabled').length) {
							$('.flex-direction-nav').hide();
						}

			    }
			}
		});

		$('#apispark_signin_7').on('click', function (e) {
			signinWithAuth0();
			e.preventDefault();
		});

		$('.animated-gif img').each(function(){
		 	var src = $(this).attr('src');
		    $(this).hover(function(){
		      if(src.indexOf('.png') != -1){
		    	  $(this).attr('src', src.replace('.png', '.gif'));
		      } else {
		    	  $(this).attr('src', src.replace('.jpg', '.gif'));
		      }
		      $('.animated-gif .play-btn').hide();
		    }, function(){
		      $(this).attr('src', src);
		      $('.animated-gif .play-btn').show();
		    });
		});

		$('.fa-search').on('click', function () {
        	$('.sb-search').toggleClass('sb-open');
    	});

 		//Signup modal on old nav
        $('.popup-modal').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true,
            alignTop: true
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });

        function searchopen () {
        	$('header .navbar').removeClass('searchhide').addClass('searchshow')
	        setTimeout(function () {
	            $('header .navbar').removeClass('searchshow').addClass('searchopen');
	            $('.searchform input').focus();
	        },400);
        }

        function searchhide () {
        	$('header .navbar').removeClass('searchopen').addClass('searchhide');
	         setTimeout(function () {
	            $('header .navbar').removeClass('searchhide');
	        },400);
        }

        //toggle site search
	    $('#search-btn').on('click', function (e) {
	    	searchopen();
	        e.preventDefault();
	    });

	    $('#searchform-reset').on('click', function (e) {
	    	searchhide();
	        e.preventDefault();
	    });

	    //On scroll event: Hide Search
	    $(window).on('scroll', function () {
	        if($('header nav').hasClass('searchopen')) {
	            RESTLET.base.searchhide();
	        }
	    });

	    $(document).on('click', function (e) {

	        var elem = $('.search-view');

	        if($('header nav').hasClass('searchopen')) {
	            if (!elem.is(e.target) && elem.has(e.target).length === 0) {
	                RESTLET.base.searchhide();
	            }
	        }

	    });

	});

	//wait until document loads so DHC has a chance to create info tag
	window.addEventListener("load",function(){
	    var dhcTag = document.getElementById("testDhc"); //lookup the tag using the id we've provided in meta tag
	    var dhcInstalled;
	    var nodeDetect = $('.detect');

	    if(!dhcTag){
	        //no indicator tag - no dhc
	        dhcInstalled = false;

	        $.each(nodeDetect, function () {
	            if(!$(this).hasClass('img-link') && !$(this).hasClass('detect-getstarted')) {
	                $(this).attr('href','https://chrome.google.com/webstore/detail/dhc-resthttp-api-client/aejoelaoggembcahagimdiliamlcdmfm').html('Install');
	            }else if ($(this).hasClass('detect-getstarted')) {
	                $(this).attr('href','https://chrome.google.com/webstore/detail/dhc-resthttp-api-client/aejoelaoggembcahagimdiliamlcdmfm').html('Install DHC by Restlet');
	            }else {
	                $(this).attr('href','https://chrome.google.com/webstore/detail/dhc-resthttp-api-client/aejoelaoggembcahagimdiliamlcdmfm');
	            }
	        });

	        return;
	    }else {
	        dhcInstalled = true;

	        $.each(nodeDetect, function () {
	            if(!$(this).hasClass('img-link') && !$(this).hasClass('detect-getstarted')) {
	                $(this).attr('href','https://chrome.google.com/webstore/detail/dhc-resthttp-api-client/aejoelaoggembcahagimdiliamlcdmfm').html('Launch');
	            } else if ($(this).hasClass('detect-getstarted')) {
	                $(this).attr('href','https://chrome.google.com/webstore/detail/dhc-resthttp-api-client/aejoelaoggembcahagimdiliamlcdmfm').html('Launch DHC by Restlet');
	            }else {
	                $(this).attr('href','https://chrome.google.com/webstore/detail/dhc-resthttp-api-client/aejoelaoggembcahagimdiliamlcdmfm');
	            }
	        });
	    }

	});


}(jQuery));


}