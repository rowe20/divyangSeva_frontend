import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, ButtonL } from '../ButtonElement'
import { BtnWrap, 
    Column1, 
    Column2,
    Heading, 
    InfoContainer, 
    InfoROw, 
    InfoWrapper, 
    ImgWrap,
    Img,
    Subtitle, 
    TextWrapper, 
    TopLine,
    NewsInfoWrapper,
    HeadingNews,
    NewsImg
} from './InfoElement'


const ParalymInfoSection = ({id,imgStart,topLine,lightText,headline,darkText,description,buttonLabel,img,alt,primary,dark,dark2}) => {

    const [news, setnews] = useState([]);
    const [lightBg, setlightBg] = useState(false);
    const fetchNews = async () =>{
        let res = await axios.get("/api/news")
        if(res.status === 200){
            // console.log(res.data.data[0]);
             setnews(res.data.data);
             console.log(news);
        }
    }

    useEffect(() => {
        if(news.length === 0){
            fetchNews()
        }
        else{
            console.log(news);
        }
      },[])

  return (
    <>
    {news.length !== 0 && (
    <>
    {news.slice(0,10).map((article,index) =>(
        <InfoContainer lightBg={lightBg} id={id} key={index}>
        <NewsInfoWrapper>
            <InfoROw imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>Article {index + 1}</TopLine>
                    <HeadingNews lightText={true}>{article.title}</HeadingNews>
                    <Subtitle darkText={darkText}>{article.description}</Subtitle>
                    <BtnWrap>
                        <ButtonL to={article.url}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        
                        primary={true}
                        dark={true}
                        dark2={false}
                        >
                         Read More
                            </ButtonL>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={article.urlToImage} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </InfoROw>
        </NewsInfoWrapper>
    </InfoContainer>     
    ))}
    
    </>
    )}
    
    </>
  )
}

export default ParalymInfoSection