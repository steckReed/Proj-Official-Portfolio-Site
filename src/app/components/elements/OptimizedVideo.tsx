import React from 'react';

interface Props {
  src?: string | undefined
  altText?: string
}

const OptimizedVideo = ({ altText = 'Your browser does not support the video tag.' }: Props) => {
  return (
    <video autoPlay loop muted playsInline style={{ width: '100%', height: 'auto' }}>
      <source src="/videos/shallow-river-sd_640_360.mp4" type="video/mp4" media="(max-width: 640px)" />
      <source src="/videos/shallow-river-hd_1280_720.mp4" type="video/mp4" media="(max-width: 1280px)" />
      <source src="/videos/shallow-river-hd_1920_1080.mp4" type="video/mp4" />
      <p>{altText}</p>
    </video>
  );
};

export default OptimizedVideo;
