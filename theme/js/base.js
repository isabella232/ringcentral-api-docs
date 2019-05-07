$( document ).ready( function () {
    $( '.navbar a.dropdown-toggle' ).on( 'click', function ( e ) {
        var $el = $( this );
        var $parent = $( this ).offsetParent( ".dropdown-menu" );
        $( this ).parent( "li" ).toggleClass( 'show' );

        if ( !$parent.parent().hasClass( 'navbar-nav' ) ) {
            $el.next().css( { "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 } );
        }
        $( '.navbar-nav li.show' ).not( $( this ).parents( "li" ) ).removeClass( "show" );
        return false;
    } );

    $( '.contributors img[data-src]' ).each( function() {
        src = $(this).attr("data-src");
        $(this).attr('src',src);
    });
    $('.metadata').detach().insertAfter( '#content h1:first' );
    $('#sidenav .active').closest('.toplevel .collapse').addClass('show'); 

    $('.superfences-tabs input').on('change', function( e ) {
	var id = $(this).attr('id');
	var targetLabel = $(this).parent().find("label[for='"+id+"']").html();
	$('.superfences-tabs label').each( function() {
	    if ( $(this).html() == targetLabel ) {
		if (forTarget != id) {
		    var forTarget = $(this).attr('for');
		    $(this).parent().find("input[id='"+forTarget+"']").attr('checked',true).trigger('click');
		}
	    }
	});
    });

} );
