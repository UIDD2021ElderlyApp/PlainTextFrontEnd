console.log("windos-height:" + $(window).height()); console.log("windos-width:" + $(window).width());

document.body.addEventListener("change", function () {
    console.log("dom change!");
});

function checkFlag() {
    if (!document.getElementById("cboxLoadingGraphic")) {
        setTimeout(() => {
            checkFlag();
        }, 5);
    } else {
        document.getElementById("cboxLoadingGraphic").innerHTML = "<div class=\"loading css_var_center\" id=\"loading_id\"><div class=\"loading_container\"><span class=\"loading_object\"></span></div><div class=\"loading_container\"><span class=\"loading_object\"></span></div><div class=\"loading_container\"><span class=\"loading_object\"></span></div><div class=\"loading_container\"><span class=\"loading_object\"></span></div><div class=\"loading_container\"><span class=\"loading_object\"></span></div><div class=\"loading_container\"><span class=\"loading_object\"></span></div><div class=\"loading_container\"><span class=\"loading_object\"></span></div><div class=\"loading_container\"><span class=\"loading_object\"></span></div><div class=\"loading_container\"><span class=\"loading_object\"></span></div><div class=\"loading_container\"><span class=\"loading_object\"></span></div><div class=\"loading_container\"><span class=\"loading_object\"></span></div><div class=\"loading_container\"><span class=\"loading_object\"></span></div><div class=\"loading_container\"><span class=\"loading_object\"></span></div><div class=\"loading_container\"><span class=\"loading_object\"></span></div><div class=\"loading_container\"><span class=\"loading_object\"></span></div><div class=\"loading_container\"><span class=\"loading_object\"></span></div><div class=\"loading_container\"><span class=\"loading_object\"></span></div><div class=\"loading_container\"><span class=\"loading_object\"></span></div><div class=\"loading_container\"><span class=\"loading_object\"></span></div><div class=\"loading_container\"><span class=\"loading_object\"></span></div></div>";
    }
}
checkFlag();

var mygallery_justifiedGallery = $("#mygallery").justifiedGallery({
    rowHeight: 700,
    lastRow: 'nojustify',
    rel: 'gallery1',
    margins: 3
});

mygallery_justifiedGallery.on('jg.rowflush', function () {
    $(this).find('a').colorbox({
        maxWidth: '80%',
        maxHeight: '80%',
        opacity: 0.8,
        transition: 'elastic',
        current: ''
    });
});

// vmousedown fail
$(".button").bind('touchstart', function () {
    $(this).animate({ 'opacity': 0.5 }, 100)
})
$(".button").bind('touchend', function () {
    $(this).animate({ 'opacity': 1 }, 100)
})
$(window).scroll(function () {
    //console.log("scrolltop:" + $(this).scrollTop());
    document.getElementById("label").style.marginTop = $(this).scrollTop().toString() + "px";
})
$("#confirmed_forwarding_path").on('click', function (e) {
    e.preventDefault();
    console.log("confirmed_forwarding_path");
})
