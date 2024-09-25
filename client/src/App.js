import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Theme";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";


const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  `;
  const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  flex: 3;
  `;

function App() {
  return (
    <ThemeProvider theme={darkTheme} >
      <Container>
        <Wrapper>
          <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/post" element={<CreatePost />}  />
          </Routes>
          </BrowserRouter>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
