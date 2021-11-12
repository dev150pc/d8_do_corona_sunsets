


$('.header_div2_m').click(function() {
  if($("#submenu_m").is(":hidden")){
    $('#submenu_m').show();
  }
  else if($("#submenu_m").is(":visible")){
    $('#submenu_m').hide();
  }
});

$('#bg-home').click(function() {
  if($("#video-home").is(":hidden")){
    $("#video-home").addClass("video-home_m-visible");
  }
  else if($("#video-home").is(":visible")){
    $("#video-home").removeClass("video-home_m-visible");
  }
});


$('#exit_video_m').click(function() {
  if($("#video-home").is(":hidden")){
    $("#video-home").addClass("video-home_m-visible");
  }
  else if($("#video-home").is(":visible")){
    $("#video-home").removeClass("video-home_m-visible");
  }
});

$('#menu_header_m').click(function() {
  if($("#header_links").is(":hidden")){
    $("#header_links").addClass("header_links_m-visible");
    $("#nav_mob_fix").addClass("nav_m_fixed");
    $("#m_bar").hide();
    $("#m_x").show();
  }
  else if($("#menu_header_m").is(":visible")){
    $("#header_links").removeClass("header_links_m-visible");
    $("#nav_mob_fix").removeClass("nav_m_fixed");
    $("#submenu_m").hide();
    $("#m_bar").show();
    $("#m_x").hide();
  }
});

$('.submenu_mobile_m').click(function() {
  $("#header_links").removeClass('header_links_m-visible');
  $("#submenu_m").show();
});

$('#third_submenu_m').click(function() {
  $("#header_links").addClass('header_links_m-visible');
  $("#submenu_m").hide();
});




function cambiarSlider() {
  if (!premio1.classList.contains('premio_visible_m')) {
    premio1.classList.add('premio_visible_m');
    premio2.classList.remove('premio_visible_m');
  } else {
    premio1.classList.remove('premio_visible_m');
    premio2.classList.add('premio_visible_m');
  }
}
