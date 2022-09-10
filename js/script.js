   
// Create viewer
viewer = pannellum.viewer('panorama', ﻿{
    "type": "equirectangular",  
    "panorama": "./img/Background.png",
    "autoLoad": true,
    "autoRotate": -5,
    "showControls": false,
    "hotSpots": [
        {
            "pitch": 14.1,
            "yaw": 1.5,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "View More",
              
        },
        {
            "pitch": -9.4,
            "yaw": 222.6,
            "cssClass": "custom-hotspot2",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "View More"
        },
        {
            "pitch": -0.9,
            "yaw": 144.4,
            "cssClass": "custom-hotspot3",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "View More"
        },
        {
            "pitch": -20.9,
            "yaw": 110.4,
            "cssClass": "custom-hotspot4",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "View More"
        },
        {
            "pitch": 20.9,
            "yaw": 90.4,
            "cssClass": "custom-hotspot5",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "View More"
        },
        {
            "pitch": -15.9,
            "yaw": 80.4,
            "cssClass": "custom-hotspot6",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "View More"
        },
        {
            "pitch": 15.9,
            "yaw": 60.4,
            "cssClass": "custom-hotspot7",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "View More"
        },
        {
            "pitch": -20.1,
            "yaw": 15.5,
            "cssClass": "custom-hotspot8",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "View More"
        },
        {
            "pitch": -15.4,
            "yaw": 190.6,
            "cssClass": "custom-hotspot9",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "View More"
        },
        {
            "pitch": 14.1,
            "yaw": -35.5,
            "cssClass": "custom-hotspot10",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "View More"
        },
        {
            "pitch": 25.1,
            "yaw": -70.5,
            "cssClass": "custom-hotspot11",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "View More"
        },
        {
            "pitch": 10.1,
            "yaw": -100.5,
            "cssClass": "custom-hotspot12",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "View More"
        },
    ]
});

// Hot spot creation function
function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-tooltip');
    var span = document.createElement('span');
    span.innerHTML = args;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';
    //Make clickabble to Hotspot
    $(".custom-hotspot").attr('data-location', 'hero.html');
    $(".custom-hotspot").click(function() {
     $('#panorama').css('transform','scale(2)');
     $('#panorama').css('transition','all 2s');
  window.location = $(".custom-hotspot").data("location"); 
  return false;
});
     $(".custom-hotspot2").attr('data-location', 'what-lof.html');
    $(".custom-hotspot2").click(function() {
        $('#panorama').css('transform','scale(2)');
        $('#panorama').css('transition','all 2s');
  window.location = $(".custom-hotspot2").data("location"); 
  return false;
});
    
    $(".custom-hotspot3").attr('data-location', 'lof-plt.html');
    $(".custom-hotspot3").click(function() {
        $('#panorama').css('transform','scale(2)');
        $('#panorama').css('transition','all 2s');
  window.location = $(".custom-hotspot3").data("location"); 
  return false;
});
    
    $(".custom-hotspot4").attr('data-location', 'lof-plt2.html');
    $(".custom-hotspot4").click(function() {
        $('#panorama').css('transform','scale(2)');
        $('#panorama').css('transition','all 2s');
  window.location = $(".custom-hotspot4").data("location"); 
  return false;
});
    
    $(".custom-hotspot5").attr('data-location', 'tokonomics.html');
    $(".custom-hotspot5").click(function() {
        $('#panorama').css('transform','scale(2)');
        $('#panorama').css('transition','all 2s');
  window.location = $(".custom-hotspot5").data("location"); 
  return false;
});
    
    $(".custom-hotspot6").attr('data-location', 'partners.html');
    $(".custom-hotspot6").click(function() {
        $('#panorama').css('transform','scale(2)');
        $('#panorama').css('transition','all 2s');
  window.location = $(".custom-hotspot6").data("location"); 
  return false;
});
    
    $(".custom-hotspot7").attr('data-location', 'dashboard.html');
    $(".custom-hotspot7").click(function() {
        $('#panorama').css('transform','scale(2)');
        $('#panorama').css('transition','all 2s');
  window.location = $(".custom-hotspot7").data("location"); 
  return false;
});
    
    $(".custom-hotspot8").attr('data-location', 'roadmap.html');
    $(".custom-hotspot8").click(function() {
        $('#panorama').css('transform','scale(2)');
        $('#panorama').css('transition','all 2s');
  window.location = $(".custom-hotspot8").data("location"); 
  return false;
});
    
    $(".custom-hotspot9").attr('data-location', 'white-paper.html');
    $(".custom-hotspot9").click(function() {
        $('#panorama').css('transform','scale(2)');
        $('#panorama').css('transition','all 2s');
  window.location = $(".custom-hotspot9").data("location"); 
  return false;
});
  
    $(".custom-hotspot10").attr('data-location', 'team-vision.html');
    $(".custom-hotspot10").click(function() {
        $('#panorama').css('transform','scale(2)');
        $('#panorama').css('transition','all 2s');
  window.location = $(".custom-hotspot10").data("location"); 
  return false;
});
    
    $(".custom-hotspot11").attr('data-location', 'merch-store.html');
    $(".custom-hotspot11").click(function() {
        $('#panorama').css('transform','scale(2)');
        $('#panorama').css('transition','all 2s');
  window.location = $(".custom-hotspot11").data("location"); 
  return false;
});
    
    $(".custom-hotspot12").attr('data-location', 'contact.html');
    $(".custom-hotspot12").click(function() {
        $('#panorama').css('transform','scale(2)');
        $('#panorama').css('transition','all 2s');
  window.location = $(".custom-hotspot12").data("location"); 
  return false;
});
    
    
   
    
    
    
    
     
};

   

    




     // Hide video
        //     function hide(){
        //         setTimeout(function() {
        //     $('#vid').fadeOut('fast');
        // }, 3000);
        //     };
        // Show content
        $(document).ready(function(){
            $('#vid').fadeOut(3000);
            $('#panorama').fadeIn(3000);
         });
      
          //  Click Event
                
      $(function() {
        $('.cloud-left').hover(function() {
          $('h1').css('color', 'yellow');
        }, function() {
          $('h1').css('color', '');
        });
      });
      $(function() {
        $('.cloud-right').hover(function() {
          $('h1').text('or code all night ; )').css('font-size','60px').css('color', 'pink');
        }, function() {
          $('h1').text('Good Night!').css('font-size','6em').css('color', 'white');
        });
      });