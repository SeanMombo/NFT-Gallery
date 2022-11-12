import React from 'react';
import './NftCard.css';
import Tilt from 'react-parallax-tilt';
import NoImage from '../../assets/no-image.jpg';

interface NftCardProps {
  name: string,
  image: string
} 

const NftCard = (props: NftCardProps) => {
  const { name, image } = props;

  return (
    <Tilt
    perspective={800}
    className="nft-card"
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    scale={1.05}
    transitionSpeed={2000}
    >
      <div className="nft-card__inner">
        <img 
          src={image || NoImage} alt={name} />
        <h3>{name}</h3>
      </div>
    </Tilt>
  )
}

export default NftCard;