import React from 'react'
import '../styles/Home.scss'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home">
      <div className="home__content">
        <h1>안녕하세요 👋</h1>
        <h2>문제를 해결하고 더 나은 사용자 경험을 제안하는 <br /><span className="highlight">Frontend 개발자</span> 김태현입니다.</h2>
        
        
        <div className="home__cta">
          <Link to="/projects" className="btn">프로젝트 보기</Link>
          <Link to="/contact" className="btn btn--outline">연락하기</Link>
        </div>
      </div>
    </section>
  )
}

export default Home