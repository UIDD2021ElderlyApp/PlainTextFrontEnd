var poop_no_see_DEF_DEBUG = true;
var poop_no_see_DEF_NO_HTML_DISP = false;
var poop_no_see_DEF_field_battle = true;
var poop_no_see_DEF_use_https = false;
var poop_no_see_DEF_domain_name = "luffy.ee.ncku.edu.tw";
var poop_no_see_DEF_port = "30087";
var poop_no_see_DEF_path = "/app/poop";
var poop_no_see_SET_ajex_full_json = false;//need false when pub.!

poop_no_see_GLOBAL_full_url = "";

function init() {
    if (poop_no_see_DEF_DEBUG) {
        console.log("dummiesTest success");
    } else {
        poop_no_see_DEF_NO_HTML_DISP = true;
        poop_no_see_DEF_field_battle = false;
        poop_no_see_SET_ajex_full_json = false;
    }
    if (poop_no_see_DEF_NO_HTML_DISP) {
        document.getElementById("dont_show_this_in_published_client").style.display = "none";
    }
    if (poop_no_see_DEF_field_battle) {
        document.getElementById("usr_inp_txt").rows = 5;
        document.getElementById("usr_inp_txt").cols = 60;
        document.getElementById("usr_inp_post_btn").style.height = "30px";
        document.getElementById("usr_inp_post_btn").style.width = "30px";
        document.getElementById("usr_inp_post_btn").style.backgroundColor = "#ddb98b";
        document.getElementById("usr_inp_title").value = "Preset things";
    }
    poop_no_see_GLOBAL_full_url = ((poop_no_see_DEF_use_https) ? "https" : "http") + "://" + poop_no_see_DEF_domain_name + ":" + poop_no_see_DEF_port + poop_no_see_DEF_path;
    if (poop_no_see_DEF_DEBUG) {
        console.log(poop_no_see_GLOBAL_full_url);
    }
}

function usr_inp_post_success(poop_no_see_objects_returned_by_the_server) {
    if (poop_no_see_DEF_DEBUG) {
        console.log((JSON.parse(poop_no_see_objects_returned_by_the_server).hasOwnProperty("id")) ? "yes" : "no");
    }
    document.getElementById("usr_inp_send_success").innerText = (JSON.parse(poop_no_see_objects_returned_by_the_server).hasOwnProperty("id")) ? "post_success?yes" : "post_success?no";
}

function usr_inp_post_fcn() {
    if (poop_no_see_DEF_DEBUG) {
        console.log("usr_inp_post_btn click");
    }

    if (poop_no_see_SET_ajex_full_json) {
        $.post(poop_no_see_GLOBAL_full_url, {
            poop_no_see_poop: "{\"id\":\"6092b210779ced6502375e01\",\"time\":\"1999-12-31T02:01:01.000Z\",\"title\":\"poop3\",\"text\":\"test\",\"img\":\"img03\",\"comment\":[\"{\\\"user_id\\\":\\\"akaishuichi\\\",\\\"time\\\":\\\"1999-12-31T23:01:01.000Z\\\",\\\"text\\\":\\\"test\\\"}\"]}"
        }, (poop_no_see_objects_returned_by_the_server) => {
            if (DEF_DEBUG) {
                console.log(objects_returned_by_the_server);
                usr_inp_post_success(objects_returned_by_the_server);
            }
        })
    } else {
        if (DEF_DEBUG) {
            console.log(Date());
            console.log(document.getElementById("usr_inp_title").value);
            console.log(document.getElementById("usr_inp_txt").value);
            console.log(document.getElementById("usr_inp_img_num").innerText);
        }

        $.post(GLOBAL_full_url, {
            time: Date(),
            title: document.getElementById("usr_inp_title").value,
            text: document.getElementById("usr_inp_txt").value,
            imgid: document.getElementById("usr_inp_img_num").innerText,
        }, (objects_returned_by_the_server) => {
            if (DEF_DEBUG) {
                console.log(String(objects_returned_by_the_server));
            }
            usr_inp_post_success(objects_returned_by_the_server);
        })

    }

}

jQuery(function dom_ready(dom_ready_params) {

    init();

    //events
    document.getElementById("usr_inp_post_btn").addEventListener("click", usr_inp_post_fcn);

});