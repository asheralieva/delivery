<template>
  <section class="order">
    <div v-if="(isDeliver = false)" class="deliver">
      <div class="deliver-item">
        <span
          >AAAaaaaaaaaaaaaaaaaaaaaaaaa --<i class="arrow right"></i>
          BBBbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</span
        >
        <span>размер: большой</span>
        <span>статус: завершен</span>
      </div>
      <button class="accept" @click="toggleDeliver">Принять</button>
    </div>

    <div v-else class="order-container">
      <div class="order-content">
        <div class="order-mid">
          <div class="order-place">
            <span>Доставка</span>
            <input
              type="text"
              id="from"
              name="from"
              placeholder="из"
              required
            />
            <input type="text" id="to" name="to" placeholder="в" required />
          </div>

          <div class="order-user">
            <div class="user-top">
              <span>Покупатель</span>
              <button @click="toggleModal" type="button" class="order-btn">
                Заказать
              </button>
            </div>
            <div class="user-content">
              <input
                type="text"
                id="height"
                name="height"
                placeholder="высота"
                required
              />
              <input
                type="text"
                id="width"
                name="width"
                placeholder="ширина"
                required
              />
              <input
                type="text"
                id="length"
                name="length"
                placeholder="длина"
                required
              />
              <input
                type="text"
                id="weight"
                name="weight"
                placeholder="Вес"
                required
              />
              <label for="file">
                Фото
                <input type="file" id="file" name="file" required />
              </label>
            </div>
            <div class="user-price">
              <span>Оплата</span>
              <select name="payment" id="payment">
                <option value="card">Картой</option>
                <option value="cash">Наличкой</option>
              </select>
            </div>
          </div>

          <!-- Выпадающее окно -->
          <div class="open-modal" :class="{ active: isOpen }">
            <span>Цена: 200 сом</span>
            <span>Размер груза: большой</span>
            <span>Статус: в пути </span>
            <button class="cancel-btn" @click="toggleModal">
              Отменить заказ
            </button>
            <button class="show-btn">Посмотреть</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const isDeliver = ref(false);

const toggleModal = () => {
  isOpen.value = !isOpen.value;
};

const toggleDeliver = () => {
  isDeliver.value = !isDeliver.value;
};
</script>


<style lang="scss" scoped>
.order {
  margin: 50px 100px;
  padding: 15px;
  border-radius: 20px;
  background-color: #fff;
  color: #000;

  .open-modal {
    display: none;
    flex-direction: column;
    max-width: 900px;
    gap: 15px;
    padding: 15px;
    border: 1px solid #007ea5;
    border-radius: 10px;
    background-color: #f8f9fa;
    margin-top: 15px;

    span {
      font-weight: 500;
      margin-bottom: 20px;
    }
  }

  .deliver {
    display: flex;
    gap: 20px;
    margin-top: 12px;
    color: #000;
    padding: 8px;
    border-radius: 20px;
    background-color: #d2dcf9;
    box-shadow: 0 0 10px #007ea5;
    justify-content: space-evenly;
    &-item {
      display: flex;
      gap: 40px;
      span {
        white-space: wrap;
        height: fit-content;
        width: 100%;

        i {
          border: solid #000;
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
    .accept {
      border-radius: 10px;
      border: 1px solid #007ea5;
      padding: 6px;
      background-color: #6c919c;
      color: #141819;
      font-size: 16px;
      cursor: pointer;
      width: 150px;
    }
    button.accept:hover {
      background: #007ea5;
      color: #fff;
      box-shadow: 0 0 10px #007ea5;
    }
  }

  .open-modal.active {
    display: flex;
  }

  .show-btn,
  .cancel-btn {
    width: 200px;
  }

  .show-btn,
  .cancel-btn,
  .order-btn {
    border-radius: 10px;
    border: 1px solid #007ea5;
    padding: 6px;
    background-color: #6c919c;
    color: #141819;
    font-size: 16px;
    cursor: pointer;
  }

  .order-btn button[type="submit"] {
    background: rgb(28, 30, 33);
    box-shadow: inset -100px -100px 0 rgb(28, 30, 33);
    color: #b9cdea;
  }

  button.show-btn:hover,
  button.cancel-btn:hover,
  button.order-btn:hover {
    background: #007ea5;
    color: #fff;
    box-shadow: 0 0 10px #007ea5;
  }

  span {
    font-size: 18px;
    font-weight: 700;
  }

  input {
    padding: 6px;
    border-radius: 10px;
    border: 1px solid black;
    width: 210px;
  }

  &-mid {
    select {
      width: 210px;
      border-radius: 10px;
      padding: 6px;
      margin-left: 10px;
    }
  }

  &-place {
    display: flex;
    align-items: center;
    gap: 35px;
    margin-top: 20px;
  }

  &-user {
    margin-top: 20px;
    .user-top {
      display: flex;
      justify-content: space-between;
    }
    .user-content {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      margin-top: 15px;
    }
    .user-price {
      margin-top: 20px;
    }
  }
}

@media screen and (max-width: 768px) {
  .order {
    .deliver {
      flex-direction: column;
      
      &-item {
        flex-wrap: wrap;
        span {
        height: fit-content;
        width: 100%;
      }
      }
    }

    input {
      width: 190px;
    }
    span {
      font-size: 15px;
    }
    &-mid {
      select {
        width: 110px;
      }
    }
    &-place {
      flex-wrap: wrap;
    }
  }
}
@media screen and (max-width: 425px) {
  .order {
    margin: 25px 50px;
  }
}
</style>
