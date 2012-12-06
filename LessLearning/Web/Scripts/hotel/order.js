jQuery(function () {
    loadNavi(3);

    jQuery(".tdEmail").show();

    jQuery("#aNewCard").click(function(){
        showNewCard();
    });
});


function showNewCard() {
    jQuery("#iNewCard").removeClass("icon-plus").addClass("icon-minus");

    jQuery("#divNewCard").show();

    jQuery("#aNewCard").unbind('click').click(function () {
        hideNewCard();
    });
}

function hideNewCard() {
    jQuery("#iNewCard").removeClass("icon-minus").addClass("icon-plus");

    jQuery("#divNewCard").hide();

    jQuery("#aNewCard").unbind('click').click(function () {
        showNewCard();
    });
}