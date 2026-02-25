'use client';

import { useState } from 'react';
import { FiShare2, FiLink, FiCopy } from 'react-icons/fi';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  function shareOnTwitter() {
    window.open(`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`, '_blank');
  }

  function shareOnFacebook() {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
  }

  function shareOnLinkedIn() {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank');
  }

  async function copyLink() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-dark/60 font-medium">Partager :</span>
      <button onClick={shareOnTwitter} className="p-2 rounded-full hover:bg-primary/10 transition" title="Partager sur X">
        <FiShare2 className="w-5 h-5 text-dark/60 hover:text-primary" />
      </button>
      <button onClick={shareOnFacebook} className="p-2 rounded-full hover:bg-primary/10 transition" title="Partager sur Facebook">
        <FiLink className="w-5 h-5 text-dark/60 hover:text-primary" />
      </button>
      <button onClick={shareOnLinkedIn} className="p-2 rounded-full hover:bg-primary/10 transition" title="Partager sur LinkedIn">
        <FiShare2 className="w-5 h-5 text-dark/60 hover:text-primary" />
      </button>
      <button onClick={copyLink} className="p-2 rounded-full hover:bg-primary/10 transition relative" title="Copier le lien">
        <FiCopy className="w-5 h-5 text-dark/60 hover:text-primary" />
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Lien copié !
          </span>
        )}
      </button>
    </div>
  );
}
