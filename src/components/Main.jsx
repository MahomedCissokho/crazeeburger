import React from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown'
import Plat from './Plat'

const LeftContainer = styled.div`
  flex: 1; 
`
const MiddleLeftContainer = styled.div`
  overflow-y : scroll ;
`
const RightContainer = styled.div`
  flex: 3; 
`
const BottomLeftContainer = styled.div`
  cursor:pointer;
  font-weight : 600 ;
  background-color: #60bd4f;
  letter-spacing: 1px;
  &:hover{
    background-color: white;
    color : #60bd4f;
    transition : all .4s ease-in-out ;
    outline : #60bd4f 2px;
  }
  border-radius: 7px;
  width: 45%;
  

`

const Main = () => {
  return (
    <div className='flex text-white w-screen h-screen -translate-y-[33rem]'>
        <LeftContainer className="bg-[#ccc] flex flex-col justify-between shadow-md">
            <div className='flex text-xl gap-5 font-semibold bg-neutral-700 h-[4.4rem] items-center justify-between p-7'>
              <span>Total</span>
              <span className='text-[#ff9f1b]'>0 XOF</span>
            </div>
            <MiddleLeftContainer className='h-[24.8rem] -translate-y-[2.5rem] flex items-center justify-center text-xl text-center'>Votre Commande est Vide</MiddleLeftContainer>
            <div className='bg-neutral-700 h-16 flex items-center justify-center -translate-y-20'>
              <BottomLeftContainer className='hover:bg-white text-center text-lg shadow-2xl flex items-self justify-center py-3'>
                Payer
              </BottomLeftContainer>
            </div>
        </LeftContainer>
        <RightContainer className='h-[33rem] 	shadow-2xl text-white'>
          <Plat />
          <Dropdown />
        </RightContainer>
    </div>
  )
}

export default Main