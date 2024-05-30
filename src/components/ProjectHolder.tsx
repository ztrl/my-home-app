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
    <Card>
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
          반려동물 실시간 랜덤 소개팅 모바일 어플리케이션, 펫콩입니다.
        </Typography>
        <Typography sx={{ py: 2 }}>
          늘어나는 반려동물 가구와 1인 가구를 보면서 반려동물이라는 주제로
          공감대를 형성할 수 있는 사람들을 대상으로 만남의 장을 제공하는
          어플리케이션을 만들었습니다.
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
  );
};

export default ProjectHolder;
