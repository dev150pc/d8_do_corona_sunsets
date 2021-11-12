

function getTag(tag){

	if (tag == 1) {

		$("#tag_r_").addClass("active");
		$("#tag_l_").removeClass("active");

		$(".p_form_registro_").show();
		$(".p_form_login_").hide();

	} else if (tag == 2){
		$("#tag_r_").removeClass("active");
		$("#tag_l_").addClass("active");

		$(".p_form_registro_").hide();
		$(".p_form_login_").show();
	}

}

$("#edit-archivo-upload").change(function(){
  var filename = $('#edit-archivo-upload')[0].files.length ? $('#edit-archivo-upload')[0].files[0].name : "";
  $("#archivo_select_").empty();
  $("#archivo_select_").append("Archivo Seleccionado: <strong>"+filename+"</strong>");
});


var pathname = $(location).attr('pathname');

if( pathname ===  "/404"){
  $("#content_p_g_").removeClass("content_p_g_");
}

console.log(pathname);
