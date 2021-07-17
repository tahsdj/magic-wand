import React, { useState } from 'react'

import Board from './components/Board'

function App() {

  return (
    <div className="w-screen flex flex-col items-center pt-30 bg-[#fdf6e3] min-h-screen">
      <Board/>
    </div>
  )
}

export default App
