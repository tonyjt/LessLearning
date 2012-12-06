jQuery(function () {
    loadNavi(2);


});

function showAllHotel(id) {
    jQuery("#i"+id).removeClass("icon-chevron-down").addClass("icon-chevron-up");

    jQuery("#hotel" + id + " .bed").removeClass("hide");

    
    jQuery("#a" + id).attr("href","#").unbind('click').click(function () {
        hideAllHotel(id);
        return false;
    });
}

function hideAllHotel(id) {
    jQuery("#i" + id).removeClass("icon-chevron-up").addClass("icon-chevron-down");

    jQuery("#hotel"+ id+" .bed").addClass("hide");

    jQuery("#a" + id).unbind('click').click(function () {
        showAllHotel(id);
        return false;
    });
}