<template>
  <div class="overview">
    <hy-card title="关于">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus
        、TypeScript、Echart5 等后台系统解决方案。
      </div>
    </hy-card>
    <hy-card title="技术栈">
      <hy-text-link :text-arrs="technologyStacks" />
    </hy-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HyTextLink from '@/base-ui/text-link'
import HyCard from '@/base-ui/card'

import {
  technologyStacks,
  dependencies,
  devDependencies,
  projectDir
} from './config'
export default defineComponent({
  components: {
    HyCard,
    HyTextLink
  },

  setup() {
    return {
      technologyStacks,
      dependencies,
      devDependencies,
      projectDir
    }
  }
})
</script>

<style scoped lang="less">
.overview {
  .c-left {
    text-align: left;
  }

  .el-card {
    margin-bottom: 20px;
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-card__header span) {
      // ::v-deep .el-card__header span {
      font-weight: 700;
    }
  }

  .description {
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-descriptions__title) {
      // ::v-deep .el-descriptions__title {
      font-weight: 400;
    }
  }
}
</style>
