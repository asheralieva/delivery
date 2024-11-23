<template>
  <section class="history">
    <div class="account-history">
      <span>{{ title }}</span>
      <div class="history-item">
        <span>
          {{ start }}
          {{ end }}
        </span>
        <span>статус: {{ status }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'История заказов',
  },
  start: {
    type: String,
    default: 'AAAaaaaaaaaaaaaaaaaa',
  },
  end: {
    type: String,
    default: 'BBBbbbbbbbbbbbb',
  },
  size: {
    type: String,
    default: 'большой',
  },
  status: {
    type: String,
    default: 'завершен',
  },
})
</script>

<style lang="scss">
.account-history {
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
@media screen and (max-width: 425px) {
  .account-history {
    .history-item {
      flex-wrap: wrap;
    }
  }
}
</style>
