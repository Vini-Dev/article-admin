import React, { useState, useImperativeHandle, forwardRef } from 'react';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import MediumEditor from 'react-medium-editor';

import { Container } from './styles';

const Editor = (props, ref) => {
  const [editor, setEditor] = useState();

  useImperativeHandle(ref, () => ({
    getData: () => editor,
  }));

  return (
    <Container>
      <MediumEditor
        text={editor}
        onChange={e => setEditor(e)}
        data-placeholder="dasddasda"
      />
    </Container>
  );
};

export default forwardRef(Editor);
