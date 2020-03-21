import React, { useState, useEffect } from 'react';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';
import formatDistance from 'date-fns/formatDistance';
import { toast } from 'react-toastify';
import { IoIosArrowForward } from 'react-icons/io';
import Button from '~/components/Button';
import api from '~/services/api';

import {
  Container,
  Content,
  HeadControls,
  Title,
  GridCard,
  Card,
  CardTitle,
  CardTime,
  CardRedirectIcon,
} from './styles';

const List = () => {
  const [tags, setTags] = useState({
    data: [],
  });

  // const columns = [
  //   {
  //     id: 'name',
  //     label: 'Nome',
  //     minWidth: 70,
  //   },
  //   {
  //     id: 'updated_at',
  //     label: 'Atualizado',
  //     minWidth: 70,
  //     format: value =>
  //       formatDistance(
  //         utcToZonedTime(new Date(value), 'America/Sao_Paulo'),
  //         utcToZonedTime(new Date(), 'America/Sao_Paulo'),
  //         {
  //           locale: pt,
  //           addSuffix: true,
  //         }
  //       ),
  //   },
  // ];

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get(`/tags?page=1&perPage=100`);
        console.log(res.data);
        setTags(res.data);
      } catch (error) {
        toast.error('Erro ao buscar as tags...');
      }
    };
    getData();
  }, []);

  const distanceTime = value =>
    formatDistance(
      utcToZonedTime(new Date(value), 'America/Sao_Paulo'),
      utcToZonedTime(new Date(), 'America/Sao_Paulo'),
      {
        locale: pt,
        addSuffix: true,
      }
    );

  return (
    <Container>
      <Content>
        <HeadControls>
          <Title>Tags</Title>
          <Button to="/tag/add">Nova tag</Button>
        </HeadControls>
        <GridCard>
          {tags &&
            tags.data.map(tag => (
              <Card key={tag._id} to={`/tag/edit/${tag._id}`}>
                <CardTitle>{tag.name}</CardTitle>
                <CardTime>atualizado {distanceTime(tag.updated_at)}</CardTime>
                <CardRedirectIcon>
                  <IoIosArrowForward />
                </CardRedirectIcon>
              </Card>
            ))}
        </GridCard>
      </Content>
    </Container>
  );
};

export default List;
