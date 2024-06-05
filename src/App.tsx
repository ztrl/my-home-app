import "./App.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import SkillBreadcrumbs from "./components/SkillBreadcrumbs";
import { useState } from "react";
import SkillContents from "./components/SkillContents";
import ProjectHolder from "./components/ProjectHolder";

function App() {
  const [activeContent, setActiveContent] = useState<string>("BACKEND");

  const handleBreadcrumbClick = (content: string) => {
    setActiveContent(content);
  };

  return (
    <>
      <div className="shadow-2xl w-[1000px]">
        <header className="w-full flex">
          <img
            className="w-[160px] h-[200px]"
            src="/images/profile.jpg"
            alt="my_profile"
          />
          <div className="flex justify-between w-full text-start text-white bg-gray-700 px-10 py-8">
            <div>
              <div className="text-2xl font-bold">
                이해를 바탕으로 수용하는 개발자, 신문영입니다.
              </div>
              <div className="text-3xl mt-3">Backend Developer</div>
              <div className="text-lg mt-3">1997.01.29</div>
            </div>
            <div>
              <div className="text-start text-lg">
                <EmailOutlinedIcon /> ztrl@naver.com
              </div>
              <div className="text-start text-lg mt-5">
                <CallOutlinedIcon /> 010-9280-8634
              </div>
              <div className="text-start text-lg mt-5">
                <a className="text-white" href="https://github.com/ztrl">
                  <GitHubIcon /> https://github.com/ztrl
                </a>
              </div>
            </div>
          </div>
        </header>
        {/* <nav>여긴 네비게이션 바</nav> */}
        <div className="bg-white">
          <section>
            <article className="text-black text-start p-7">
              <header className="p-7 font-bold">INTRODUCE</header>
              <hr />
              <p className="px-7 pt-7">
                안녕하십니까, 저는 모든 일과 문제에 있어 이해를 먼저 하는 것을
                우선으로 하여, 문제를 해결하고 일을 포용하고자 하는
                신문영입니다.
              </p>
              <p className="px-7 pt-5">
                대부분의 상황에서 객체지향적으로 코드를 작성하려고 합니다.
                최근엔 테스트 코드를 먼저 작성하는 습관을 들이기 위해 노력하고
                있습니다.
              </p>
              <p className="px-7 pt-5">
                일이 커지는 것을 막기 위해 문제가 생기면 즉각 공유하는
                사람입니다. 팀원의 생각을 자신이 작성하는 코드에 녹여 낼 수
                있도록 도우고 싶어합니다.
              </p>
              <p className="px-7 pt-5">
                스트레스를 덜 받으면서 긍정적으로 살기 위해 낙관적인 생각을 주로
                하는 편입니다. 흥겨운 음악을 듣는 것을 좋아합니다.
              </p>
            </article>
            <article className="text-black text-start p-7">
              <header className="p-7 font-bold">EXPERIENCE</header>
              <hr />
              <section className="p-7">
                <header className="text-2xl font-semibold">SSAFY</header>
                <p className="text-xs pt-1">2023.07 - Present, 멀티캠퍼스</p>
              </section>
              <section className="px-7">
                <div>
                  현재 삼성청년SW아카데미 10기를 다니고 있으며 2024년 7월에
                  수료할 예정입니다.
                </div>
                <div className="pt-5">
                  SSAFY에서 알고리즘과 Java, Spring, MySQL, Javascript, Vue.js를
                  배웠습니다.
                </div>
                <div className="pt-5">
                  또한 현재 위치 주변에 있는 관광지를 구해주는 Enjoytrip
                  프로젝트와 반려동물 소개팅 어플리케이션 Petcong 프로젝트,
                  분실물을 등록하고 찾을 수 있는 플랫폼 Findear 프로젝트,
                  오픈소스 대기열 시스템 QQueueing 프로젝트를 진행하였습니다.
                </div>
              </section>
              <section className="p-7 pt-14">
                <header className="text-xl font-semibold">
                  Java 웹 개발 전문가 양성 과정
                </header>
                <p className="text-xs pt-1">
                  2022.08 - 2023.03, 한국소프트웨어산업협회
                </p>
              </section>
              <section className="px-7">
                <div>
                  Java와 servlet, jsp, spring, oracle을 배워 LMS와 ERP를 만드는
                  프로젝트를 진행하였습니다.
                </div>
              </section>
            </article>
            <article className="text-black text-start p-7">
              <header className="p-7 font-bold">SKILL</header>
              <hr />
              <section className="p-7">
                <SkillBreadcrumbs
                  onclick={handleBreadcrumbClick}
                  headers={["BACKEND", "INFRA", "TOOL"]}
                  currentContent={activeContent}
                />
                <SkillContents activeContent={activeContent} />
              </section>
            </article>
            <article className="text-black text-start p-7">
              <header className="p-7 font-bold">PROJECT</header>
              <hr />
              <section className="p-7">
                <ProjectHolder />
              </section>
            </article>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
