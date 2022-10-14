import React from "react";

interface BackspaceKeyProps {
  backspace: () => void
}

export function BackspaceKey({backspace}: BackspaceKeyProps) {

  return (
    <button 
      className="outline-1 outline-white outline w-40 h-10 bg-red-100 hover:text-white hover:bg-red-200 "      // border-solid	border-blue-100	border-2
      onClick={backspace}
    >
      Backspace
    </button>
  )
}