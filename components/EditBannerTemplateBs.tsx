"use client";

import React, { useState } from 'react';

interface EditBannerProps {
  banner: {
    title: string;
    description: string;
    cta: string;
    imageUrl: string;
    templateUrl: string;
  };
  onSave: (updatedBanner: any) => void;
  onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ banner, onSave, onClose }) => {
  const [title, setTitle] = useState(banner.title);
  const [description, setDescription] = useState(banner.description);
  const [cta, setCta] = useState(banner.cta);
  const [imageUrl, setImageUrl] = useState(banner.imageUrl);
  const [templateUrl, setTemplateUrl] = useState(banner.templateUrl);

  const handleSave = () => {
    onSave({ title, description, cta, imageUrl, templateUrl });
  };

  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'white', padding: '20px', boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)' }}>
      <h2>Edit Banner</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input value={cta} onChange={(e) => setCta(e.target.value)} placeholder="CTA" />
      <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
      <input value={templateUrl} onChange={(e) => setTemplateUrl(e.target.value)} placeholder="Template URL" />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default EditBannerTemplateBs;
