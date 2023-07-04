import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { useNavigate } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Typography } from "@mui/material"
import Container from "@mui/material/Container";
import image from "../assets/john doe.jpg";

const icons = [
  {
    icon: <HomeIcon />,
    title: "Home",
    url: "/stock/",
  },
  {
    title: "Courses",
    icon: <BookmarkBorderIcon />,
    url: "/stock/",
  },
  {
    title: "Students",
    icon: <SchoolIcon />,
    url: "/stock/sales/",
  },
  {
    title: "Payments",
    icon: <LocalAtmIcon />,
    url: "/stock/",
  },
  {
    title: "Report",
    icon: <AssessmentIcon />,
    url: "/stock/",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    url: "/stock/",
  },

];

const iconStyle = {
  color: "black",
  "& .MuiSvgIcon-root": { color: "black", fontSize:"14px", fontWeight:"500", borderRadius:"4px" },
  "&:hover": { backgroundColor: "orange" },
  "&:hover .MuiSvgIcon-root": { color: "black" },
}

const MenuListItems = () => {
  const navigate = useNavigate()
  return (
    <div style={{ backgroundColor: "#F2EAE1" , borderStyle:"none" }}>
      <Typography
        style={{ color: "black", fontWeight: "700", fontSize:"20px", paddingTop:"3rem" }}
        variant="h6"
        align="center"
        mb={2}
        color="black"
      >
        MANAGE COURSES
      </Typography>

      <Container>
        <img src={image} alt="img" style={{ borderRadius: "200px" }} />
      </Container>

      <Typography
        style={{ color: "black", fontWeight: "700", fontSize:"17px" }}
        align="center"
        mb={1}
      >
        John Doe
      </Typography>
      <Typography
        variant="h6"
        align="center"
        mb={1}
        style={{ color: "#F8D442", fontWeight:"500", fontSize:"14px", }}
      >
        Admin
      </Typography>
      <List>
        {icons?.map((item, index) => (
          <ListItem key={index} disablePadding>
            {item.url.includes("http") && (
              <ListItemButton to={item.url} sx={iconStyle}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            )}
            {!item.url.includes("http") && (
              <ListItemButton onClick={() => navigate(item.url)} sx={iconStyle}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default MenuListItems
