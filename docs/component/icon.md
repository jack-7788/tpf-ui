# icon 图标组件

```jsx
$ pnpm i @vicons/ionicons5

```

## 使用图标

  <z-icon :color="`red`" :size="30">
    <AddCircle />
    <AddCircle />
  </z-icon>
  <z-icon color="green" :size="30">
    <AddCircle />
    <AddCircle />
  </z-icon>

<script setup lang="ts">
import { AddCircle } from '@vicons/ionicons5'
</script>

```vue
<z-icon :color="`red`" :size="30">
    <AddCircle />
    <AddCircle />
  </z-icon>
<z-icon :color="`green`" :size="30">
    <AddCircle />
    <AddCircle />
  </z-icon>

<script setup lang="ts">
  import { AddCircle } from '@vicons/ionicons5';
</script>
```

## API

### Icon Props

| 名称  | 类型             | 默认值    | 说明 |
| ----- | ---------------- | --------- | ---- |
| color | string           | undefined | 颜色 |
| size  | string ｜ number | undefined | 大小 |
