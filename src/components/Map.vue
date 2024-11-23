<template>
  <section class="map">
    <div class="map-container">
      <div class="map-content">
        <div>
          <div id="map" style="height: 500px"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const L = require("leaflet");
  require("leaflet-routing-machine");

  const map = L.map("map").setView([55.7558, 37.6173], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

  navigator.geolocation.getCurrentPosition((position) => {
    const userLocation = L.latLng(
      position.coords.latitude,
      position.coords.longitude
    );

    L.Routing.control({
      waypoints: [userLocation, L.latLng(55.7512, 37.618)], // Конечная точка
    }).addTo(map);
  });
});
</script>

<style>
</style>