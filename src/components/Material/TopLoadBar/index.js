import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Block, BoxBar, Bar } from './styles';

const TopLoadBar = ({ loading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (loading) {
        return setProgress(100);
      }

      return setProgress(0);
    };

    updateProgress();
  }, [loading]);

  return (
    <>
      {loading ? <Block /> : null}
      {progress > 0 ? (
        <BoxBar>
          <Bar />
        </BoxBar>
      ) : null}
    </>
  );
};

TopLoadBar.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default TopLoadBar;
