import React, { createContext, useState, useContext, useRef } from 'react';
import { createPortal } from 'react-dom';
import FadeIn from 'react-fade-in';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import Input from '~/components/Material/Input';

import {
  Container,
  Content,
  Title,
  Controls,
  Instruction,
  DeleteString,
} from './styles';

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const formRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [params, setParams] = useState({
    url: '',
    title: '',
  });

  const open = parameters => {
    setIsOpen(true);
    setParams(parameters);
  };

  const str = '"deletar"';

  const handleSubmit = async data => {
    formRef.current.setErrors({});

    if (data.confirmation !== 'deletar')
      return formRef.current.setErrors({
        confirmation: 'Digite deletar para confirmar a ação',
      });

    // try {
    //   const res = await api.post(`/type-pensions`, data);
    //   console.log(res);

    //   if (res.status === 201) history.push('/config/type-pension');
    // } catch (err) {
    //   toast.error('Error!');
    // }

    // Caso houver um callback
    if (params.onDelete)
      params.onDelete({
        callback: 'Test',
      });

    return true;
  };

  return (
    <ModalContext.Provider value={{ open }}>
      {isOpen &&
        createPortal(
          <Container>
            <FadeIn>
              <Content ref={formRef} onSubmit={handleSubmit}>
                <Title>{params.title}</Title>
                <Instruction>
                  Digite <DeleteString>{str}</DeleteString> para confirmar a
                  ação
                </Instruction>
                <Input label="" name="confirmation" />
                <Controls>
                  <Button
                    type="button"
                    color="invert"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit" color="danger">
                    Deletar
                  </Button>
                </Controls>
              </Content>
            </FadeIn>
          </Container>,
          document.body
        )}
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

const ContentPage = () => {
  const { open } = useContext(ModalContext);

  const callbackDelete = res => console.log(res);

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() =>
            open({
              url: '/tariffs/1',
              title: 'Deseja deseja deletar o tarifário?',
              onDelete: callbackDelete,
            })
          }
        >
          Deletar tarifário
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() =>
            open({
              url: '/type-pensions/1',
              title: 'Deseja deseja deletar a pensão?',
            })
          }
        >
          Deletar pensão
        </button>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <ModalProvider>
      <ContentPage />
    </ModalProvider>
  );
};

export default Page;
