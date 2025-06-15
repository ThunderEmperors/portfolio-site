import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleResetPane } from '../features/showcase/showcaseSlice';

const MainShadow = () => {
  const isShowcaseOpen = useSelector(state => state.showcase.showPane);

  const dispatch = useDispatch();
  const resetPane = () => {
    if(isShowcaseOpen){
      dispatch(handleResetPane());
    }
  }
  return (
    <>
    {isShowcaseOpen ? (
      <div className='inline-block w-[100vw] h-[100vh] bg-red-200/50 absolute z-25' onClick={resetPane} />
    ) : (
      <></>
    )}
      
    </>
  )
}

export default MainShadow