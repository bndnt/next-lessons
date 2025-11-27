import React from 'react';
import css from './About.module.css';
interface AboutLayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: AboutLayoutProps) => {
  return <div className={css.container}>{children}</div>;
};

export default layout;
