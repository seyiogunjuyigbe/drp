$(document).ready(function(){
	
	"use strict";
	
	/*
	======================================================
	  		Countdown
	=======================================================*/
	if($('.countdown').length){
        $('.countdown').downCount({ date: '08/08/2017 12:00:00', offset: +1 });
  	}
	/*
	======================================================
	  		CHURECH AUDIO PLAYER
	=======================================================*/
	if($(".audioplayer").length){
		$(".audioplayer").musicPlayer({
	         //volume: 10,
	         //elements: ['artwork', 'controls', 'progress', 'time', 'volume'],
	        //playerAbovePlaylist: false,
	        onLoad: function() {
	            //Add Audio player
	            var plElem  = "<div class='pl'></div>";
	            $('.audioplayer').find('.player').append(plElem);
	            // show playlist
	            $('.pl').click(function (e) {
	                e.preventDefault();

	                $('.audioplayer').find('.playlist').toggleClass("hidden");
	            });
	        },

	   });
	}	

	/* ---------------------------------------------------------------------- */
	/*	DL Responsive Menu
	/* ---------------------------------------------------------------------- */
		if(typeof($.fn.dlmenu) === 'function'){
			$('#kode-responsive-navigation').each(function(){
				$(this).find('.dl-submenu').each(function(){
					if( $(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') !== '#' ){
						var parent_nav = $('<li class="menu-item"></li>');
						parent_nav.append($(this).siblings('a').clone());
						
						$(this).prepend(parent_nav);
					}
				});
				$(this).dlmenu();
			});
		}
	/*
	======================================================
	  		CHURECH AUDIO PLAYER ENDS
	=======================================================*/

	/*
	======================================================
	  		CHURECH ACCORDIAN
	=======================================================*/
	if($(".church_accordian").length){
		$.fn.slideFadeToggle = function(speed, easing, callback) {
			return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
		};
		$('.church_accordian').accordion({
			defaultOpen: 'section1',
			speed: 'slow',
			animateOpen: function (elem, opts) { //replace the standard slideUp with custom function
				elem.next().stop(true, true).slideFadeToggle(opts.speed);
			},
			animateClose: function (elem, opts) { //replace the standard slideDown with custom function
				elem.next().stop(true, true).slideFadeToggle(opts.speed);
			}
		});
	}
	/*
	======================================================
	  		CHURECH ACCORDIAN ENDS
	=======================================================*/

	/*
	======================================================
	  		CHURECH SLIDER
	=======================================================*/
	if($(".slider").length){
		$('.slider').slider();
	}
	/*
	======================================================
	  		CHURECH SLICK BLOG SLIDER
	=======================================================*/
	if($(".blog_slider_posts").length){
	  $('.blog_slider_posts').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: false,
		  arrows: true,
		  dots:true,
		  fade: true
		});
   	}

   	/*
	======================================================
	  		CHURECH WIDGET SLIDER
	=======================================================*/
	if($(".widget_event_slider").length){
	  $('.widget_event_slider').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  arrows: true
		});
   	}
	/*
	======================================================
	  		CHURECH SUB BANNER SLIDER
	=======================================================*/
	if($(".sub_slider").length){
	  $(".sub_slider").slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: false,
		  arrows: false,
		  dots:true,
		  fade: true
		});
   	}
   	/*
	======================================================
	  		CHURECH FULL SLIDER
	=======================================================*/
	if($(".slider_full").length){
	  $(".slider_full").slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  arrows: true
		});
   	}
   	/*
	======================================================
	  		CHURECH BANNER SLIDER 3 ,4 5 ,6
	=======================================================*/
   	if($(".slider-version3").length){
	  $(".slider-version3").slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: false,
		  arrows: true,
		  fade: true
		});
   	}
   	/*
	======================================================
	  		CHURECH FOOTER SLIDER
	=======================================================*/
   	if($(".slider_images").length){
	  $(".slider_images").slick({
		  slidesToShow: 6,
		  slidesToScroll: 6,
		  autoplay: true,
		  arrows: false,
		   responsive: [{

		      breakpoint: 1199,
		      settings: {
		        slidesToShow: 4,
		        infinite: true,
		        arrows: false,
		      }

		    }, {

		      breakpoint: 991,
		      settings: {
		        slidesToShow: 3,
		        dots: false
		      }

		    }, {

		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        dots: false
		      }

		    }]
		});
   	}
   	/*
	======================================================
	  		CHURECH SLIDER
	=======================================================*/
	if($(".slider-showcase").length){
	  $(".slider-showcase").slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  arrows: false,
		  fade:true
		});
   	}
   	/*
	======================================================
	  		CHURECH SELECTRIC
	=======================================================*/
   	if($(".location-select").length){
		$(".location-select").selectric();
	}
	/*
	======================================================
	  		CHURECH PROGERESS BAR
	=======================================================*/
	if($(".skillbar1").length){
		jQuery('skillbar1').each(function(){
			jQuery(this).find('.skillbar1-bar').animate({
				width:jQuery(this).attr('data-percent')
			},2000);
		});
	}
	if($(".progress-bar").length){
		$(".progress-bar").loading();
	}
	/*
	======================================================
	  		CHURECH SLIDER THUMBNAIL
	=======================================================*/
	if($(".slider_full_progress").length){
		$('.slider_full_progress').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: true,
		  fade: false,
		  asNavFor: '.slider_progress_items'
		});
	}
	if($(".slider_progress_items").length){
		$('.slider_progress_items').slick({
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  asNavFor: '.slider_full_progress',
		  dots: true,
		  centerMode: false,
		  focusOnSelect: true
		});
	}	
	/*
	======================================================
	  		CHURECH SLIDER THUMBNAIL ENDS
	=======================================================*/

	/*
	======================================================
	  		CHURECH TESTIMONIAL
	=======================================================*/
	if($(".church_testimonial_slider").length){
		$('.church_testimonial_slider').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  dots: true,
		  fade: false,
		  asNavFor: '.church_testimonial_nav'
		});
	}
	if($(".church_testimonial_nav").length){
		$('.church_testimonial_nav').slick({
		  slidesToShow: 5,
		  slidesToScroll: 5,
		  asNavFor: '.church_testimonial_slider',
		  dots: false,
		  arrows: false,
		  centerMode: true,
		  focusOnSelect: true
		});
	}
	/*
	======================================================
	  		CHURECH TESTIMONIAL ENDS
	=======================================================*/

	/*
	======================================================
	  		CHURECH thumbnail ENDS
	=======================================================*/
	if($(".slider_thumbnail").length){
		$('.slider_thumbnail').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.slider_thumbnail_items'
		});
	}
	if($(".slider_thumbnail_items").length){
		$('.slider_thumbnail_items').slick({
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  asNavFor: '.slider_thumbnail',
		  dots: false,
		  centerMode: true,
		  vertical:true,
		  arrows:true,
		  focusOnSelect: true
		});
	}	
	/*
	======================================================
	  		CHURECH thumbnail ENDS
	=======================================================*/
	
	/*
	======================================================
	  		CHURECH SELECTRIC MENUS VELUES
	=======================================================*/
	// kodeforest combobox
	if($(".location-select").length){
		$('.location-select').not('multiple').change(function(){
			var wrapper = $(this).attr('data-slug') + '-wrapper';
			var selected_wrapper = $(this).val();
			var dd = $(this).parents('.language_changer').children('.language_velue').html();
			
			$(this).parents('.language_changer').children('.language_velue').find('.'+selected_wrapper).each(function(){				
				if($(this).hasClass(selected_wrapper)){
					$('.'+selected_wrapper).parent().children().hide();
					$(this).css('display', 'block');
				}else{
					$('.'+selected_wrapper).parent().children().hide();
					$(this).css('display', 'none');
				}
			});
		});
	}	
	// kodeforest combobox
	if($(".location-select").length){
		$('.location-select').not('multiple').each(function(){
			var wrapper = $(this).attr('data-slug') + '-wrapper';
			var selected_wrapper = $(this).val();
			var dd = $(this).parents('.language_changer').children('.language_velue').html();
			
			$(this).parents('.language_changer').children('.language_velue').find('.'+selected_wrapper).each(function(){				
				if($(this).hasClass(selected_wrapper)){
					$('.'+selected_wrapper).parent().children().hide();
					$(this).css('display', 'block');
				}else{
					$('.'+selected_wrapper).parent().children().hide();
					$(this).css('display', 'none');
				}
			});
		});
	}	
	/*
	======================================================
	  		CHURECH SELECTRIC MENUS VELUES ENDS
	=======================================================*/
	

});
/*

*/

