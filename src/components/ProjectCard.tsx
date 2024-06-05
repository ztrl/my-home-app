import ExpandMore from "@mui/icons-material/ExpandMore";
import GitHubIcon from "@mui/icons-material/GitHub";
import BuildIcon from "@mui/icons-material/Build";
import CableIcon from "@mui/icons-material/Cable";
import DvrIcon from "@mui/icons-material/Dvr";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Collapse,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Chip,
} from "@mui/material";
import { useState } from "react";

type ProjectCardProps = {
  avatarImgSrc: string;
  title: string;
  subheader: string;
  imgSrc: string;
  summary: string;
  contribution: string;
  achivement: string;
  retrospection: string;
  githubLink: string;
  skillList: string[];
};

const ProjectCard = ({
  avatarImgSrc,
  title,
  subheader,
  imgSrc,
  summary,
  contribution,
  achivement,
  retrospection,
  githubLink,
  skillList,
}: ProjectCardProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpandMordClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ my: 5 }}>
      <CardHeader
        avatar={<Avatar src={avatarImgSrc} alt="icon" />}
        action={
          <>
            {skillList.map((skill, index) => {
              return (
                <Chip
                  key={index}
                  avatar={
                    skill === "BACKEND" ? (
                      <BuildIcon fontSize="small" />
                    ) : skill === "INFRA" ? (
                      <CableIcon fontSize="small" />
                    ) : (
                      <DvrIcon fontSize="small" />
                    )
                  }
                  label={skill}
                  sx={{
                    mx: 1,
                    background: "white",
                  }}
                />
              );
            })}
            <IconButton
              onClick={handleExpandMordClick}
              sx={{
                transform: !expanded ? "rotate(0deg)" : "rotate(180deg)",
                outline: 0,
              }}
            >
              <ExpandMore />
            </IconButton>
          </>
        }
        title={title}
        subheader={subheader}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardMedia
          component="img"
          height="200"
          image={imgSrc}
          alt="project thumbnail"
        />
        <CardContent>
          <Typography sx={{ py: 2 }}>{summary}</Typography>
          <Typography sx={{ py: 2 }}>기여도</Typography>
          <Typography sx={{ pb: 2 }}>{contribution}</Typography>
          <Typography sx={{ py: 2 }}>달성</Typography>
          <Typography sx={{ pb: 2 }}>{achivement}</Typography>
          <Typography sx={{ py: 2 }}>회고</Typography>
          <Typography sx={{ pb: 2 }}>{retrospection}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="link to project's github repository"
            href={githubLink}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </CardActions>
      </Collapse>
    </Card>
  );
};

export default ProjectCard;
