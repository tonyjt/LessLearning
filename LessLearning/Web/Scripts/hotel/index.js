$(function () {
    loadNavi(1);
    
    jQuery("#inputSingle").click(function () {
        jQuery("#divDateArr").addClass("hide");
        jQuery("#divTimeArr").addClass("hide");
    });

    jQuery("#inputDouble").click(function () {
        jQuery("#divDateArr").removeClass("hide");
        jQuery("#divTimeArr").removeClass("hide");
    });
});