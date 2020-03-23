import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { IoIosImages } from 'react-icons/io';

import { Container, Content, Bar, Error, ClickMessage } from './styles';

const Cover = (props, ref) => {
  const inputRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState('');
  const [error, setError] = useState();

  useImperativeHandle(ref, () => ({
    getPath: () => inputRef.current.value,
    getData: () => inputRef.current.files[0],
    setError: value => setError(value),
  }));

  const handleChangeCover = e => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onloadstart = () => {
      setImage('');
      setProgress(33);
    };

    reader.onload = img => {
      setImage(img.target.result);
      setProgress(100);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Container>
      <Content htmlFor="cover" src={image} progress={progress}>
        <input
          ref={inputRef}
          type="file"
          id="cover"
          name="cover"
          onChange={handleChangeCover}
        />
        {!image && (
          <div>
            <div>
              <IoIosImages />
            </div>
            <ClickMessage>Clique aqui para adicionar uma imagem!</ClickMessage>
          </div>
        )}
        <Bar progress={progress} />
      </Content>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default forwardRef(Cover);
