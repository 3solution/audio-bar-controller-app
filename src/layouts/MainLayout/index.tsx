import React from 'react';

import styles from './styles.module.scss';

type Props = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

export default MainLayout;
