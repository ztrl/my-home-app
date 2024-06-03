type ContentProps = {
  activeContent: string;
};
type SkillProps = {
  name: string;
  description: string[];
};

const SkillContents = ({ activeContent }: ContentProps) => {
  const contents: { [key: string]: Array<SkillProps> } = {
    BACKEND: [
      {
        name: "Java",
        description: [
          "- Java 1.8 이상에서 쓰는 문법과 기능들을 알고 있습니다. (Stream, var, Record, swtich expression, pattern matching 등등)",
          "- 소켓 통신을 할 줄 알고, 리플렉션을 활용해 간단한 IoC 컨테이너를 만들어 본 경험이 있습니다.",
          "- Java에서 제공하는 Concurrent 기능들을 꾸준히 공부하고 있습니다. 최근에는 Virtual Thread에 흥미가 있습니다.",
        ],
      },
      {
        name: "Spring",
        description: [
          "- RESTful 한 웹 서버를 구현할 수 있습니다.",
          "- Spring Security를 사용해서 인증/인가 시스템을 만들 수 있습니다.",
          "- 설정 파일을 편하게 관리하기 위해 Spring Cloud Config를 공부하려고 합니다.",
        ],
      },
      {
        name: "MySQL",
        description: [
          "- 기본적인 DML, DDL을 사용할 수 있습니다. 팀 프로젝트를 하면서 ERD를 작성하고, 테이블은 정규화를 수행하면서 설계해본 적이 있습니다.",
          "- 현재는 Real MySQL 책을 통해서 MySQL을 깊게 이해하는 것이 목표입니다.",
        ],
      },
    ],
    INFRA: [
      {
        name: "Docker",
        description: [
          "- Docker 컨테이너를 띄워 주변 환경에 독립적인 어플리케이션을 만들어 본 적이 있습니다.",
        ],
      },
      {
        name: "Jenkins",
        description: [
          "- Jenkins Pipeline을 활용해서 간단한 CI/CD를 해본 경험이 있습니다.",
        ],
      },
      {
        name: "AWS",
        description: [
          "- EC2, S3, RDS, Route 53을 사용할 수 있습니다. (현재 보고 계신 홈페이지는 EC2, RDS, Route 53을 사용해서 구축하였습니다.)",
        ],
      },
    ],
    TOOL: [
      {
        name: "Git",
        description: [
          "- 기초적인 형상관리 작업을 할 수 있습니다. (pull, merge)",
          "- 원활한 커뮤니케이션과 소스 변경 이력을 쉽게 확인하기 위해 Commit convention을 수립하고 이를 지키는데 관심이 많습니다.",
        ],
      },
      {
        name: "Jira",
        description: [
          "- Jira 티켓을 발급해서 기초적인 이슈 관리를 할 수 있습니다.",
        ],
      },
      {
        name: "Swagger",
        description: [
          "- Swagger로 API 명세를 해서 프론트엔드 개발자와 협업 하는 것을 선호합니다.",
        ],
      },
    ],
  };

  return (
    <>
      {contents[activeContent].map((skill, skillIndex) => (
        <div key={skillIndex} className="mt-3">
          <header className="text-lg font-semibold p-3">{skill.name}</header>
          <div className="mt-3">
            {skill.description.map((description, descriptionIndex) => (
              <p key={descriptionIndex} className="p-3">
                {description}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SkillContents;
