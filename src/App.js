import React, { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';

import { IconNotifications, IconBookmarks } from './Icons';

import './styles.css';

export default function App() {
  const [state, setState] = useState(0);
  return (
    <div className="app">
      <main className="main">Content</main>
      <footer className="bottom-nav">
        <AnimateSharedLayout>
          <ul className="nav-list">
            {Array.from({ length: 5 }).map((_, index) => (
              <motion.li
                animate
                className={`nav-item ${state === index ? 'active' : ''}`}
                key={index}
                onClick={() => setState(index)}
              >
                <motion.div animate className="nav-content">
                  {index % 2 === 0 ? (
                    <IconBookmarks filled={state === index} />
                  ) : (
                    <IconNotifications filled={state === index} />
                  )}
                </motion.div>
                {state === index && (
                  <motion.div className="highlight" layoutId="highlight" />
                )}
              </motion.li>
            ))}
          </ul>
        </AnimateSharedLayout>
      </footer>
    </div>
  );
}
