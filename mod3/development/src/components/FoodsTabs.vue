<template>
  <ul class="tabs">
    <li
      class="tabs__item"
      :class="{ 'tabs__item--active': item === active }"
      v-for="(item, index) in list"
      :key="index"
      @click="changeActive(item)"
    >
      <span v-if="item === 'ch'">點心</span>
      <span v-if="item === 'ws'">飲料</span>
      <span v-if="item === 'ma'">主餐</span>
      <span v-if="item === 'pe'">組合式套餐</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    active(): string {
      return this.$store.state.active;
    },
    list(): string[] {
      return this.$store.getters["foodsKind"];
    },
  },
  methods: {
    changeActive(keyword: string) {
      return this.$store.dispatch("changeActive", keyword);
    },
  },
});
</script>

<style lang="scss">
.tabs {
  @include list-style;
  display: flex;
  align-items: center;
  width: calc(100% - #{$grid-gap}* 2);
  min-height: $navbar-height;
  margin: 0 auto;
  border-radius: $border-radius;
  overflow-x: auto;

  &__item {
    min-width: 100px;
    margin-left: $grid-gap;
    padding: 0 1em;
    line-height: $navbar-height;
    background-color: $color-white;
    border-radius: $border-radius-round;
    cursor: pointer;

    &:first-child {
      margin-left: 0;
    }

    &:hover,
    &--active {
      color: $color-white;
      background-color: $color-blue;
    }
  }
}
</style>