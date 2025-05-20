import React from 'react'

export default async function page() {

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div>ABOUT US</div>
  )
}
