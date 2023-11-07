import React from 'react'
import styled from 'styled-components'

const LeftContainer = styled.div`
  flex: 1; 
`
const MiddleLeftContainer = styled.div`
  overflow-y : scroll ;
`
const RightContainer = styled.div`
  flex: 3; 
  overflow-y: scroll;
`
const BottomLeftContainer = styled.div`
  cursor:pointer;
  font-weight : 600 ;
  background-color: #ff9f1d;
  letter-spacing: 1px;
  &:hover{
    background-color: white;
    color : #ff9f1d;
    transition : all .4s linear ;
  }
  border-radius: 7px;
  width: 45%;
  

`

const Main = () => {
  return (
    <div className='flex text-white w-screen h-screen -translate-y-[32.3rem]'>
        <LeftContainer className="bg-[#ccc] flex flex-col justify-between shadow-md">
            <div className='flex text-xl gap-5 font-semibold bg-neutral-700 h-[4.4rem] items-center justify-between p-7'>
              <span>Total</span>
              <span className='text-[#ff9f1b]'>Price</span>
            </div>
            <MiddleLeftContainer className='h-[24rem] -translate-y-[2.6rem]'></MiddleLeftContainer>
            <div className='bg-neutral-700 h-16 flex items-center justify-center -translate-y-20'>
              <BottomLeftContainer className='hover:bg-white text-center text-lg shadow-2xl flex items-self justify-center py-3'>
                Payer
              </BottomLeftContainer>
            </div>
        </LeftContainer>
        <RightContainer className='bg-orange-300 h-[32.4rem] opacity-40	shadow-2xl text-white'>

        </RightContainer>
    </div>
  )
}

export default Main