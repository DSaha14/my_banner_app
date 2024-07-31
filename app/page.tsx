"use client";

import { useState, useEffect } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import './globals.css';


const Home = () => {
  const [currentBanners, setCurrentBanners] = useState([]);
  const [editingBanner, setEditingBanner] = useState(null);

  useEffect(() => {
    fetch('/banners.json')
      .then((res) => res.json())
      .then((data) => setCurrentBanners(data));
  }, []);

  const handleEdit = (index) => {
    setEditingBanner({ ...currentBanners[index], index });
  };

  const handleSave = (updatedBanner) => {
    const updatedBanners = [...currentBanners];
    updatedBanners[editingBanner.index] = updatedBanner;
    setCurrentBanners(updatedBanners);
    setEditingBanner(null);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
      {currentBanners.map((banner, index) => (
        <BannerImageComp key={index} {...banner} onEdit={() => handleEdit(index)} />
      ))}
      {editingBanner && (
        <EditBannerTemplateBs
          banner={editingBanner}
          onSave={handleSave}
          onClose={() => setEditingBanner(null)}
        />
      )}
    </div>
  );
};

export default Home;
