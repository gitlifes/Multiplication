import React from "react"
import { BackspaceKey } from './BackspaceKey'
import { EnterKey } from "./EnterKey"
import { NumberKey } from "./NumberKey"

interface KeyboardProps {
  typing: (num: string) => void
  backspace: () => void
  enter: () => void
}

export function Keyboard({typing, backspace, enter}: KeyboardProps) {
  return(
    <div className='flex flex-row flex-wrap w-[480px] mx-auto text-center'>
      <BackspaceKey backspace={backspace}/>
      <NumberKey typing={typing} number={'0'}/>
      <EnterKey enter={enter}/>
      <NumberKey typing={typing} number={'1'}/>
      <NumberKey typing={typing} number={'2'}/>
      <NumberKey typing={typing} number={'3'}/>
      <NumberKey typing={typing} number={'4'}/>
      <NumberKey typing={typing} number={'5'}/>
      <NumberKey typing={typing} number={'6'}/>
      <NumberKey typing={typing} number={'7'}/>
      <NumberKey typing={typing} number={'8'}/>
      <NumberKey typing={typing} number={'9'}/>
    </div>
  )
}
