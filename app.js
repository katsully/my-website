$(document).ready(function(){

  $('#myButton').click(function() {
    var name = $('.first').val() + " " + $('.last');
    var email = $('.email').val();
    var message = $('textarea').val();
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': '0t-klM9r1Do4mNPmQBs3Cw',
        'message': {
          'from_email': email,
          'from_name': name,
          'to': [
              {
                'email': 'kmsullivan012@gmail.com',
                'name': 'Kat Sullivan',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'Contact Form',
          'html': message
        }
      }
    }).done(function(response) {
      console.log(response); 
    });
  });
});


