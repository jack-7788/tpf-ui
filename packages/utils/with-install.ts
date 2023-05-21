import { Component, Plugin } from 'vue'


export type SFCWithInstall<T> = T & Plugin

export function withInstall<T extends Component<any, any, any, {}, {}>>(comp: T) {
  (comp as SFCWithInstall<T>).install = function (app) {
    const { name } = comp as unknown as { name: string }
    app.component(name, comp)

  }
  return comp as SFCWithInstall<T>
}