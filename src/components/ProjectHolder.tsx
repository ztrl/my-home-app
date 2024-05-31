import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectHolder = () => {
  return (
    <>
      <Card sx={{ my: 5 }}>
        <CardHeader
          avatar={
            <Avatar
              src="https://raw.githubusercontent.com/ztrl/petcong/master/asset/logo.png"
              alt="icon"
              aria-label="projectIcon"
            />
          }
          title="Petcong, 반려동물 실시간 랜덤 소개팅 모바일 어플리케이션"
          subheader="2024.01.03 ~ 2024.02.16 (7 weeks)"
        />
        <CardMedia
          component="img"
          image="/images/petcong_thumbnail.png"
          alt="petcong_thumbnail"
        />
        <CardContent>
          <Typography sx={{ py: 2 }}>
            반려동물 가구와 1인 가구는 꾸준히 늘어나는 추세입니다. 그래서
            반려동물이라는 주제로 공감대를 형성할 수 있는 사람들을 대상으로
            만남의 장을 제공하는 어플리케이션을 만들었습니다.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="link to petcong github repository"
            href="https://github.com/ztrl/petcong"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ my: 5 }}>
        <CardHeader
          avatar={
            <Avatar
              src="/images/findear_logo.jpg"
              alt="icon"
              aria-label="projectIcon"
            />
          }
          title="Findear, 분실물 통합 관리 플랫폼"
          subheader="2024.02.19 ~ 2024.04.05 (7 weeks)"
        />
        <CardMedia
          component="img"
          image="/images/findear_thumbnail.png"
          alt="findear_thumbnail"
        />
        <CardContent>
          <Typography sx={{ py: 2 }}>
            시설의 관리자들은 고객이 놓고간 물건들을 보관하고 관리하는데
            어려움이 있습니다. Findear는 AI를 활용한 습득물 간편 등록 시스템과
            유사 습득물 매칭 서비스를 제공하여 이를 해결합니다.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="link to findear github repository"
            href="https://github.com/2TF4/findear"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </CardActions>
      </Card>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              src="https://raw.githubusercontent.com/4-EVERY1/QQueueing/master/.asset/queueing.png"
              alt="icon"
              aria-label="projectIcon"
            />
          }
          title="QQueueing, 오픈소스 대기열 서비스"
          subheader="2024.01.03 ~ 2024.02.16 (7 weeks)"
        />
        <CardMedia
          component="img"
          image="/images/commandline.png"
          alt="petcong_thumbnail"
        />
        <CardContent>
          <Typography sx={{ py: 2 }}>
            QQueueing은 서버에 직접 설치해서 사용할 수 있는 무료 대기열
            서비스입니다. 서버 프로그램이 실행 중인 곳에 설치해서, 추가 비용
            없이 대기열 기능을 사용할 수 있습니다.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="link to petcong github repository"
            href="https://github.com/4-EVERY1/QQueueing"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default ProjectHolder;
