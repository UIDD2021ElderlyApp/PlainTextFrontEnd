var DEF_md_num = 36;
var prop = {
    debug: true,
    view: true,//need false
    useWindowUrl: false,
    testUrl: "https:luffy.ee.ncku.edu.tw:36443",
    testPath: "/medalView",
    useTestData: true,
    exampleRes: [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false]
};

jQuery(function dom_ready(dom_ready_params) {
    init();
    mainValueChange();
});

function init() {
    if (prop.debug) {
        for (let index = 0; index < DEF_md_num; index++) {
            var divtmp = document.createElement("div");
            divtmp.id = "md" + index.toString();
            divtmp.style.backgroundColor = "#ddb98b";
            divtmp.style.height = "60px";
            divtmp.style.width = "auto";
            divtmp.style.borderColor = "black";
            divtmp.style.borderStyle = "solid";
            divtmp.classList.add("ddb98b_button");
            var subdiv1 = document.createElement("div");
            subdiv1.innerText = "md" + index.toString();
            var subdiv2 = document.createElement("div");
            subdiv2.innerText = "false";
            divtmp.appendChild(subdiv1);
            divtmp.appendChild(subdiv2);
            document.getElementById("dont_show_this_in_published_client").appendChild(divtmp);
        }
    }
    if (!prop.view) {
        document.getElementById("dont_show_this_in_published_client").style.display = "none";
    }
}

function mainValueChange() {
    if (!prop.useTestData) {
        //api,get
        if (prop.useWindowUrl) {
            //public
        } else {
            //test
            $.get(prop.testUrl + prop.testPath, {
                //body.empty
            }, (res) => {
                for (let index = 0; index < DEF_md_num; index++) {
                    document.getElementById("md" + index.toString()).childNodes[1].innerText = res[index].toString();
                }
            })
        }
    } else {
        for (let index = 0; index < DEF_md_num; index++) {
            document.getElementById("md" + index.toString()).childNodes[1].innerText = prop.exampleRes[index].toString();
        }
    }
}