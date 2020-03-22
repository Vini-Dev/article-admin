import React, { useState, useImperativeHandle, forwardRef } from 'react';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import MediumEditor from 'react-medium-editor';

import { Container, Error } from './styles';

const Editor = (props, ref) => {
  const [editor, setEditor] = useState('Meu artigo...');
  const [error, setError] = useState();

  useImperativeHandle(ref, () => ({
    getData: () => editor,
    setError: value => setError(value),
    setValue: value => setEditor(value),
  }));

  return (
    <Container>
      <MediumEditor text={editor} onChange={e => setEditor(e)} />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default forwardRef(Editor);
