<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>
<script setup lang="ts">
import { createNameSpace } from '@tpf/utils/create'
import { iconProps } from './icon'
import { computed } from 'vue'
defineOptions({
    name: 'ZIcon',
})

const props = defineProps(iconProps)
console.log('props: ', props);

const bem = createNameSpace('icon')

const style = computed(() => {
    if (!props.size && !props.color) return {}
    return {
        ...(props.size ? { 'font-size': props.size + 'px' } : {}),
        ...(props.color ? { color: props.color } : {}),
    }
})
</script>

<style lang="less" scoped></style>
