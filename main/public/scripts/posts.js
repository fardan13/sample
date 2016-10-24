$(function() {

  $.getJSON('posts/api', updatePosts);

 $('.post-form').submit(function(e) {
    e.preventDefault();
    $.post('/posts/api', {
      name : $('#post-form-name').val(),
      post : $('#post-form-post').val()
    }, updatePosts); // This will call updatePosts with the data got from POST
  });


  function updatePosts(data) {
    var output = '';
    $.each(data, function(key, item) {
      output += '<h2>' + item.name + ' - ' + item.timestamp + '</h2>';
      output += '<p>' + item.post + '</p>';
    });
    $('.post-messages').html(output);
  }

});
