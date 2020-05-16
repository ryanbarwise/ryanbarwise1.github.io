$(document).ready(function () {
    
    $('form').submit(function () {
        if ($('#name-input').val() === 'Name' || ($('#emailinput').val() === 'example#gmail.com' || ($('#message').val() === ''))) {
            alert("Please enter a valid name, email address, and a short message..Thanks!");
        } 
    
    });


    $('#linkedIn').on('click',function(){
    window.location.replace('https://www.linkedin.com/in/ryan-barwise-666923191/','_blank');
        
    
});

});

            
            
        
    
