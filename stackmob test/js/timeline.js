$(function () {
     
         $(document).on('pageinit', '#timelineview', function(e){
  

      
            
        
    var timeline_entry = {
        
        //extract values
    text:mytimeline_entry.text,
    emotion: mytimeline_entry.emotion,
    color:mytimeline_entry.color,
    previewtext:mytimeline_entry.text.substring(0,19);
    };
        
            //fetch template
    var template = $('#timeline-tpl').html();                   
    var html = Mustache.to_html(template,timeline_entry);
        $('#timelinetable').html(html);
     
});    
  
});