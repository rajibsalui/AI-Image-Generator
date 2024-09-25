import { CircularProgress } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
flex: 1;
display: flex;
min-height: 300px;
gap: 16px;
flex-direction: column;
align-items: center;
padding: 16px ;
border-radius: 20px;
justify-content: center;
color: ${({ theme }) => theme.arrow + 80};
border: 2px dashed ${({ theme }) => theme.yellow};
`;
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 24px;
background: ${({ theme }) => theme.black + 50};
`;

const GenerateImageCard = ({src,loading}) => {
  console.log(src)
  
  return (
    <Container>
         {loading ? (
        <>
          <CircularProgress
            style={{ color: "inherit", width: "24px", height: "24px" }}
          />
          Generating Your Image ...
        </>
      ) : (
        <>
          {src ? <Image src={src} /> : <>Write a prompt to generate image </>}
        </>
      )}
    </Container>
  )
}

export default GenerateImageCard