// src/pages/Projects.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../styles/Projects.scss';

// 데이터와 컴포넌트 경로를 현재 파일 위치에 맞게 수정합니다.
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectsCard';
import ProjectModal from '../components/ProjectsModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  
  // --- 스크롤 위치 저장을 위한 useRef ---
  const lastScrollY = useRef(0);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  
  // --- 모달 상태에 따른 배경 스크롤 제어 로직 (수정됨) ---
  useEffect(() => {
    const body = document.body;

    if (selectedProject) {
      // 1. 현재 윈도우 스크롤 위치 저장
      lastScrollY.current = window.scrollY;

      // 2. body에 스크롤을 막고, 현재 위치를 유지하는 스타일 적용
      body.style.position = 'fixed';
      body.style.top = `-${lastScrollY.current}px`;
      body.style.width = '100%';
    } else {
      // 1. body에 적용했던 스타일 제거
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      
      // 2. 저장해뒀던 스크롤 위치로 즉시 이동
      window.scrollTo(0, lastScrollY.current);
    }
    
    // 컴포넌트 언마운트 시 스타일 초기화
    return () => {
       body.style.position = '';
       body.style.top = '';
       body.style.width = '';
    };
  }, [selectedProject]);


  return (
    <div className="projects-page">
      <div className="container">
        <div className="projects-header">
          <h2>My Projects</h2>
          <p>제가 진행했던 프로젝트들을 소개합니다.</p>
        </div>

        
          <div className="projects-grid">
            {projectsData.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={handleCardClick}
              />
            ))}
          </div>
        
        
        {/* <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        </footer> */}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </div>
  );
}
