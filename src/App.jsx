import React from 'react'
import { useConnectSyslabCenter } from './hooks/useConnectSyslabCenter';
import { useEffect } from 'react';

function App() {
  const { initFilePath } = useConnectSyslabCenter()
  // 与syslab连接，无需更改，连接一次即可
  useEffect(() => {
    async function init() {
      await initFilePath()
    }
    init()
  })

  return (
    <>
      <h1>你好！</h1>
    </>
  )
}

export default App
