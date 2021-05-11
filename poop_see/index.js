var DEF_DEBUG = true;
var DEF_NO_HTML_DISP = false;
var DEF_field_battle = true;
var DEF_use_https = false;
var DEF_ts = true;//be true
var DEF_domain_name = "luffy.ee.ncku.edu.tw";
var DEF_port = "30087";
var DEF_path = "/app/poop";
var DEF_comment_path = "/comment";

var DEF_TEXT_UI_comment_btn = "submit";
var AMENDuser_idTOuser_name = false;//need false
var SET_ajex_full_json = false;//need false when pub.!
var SET_FillTest = false;//need false
var DEFAULT_RES_dummies_test = "[{\"id\":\"6092b210779ced6502375e01\",\"time\":\"1999-12-31T02:01:01.000Z\",\"title\":\"poop3\",\"text\":\"test\",\"img\":\"img03\",\"comment\":[\"{\\\"user_id\\\":\\\"akaishuichi\\\",\\\"time\\\":\\\"1999-12-31T23:01:01.000Z\\\",\\\"text\\\":\\\"test\\\"}\"]},{\"id\":\"6092b209779ced6502375e00\",\"time\":\"1999-12-31T01:01:01.000Z\",\"title\":\"poop2\",\"text\":\"test\",\"img\":\"img03\",\"comment\":[\"{\\\"user_id\\\":\\\"akaishuichi\\\",\\\"time\\\":\\\"1999-12-31T23:01:01.000Z\\\",\\\"text\\\":\\\"test\\\"}\",\"{\\\"user_id\\\":\\\"hatoriheiji\\\",\\\"time\\\":\\\"1999-12-31T23:01:01.000Z\\\",\\\"text\\\":\\\"test\\\"}\",\"{\\\"user_id\\\":\\\"amurotoru\\\",\\\"time\\\":\\\"1999-12-31T23:01:01.000Z\\\",\\\"text\\\":\\\"test\\\"}\"]},{\"id\":\"6092b1fe779ced6502375dff\",\"time\":\"1999-12-31T00:01:01.000Z\",\"title\":\"poop1\",\"text\":\"test\",\"img\":\"img03\",\"comment\":[]}]";
var dummy_commit = "[\"{\\\"user_id\\\":\\\"akaishuichi\\\",\\\"time\\\":\\\"1999-12-31T23:01:01.000Z\\\",\\\"text\\\":\\\"dummy_commit\\\"}\"]";

GLOBAL_full_url = "";

function usr_inp_comment_fcn(e) {
    if (SET_ajex_full_json) {
        $.post(GLOBAL_full_url + DEF_comment_path, {
            comment: dummy_commit
        }, (objects_returned_by_the_server) => {
            if (DEF_DEBUG) {
                console.log(String(objects_returned_by_the_server));
            }
            document.getElementById(String(e.target.id).replace(/_btn/g, '') + "_input_txt").value = "";
        })
    } else {

        if (DEF_DEBUG) {
            console.log(document.getElementById(String(e.target.id).replace(/_btn/g, '') + "_input_txt").value);
        }

        $.post(GLOBAL_full_url + DEF_comment_path, {
            id: String(e.target.id).replace(/_btn/g, ''),
            time: Date(),
            text: document.getElementById(String(e.target.id).replace(/_btn/g, '') + "_input_txt").value
        }, (objects_returned_by_the_server) => {
            if (DEF_DEBUG) {
                console.log(String(objects_returned_by_the_server));
            }
            document.getElementById(String(e.target.id).replace(/_btn/g, '') + "_input_txt").value = "";
        })
    }
}

