var DEF_DEBUG = true;
var DEF_NO_HTML_DISP = false;

function init() {
    if (DEF_DEBUG) {
        console.log("dummiesTest success");
    }else{
        DEF_NO_HTML_DISP = true;
    }
    if (DEF_NO_HTML_DISP) {
        document.getElementById("dont_show_this_in_published_client").style.display = "none";
    }

}

init();