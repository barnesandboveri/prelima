  $(document).ready(function(){
$('.clickme').click(function(){

  var tagid = $(this).data('tag');
  $('.cta-image-box').addClass('invisible');
  $('#bg-'+tagid).removeClass('invisible');
  });
  });