/*
	======================================================
	  		CHURECH BANNER SLIDER 3D
	=======================================================*/
$(function() {
				
	var Page = (function() {

		var $navArrows = $( '.nav-arrows' ).hide(),
			$navDots = $( '.nav-dots' ).hide(),
			$nav = $navDots.children( 'span' ),
			slicebox = $('.full-banner').slicebox( {
				onReady : function() {
					$navArrows.show();
					$navDots.show();
					/*slicebox.play();
					slicebox.pause();*/
					return false;
				},
				onBeforeChange : function( pos ) {
					$nav.removeClass( '.nav-dot-current' );
					$nav.eq( pos ).addClass( '.nav-dot-current' );

				},
				orientation : 'r',
				cuboidsRandom : true,
				disperseFactor : 150
			} ),
			
			
			init = function() {

				initEvents();
				
			};

			initEvents = function() {

				// add navigation events
				$navArrows.children( ':first' ).on( 'click', function() {

					slicebox.next();
					return false;

				} );
				$navArrows.children( ':last' ).on( 'click', function() {
					
					slicebox.previous();
					return false;

				} );
				
				$nav.each( function( i ) {
							
					$( this ).on( 'click', function( event ) {
						
						var $dot = $( this );
						
						if( !slicebox.isActive() ) {

							$nav.removeClass( 'nav-dot-current' );
							$dot.addClass( 'nav-dot-current' );
						
						}
						
						slicebox.jump( i + 1 );
						return false;
					
					} );
					
				} );
				
			};

			return { init : init };
	})();

	Page.init();

});
/*
	======================================================
	  		CHURECH BANNER SLIDER 3D ENDS
	=======================================================*/


