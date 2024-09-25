import React from "react";
import styled from "styled-components";
import GenerateImageForm from "../components/GenerateImageForm";
import GenerateImageCard from "../components/GenerateImageCard";

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  background: ${({ theme }) => theme.bg};
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1200px;
  gap: 8%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const CreatePost = () => {
  const [GenerateImageLoading, setGenerateImageLoading] = React.useState(false);
  const [createPostLoading, setcreatePostLoading] = React.useState(false);
  const [post, setPost] = React.useState({
    prompt: "",
    author: "",
    photo: "",
  });

  return (
    <Container>
      <Wrapper>
        <GenerateImageForm
          post={post}
          setPost={setPost}
          createPostLoading={createPostLoading}
          GenerateImageLoading={GenerateImageLoading}
          setGenerateImageLoading={setGenerateImageLoading}
          setcreatePostLoading={setcreatePostLoading}
        />
        <GenerateImageCard src={post?.photo} loading={GenerateImageLoading} />
      </Wrapper>
    </Container>
  );
};

export default CreatePost;
