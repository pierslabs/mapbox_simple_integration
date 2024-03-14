import { FC } from 'react';
import './card.styles.css';

export interface CardProps {
  name: string;
  title: string;
  address: string;
  phoneNumber: string;
}

const Card: FC<CardProps> = ({ title, address, phoneNumber, name }) => {
  return (
    <div className='card'>
      <div className='card-title'>
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
      <hr />
      <p>{address}</p>
      <p>{phoneNumber}</p>
      <hr />
    </div>
  );
};

export default Card;
