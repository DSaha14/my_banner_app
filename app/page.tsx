"use client";

import { useState, useEffect } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import './globals.css';

interface Banner {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  cta: string;
  templateUrl: string;
}

const Home = () => {
  const [currentBanners, setCurrentBanners] = useState<Banner[]>([]);
  const [editingBanner, setEditingBanner] = useState<{ banner: Banner; index: number } | null>(null);

  useEffect(() => {
    fetch('/banners.json')
      .then((res) => res.json())
      .then((data: Banner[]) => setCurrentBanners(data));
  }, []);

  const handleEdit = (index: number) => {
    setEditingBanner({ banner: currentBanners[index], index });
  };

  const handleSave = (updatedBanner: Banner) => {
    if (editingBanner) {
      const updatedBanners = [...currentBanners];
      updatedBanners[editingBanner.index] = updatedBanner;
      setCurrentBanners(updatedBanners);
      setEditingBanner(null);
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
      {currentBanners.map((banner, index) => (
        <BannerImageComp 
          key={index} 
          {...banner} 
          onEdit={() => handleEdit(index)} 
        />
      ))}
      {editingBanner && (
        <EditBannerTemplateBs
          banner={editingBanner.banner}
          onSave={handleSave}
          onClose={() => setEditingBanner(null)}
        />
      )}
    </div>
  );
};

//export default Home;

// pages/index.js
import NotificationInbox from '../components/NotificationInbox';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <NotificationInbox />
    </div>
  );
};

export default HomePage;
