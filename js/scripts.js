$('#link').click(function(){
    if($('#some_text').is(':visible')){
        $('#some_text').slideUp();
        $(this).text('Показать');
    }
    else{
        $('#some_text').slideDown();
        $(this).text('Скрыть');
    }
    return false;
});

$('#link-2').click(function(){
    if($('#some_text-2').is(':visible')){
        $('#some_text-2').slideUp();
        $(this).text('Продолжение...');
    }
    else{
        $('#some_text-2').slideDown();
        $(this).text('Скрыть');
    }
    return false;
});

$('#link-3').click(function(){
    if($('#some_text-3').is(':visible')){
        $('#some_text-3').slideUp();
        $(this).text('Продолжение...');
    }
    else{
        $('#some_text-3').slideDown();
        $(this).text('Скрыть');
    }
    return false;
});


$('#link-4').click(function(){
    if($('#some_text-4').is(':visible')){
        $('#some_text-4').slideUp();
        $(this).text('Продолжение...');
    }
    else{
        $('#some_text-4').slideDown();
        $(this).text('Скрыть');
    }
    return false;
});


$('#link-5').click(function(){
    if($('#some_text-5').is(':visible')){
        $('#some_text-5').slideUp();
        $(this).text('Продолжение...');
    }
    else{
        $('#some_text-5').slideDown();
        $(this).text('Скрыть');
    }
    return false;
});


$('#link-6').click(function(){
    if($('#some_text-6').is(':visible')){
        $('#some_text-6').slideUp();
        $(this).text('Продолжение...');
    }
    else{
        $('#some_text-6').slideDown();
        $(this).text('Скрыть');
    }
    return false;
});



$("#header").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


$('.carousel').carousel()





	
	jQuery(document).ready(function(){
		
	});