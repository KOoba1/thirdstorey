<template>
  <div>
  <TopNav></TopNav>
  <LeftNav></LeftNav>
    <div id="wrapper">
      <div id="map"></div>
    </div>
  </div>
</template>
<script>

import TopNav from '@/components/TopNav';
import LeftNav from '@/components/LeftNav';
import Leaflet from 'Leaflet';
import _ from 'Lodash';
import LeafletHeat from 'leaflet.heat';

export default {

  components : { TopNav, LeftNav },
  mounted () {
    var map = L.map('map', {
      attribution: false
    }).setView([42.896, -78.87], 13);
    var Stamen_TonerBackground = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
      subdomains: 'abcd',
      ext: 'png'
    }).addTo(map);

  fetch('/static/data/heat.json')
    .then((d) => d.json())
    .then((d) => {
        var pts= d.features.map((pt)=> [pt.geometry.coordinates[1], pt.geometry.coordinates[0]]);
        var more = _.flatMap(_.range(15), () => pts);
        var bounds = map.getBounds(),
            ne = bounds._northEast,
            sw = bounds._southWest;
        L.heatLayer(more).addTo(map);
    });
  }
}

</script>
<style scoped>
  #map { width: 800px; height: 600px; }
  body { font: 16px/1.4 "Helvetica Neue", Arial, sans-serif; }
</style>
