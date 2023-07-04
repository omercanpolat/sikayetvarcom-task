import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import { amber, deepOrange, deepPurple, red } from "@mui/material/colors";
import SchoolIcon from "@mui/icons-material/School";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


const KpiCards = () => {
  const data = [
    {
      id: 1,
      title: "Students",
      value: "243",
      icon: <SchoolIcon sx={{ fontSize: "2.3rem" }} />,
      color: deepPurple[600],
      bgColor: deepPurple[100],
    },
    {
      id: 2,
      title: "Courses",
      value: "13",
      icon: <BookmarkBorderIcon sx={{ fontSize: "2.3rem" }} />,
      color: red[600],
      bgColor: red[100],
    },
    {
      id: 3,
      title: "Payments",
      value: "556,000₺",
      icon: <LocalAtmIcon sx={{ fontSize: "2.3rem" }} />,
      color: amber[600],
      bgColor: amber[100],
    },
    {
      id: 4,
      title: "Users",
      value: "3",
      icon: <PersonOutlineIcon sx={{ fontSize: "2.3rem" }} />,
      color: deepOrange[600],
      bgColor: deepOrange[100],
    },
  ];

  return (
    <Grid container justifyContent={"center"} spacing={4}>
      {data.map((item) => (
        <Grid
          item
          key={item.id}
          xs={12}
          sm={10}
          md={6}
          lg={3}
          sx={{ minWidth: "250px" }}
        >
          <Paper sx={{ p: 2 }} elevation={10}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
              <Avatar
                sx={{
                  backgroundColor: item.bgColor,
                  color: item.color,
                  width: 70,
                  height: 70,
                  ml: 4,
                }}
              >
                {item.icon}
              </Avatar>

              <Box>
                <Typography variant="button">{item.title}</Typography>
                <Typography variant="h4">{item.value}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default KpiCards;
