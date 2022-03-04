

function getTag(tag){

	if (tag == 1) {

		jQuery("#tag_r_").addClass("active");
		jQuery("#tag_l_").removeClass("active");

		jQuery(".p_form_registro_").show();
		jQuery(".p_form_login_").hide();

	} else if (tag == 2){
		jQuery("#tag_r_").removeClass("active");
		jQuery("#tag_l_").addClass("active");

		jQuery(".p_form_registro_").hide();
		jQuery(".p_form_login_").show();
	}

}

jQuery("#edit-archivo-upload").change(function(){
  var filename = jQuery('#edit-archivo-upload')[0].files.length ? jQuery('#edit-archivo-upload')[0].files[0].name : "";
  jQuery("#archivo_select_").empty();
  jQuery("#archivo_select_").append("Archivo Seleccionado: <strong>"+filename+"</strong>");
});


var pathname = jQuery(location).attr('pathname');

if( pathname ===  "/404"){
  jQuery("#content_p_g_").removeClass("content_p_g_");
}

console.log(pathname);
