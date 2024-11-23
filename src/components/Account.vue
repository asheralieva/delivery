<template>
  <section class="account">
    <div class="account-container">
      <div class="account-content">
        <div class="account-info">
          <img src="../assets/logo-profile.webp" alt="" />
          <span>{{account.last_name }} {{ account.first_name  }}</span>
          <span>{{ account.username }}</span>
        </div>
        <div class="account-history">
          <span>История заказов:</span>
          <div class="history-item">
            <span>
              AAAaaaaaaaaaaaaaaaaa --<i class="arrow right"></i>
              BBBbbbbbbbbbbbb</span
            >
            <span>размер: большой</span>
            <span>статус: завершен</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const account = ref({});

onMounted(() => {
  const token = localStorage.getItem("accessToken"); // Замените на ваш токен

  fetch("http://127.0.0.1:8000/api/currentuser/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`, // Добавляем токен
      "Content-Type": "application/json", // Укажите, если требуется
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      account.value = data;  // Используем .value для изменения значения
      
      })
    .catch((error) => {
      console.error("Ошибка при получении данных:", error);
    });
});
</script>

<style lang="scss" scoped>
.account {
  margin: 50px 100px;
  padding: 15px;
  border-radius: 20px;
  background-color: #fff;
  color: #1852f0;
  box-shadow: 0 0 10px #1852f0;

  &-container {
    margin: 0 auto;
    max-width: 1110px;
  }
  &-content {
    display: flex;
  }
  &-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 250px;
    }
    span {
      font-size: 18px;
      margin-top: 20px;
    }
  }
  &-history {
    p {
      color: #1852f0;
    }
    .history-item {
      display: flex;
      gap: 20px;
      margin-top: 12px;
      color: #1852f0;
      box-shadow: 0 0 10px #1852f0;
      border: 2px solid #1852f0;
      padding: 8px;
      border-radius: 20px;
      background-color: #d2dcf9;
      box-shadow: #000;
      span {
        i {
          border: solid #1852f0;
          border-width: 0 2px 2px 0;
          display: inline-block;
          padding: 3px;
        }

        .right {
          transform: rotate(-45deg);
          -webkit-transform: rotate(-45deg);
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .account {
    &-content {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}

@media screen and (max-width: 425px) {
  .account {
    margin: 25px 50px;
    &-history {
      .history-item {
        flex-wrap: wrap;
      }
    }
  }
}
</style>