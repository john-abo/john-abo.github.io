function closeNav() {
    document.getElementById("sideMenu").style.width = "0px"
}

function openNav() {
    document.getElementById("sideMenu").style.width = "250px"
}

function showtab(tab) {
    var i
    var tabs = document.getElementsByClassName("project_tab")

    for (i = 0; i < tabs.length; i++) {
        tabs.item(i).style.display = "none"
    }

    document.getElementById(tab).style.display = "block"
}