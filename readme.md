- 在根目录下  安装 packages 的依赖
 `pnpm i @tpf/components -w`
 - 根路径运行
  - 将 @tpf/components 安装到 @tpf/utils
`pnpm i @tpf/components@workspace --filter @tpf/utils`

```jsx

解析 @tpf/*

 "baseUrl": ".",
    "paths": {
      "@tpf/*": ["packages/*/src"]
    }
```



打包
```jsx
"dev":"node  scripts/dev.js @tpf/components -f global -s"
```
