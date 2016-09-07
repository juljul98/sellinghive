$(document).ready(function () {
  // var url = "http://www.sellinghive.dev";//"http://sellinghive.korinteraktiv.com";
  // $(document).on("click", "a", function (e) {
  //     var target = $(this),
  //         url = target.attr('href');
  //   // console.log(url);
  //    e.preventDefault();
  // });

  // $(document).on('click','.signin-btn',function() {
  //     var user = $('input#username').val(),
  //         pass = $('input#password').val();

  //   $.ajax({
  //      type: "POST",
  //      url: url+'/account/authenticate',
  //      crossDomain: false,
  //      data: {'username' : user, 'password' : pass},
  //      cache: true,
  //      beforeSend: function(){ $(".overlay").show(); },
  //      success: function(data){
  //          console.log(data);
  //          data = jQuery.parseJSON(data);
  //          $(".page-title").html(data.title);
  //          $(".content").html(data.content);
  //          if(data.islog) {
  //              $("#main-nav").css({ display : 'table'});
  //              $(".branch").css({ display : 'block'});
  //              $(".logo-block .type").html('"'+data.type+'"');
  //          }
  //          $(".overlay").delay(2000).fadeOut();
  //      }
  //  });
  // return false;
  // });
  var html = "";
html += '<div class="overlay">';
        html += '<div class="logo">';
       html+= '</div>';
        html += '<div class="socket">';
            html += '<div class="gel center-gel">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c1 r1">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c2 r1">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c3 r1">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c4 r1">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c5 r1">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c6 r1">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';

            html += '<div class="gel c7 r2">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';

            html += '<div class="gel c8 r2">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c9 r2">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c10 r2">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c11 r2">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c12 r2">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c13 r2">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c14 r2">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c15 r2">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c16 r2">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c17 r2">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c18 r2">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c19 r3">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c20 r3">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c21 r3">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c22 r3">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c23 r3">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c24 r3">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c25 r3">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c26 r3">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c28 r3">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c29 r3">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c30 r3">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c31 r3">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c32 r3">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c33 r3">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c34 r3">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c35 r3">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c36 r3">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
            html += '<div class="gel c37 r3">';
                html += '<div class="hex-brick h1"></div>';
                html += '<div class="hex-brick h2"></div>';
                html += '<div class="hex-brick h3"></div>';
           html+= '</div>';
       html+= '</div>';
   html+= '</div>';
  $("body").append(html);

});

/* Tooltip */
$( function()
{
    var targets = $( '[rel~=tooltip]' ),
        target  = false,
        tooltip = false,
        title   = false;
 
    targets.bind( 'mouseenter', function()
    {
        target  = $( this );
        tip     = target.attr( 'title' );
        tooltip = $( '<div id="tooltip"></div>' );
 
        if( !tip || tip == '' )
            return false;
 
        target.removeAttr( 'title' );
        tooltip.css( 'opacity', 0 )
               .html( tip )
               .appendTo( 'body' );
 
        var init_tooltip = function()
        {
            if( $( window ).width() < tooltip.outerWidth() * 1.5 )
                tooltip.css( 'max-width', $( window ).width() / 2 );
            else
                tooltip.css( 'max-width', 340 );
 
            var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
                pos_top  = target.offset().top - tooltip.outerHeight() - 20;
 
            if( pos_left < 0 )
            {
                pos_left = target.offset().left + target.outerWidth() / 2 - 20;
                tooltip.addClass( 'left' );
            }
            else
                tooltip.removeClass( 'left' );
 
            if( pos_left + tooltip.outerWidth() > $( window ).width() )
            {
                pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
                tooltip.addClass( 'right' );
            }
            else
                tooltip.removeClass( 'right' );
 
            if( pos_top < 0 )
            {
                var pos_top  = target.offset().top + target.outerHeight();
                tooltip.addClass( 'top' );
            }
            else
                tooltip.removeClass( 'top' );
 
            tooltip.css( { left: pos_left, top: pos_top } )
                   .animate( { top: '+=10', opacity: 1 }, 50 );
        };
 
        init_tooltip();
        $( window ).resize( init_tooltip );
 
        var remove_tooltip = function()
        {
            tooltip.animate( { top: '-=10', opacity: 0 }, 50, function()
            {
                $( this ).remove();
            });
 
            target.attr( 'title', tip );
        };
 
        target.bind( 'mouseleave', remove_tooltip );
        tooltip.bind( 'click', remove_tooltip );
    });
});
