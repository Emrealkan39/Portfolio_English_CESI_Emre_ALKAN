var tanlinks = document.getElementsByClassName("tab-links");
var tancontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tanlink of tanlinks){
        tanlink.classList.remove("active-link");
    }
    for(tancontent of tancontents){
        tancontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}