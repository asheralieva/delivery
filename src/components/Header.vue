<template>
  <header>
    <div class="header-content">
      <div class="header-top">
        <img src="../assets/logo.avif" alt="" />
        <h3>Логистик.kg</h3>
      </div>
      <nav>
        <RouterLink
          v-for="navLink in navLinks"
          :key="navLink.title"
          :to="navLink.path"
        >
          {{ navLink.title }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
const navLinks = [
  {
    path: "/order",
    title: "Оформить заказ",
  },
  {
    path: "/account",
    title: "Аккаунт",
  },
];
</script>

<style lang="scss" scoped>
header {
  .header-content {
    margin: 0 auto;
    max-width: 1110px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-top {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #1852f0;
      img {
        width: 110px;
      }
    }

    nav {
      display: flex;
      gap: 22px;
      a {
        color: #1852f0;
      }
    }
  }

  background-color: #fff;
}
</style>