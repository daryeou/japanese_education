var firststart=1;
window.addEventListener('load', function () {
    document.getElementsByTagName("iframe")[0].addEventListener("load", function (i) {
        console.log(this);
        let link = this.src.split("/").pop();
        //let link = new RegExp(this.src.split("/").pop());
        if (link.match('_2.') && firststart==1) {
            let cuma = document.createElement("img");
            cuma.setAttribute('style', "position:absolute; z-index:2000; bottom:0; width:100%;");
            cuma.classList.add("cuma_show");
            cuma.addEventListener("animationend",function(){
                document.body.removeChild(document.getElementById("cuma_div"));
            })
            document.getElementById("cuma_div").classList.remove("none");
            document.getElementById("cuma_div").appendChild(cuma);
            firststart=0;
        }
    });
});

