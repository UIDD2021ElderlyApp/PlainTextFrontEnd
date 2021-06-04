//need use https
var DEF_DEBUG = true;
var DEF_HTML_DISP = false;
var DEF_GEN_36 = true;//true
var DEF_md_num=36;
var DEF_domain_name = "luffy.ee.ncku.edu.tw";
var DEF_port = "38443";
var DEF_path = "/app/reward";

GLOBAL_full_url = "";

function refresh_basic_num() {
    $.get(GLOBAL_full_url, {
        //empty
    }, (objects_returned_by_the_server) => {
        if (DEF_DEBUG) {
            console.log(String(objects_returned_by_the_server));
        }
        document.getElementById("show_exp_num").innerText = JSON.parse(objects_returned_by_the_server).exp;
        document.getElementById("show_food_num").innerText = JSON.parse(objects_returned_by_the_server).food;
        document.getElementById("show_dessert_num").innerText = JSON.parse(objects_returned_by_the_server).dessert;
    })
}

function gen_div36() {
    for (let tmpindex = 0; tmpindex < DEF_md_num; tmpindex++) {
        var tmp1 = document.createElement("div");
        tmp1.id="md"+tmpindex.toString();
        document.getElementById("dont_show_this_in_published_client").appendChild(tmp1);
    }
}

function init() {
    if (DEF_HTML_DISP) {
        document.getElementById("dont_show_this_in_published_client").style.display = "none";
    }
    if (DEF_field_battle) {
        for (let ddb98b_button_loop_index = 0; ddb98b_button_loop_index < document.getElementsByClassName("ddb98b_button").length; ddb98b_button_loop_index++) {
            const ddb98b_button_element = document.getElementsByClassName("ddb98b_button")[ddb98b_button_loop_index];
            ddb98b_button_element.style.backgroundColor = "#ddb98b";
            ddb98b_button_element.style.height = "30px";
            ddb98b_button_element.style.width = "auto";
        }
    }
    if(DEF_GEN_36){
        gen_div36() ;
    }
    GLOBAL_full_url = ((DEF_use_https) ? "https" : "http") + "://" + DEF_domain_name + ":" + DEF_port + DEF_path;
    if (DEF_DEBUG) {
        console.log(GLOBAL_full_url);
    }
}

jQuery(function dom_ready(dom_ready_params) {

    init();

    //events
    document.getElementById("usr_inp_btn_food").addEventListener("click", usr_inp_food_fcn);

});