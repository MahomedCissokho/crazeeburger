import React from 'react'
import styled from 'styled-components'

const PlatContainer = styled.div`
    overflow-y: scroll;
`
const Plat = () => {
  return (
    <PlatContainer className='w-full h-full bg-orange-400 opacity-50'>Plat</PlatContainer>
  )
}

export default Plat