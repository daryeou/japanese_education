let URLSearch;
window.onload = function () {
    var img = document.getElementById("background");
    document.body.style.width = img.width.toString() + "px"
    document.body.style.height = img.height.toString() + "px"
    URLSearch = new URLSearchParams(location.search);
    
}
/*document.body.style.width=window.innerWidth.toString()+"px"
document.body.style.height=window.innerHeight.toString()+"px"*/

function searchParam(key){
    return new URLSearch.get(key);
}