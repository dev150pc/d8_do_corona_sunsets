if (window.location.pathname === "/") {
  const config = {
    type: "carousel",
    autoplay: 6000
  };

  new Glide('.glide', config).mount();

  const link1 = document.querySelectorAll('.link_menu_corona');
  link1[0].classList.add('link_menu_corona-active');
}

if (window.location.pathname === "/cocuyo/ganadores") {
  const link2 = document.querySelectorAll('.link_menu_corona');
  link2[2].classList.add('link_menu_corona-active');
}


jQuery('.header_div2_m').click(function () {
  if (jQuery("#submenu_m").is(":hidden")) {
    jQuery('#submenu_m').show();
  }
  else if (jQuery("#submenu_m").is(":visible")) {
    jQuery('#submenu_m').hide();
  }
});

jQuery('#bg-home').click(function () {
  if (jQuery("#video-home").is(":hidden")) {
    jQuery("#video-home").addClass("video-home_m-visible");
  }
  else if (jQuery("#video-home").is(":visible")) {
    jQuery("#video-home").removeClass("video-home_m-visible");
  }
});


jQuery('#exit_video_m').click(function () {
  if (jQuery("#video-home").is(":hidden")) {
    jQuery("#video-home").addClass("video-home_m-visible");
  }
  else if (jQuery("#video-home").is(":visible")) {
    jQuery("#video-home").removeClass("video-home_m-visible");
  }
});

jQuery('#menu_header_m').click(function () {
  if (jQuery("#header_links").is(":hidden")) {
    jQuery("#header_links").addClass("header_links_m-visible");
    jQuery("#nav_mob_fix").addClass("nav_m_fixed");
    jQuery("#m_bar").hide();
    jQuery("#m_x").show();
  }
  else if (jQuery("#menu_header_m").is(":visible")) {
    jQuery("#header_links").removeClass("header_links_m-visible");
    jQuery("#nav_mob_fix").removeClass("nav_m_fixed");
    jQuery("#submenu_m").hide();
    jQuery("#m_bar").show();
    jQuery("#m_x").hide();
  }
});

jQuery('.submenu_mobile_m').click(function () {
  jQuery("#header_links").removeClass('header_links_m-visible');
  jQuery("#submenu_m").show();
});

jQuery('#third_submenu_m').click(function () {
  jQuery("#header_links").addClass('header_links_m-visible');
  jQuery("#submenu_m").hide();
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
