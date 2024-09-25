
import React from 'react'
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Avatar } from '@mui/material';
import FileSaver from 'file-saver'
import {DownloadRounded} from '@mui/icons-material'

const Card=styled.div`
display: flex;
position: relative;
   color: ${({ theme }) => theme.text_primary};
   border-radius: 20px;
   box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 60};
   cursor: pointer;
   transition: all 0.3s ease;
   &:hover {
    box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 80};
    scale: 1.05;
   }
   &:nth-child(7n+1) {
    grid-column: auto/span 2;
    grid-row: auto/span 2;
   }
`;
const Prompt=styled.div`
font-weight: 400px;
font-size: 15px;
color: ${({ theme }) => theme.white};
`;
const Author=styled.div``;
const HoverOverlay=styled.div`
display: flex;
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
flex-direction: column;
align-items: start;
gap: 10px;
backdrop-filter: blur(2px);
background: rgba(0, 0, 0, 0.5);
border-radius: 6px;
justify-content: end;
padding: 16px;
   transition: opacity 0.3s ease;
   ${Card}:hover & {
    opacity: 1;
   }
`;
const ImageCard = ({item}) => {
  return (
    <Card>
        <LazyLoadImage 
        alt={item?.prompt}
        style={{borderRadius:"12px"}}
        width="100%"
        src={item?.photo} />
    <HoverOverlay>
        <Prompt>
            {item?.prompt}
        </Prompt>
      <div style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

      }}>
        <Author>
            <Avatar sx={{height:"32px",width:"32px"}}>
              {item?.name[0]}
            </Avatar>
            {item?.name}
        </Author>
        <DownloadRounded onClick={()=>FileSaver.saveAs(item?.photo,"download.jpg")} />
      </div>
    </HoverOverlay>
    </Card>
  )
}

export default ImageCard