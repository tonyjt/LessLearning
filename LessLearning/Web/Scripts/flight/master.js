function loadFlightNavi(index) {
    for (var i = 1; i <= index; i++) {
        jQuery("#flightNav" + i.toString()).addClass("label-warning");
    }
}