/*
	======================================================
	  		CHURECH MAP API SCRIPTS
	=======================================================*/
// This example uses the autocomplete feature of the Google Places API.
      // It allows the user to find all hotels in a given place, within a given
      // country. It then displays markers for all the hotels returned,
      // with on-click details for each hotel.

      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

      var map, places, infoWindow;
      var markers = [];
      var autocomplete;
      var countryRestrict = {'country': 'us'};
      var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
      var hostnameRegexp = new RegExp('^https?://.+?/');

      var countries = {
        'au': {
          center: {lat: -25.3, lng: 133.8},
          zoom: 4
        },
        'br': {
          center: {lat: -14.2, lng: -51.9},
          zoom: 3
        },
        'ca': {
          center: {lat: 62, lng: -110.0},
          zoom: 3
        },
        'fr': {
          center: {lat: 46.2, lng: 2.2},
          zoom: 5
        },
        'de': {
          center: {lat: 51.2, lng: 10.4},
          zoom: 5
        },
        'mx': {
          center: {lat: 23.6, lng: -102.5},
          zoom: 4
        },
        'nz': {
          center: {lat: -40.9, lng: 174.9},
          zoom: 5
        },
        'it': {
          center: {lat: 41.9, lng: 12.6},
          zoom: 5
        },
        'za': {
          center: {lat: -30.6, lng: 22.9},
          zoom: 5
        },
        'es': {
          center: {lat: 40.5, lng: -3.7},
          zoom: 5
        },
        'pt': {
          center: {lat: 39.4, lng: -8.2},
          zoom: 6
        },
        'us': {
          center: {lat: 37.1, lng: -95.7},
          zoom: 3
        },
        'uk': {
          center: {lat: 54.8, lng: -4.6},
          zoom: 5
        }
      };

      function initMap() {
        map = new google.maps.Map(document.getElementById('newmap'), {
          zoom: countries['us'].zoom,
          center: countries['us'].center,
          mapTypeControl: false,
          panControl: false,
          zoomControl: false,
          streetViewControl: false
        });

        infoWindow = new google.maps.InfoWindow({
          content: document.getElementById('info-content')
        });

        // Create the autocomplete object and associate it with the UI input control.
        // Restrict the search to the default country, and to place type "cities".
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */ (
                document.getElementById('autocomplete')), {
              types: ['(cities)'],
              componentRestrictions: countryRestrict
            });
        places = new google.maps.places.PlacesService(map);

        autocomplete.addListener('place_changed', onPlaceChanged);

        // Add a DOM event listener to react when the user selects a country.
        document.getElementById('country').addEventListener(
            'change', setAutocompleteCountry);
      }

      // When the user selects a city, get the place details for the city and
      // zoom the map in on the city.
      function onPlaceChanged() {
        var place = autocomplete.getPlace();
        if (place.geometry) {
          map.panTo(place.geometry.location);
          map.setZoom(15);
          search();
        } else {
          document.getElementById('autocomplete').placeholder = 'Enter a city';
        }
      }

      // Search for hotels in the selected city, within the viewport of the map.
      function search() {
        var search = {
          bounds: map.getBounds(),
          types: ['lodging']
        };

        places.nearbySearch(search, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();
            // Create a marker for each hotel found, and
            // assign a letter of the alphabetic to each marker icon.
            for (var i = 0; i < results.length; i++) {
              var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
              var markerIcon = MARKER_PATH + markerLetter + '.png';
              // Use marker animation to drop the icons incrementally on the map.
              markers[i] = new google.maps.Marker({
                position: results[i].geometry.location,
                animation: google.maps.Animation.DROP,
                icon: markerIcon
              });
              // If the user clicks a hotel marker, show the details of that hotel
              // in an info window.
              markers[i].placeResult = results[i];
              google.maps.event.addListener(markers[i], 'click', showInfoWindow);
              setTimeout(dropMarker(i), i * 100);
              addResult(results[i], i);
            }
          }
        });
      }

      function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
          if (markers[i]) {
            markers[i].setMap(null);
          }
        }
        markers = [];
      }

      // Set the country restriction based on user input.
      // Also center and zoom the map on the given country.
      function setAutocompleteCountry() {
        var country = document.getElementById('country').value;
        if (country == 'all') {
          autocomplete.setComponentRestrictions([]);
          map.setCenter({lat: 15, lng: 0});
          map.setZoom(2);
        } else {
          autocomplete.setComponentRestrictions({'country': country});
          map.setCenter(countries[country].center);
          map.setZoom(countries[country].zoom);
        }
        clearResults();
        clearMarkers();
      }

      function dropMarker(i) {
        return function() {
          markers[i].setMap(map);
        };
      }

      function addResult(result, i) {
        var results = document.getElementById('results');
        var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
        var markerIcon = MARKER_PATH + markerLetter + '.png';

        var tr = document.createElement('tr');
        tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
        tr.onclick = function() {
          google.maps.event.trigger(markers[i], 'click');
        };

        var iconTd = document.createElement('td');
        var nameTd = document.createElement('td');
        var icon = document.createElement('img');
        icon.src = markerIcon;
        icon.setAttribute('class', 'placeIcon');
        icon.setAttribute('className', 'placeIcon');
        var name = document.createTextNode(result.name);
        iconTd.appendChild(icon);
        nameTd.appendChild(name);
        tr.appendChild(iconTd);
        tr.appendChild(nameTd);
        results.appendChild(tr);
      }

      function clearResults() {
        var results = document.getElementById('results');
        while (results.childNodes[0]) {
          results.removeChild(results.childNodes[0]);
        }
      }

      // Get the place details for a hotel. Show the information in an info window,
      // anchored on the marker for the hotel that the user selected.
      function showInfoWindow() {
        var marker = this;
        places.getDetails({placeId: marker.placeResult.place_id},
            function(place, status) {
              if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
              }
              infoWindow.open(map, marker);
              buildIWContent(place);
            });
      }

      // Load the place information into the HTML elements used by the info window.
      function buildIWContent(place) {
        document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
            'src="' + place.icon + '"/>';
        document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
            '">' + place.name + '</a></b>';
        document.getElementById('iw-address').textContent = place.vicinity;

        if (place.formatted_phone_number) {
          document.getElementById('iw-phone-row').style.display = '';
          document.getElementById('iw-phone').textContent =
              place.formatted_phone_number;
        } else {
          document.getElementById('iw-phone-row').style.display = 'none';
        }

        // Assign a five-star rating to the hotel, using a black star ('&#10029;')
        // to indicate the rating the hotel has earned, and a white star ('&#10025;')
        // for the rating points not achieved.
        if (place.rating) {
          var ratingHtml = '';
          for (var i = 0; i < 5; i++) {
            if (place.rating < (i + 0.5)) {
              ratingHtml += '&#10025;';
            } else {
              ratingHtml += '&#10029;';
            }
          document.getElementById('iw-rating-row').style.display = '';
          document.getElementById('iw-rating').innerHTML = ratingHtml;
          }
        } else {
          document.getElementById('iw-rating-row').style.display = 'none';
        }

        // The regexp isolates the first part of the URL (domain plus subdomain)
        // to give a short URL for displaying in the info window.
        if (place.website) {
          var fullUrl = place.website;
          var website = hostnameRegexp.exec(place.website);
          if (website === null) {
            website = 'http://' + place.website + '/';
            fullUrl = website;
          }
          document.getElementById('iw-website-row').style.display = '';
          document.getElementById('iw-website').textContent = website;
        } else {
          document.getElementById('iw-website-row').style.display = 'none';
        }
      }
/*
	======================================================
	  		CHURECH MAP API SCRIPTS ENDS
	=======================================================*/

