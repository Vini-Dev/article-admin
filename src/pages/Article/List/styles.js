import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FadeIn from '~/styles/animations/FadeIn';
import devices from '~/styles/config/device';

export const Container = styled.div`
  @media ${devices.laptop} {
    height: 100vh;
    overflow-y: scroll;
  }
`;

export const Content = styled.div`
  ${FadeIn}
  padding: 15px;

  @media ${devices.laptop} {
    width: 100%;
  }
`;

export const HeadControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  color: #1c1c1e;
`;

export const NoContent = styled.div`
  ${FadeIn}
  > svg {
    width: 100%;
    max-height: 70vh;
  }
`;

export const GridArticles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 15px;

  @media ${devices.laptop} {
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Article = styled(Link)`
  cursor: pointer;
  display: block;
  text-decoration: none;
  position: relative;
  padding: 15px 5px;

  @media ${devices.laptop} {
    display: flex;
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid #eee;
  }

  &:hover {
    > div:first-of-type,
    svg {
      color: #5856d6;
    }
  }
`;

export const ArticleCover = styled.div`
  background-image: ${({ src }) => `url('${src}')`};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 4px;

  @media ${devices.mobileS} {
    height: 180px;
  }

  @media ${devices.laptop} {
    height: 90px;
    width: 120px;
    margin-right: 10px;
  }
`;

export const ArticleDescription = styled.div``;

export const ArticleAuthor = styled.div`
  margin-bottom: 5px;
  color: #3a3a3c;
  @media ${devices.laptop} {
    font-size: 14px;
  }

  @media ${devices.mobileS} {
    font-size: 12px;
  }
`;

export const ArticleTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #1c1c1e;

  transition: color 200ms linear;
`;

export const ArticleContent = styled.div`
  color: #3a3a3c;

  @media ${devices.laptop} {
    font-size: 16px;
    margin-bottom: 10px;
  }

  @media ${devices.mobileS} {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

export const ArticleTags = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
`;

export const ArticleTag = styled.div`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #8e8e93;
  background-color: #f5f5f5;
  text-align: center;
`;

export const ArticleRedirectIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;
  right: 0;
  height: 100%;
  padding: 15px;

  svg {
    color: #48484a;
    transition: color 200ms linear;
  }
`;
