import React from 'react'
import '../styles/About.scss'

function About() {
  return (
    <section className="about">
      <div className="inner">
        <h2>👤 About Me</h2>
      <p className="about__intro">
        저는 단순히 기능을 구현하는 것을 넘어, 성능 최적화, 웹 접근성, 그리고 유지보수가 용이한 코드에 대한 깊은 고민을 통해 장기적인 관점에서 제품의 가치를 높이는 것을 목표로 삼고 있습니다. 복잡한 비즈니스 요구사항을 명확한 기술적 해결책으로 전환하고, 동료들과의 긴밀한 협업을 통해 시너지를 만드는 과정에 익숙합니다.
      </p>

      <h3>🔧 기술 스택</h3>
      <ul className="about__skills">
        <li>JavaScript (ES6+)</li>
        <li>SCSS / CSS3</li>
        <li>HTML5</li>
        <li>React</li>
        <li>Vue</li>
        <li>Responsive Web</li>
        <li>jQurey</li>
      </ul>

      <h3>🛠️ 경험</h3>
      <ul className="about__timeline">
        <li>📅 2021.11 ~ 2024.10: 지오넷_웹페이지 퍼블리싱, 유지보수</li>
        <li>📅 2020.7 ~ 2021.10: 제이이엔지_Mes 퍼블리싱, 홈페이지 유지보수</li>
        <li>📅 2017.6 ~ 2018.6: 씨앤에이_온라인 교육 컨텐츠 개발</li>
        <li>📅 2016.6 ~ 2017.7: Laypop_온라인 교육 컨텐츠 개발</li>
      </ul>
      </div>
      

    
    </section>
  )
}

export default About