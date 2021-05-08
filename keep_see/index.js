var DEF_DEBUG = true;
var DEF_NO_HTML_DISP = false;
var DEF_field_battle = true;
var DEF_use_https = false;
var DEF_domain_name = "luffy.ee.ncku.edu.tw";
var DEF_port = "30087";
var DEF_path = "/app/keep";
var DEF_del_path="/del";

var DEF_TEXT_UI_del_btn = "刪除";
var AMENDuser_idTOuser_name = false;//need false

GLOBAL_full_url = "";

function del_keep_fcn(e) {//Postal doubts

    /*$.ajax({
        url: GLOBAL_full_url,
        type: 'DELETE',
        success: function(result) {
            // Do something with the result
        }
    });*/

    $.post(GLOBAL_full_url + DEF_del_path, {
        id: String(e.target.id).replace(/_btn/g, ''),
    }, (objects_returned_by_the_server) => {
        if (DEF_DEBUG) {
            console.log(String(objects_returned_by_the_server));
        }
        //TODO:
        //need reload here
    })
}

function get3keep() {
    if (DEF_DEBUG) {
        console.log("get3keep !");
    }

    $.get(GLOBAL_full_url, {
        //empty!
    }, (objects_returned_by_the_server) => {
        if (DEF_DEBUG) {
            console.log(objects_returned_by_the_server);
        }
        if (!objects_returned_by_the_server) {
            // is emtpy
            document.getElementById(main_keep_see).classList.add("no_articles_here_or_stolen_by_aliens");
            if (document.getElementById("STAT_no_articles_here_or_stolen_by_aliens").innerText === "no_articles_here_or_stolen_by_aliens?undefine") {
                document.getElementById("STAT_no_articles_here_or_stolen_by_aliens").innerText = "no_articles_here_or_stolen_by_aliens?yes";
            } else {
                //no move!
            }
        } else {
            document.getElementById("STAT_no_articles_here_or_stolen_by_aliens").innerText = "no_articles_here_or_stolen_by_aliens?no";
            for (let forloopindexofOBJRETURNBYSV = 0; forloopindexofOBJRETURNBYSV < JSON.parse(objects_returned_by_the_server).length; forloopindexofOBJRETURNBYSV++) {
                const element_returned_by_the_server = JSON.parse(objects_returned_by_the_server)[forloopindexofOBJRETURNBYSV];

                if (DEF_DEBUG) { console.log(element_returned_by_the_server); }
                var all_frame = document.createElement("div");
                all_frame.classList.add("all_frame");
                var p_frame = document.createElement("div");
                p_frame.classList.add("p_frame");
                var pi_frame = document.createElement("div");
                pi_frame.classList.add("pi_frame");
                var ppt_frame = document.createElement("div");
                ppt_frame.classList.add("ppt_frame");
                var ph_item = document.createElement("div");
                ph_item.classList.add("ph_item");
                var pd_item = document.createElement("div");
                pd_item.classList.add("pd_item");
                //convert given date into readable format
                var tmp_date = new Date(element_returned_by_the_server.time);
                pd_item.innerText = tmp_date.toDateString();
                var pt_item = document.createElement("div");
                pt_item.classList.add("pt_item");
                pt_item.innerText = element_returned_by_the_server.text;
                var pi_item = document.createElement("div");
                pi_item.classList.add("pi_item");

                ppt_frame.appendChild(pt_item);
                ppt_frame.appendChild(pi_item);
                pi_frame.appendChild(ph_item);
                pi_frame.appendChild(pd_item);
                p_frame.appendChild(pi_frame);
                p_frame.appendChild(ppt_frame);
                all_frame.appendChild(p_frame);
                //--------------------bton
                var del_keep_frame = document.createElement("div");
                del_keep_frame.classList.add("del_keep_frame");
                var del_keep_btn = document.createElement("div");
                del_keep_btn.classList.add("del_keep_btn");
                del_keep_btn.innerText = DEF_TEXT_UI_del_btn;
                del_keep_btn.id = String(element_returned_by_the_server.id) + "_btn";

                del_keep_frame.appendChild(del_keep_btn);
                all_frame.appendChild(del_keep_frame);
                //--------------------
                document.getElementById("main_keep_see").appendChild(all_frame);

                document.getElementById(del_keep_btn.id).addEventListener("click", del_keep_fcn);
            }
        }
    })


}

function init() {
    if (DEF_DEBUG) {
        console.log("dummiesTest success");
    } else {
        DEF_NO_HTML_DISP = true;
        DEF_field_battle = false;
        AMENDuser_idTOuser_name = false;
        SET_ajex_full_json = false;
    }
    if (DEF_NO_HTML_DISP) {
        document.getElementById("dont_show_this_in_published_client").style.display = "none";
    }
    if (DEF_field_battle) {
        document.getElementById("main_keep_see").style.height = "200px";
    }
    GLOBAL_full_url = ((DEF_use_https) ? "https" : "http") + "://" + DEF_domain_name + ":" + DEF_port + DEF_path;
    if (DEF_DEBUG) {
        console.log(GLOBAL_full_url);
    }
    get3keep();

}

function scrolledToBottom(e) {
    if (DEF_DEBUG) {
        console.log("scrolledToBottom");
    }
    get3keep();
}

function main_keep_see_scroll(e) {
    if (e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight) {
        scrolledToBottom(e);
    }
}

jQuery(function dom_ready(dom_ready_params) {

    init();

    document.getElementById("main_keep_see").addEventListener("scroll", main_keep_see_scroll);
});