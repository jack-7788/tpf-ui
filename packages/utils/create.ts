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
  const b = (block: string = '') => _bem(prefixName, block, '', '')
  const e = (element: string = '') => _bem(prefixName, '', element, '')
  const m = (modifier: string = '') => _bem(prefixName, '', '', modifier)
  const be = (block: string = '', element: string = '') => _bem(prefixName, block, element, '')
  const bm = (block: string = '', modifier: string = '') => _bem(prefixName, block, '', modifier)
  const em = (element: string = '', modifier: string = '') => _bem(prefixName, '', element, modifier)
  const bem = (block: string = '', element: string = '', modifier: string = '') => _bem(prefixName, block, element, modifier)

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