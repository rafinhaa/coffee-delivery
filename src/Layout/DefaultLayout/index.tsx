import { Outlet } from "react-router-dom";
import { Container } from "./styles";

export const DefaultLayout = () => (
  <Container>
    <Outlet />
  </Container>
);
