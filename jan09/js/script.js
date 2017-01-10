var sn0pen = document.getElementById('sn-open'),
    sn = document.getElementById('sn'),
    snClose = document.getElementById('sn-close');
snOpen .addeventListener("click", snAnimOpen );
function snAnimOpen(){
    sn.classList.add("open");
}
function snAnimClose(){
    sn.classList.remove("open");
}
