// src/components/ProjectModal.js
import React, { useState, useEffect, useRef } from 'react';
import './ProjectsModal.scss';
import ImageLightbox from './ImageLightbox'; // 새로 분리한 컴포넌트를 import 합니다.

const ProjectModal = ({ project, onClose }) => {
  // 크게 볼 이미지의 URL을 저장할 상태를 추가합니다.
  const [largeImage, setLargeImage] = useState(null);
  const galleryRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    if (project) {
      if (galleryRef.current) galleryRef.current.scrollTop = 0;
      if (infoRef.current) infoRef.current.scrollTop = 0;
    }
    // 모달이 닫힐 때, 라이트박스 이미지 상태도 초기화합니다.
    setLargeImage(null);
  }, [project]);

  if (!project) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // React Fragment(<>)를 사용하여 모달과 라이트박스를 함께 렌더링합니다.
    <>
      <div onClick={handleBackdropClick} className="modal-overlay">
        <div className="modal-content">
          <div ref={galleryRef} className="modal-content__gallery">
            {project.detailImages && project.detailImages.map((imgUrl, index) => (
              
              <img
                key={index}
                src={`/img/${project.id}/${imgUrl}`}
                alt={`${project.title} 상세 이미지 ${index + 1}`}
                // 이미지를 클릭하면 largeImage 상태를 해당 이미지 URL로 업데이트합니다.
                onClick={() => setLargeImage(`/img/${project.id}/${imgUrl}`)}
                className="gallery-image" // 클릭 가능한 이미지임을 나타내는 클래스 추가
              />
            ))}
          </div>
          <div ref={infoRef} className="modal-content__info">
            <button onClick={onClose} className="modal-content__close-button" aria-label="닫기">✕</button>
            <h2 className="modal-content__title">{project.title}</h2>
            <p className="modal-content__category">{project.category}</p>
            <p className="modal-content__description">{project.description}</p>
            <div className="modal-content__skills-section">
              <h4>사용 기술</h4>
              <div className="modal-content__skills-container">
                {project.skills.map(skill => (
                  <span key={skill} className="modal-content__skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="modal-content__links">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="live-link">Live Demo</a>
            
            </div>
          </div>
        </div>
      </div>

      {/* largeImage 상태에 URL이 있을 때만 라이트박스 컴포넌트를 렌더링합니다. */}
      <ImageLightbox src={largeImage} onClose={() => setLargeImage(null)} />
    </>
  );
};

export default ProjectModal;
