jQuery(function () {
    jQuery("#hrefOtherUser").click(function () {

        showOtherUser();
    });
});

function showOtherUser() {

    jQuery('#hrefOtherUser').unbind('click').click(function () {
        hideOtherUser();
    });

    jQuery("#iOrtherUser").removeClass("icon-plus").addClass("icon-minus");


    jQuery("#hrefSearchUser").show();

    jQuery("#divUser").show();
}

function hideOtherUser() {
    jQuery('#hrefOtherUser').unbind('click').click(function () {
        showOtherUser();
    });

    jQuery("#iOrtherUser").removeClass("icon-minus").addClass("icon-plus");


    jQuery("#hrefSearchUser").hide();

    jQuery("#divUser").hide();
}