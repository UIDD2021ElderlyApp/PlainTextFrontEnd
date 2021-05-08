var DEF_DEBUG = true;
var DEF_NO_HTML_DISP = false;
var DEF_field_battle = true;
var DEF_use_https = false;
var DEF_domain_name = "luffy.ee.ncku.edu.tw";
var DEF_port = "30087";
var DEF_path = "/app/keep";

GLOBAL_full_url = "";

function init() {
    if (DEF_DEBUG) {
        console.log("dummiesTest success");
    } else {
        DEF_NO_HTML_DISP = true;
        DEF_field_battle = false;
        SET_ajex_full_json = false;
    }
    if (DEF_NO_HTML_DISP) {
        document.getElementById("dont_show_this_in_published_client").style.display = "none";
    }
    if (DEF_field_battle) {
        document.getElementById("usr_inp_txt").rows = 5;
        document.getElementById("usr_inp_txt").cols = 60;
        document.getElementById("usr_inp_post_btn").style.height = "30px";
        document.getElementById("usr_inp_post_btn").style.width = "30px";
        document.getElementById("usr_inp_post_btn").style.backgroundColor = "#ddb98b";
        document.getElementById("usr_inp_title").value = "Preset things";
    }
    GLOBAL_full_url = ((DEF_use_https) ? "https" : "http") + "://" + DEF_domain_name + ":" + DEF_port + DEF_path;
    if (DEF_DEBUG) {
        console.log(GLOBAL_full_url);
    }
}

function usr_inp_post_success(objects_returned_by_the_server) {
    if (DEF_DEBUG) {
        console.log((JSON.parse(objects_returned_by_the_server).hasOwnProperty("id")) ? "yes" : "no");
    }
    document.getElementById("usr_inp_send_success").innerText = (JSON.parse(objects_returned_by_the_server).hasOwnProperty("id")) ? "post_success?yes" : "post_success?no";
}

function usr_inp_post_fcn() {
    if (DEF_DEBUG) {
        console.log("usr_inp_post_btn click");
    }

    $.post(GLOBAL_full_url, {
        time: Date(),
        title: document.getElementById("usr_inp_title").value,
        txt: document.getElementById("usr_inp_txt").innerText
    }, (objects_returned_by_the_server) => {
        if (DEF_DEBUG) {
            console.log(String(objects_returned_by_the_server));
        }
        usr_inp_post_success(objects_returned_by_the_server);
    })

}

jQuery(function dom_ready(dom_ready_params) {

    init();

    //events
    document.getElementById("usr_inp_post_btn").addEventListener("click", usr_inp_post_fcn);

});