function get3post() {
    if (DEF_DEBUG) {
        console.log("get3post !");
    }

    $.get(GLOBAL_full_url, {
        //empty!
    }, (objects_returned_by_the_server) => {
        if (DEF_DEBUG) {
            console.log(objects_returned_by_the_server);
        }
        if (!objects_returned_by_the_server) {
            // is emtpy
            document.getElementById(browse_post).classList.add("no_articles_here_or_stolen_by_aliens");
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
                var post_poop = document.createElement("div");
                post_poop.classList.add("post_poop");
                var p_frame = document.createElement("div");
                p_frame.classList.add("p_frame");
                var ca_frame = document.createElement("div");
                ca_frame.classList.add("ca_frame");
                var pi_frame = document.createElement("div");
                pi_frame.classList.add("pi_frame");
                var ppt_frame = document.createElement("div");
                ppt_frame.classList.add("ppt_frame");
                var poster_photo = document.createElement("div");
                poster_photo.classList.add("poster_photo");
                var poster_name = document.createElement("div");
                poster_name.classList.add("poster_name");
                if (AMENDuser_idTOuser_name) {
                    poster_name.innerText = element_returned_by_the_server.user_id;
                } else {
                    poster_name.innerText = element_returned_by_the_server.user_name;
                }
                var post_time = document.createElement("div");
                post_time.classList.add("post_time");
                //convert given date into readable format
                var tmp_date = new Date(element_returned_by_the_server.time);
                post_time.innerText = tmp_date.toDateString();
                var post_text = document.createElement("div");
                post_text.classList.add("post_text");
                post_text.innerText = element_returned_by_the_server.text;
                var post_photo = document.createElement("div");
                post_photo.classList.add("post_photo");

                for (let forloopcommentindex = 0; forloopcommentindex < element_returned_by_the_server.comment.length; forloopcommentindex++) {
                    const comment_element = JSON.parse(element_returned_by_the_server.comment[forloopcommentindex]);
                    if (DEF_DEBUG) { console.log(comment_element); }


                    var c_frame = document.createElement("div");
                    c_frame.classList.add("c_frame");
                    var ci_frame = document.createElement("div");
                    ci_frame.classList.add("ci_frame");
                    var ct_item = document.createElement("div");
                    ct_item.classList.add("ct_item");
                    ct_item.innerText = comment_element.text;
                    var ch_item = document.createElement("div");
                    ch_item.classList.add("ch_item");

                    var cn_item = document.createElement("div");
                    cn_item.classList.add("cn_item");
                    if (AMENDuser_idTOuser_name) {
                        ch_item.innerText = comment_element.user_id;
                    } else {
                        ch_item.innerText = comment_element.user_name;
                    }
                    var cd_item = document.createElement("div");
                    cd_item.classList.add("cd_item");
                    //convert given date into readable format
                    var tmp_date = new Date(comment_element.time);
                    cd_item.innerText = tmp_date.toDateString();

                    ci_frame.appendChild(ch_item);
                    ci_frame.appendChild(cn_item);
                    ci_frame.appendChild(cd_item);
                    c_frame.appendChild(ci_frame);
                    c_frame.appendChild(ct_item);
                    ca_frame.appendChild(c_frame);
                }

                ppt_frame.appendChild(post_text);
                ppt_frame.appendChild(post_photo);
                pi_frame.appendChild(poster_photo);
                pi_frame.appendChild(poster_name);
                pi_frame.appendChild(post_time);
                p_frame.appendChild(pi_frame);
                p_frame.appendChild(ppt_frame);
                post_poop.appendChild(p_frame);
                //--------------------bton
                var new_comment = document.createElement("div");
                new_comment.classList.add("new_comment");
                var usr_inp_comment_txt = document.createElement("input");
                usr_inp_comment_txt.classList.add("usr_inp_comment_txt");
                usr_inp_comment_txt.name = "usr_inp_comment_txt_name";
                usr_inp_comment_txt.type = "text";
                usr_inp_comment_txt.id = String(element_returned_by_the_server.id) + "_input_txt";
                var post_comment_button = document.createElement("div");
                post_comment_button.classList.add("post_comment_button");
                post_comment_button.innerText = DEF_TEXT_UI_comment_btn;
                post_comment_button.id = String(element_returned_by_the_server.id) + "_btn";

                new_comment.appendChild(usr_inp_comment_txt);
                new_comment.appendChild(post_comment_button);
                post_poop.appendChild(new_comment);
                //--------------------
                post_poop.appendChild(ca_frame);
                document.getElementById("browse_post").appendChild(post_poop);

                document.getElementById(post_comment_button.id).addEventListener("click", usr_inp_comment_fcn);
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
        document.getElementById("browse_post").style.height = "400px";
    }
    GLOBAL_full_url = ((DEF_use_https) ? "https" : "http") + "://" + DEF_domain_name + ":" + DEF_port + DEF_path;
    if (DEF_DEBUG) {
        console.log(GLOBAL_full_url);
    }
    if(DEF_ts){
        document.getElementById(browse_post).innerHTML="";
    }
    get3post();

    if (SET_FillTest) {
        document.getElementById("browse_post").innerText="1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n"
    }
}

function scrolledToBottom(e) {
    if (DEF_DEBUG) {
        console.log("scrolledToBottom");
    }
    get3post();
}

function browse_post_scroll(e) {
    if (e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight) {
        scrolledToBottom(e);
    }
}

jQuery(function dom_ready(dom_ready_params) {

    init();

    document.getElementById("browse_post").addEventListener("scroll", browse_post_scroll);
});