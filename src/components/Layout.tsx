import React from 'react';
import { ReactNode } from '../../node_modules/@types/react/index';

interface Props {
  children: ReactNode;
}

const layoutWrap = {
  padding: '30px',
  backgroundColor: '#C0C0C0',
};

const Layout: React.FC<Props> = ({ children }) => {
  return <div style={layoutWrap}>{children}</div>;
};

export default Layout;
