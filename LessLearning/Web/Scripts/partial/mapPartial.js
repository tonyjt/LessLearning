$(
    function () {
        $("#btnMapClose").click(function () {
            $("#divMap").hide();
        });
    }
);
function showMap(lan, lat,hotel,address) {
    $("#divMap").show();

    var map = new BMap.Map("mapContainer");          // 创建地图实例
    var point = new BMap.Point(lan, lat);  // 创建点坐标
    map.addControl(new BMap.NavigationControl());

    map.centerAndZoom(point, 16);
    var marker = new BMap.Marker(point);        // 创建标注  
    
    var hotelName = "Test";
    var hotelAddress = "test";

    var infoWindow = new BMap.InfoWindow("<div style='line-height:1.8em;font-size:12px;'><b>酒店:</b>"
        + hotel + "</br><b>地址:</b>"
        + address);  // 创建信息窗口对象

    map.addOverlay(marker);

    setTimeout(function () { map.centerAndZoom(point.point, 14); marker.openInfoWindow(infoWindow); }, 500);
}

