import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"
import { Formik } from "formik"
import useAuthCall from "../hooks/useAuthCall"
import LoginForm, { loginScheme } from "../components/LoginForm"

const Login = () => {
  const { login } = useAuthCall();


  return (
    <div style={{ backgroundColor: "#FEAF00" }}>
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="center"
          direction="row-reverse"
          backgroundColor="white"
          sx={{
            height: "100vh",
            p: 2,
          }}
          style={{ backgroundColor: "#FEAF00" }}
        >
          <Grid
            item
            xs={12}
            sm={10}
            md={6}
            style={{ borderRadius: "20px", backgroundColor: "white" }}
          >
            <Typography
              style={{
                color: "black",
                fontWeight: "700",
                fontSize: "32px",
                margin: "2rem",
              }}
              align="center"
            >
              MANAGE COURSES
            </Typography>

            <Typography
              style={{ color: "black", fontWeight: "600", fontSize: "22px" }}
              align="center"
              mb={4}
            >
              SIGN IN
            </Typography>
            <Typography
              variant="h6"
              align="center"
              mb={4}
              color="secondary.dark"
            >
              Enter your credentials to acces your account
            </Typography>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginScheme}
              onSubmit={(values, actions) => {
                login(values);
                actions.resetForm();
                actions.setSubmitting(false);
              }}
              component={(props) => <LoginForm {...props} />}
            ></Formik>

            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Link to="/register">
                Don't you have an account? Register here...
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Login
