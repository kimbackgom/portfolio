// src/components/ImageLightbox.js
import React from 'react';
import './ImageLightbox.scss'; // 라이트박스 전용 스타일 파일 import

const ImageLightbox = ({ src, onClose }) => {
  // src prop이 없으면 아무것도 렌더링하지 않습니다.
  if (!src) return null;

  return (
    // 배경(오버레이)을 클릭하면 onClose 함수를 호출하여 닫습니다.
    <div className="image-lightbox" onClick={onClose}>
      <button className="image-lightbox__close-button" onClick={onClose}>✕</button>
      {/* 이미지 자체를 클릭하면 이벤트가 배경으로 전파되는 것을 막습니다. */}
      <img src={src} alt="확대된 프로젝트 이미지" onClick={(e) => e.stopPropagation()} />
    </div>
  );
};

export default ImageLightbox;
