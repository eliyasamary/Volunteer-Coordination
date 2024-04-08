const AuthContex = () => {
  return (
    <Box className="root">
      <Box className="container-primary">
        <Header></Header>
        <Navigation></Navigation>
      </Box>
      <Outlet />
      <Footer></Footer>
    </Box>
  );
};

export default AuthContex;
