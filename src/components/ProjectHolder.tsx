import ProjectCard from "./ProjectCard";

const ProjectHolder = () => {
  return (
    <>
      <ProjectCard
        avatarImgSrc="https://raw.githubusercontent.com/ztrl/petcong/master/asset/logo.png"
        title={"Petcong, 반려동물 실시간 랜덤 소개팅 모바일 어플리케이션"}
        subheader="2024.01.03 ~ 2024.02.16 (7 weeks), 참여자: 6명"
        imgSrc="/images/petcong_thumbnail.png"
        summary="반려동물 가구와 1인 가구는 꾸준히 늘어나는 추세입니다. 그래서
              반려동물이라는 주제로 공감대를 형성할 수 있는 사람들을 대상으로
              만남의 장을 제공하는 어플리케이션을 만들었습니다."
        contribution="백엔드 33%, 인프라 100%"
        achivement="회원 관련 API 구현, Firebase와 스프링 시큐리티를 활용한 인증, Jenkins를 활용하여 CI/CD 구축"
        retrospection="스프링 시큐리티 구조를 이해할 수 있었다. AWS를 활용하고, CI/CD 파이프라인을 만들어가면서 막막했던 인프라에 대한 시야가 좀 트이게 된 경험이었다."
        githubLink="https://github.com/ztrl/petcong"
        skillList={["BACKEND", "INFRA"]}
      />
      <ProjectCard
        avatarImgSrc="/images/findear_logo.jpg"
        title="Findear, 분실물 통합 관리 플랫폼"
        subheader="2024.02.19 ~ 2024.04.05 (7 weeks), 참여자: 6명"
        imgSrc="/images/findear_thumbnail.png"
        summary="시설의 관리자들은 고객이 놓고간 물건들을 보관하고 관리하는데
            어려움이 있습니다. Findear는 AI를 활용한 습득물 간편 등록 시스템과
            유사 습득물 매칭 서비스를 제공하여 이를 해결합니다."
        contribution="프론트 25%"
        achivement="메인 화면 구현, 습득물 등록 화면 구현"
        retrospection="프론트엔드의 입장이 되어보니 백엔드와 함께 API 명세를 공유하는 것은 버그와 작업량을 줄이는 중요한 작업임을 확인할 수 있었다. 다음에는 재사용성이 높은 코드를 작성해서 코드량을 줄여보고 싶다."
        githubLink="https://github.com/2TF4/findear"
        skillList={["FRONTEND"]}
      />
      <ProjectCard
        avatarImgSrc="https://raw.githubusercontent.com/4-EVERY1/QQueueing/master/.asset/queueing.png"
        title="QQueueing, 오픈소스 대기열 서비스"
        subheader="2024.04.08 ~ 2024.05.17 (6 weeks), 참여자: 6명"
        imgSrc="/images/waiting_queue.gif"
        summary="QQueueing은 서버에 직접 설치해서 사용할 수 있는 무료 대기열
            서비스입니다. 서버 프로그램이 실행 중인 곳에 설치해서, 추가 비용
            없이 대기열 기능을 사용할 수 있습니다."
        contribution="백엔드 25%"
        achivement="Jmeter를 활용한 테스트 계획 수립 및 수행, Http client 모듈 작성"
        retrospection="Http client 모듈을 완전하게 만들 지 못해서 아쉽다. 처음에는 간단한 Http client만 만들려고 했으나 부가 기능을 넣는다고 추가하려다 보니 목표를 잃어버리고 시간 관리를 못하게 되었다. Https 지원을 위해 계속 개발을 하고, 추후에 이런 일이 재발하지 않도록 작업이 완성되었다고 간주할 수 있는 기준을 세워서 개발을 진행하겠다."
        githubLink="https://github.com/4-EVERY1/QQueueing"
        skillList={["BACKEND"]}
      />
    </>
  );
};

export default ProjectHolder;
