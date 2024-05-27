import "./App.css";

function App() {
  return (
    <>
      <header className="flex">
        <div>
          <img
            className="w-[300px] h-[400px] mr-28"
            src="/images/profile.jpg"
            alt="my_profile"
          />
        </div>
        <div className="w-full text-start text-white bg-gray-700 p-10">
          <div className="text-5xl font-bold">신문영 (1997.01.29, 男)</div>
          <div className="text-3xl mt-10">Backend Developer</div>
          <div className="text-end text-lg mt-28">Email: ztrl@naver.com</div>
          <div className="text-end text-lg mt-5">Phone: +8210-9280-8634</div>
          <div className="text-end text-lg mt-5">
            Github:{" "}
            <a className="text-white" href="https://github.com/ztrl">
              https://github.com/ztrl
            </a>
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
              안녕하십니까, 딥 다이버 신문영입니다. 저는 하나에 몰입해서 깊게
              파고드는 것을 좋아합니다.
            </p>
            <p className="px-7 pt-2">
              전 대부분의 상황에서 객체지향적으로 코드를 작성하려고 합니다.
              최근엔 테스트 코드를 먼저 작성하는 습관을 들이기 위해 노력하고
              있습니다.
            </p>
            <p className="px-7 pt-2">
              일이 커지는 것을 막기 위해 문제가 생기면 즉각 공유하는 사람입니다.
              팀원의 생각을 자신이 작성하는 코드에 녹여 낼 수 있도록 도우고
              싶어합니다.
            </p>
            <p className="px-7 pt-2">
              스트레스를 덜 받으면서 긍정적으로 살기 위해 낙관적인 생각을 주로
              하는 편입니다. 흥겨운 음악을 듣는 것을 좋아합니다.
            </p>
          </article>
          <article className="text-black text-start p-7">
            <header className="p-7 font-bold">EXPERIENCE</header>
            <hr />
            <section className="p-7">
              <header className="text-2xl font-semibold">SSAFY</header>
              <p className="text-xs pt-1">2023.07 - Present</p>
            </section>
            <section className="px-7">
              <p>
                현재 삼성청년SW아카데미 10기를 다니고 있으며 2024년 7월에 수료할
                예정입니다. SSAFY에서 알고리즘과 Java, Spring, MySQL,
                Javascript, Vue.js를 배웠습니다. 또한 현재 위치 주변에 있는
                관광지를 구해주는 Enjoytrip 프로젝트와 반려동물 소개팅
                어플리케이션 Petcong 프로젝트, 분실물을 등록하고 찾을 수 있는
                플랫폼 Findear 프로젝트, 오픈소스 대기열 시스템 QQueueing
                프로젝트를 진행하였습니다.
              </p>
            </section>
          </article>
          <article className="text-black text-start p-7">
            <header className="p-7 font-bold">SKILL (WIP)</header>
            <hr />
            <section className="p-7">
              <header className="text-xl font-semibold rounded-lg bg-blue-300 w-fit px-2">
                Backend
              </header>
              <article className="py-5">
                <header className="text-2xl pb-3">Java</header>
                <p>
                  - Java 1.8 이상에서 쓰는 문법과 기능들을 알고 있습니다.
                  (Stream, var, Record, swtich expression, pattern matching
                  등등)
                </p>
                <p>
                  - 소켓 통신을 할 줄 알고, 리플렉션을 활용해 간단한 IoC
                  컨테이너를 만들어 본 경험이 있습니다.
                </p>
                <p>
                  - Java에서 제공하는 Concurrent 기능들을 꾸준히 공부하고
                  있습니다. 최근에는 Virtual Thread에 흥미가 있습니다.
                </p>
              </article>
              <article className="py-5">
                <header className="text-2xl pb-3">Spring</header>
                <p>- RESTful 한 웹 서버를 구현할 수 있습니다.</p>
                <p>
                  - Spring Security를 사용해서 인증/인가 시스템을 만들 수
                  있습니다.
                </p>
                <p>
                  - 설정 파일을 편하게 관리하기 위해 Spring Cloud Config를
                  공부하려고 합니다.
                </p>
              </article>
              <article className="py-5">
                <header className="text-2xl pb-3">MySQL</header>
                <p>
                  - 기본적인 DML, DDL을 사용할 수 있습니다. 팀 프로젝트를 하면서
                  ERD를 작성하고, 테이블은 정규화를 수행하면서 설계해본 적이
                  있습니다.
                </p>
                <p>
                  - 현재는 Real MySQL 책을 통해서 MySQL을 깊게 이해하는 것이
                  목표입니다.
                </p>
              </article>
            </section>
            <section className="p-7">
              <header className="text-xl font-semibold rounded-lg bg-yellow-400 w-fit px-2">
                Frontend
              </header>
              <article className="py-5">
                <header className="text-2xl pb-3">Javascript</header>
                <p>
                  - Enjoytrip 프로젝트와 Petcong 프로젝트를 하면서 Javascript를
                  써본 경험이 있습니다.
                </p>
              </article>
              <article className="py-5">
                <header className="text-2xl pb-3">React</header>
                <p>
                  - Enjoytrip 프로젝트와 Petcong 프로젝트를 하면서 React를 써본
                  경험이 있습니다.
                </p>
              </article>
            </section>
            <section className="p-7">
              <header className="text-xl font-semibold rounded-lg bg-green-400 w-fit px-2">
                Infra
              </header>
              <article className="py-5">
                <header className="text-2xl pb-3">Docker</header>
                <p>
                  - Docker 컨테이너를 띄워 주변 환경에 독립적인 어플리케이션을
                  만들어 본 적이 있습니다.
                </p>
              </article>
              <article className="py-5">
                <header className="text-2xl pb-3">Jenkins</header>
                <p>
                  - Jenkins Pipeline을 활용해서 간단한 CI/CD를 해본 경험이
                  있습니다.
                </p>
              </article>
              <article className="py-5">
                <header className="text-2xl pb-3">AWS</header>
                <p>
                  - EC2, S3, RDS, Route 53을 사용할 수 있습니다. (현재 보고 계신
                  홈페이지는 EC2, RDS, Route 53을 사용해서 구축하였습니다.)
                </p>
              </article>
            </section>
            <section className="p-7">
              <header className="text-xl font-semibold rounded-lg bg-red-400 w-fit px-2">
                Tool
              </header>
              <article className="py-5">
                <header className="text-2xl pb-3">Git</header>
                <p>- 기초적인 형상관리 작업을 할 수 있습니다. (pull, merge)</p>
                <p>
                  - 원활한 커뮤니케이션과 소스 변경 이력을 쉽게 확인하기 위해
                  Commit convention을 수립하고 이를 지키는데 관심이 많습니다.
                </p>
              </article>
              <article className="py-5">
                <header className="text-2xl pb-3">Jira</header>
                <p>
                  - Jira 티켓을 발급해서 기초적인 이슈 관리를 할 수 있습니다.
                </p>
              </article>
              <article className="py-5">
                <header className="text-2xl pb-3">Swagger</header>
                <p>
                  - Swagger로 API 명세를 해서 프론트엔드 개발자와 협업 하는 것을
                  선호합니다.
                </p>
              </article>
            </section>
          </article>
          <article className="text-black text-start p-7">
            <header className="p-7 font-bold">PROJECT (WIP)</header>
            <hr />
            <section className="p-7">
              <article className="flex flex-col py-10">
                <img
                  className="w-[400px] h-[200px] self-center"
                  src="https://raw.githubusercontent.com/ztrl/petcong/master/asset/logo.png"
                  alt="petcong_thumbnail"
                  onClick={() =>
                    (location.href = "https://github.com/ztrl/petcong")
                  }
                />
                <header className="self-center py-5">
                  <a
                    className="text-2xl font-bold  text-blacks"
                    href="https://github.com/ztrl/petcong"
                  >
                    Petcong
                  </a>
                </header>
                <div className="self-center text-center py-3">
                  <p className="p-3 font-bold">
                    반려동물 실시간 랜덤 소개팅 모바일 어플리케이션
                  </p>
                  <p className="p-3">- Role: backend & infra developement</p>
                  <p className="p-3">
                    - Backend contribute: Member API 구현 및 Spring Security를
                    활용한 인증
                  </p>
                  <p className="p-3">
                    - Infra contribute: Jenkins를 사용해 CI/CD 파이프라인 구축
                  </p>
                </div>
              </article>
              <article className="flex flex-col py-10">
                <img
                  className="w-[200px] h-[200px] self-center"
                  src="https://private-user-images.githubusercontent.com/65946607/327988217-786a6907-7406-4f2f-8c18-58d0ee9dbb73.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTY3NzMxNzAsIm5iZiI6MTcxNjc3Mjg3MCwicGF0aCI6Ii82NTk0NjYwNy8zMjc5ODgyMTctNzg2YTY5MDctNzQwNi00ZjJmLThjMTgtNThkMGVlOWRiYjczLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTI3VDAxMjExMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNmN2I3YTBmZWE3MzI1MDA3ODI3YTgwZTYzZWE5ZjUzMDJjMjlkNzkzYzBhZmM3MmJiOTA3ODVhYjc3MTZiZjQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.YeCdFftG0FbQUjQZEJM6wIPpvB4xOPcnIIPD6sa1a5g"
                  alt="findear_thumbnail"
                  onClick={() =>
                    (location.href = "https://github.com/2TF4/findear")
                  }
                />
                <header className="self-center py-5">
                  <a
                    className="text-2xl font-bold  text-black"
                    href="https://github.com/2TF4/findear"
                  >
                    Findear
                  </a>
                </header>
                <div className="self-center text-center py-3">
                  <p className="p-3 font-bold">
                    분실물 통합 관리 플랫폼 Findear
                  </p>
                  <p className="p-3">- Role: frontend developement</p>
                  <p className="p-3">- contribute: 메인화면 구현</p>
                </div>
              </article>
              <article className="flex flex-col py-10">
                <img
                  className="rounded-3xl w-[200px] h-[200px] self-center"
                  src="https://raw.githubusercontent.com/4-EVERY1/QQueueing/master/.asset/queueing.png"
                  alt="qqueueing_thumbnail"
                  onClick={() =>
                    (location.href = "https://github.com/4-EVERY1/QQueueing")
                  }
                />
                <header className="self-center py-5">
                  <a
                    className="text-2xl font-bold  text-black"
                    href="https://github.com/4-EVERY1/QQueueing"
                  >
                    QQueueing
                  </a>
                </header>
                <div className="self-center text-center py-3">
                  <p className="p-3 font-bold">오픈소스 대기열 서비스</p>
                  <p className="p-3">- Role: backend developement</p>
                  <p className="p-3">
                    - contribute: jmeter 테스트 계획 수립 &
                    <br />
                    사용자 서버와 QQueueing에서 제공하는 대기열 서버를 연결하는
                    Adapter 프로토타입 개발
                  </p>
                </div>
              </article>
            </section>
          </article>
        </section>
      </div>
      {/* <aside>여긴 사이드</aside> */}
      <footer className="bg-white text-black text-5xl font-bold p-10">
        * 포트폴리오는 현재 업데이트 중 입니다.
      </footer>
    </>
  );
}

export default App;
