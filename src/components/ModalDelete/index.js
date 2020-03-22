import React, { createContext, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
// import toast from 'react-toastify';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import Input from '~/components/Material/Input';
import api from '~/services/api';

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

  const [isOpen, setIsOpen] = useState(true);
  const [params, setParams] = useState({
    url: '',
    title: '',
    autoClose: false,
  });

  const open = parameters => {
    setIsOpen(true);
    setParams({
      ...parameters,
    });
  };

  const str = '"deletar"';

  const handleSubmit = async data => {
    formRef.current.setErrors({});

    if (data.confirmation === 'deletar') {
      try {
        const res = await api.delete(params.url);

        // Callback
        if (params.onDelete) params.onDelete(res);

        if (params.autoClose) setIsOpen(false);
      } catch (err) {
        // toast.error('Erro ao deletar...');
        if (params.onDelete) params.onDelete(err);
      }
    } else {
      formRef.current.setErrors({
        confirmation: 'Digite deletar para confirmar a ação',
      });
    }
  };

  return (
    <ModalContext.Provider value={{ open }}>
      {isOpen &&
        createPortal(
          <Container>
            <Content ref={formRef} onSubmit={handleSubmit}>
              <Title>{params.title}</Title>
              <Instruction>
                Digite <DeleteString>{str}</DeleteString> para confirmar a ação
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

export default ModalProvider;
