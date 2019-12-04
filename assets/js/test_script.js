(function( $ ){
    $.fn.set_answer = function(x) {
        $('#answer_1').css({ 'color': 'green' });
        $('#answer_2').css({ 'color': 'green' });
        $('#answer_3').css({ 'color': 'red' });
        $('#answer_4').css({ 'color': 'green' }); 
        
        $('#comment_title').text('Коммент автора:');

        switch(x) {
            case '1':
                    $('#comment_text').text('Кататься зимой на велосипеде просто прекрасно. Дороги же почищены, и кататься можно.');
                    break;
            case '2':
                    $('#comment_text').text('Моей первой машиной была BMW, с тех пор и понеслось.');
                    break;
            case '3':
                    $('#comment_text').text('Ну как-то в жизни не довелось, что уж тут поделать.');
                    break;
            case '4':
                    $('#comment_text').text('Если не съездил отдохнуть, то год прожит зря!');
                    break;
        }

        $('#comment_button').text('Скрыть');
        return this;
    }; 
 })( jQuery );

 (function( $ ){
    $.fn.reset = function() {
        $('#answer_1').css({ 'color': 'black' });
        $('#answer_2').css({ 'color': 'black' });
        $('#answer_3').css({ 'color': 'black' });
        $('#answer_4').css({ 'color': 'black' }); 

        $('#comment_title').text('');
        $('#comment_text').text('');
        $('#comment_button').text('');   
        return this;
    }; 
 })( jQuery );

$('#answer_1').click(function(){
    $('#my_div').set_answer('1');
    
  });
$('#answer_2').click(function(){
    $('#my_div').set_answer('2');
});
$('#answer_3').click(function(){
    $('#my_div').set_answer('3');
});
$('#answer_4').click(function(){
    $('#my_div').set_answer('4');
});

$('#comment_button').click(function(){
    $('#my_div').reset();
});