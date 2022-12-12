import { Header } from "../Header";
import { Content } from "./styles";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};
