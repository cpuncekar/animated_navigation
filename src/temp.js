import React, { useState } from 'react';
import { motion } from 'framer-motion';

import './styles.css';

export default function App() {
  const [state, setState] = useState(false);
  return (
    <motion.div
      animate
      className={`App ${state && 'clicked'}`}
      onClick={() => setState(!state)}
    >
      <motion.h1 animate>Hello CodeSandbox</motion.h1>
      <motion.h2 animate>Start editing to see some magic happen!</motion.h2>
    </motion.div>
  );
}
