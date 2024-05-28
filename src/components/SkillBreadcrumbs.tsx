import { Breadcrumbs, Typography } from "@mui/material";
import HandymanIcon from "@mui/icons-material/Handyman";
import BuildIcon from "@mui/icons-material/Build";
import CableIcon from "@mui/icons-material/Cable";

type HeaderProp = {
  onclick: (content: string) => void;
  headers: string[];
  currentContent: string;
};

const SkillBreadcrumbs = ({ onclick, headers, currentContent }: HeaderProp) => {
  return (
    <>
      <Breadcrumbs className="p-3">
        {headers.map((header, index) => {
          return (
            <Typography
              key={index}
              color={currentContent === header ? "black" : "gray"}
              onClick={() => onclick(header)}
              sx={{ fontSize: 20 }}
            >
              {index === 0 ? (
                <BuildIcon fontSize="inherit" sx={{ mr: 1 }} />
              ) : index === 1 ? (
                <CableIcon fontSize="inherit" sx={{ mr: 1 }} />
              ) : (
                <HandymanIcon fontSize="inherit" sx={{ mr: 1 }} />
              )}
              {header}
            </Typography>
          );
        })}
      </Breadcrumbs>
    </>
  );
};

export default SkillBreadcrumbs;
