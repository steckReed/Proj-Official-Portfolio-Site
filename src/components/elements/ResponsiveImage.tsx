import React, { ReactNode } from 'react';

interface Props {
  src: string;
  children: ReactNode;
}

const ResponsiveImage = ({ src, children }: Props) => {
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      {children}
    </picture>
  );
};

export default ResponsiveImage;
