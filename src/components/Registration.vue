<template>
  <section class="reg">
    <div class="reg__container">
      <div class="reg__content">
        <h1 class="registr">Sign Up</h1>
        <div id="wrapper">
          <form id="signup" @submit.prevent="handleSubmit" autocomplete="off">
            <input
              type="text"
              id="surname"
              v-model="formData.last_name"
              placeholder="фамилия"
              required
            />
            <input
              type="text"
              id="name"
              v-model="formData.first_name"
              placeholder="имя"
              required
            />
            <input
              type="text"
              id="login"
              v-model="formData.username"
              placeholder="логин"
              required
            />
            <input
              type="password"
              id="password1"
              v-model="formData.password1"
              placeholder="пароль 1"
              required
            />
            <input
              type="password"
              id="password2"
              v-model="formData.password2"
              placeholder="пароль 2"
              required
            />
            <label for="deliver">
              <input
                type="checkbox"
                id="deliver"
                v-model="formData.is_delivery"
              />
              Являетесь доставщиком
            </label>
            <button type="submit" class="submit-btn">
              <i class="fa fa-arrow-circle-right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const formData = reactive({
  last_name: "",
  first_name: "",
  username: "",
  password1: "",
  password2: "",
  is_delivery: false,
  is_customer: false,
});


const handleSubmit = () => {
  if (formData.password1 !== formData.password2) {
    alert("Пароли не совпадают!");
    return;
  }

  formData.is_customer = !formData.is_delivery;

  console.log("Отправляем данные:", JSON.stringify(formData));


  // Пример отправки данных на сервер
  fetch("https://albertgadieva.pythonanywhere.com/api/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Успех:", data);
      // Добавьте здесь логику перенаправления или уведомления
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

.reg__container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  padding: 5px;
}

.reg__content {
  background-color: #fff;
  padding: 25px;
  border-radius: 40px;
}
.registr {
  color: #000;
  margin-bottom: 20px;
  text-align: center;
}
#wrapper {
  position: relative;
  width: 320px;
  margin: 0 auto;
}

#signup {
  background: #839dc4;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

#signup input[type="text"],
#signup input[type="password"] {
  background: #b9cdea;
  border: 2px solid #34383d;
  border-radius: 4px;
  height: 45px;
  padding: 0 15px;
  color: #fff;
  font-size: 16px;
}

#signup input:focus {
  border-color: #007ea5;
  outline: none;
}

#signup button.submit-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background: #b9cdea;
  border-radius: 50%;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s;
  margin-left: auto;
}

#signup button.submit-btn:hover {
  background: #007ea5;
  color: #fff;
  box-shadow: 0 0 10px #007ea5;
}
</style>
