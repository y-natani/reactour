import React, { Suspense } from 'react'

export default () => {
  // buildすると、なぜかRoute内にpyが付与されるので、分岐を追加
  const padding = process.env.NODE_ENV === 'production' ? 0 : 6

  return <div>404</div>
}
