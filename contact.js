$(document).ready(function () {
    
    $('form').submit(function () {
        if ($('#name-input').val() === 'Name' || ($('#emailinput').val() === 'example#gmail.com' || ($('#message').val() === ''))) {
            alert("Please enter a valid name, email address, and a short message..Thanks!");
        } 
    
    });


    $('#linkedIn').on('click',function(){
    window.location.assign('https://www.linkedin.com/in/ryan-barwise-666923191/');
        
    
});

    $('#resume').on('click',function(){
        window.location.assign("RyanBarwiseResumeCurrent.pdf");

});

    $('#gitHub').on('click', function(){
        window.location.assign('https://github.com/ryanbarwise');
    })

    $('#emailAddress').on('click', function(){
        window.location.assign("mailto:ryanbarwise@gmail.com");
    })

});
            
            
        
    
