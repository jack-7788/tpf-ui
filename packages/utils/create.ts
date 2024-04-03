import { aa } from '@tpf/components'
import { bb } from '@tpf/theme-chalk'

aa(2, 4)


function _bem(prefixName: string, blockSuffix: string, element: string, modifier: string) {
  if (blockSuffix) {
    prefixName += `_${blockSuffix}`
  }
  if (element) {
    prefixName += `__${element}`

  }
  if (modifier) {
    prefixName += `--${modifier}`

  }
  return prefixName


}


function createBEM(prefixName: string) {
  const b = (block = '') => _bem(prefixName, block, '', '')
  const e = (element = '') => _bem(prefixName, '', element, '')
  const m = (modifier = '') => _bem(prefixName, '', '', modifier)
  const be = (block = '', element = '') => _bem(prefixName, block, element, '')
  const bm = (block = '', modifier = '') => _bem(prefixName, block, '', modifier)
  const em = (element = '', modifier = '') => _bem(prefixName, '', element, modifier)
  const bem = (block = '', element = '', modifier = '') => _bem(prefixName, block, element, modifier)

  const is = (name: string, state: boolean | string) => state ? `is-${name}` : ''
  return { b, e, m, be, bm, em, bem, is }
}

export function createNameSpace(name: string) {
  const prefixName = `z-${name}`
  return createBEM(prefixName)

}

// const bem = createNameSpace('icon')
// console.log(bem.b('box'));
// console.log(bem.bm('box','xxx'));
// console.log(bem.bem('box','element','modifier'));
