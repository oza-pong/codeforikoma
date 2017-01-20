var viewer = new Cesium.Viewer('cesiumContainer');


//kml読み込み
viewer.dataSources.add(Cesium.KmlDataSource.load(''));


//視点の変更
viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(135.69, 34.69, 5000.0)});
