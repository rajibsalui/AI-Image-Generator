import React from "react";
import styled from "styled-components";
import Button from "./button";
import { AddRounded, ExploreRounded } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text_primary};
  font-weight: bold;
  font-size: 22px;
  padding: 14px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
  }
`;

const Navbar = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const path=location.pathname.split("/");
  return (
    <Container>
      Da Vinci{
        path[1] === "post"? (
        <Button
          onClick={() => navigation("/")}
            text="Explore posts "
            leftIcon={<ExploreRounded style={{ fontSize: "18px" }} />}
          />
        ):(
      <Button
      onClick={() => navigation("/post")}
        text="Create new post "
        leftIcon={<AddRounded style={{ fontSize: "18px" }} />}
      />
        )}
    </Container>
  );
};

export default Navbar;
