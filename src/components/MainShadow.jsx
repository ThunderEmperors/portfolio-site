import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleResetPane } from '../features/showcase/showcaseSlice';
import { motion } from 'motion/react';
import { AnimatePresence } from 'motion/react';

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
    <AnimatePresence>
    {isShowcaseOpen && (
      <motion.div animate={{opacity:[0, 0.5, 1, 1]}}
        transition={{ 
          duration: 0.3,
          times: [0, 0.5, 1]
        }}
        exit={{
          opacity: [1, 0.5, 0]
        }}
        className='fixed inline-block w-[100vw] h-[100vh] bg-[#000000]/80 z-25' onClick={resetPane} />
    )}
    </AnimatePresence>
    </>
  )
}

export default MainShadow