"use client";

import React from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';

interface BannerProps {
  title: string;
  description: string;
  cta: string;
  imageUrl: string;
  templateUrl: string;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerProps> = ({ title, description, cta, imageUrl, templateUrl, onEdit }) => {
  return (
    <div style={{ position: 'relative', background: `url(${templateUrl}) no-repeat center center`, backgroundSize: 'cover', padding: '20px', borderRadius: '8px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '300px' }}>
      <div>
        <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>{cta}</button>
      <button onClick={onEdit} style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(0, 0, 0, 0.5)', borderRadius: '50%', border: 'none', cursor: 'pointer', padding: '10px' }}>
      <PencilIcon className="h-6 w-6 text-white" /> Edit
      </button>
    </div>
  );
};

export default BannerImageComp;
