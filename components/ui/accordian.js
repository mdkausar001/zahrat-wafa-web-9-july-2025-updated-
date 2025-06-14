import clsx from 'clsx';
import AnimateHeight from 'react-animate-height';
import React, { createContext, useContext, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const AccordionContext = createContext(null);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('Error in creating the context');
  return context;
};

export const Accordion = ({ open = false, children }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(open);

  return (
    <AccordionContext.Provider value={{ isAccordionOpen, setIsAccordionOpen }}>
      {children}
    </AccordionContext.Provider>
  );
};

const Header = ({ children, ...props }) => {
  const { isAccordionOpen, setIsAccordionOpen } = useAccordionContext();

  return (
    <button
      className="flex w-full items-center justify-between py-4"
      onClick={() => setIsAccordionOpen(prev => !prev)}
      {...props}
    >
      <span>{children}</span>
      <FiChevronDown
        size="1rem"
        className={clsx('transition duration-200', {
          'rotate-180 transform': isAccordionOpen,
        })}
      />
    </button>
  );
};

const Body = ({ children, ...props }) => {
  const { isAccordionOpen } = useAccordionContext();

  return (
    <AnimateHeight
      duration={200}
      height={isAccordionOpen ? 'auto' : 0}
      animateOpacity
      {...props}
    >
      {children}
    </AnimateHeight>
  );
};

Accordion.Header = Header;
Accordion.Body = Body;
