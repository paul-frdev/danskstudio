import React, { useEffect } from 'react'
import '../../styles/UI/up-button.scss';
import { ReactComponent as UpIcon } from '../../images/up-icon.svg';
import { useScrollY } from '../../hooks/useScrollY';
import { motion, useAnimation } from 'framer-motion';


export const UpButton = () => {

  const controls = useAnimation()
  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight })
  }, [y, controls])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <motion.button
      className='up-button'
      onClick={scrollToTop}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <UpIcon />
    </motion.button>
  )
}
