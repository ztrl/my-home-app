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
        contribution=""
        achivement=""
        retrospection=""
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
        contribution=""
        achivement=""
        retrospection=""
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
        contribution=""
        achivement=""
        retrospection=""
        githubLink="https://github.com/4-EVERY1/QQueueing"
        skillList={["BACKEND"]}
      />
    </>
  );
};

export default ProjectHolder;
