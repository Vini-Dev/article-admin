import React from 'react';
import PropTypes from 'prop-types';
import TablePagination from '@material-ui/core/TablePagination';

const MaterialPagination = ({
  rows,
  rowsPerPage,
  rowsPerPageOptions,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <TablePagination
      rowsPerPageOptions={rowsPerPageOptions}
      component="div"
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      labelRowsPerPage="Linhas por página"
      nextIconButtonText="Próxima página"
      labelDisplayedRows={({ from, to, count }) =>
        `Mostrando ${from}-${to} de ${count} resultados`
      }
    />
  );
};

MaterialPagination.defaultProps = {
  rowsPerPageOptions: [5, 10, 15],
  rowsPerPage: 5,
  page: 0,
};

MaterialPagination.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
};

export default MaterialPagination;
