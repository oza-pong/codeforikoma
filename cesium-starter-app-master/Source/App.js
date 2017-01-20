var viewer = new Cesium.Viewer('cesiumContainer');


//kml読み込み
viewer.dataSources.add(Cesium.KmlDataSource.load(''));

var viewer = new Cesium.Viewer('cesiumContainer', {
imageryProvider: new Cesium.OpenStreetMapImageryProvider({
url: 'http://cyberjapandata.gsi.go.jp/xyz/std/',
credit: new Cesium.Credit('地理院タイル', '', 'http://maps.gsi.go.jp/development/ichiran.html')
}),
baseLayerPicker: false
});



//視点の変更
viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(135.69, 34.69, 5000.0)});

