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
import L from "leaflet";
import "leaflet-routing-machine";

let map;

onMounted(() => {
  // Создаем карту
  map = L.map("map").setView([51.505, -0.09], 13);

  // Добавляем слой карты (OpenStreetMap)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(map);

  // Геолокация пользователя
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const userCoords = [position.coords.latitude, position.coords.longitude];

      // Добавляем метку текущего местоположения
      L.marker(userCoords).addTo(map).bindPopup("Вы здесь").openPopup();

      // Добавляем маршрутизацию
      L.Routing.control({
        waypoints: [
          L.latLng(userCoords), // Точка отправления
          L.latLng(51.515, -0.1), // Точка назначения (пример)
        ],
        routeWhileDragging: true,
      }).addTo(map);
    },
    (error) => {
      console.error("Ошибка получения геолокации:", error);
    }
  );
});
</script>

<style>
</style>