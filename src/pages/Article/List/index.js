import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { ReactComponent as Empty } from '~/assets/undraw_empty_xct9.svg';
import Button from '~/components/Button';
import api from '~/services/api';

import {
  Container,
  Content,
  HeadControls,
  Title,
  NoContent,
  GridArticles,
  Article,
  ArticleCover,
  ArticleAuthor,
  ArticleDescription,
  ArticleTitle,
  ArticleContent,
  ArticleTags,
  ArticleTag,
} from './styles';

const List = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get(`/articles?page=1&perPage=100`);

        setArticles(res.data);
      } catch (error) {
        toast.error('Erro ao buscar as articles...');
      }
    };
    getData();
  }, []);

  return (
    <Container>
      <Content>
        <HeadControls>
          <Title>Artigos</Title>
          <Button to="/article/add">Novo artigo</Button>
        </HeadControls>
        {articles && (
          <GridArticles>
            {articles.data.map(article => (
              <Article key={article._id} to={`/article/edit/${article._id}`}>
                <ArticleCover
                  src={`${process.env.REACT_APP_API_URL}/image/${article.cover}`}
                />
                <ArticleDescription>
                  <ArticleTitle>{article.title}</ArticleTitle>
                  <ArticleAuthor>Por João</ArticleAuthor>
                  <ArticleContent>
                    {article.content.replace(/<[^>]*>/g, '')}
                  </ArticleContent>
                  <ArticleTags>
                    {article.tags.map(tag => (
                      <ArticleTag key={tag._id}>{tag.name}</ArticleTag>
                    ))}
                  </ArticleTags>
                </ArticleDescription>
              </Article>
            ))}
          </GridArticles>
        )}
        {articles && articles.totalSize === 0 && (
          <NoContent>
            <Empty />
          </NoContent>
        )}
      </Content>
    </Container>
  );
};

export default List;
