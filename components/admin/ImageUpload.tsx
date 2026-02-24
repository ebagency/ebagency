'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface ImageUploadProps {
  value: string[];
  onChange: (urls: string[]) => void;
  folder?: string;
  max?: number;
}

export function ImageUpload({ value = [], onChange, folder = 'ebagency', max = 10 }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files?.length) return;

    setUploading(true);
    const newUrls = [...value];

    for (const file of Array.from(files)) {
      if (newUrls.length >= max) break;

      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', folder);

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        newUrls.push(data.url);
      }
    }

    onChange(newUrls);
    setUploading(false);
    if (inputRef.current) inputRef.current.value = '';
  }

  function removeImage(index: number) {
    const newUrls = value.filter((_, i) => i !== index);
    onChange(newUrls);
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {value.map((url, index) => (
          <div key={index} className="relative group aspect-square rounded-lg overflow-hidden border">
            <Image src={url} alt="" fill className="object-cover" />
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition"
            >
              X
            </button>
          </div>
        ))}
      </div>

      {value.length < max && (
        <div>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleUpload}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition text-sm"
          >
            {uploading ? 'Upload en cours...' : 'Ajouter des images'}
          </label>
        </div>
      )}
    </div>
  );
}
