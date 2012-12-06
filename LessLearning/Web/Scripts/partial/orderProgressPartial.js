function loadNavi(index) {
    for (var i = 1; i <= index; i++) {
        jQuery("#nav" + i.toString()).addClass("label-warning");
    }
}