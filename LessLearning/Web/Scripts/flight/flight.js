jQuery(function () {
    loadFlightNavi(2);

    jQuery("#inputSingle").click(function () {
        jQuery("#divDateArr").addClass("hide");
        jQuery("#spanTimeArr").addClass("hide");
        jQuery("#timeArr").addClass("hide");

    });

    jQuery("#inputDouble").click(function () {
        jQuery("#divDateArr").removeClass("hide");
        jQuery("#spanTimeArr").removeClass("hide");
        jQuery("#timeArr").removeClass("hide");
    });

    jQuery('#aSearch').click(function () {
        showAdvancedSearch();
    });

    jQuery("#aAllCabinMU5137").click(
        function () {
        showAllCabin('MU5137');
    });
});

function showAdvancedSearch() {

    jQuery('#aSearch').unbind('click').click(function () {
        hideAdvancedSearch();
    });

    jQuery("#trAdvanced").removeClass("hide");

    jQuery("#iSearch").removeClass("icon-chevron-down");

    jQuery("#iSearch").addClass("icon-chevron-up");
}

function hideAdvancedSearch() {

    jQuery('#aSearch').unbind('click').click(function () {
        showAdvancedSearch();
    });

    jQuery("#trAdvanced").addClass("hide");

    jQuery("#iSearch").removeClass("icon-chevron-up");

    jQuery("#iSearch").addClass("icon-chevron-down");
}

function showAllCabin(flightNo) {
    //检测是否已获取数据
    //获取数据
    jQuery("#divAllCabin" + flightNo).removeClass("hide");

    
    jQuery('#aAllCabin' + flightNo).unbind('click');

    jQuery('#aAllCabin' + flightNo).click(
        function () {
            hideAllCabin(flightNo);
        }
    );

    jQuery("#iAllCabin" + flightNo).removeClass("icon-chevron-down");

    jQuery("#iAllCabin" + flightNo).addClass("icon-chevron-up");
}

function hideAllCabin(flightNo) {

    jQuery("#divAllCabin" + flightNo).addClass("hide");


    jQuery('#aAllCabin' + flightNo).unbind('click');

    jQuery('#aAllCabin' + flightNo).click(
        function () {
            showAllCabin(flightNo);
        }
    );
    jQuery("#iAllCabin" + flightNo).removeClass("icon-chevron-up");

    jQuery("#iAllCabin" + flightNo).addClass("icon-chevron-down");

}