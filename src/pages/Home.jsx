import { Typography } from "@mui/material";

import KpiCards from "../components/KpiCards";

const Home = () => {
  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Home
      </Typography>
      <KpiCards/>
    </div>
  );
}

export default Home
