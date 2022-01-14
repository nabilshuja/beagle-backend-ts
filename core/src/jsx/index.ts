import { Component } from '../model/component'
import { FC } from './types'

export const BeagleJSX = {
  createElement: (jsx: FC<any> | string, props?: any, ...children: Component[]) => {
    console.log(jsx)

    // I have no idea why children is sometimes Component[] and sometimes Component[][]
    children = children.flat()
    if (typeof jsx === 'function') return jsx({ ...props, children })
    if (jsx !== 'component') throw new Error(`Invalid Beagle JSX element "${jsx}". Did you mean "component"?`)
    return new Component({ ...props, children })
  },
}
