// main.js

$(function(){
  AOS.init();
});

/*** 작품 필터링하여 보여주기 ***/
$(function(){
  let dutation = 400;

  // all
  $('#btn-all').on('click', function(){
    $('#works .row .left a').show(dutation);
  })
  // all
  $('#btn-all').on('click', function(){
    $('#works .row .right a').show(dutation);
  })
  // all
  $('#btn-all').on('click', function(){
    $('#works .row .right1 a').show(dutation);
  })
  // all
  $('#btn-all').on('click', function(){
    $('#works .row .left1 a').show(dutation);
  })


  // web
  $('#btn-web').on('click', function(){
    $('#works .row .left a')
      .hide(dutation)
      .filter('.web')
      .show(dutation);
  })
  // web
  $('#btn-web').on('click', function(){
    $('#works .row .left1 a')
      .hide(dutation)
      .filter('.web')
      .show(dutation);
  })
   // web
   $('#btn-web').on('click', function(){
    $('#works .row .right a')
      .hide(dutation)
      .filter('.web')
      .show(dutation);
  })
  // web
  $('#btn-web').on('click', function(){
    $('#works .row .right1 a')
      .hide(dutation)
      .filter('.web')
      .show(dutation);
  })

  // banner
  $('#btn-banner').on('click', function(){
    $('#works .row .left a')
      .hide(dutation)
      .filter('.banner')
      .show(dutation);
  })
  // banner
  $('#btn-banner').on('click', function(){
    $('#works .row .left1 a')
      .hide(dutation)
      .filter('.banner')
      .show(dutation);
  })
  // banner
  $('#btn-banner').on('click', function(){
    $('#works .row .right a')
      .hide(dutation)
      .filter('.banner')
      .show(dutation);
  })
  // banner
  $('#btn-banner').on('click', function(){
    $('#works .row .right1 a')
      .hide(dutation)
      .filter('.banner')
      .show(dutation);
  })
  // mobile
  $('#btn-mobile').on('click', function(){
    $('#works .row .left a')
      .hide(dutation)
      .filter('.mobile')
      .show(dutation);
  })
  // mobile
  $('#btn-mobile').on('click', function(){
    $('#works .row .left1 a')
      .hide(dutation)
      .filter('.mobile')
      .show(dutation);
  })
  // mobile
  $('#btn-mobile').on('click', function(){
    $('#works .row .right a')
      .hide(dutation)
      .filter('.mobile')
      .show(dutation);
  })
   // mobile
   $('#btn-mobile').on('click', function(){
    $('#works .row .right1 a')
      .hide(dutation)
      .filter('.mobile')
      .show(dutation);
  })


});