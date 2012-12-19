$(function () {
     
    
    $(document).on('pageinit', '#newsfeedview', function(e){
  
        
        
        
        $.ajax({
  url: baas.kinvey.com,
  authorization: [user credentials]
  data: data,
  success: success,
  dataType: dataType
});
        
        
        
        
        var anewentry = new Kinvey.Entity({});
    anewentry.load('50bc13f05cfb69436c0016c5', {
    success: function(anewentry) {
    // myBirthdayParty is the whole entity.
        alert('got one!');
        document.write(anewentry);
    },
    error: function(e) {
    // Failed to fetch birthday-party-id.
    // e holds information about the nature of the error.
    }
    });
         
    var listentry = {
        
    header:anewentry.title,
   timeposted: "18:00",
    entrytext: anewentry.text,
    emotion: anewentry.emotion,
     color: anewentry.color            
    };
        
      document.write(listentry);  
            

           
          //write out template
    var template = $("#newsfeed-li-tpl").html();              
    var html = Mustache.to_html(template, listentry);      
    $('#newsfeedlist').html(html);
           

  alert("Newsfeed.js ran");

 
    

 
});