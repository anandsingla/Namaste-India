$('document').ready(function(){
    $('div').mouseenter(function(){
    
      $('div').fadeTo('fast','.25');
    });
    $('div').mouseleave(function(){
    
      $('div').fadeTo('fast','.50');
    });
});
