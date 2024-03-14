import { FC } from 'react';
import './card-container.styles.css';
import useWindowSize from '../../../hooks/useWindowSize';

export interface CardContainerProps {
  children: React.ReactNode;
}

const CardContainer: FC<CardContainerProps> = ({ children }) => {
  const { width, height } = useWindowSize();

  const isDesktop = width > 768;

  console.log('width', isDesktop);

  return (
    <div className={isDesktop ? 'card-container-desk' : 'card-container-mob'}>
      {children}
    </div>
  );
};

export default CardContainer;
