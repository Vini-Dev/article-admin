import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import { IoMdOpen } from 'react-icons/io';

import { Container, Cell, Open } from './styles';

const MaterialTable = ({ baseLink, columns, rows }) => {
  const getRedirectCell = id => {
    if (baseLink)
      return (
        <Cell align="center" hidden={id === 0}>
          <Open to={`${baseLink}/${id}`}>
            <IoMdOpen />
          </Open>
        </Cell>
      );

    return false;
  };

  return (
    <Container>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {getRedirectCell(0)}
            {columns.map((column, i) => (
              <Cell
                key={`column-${column.id}-${i + 1}`}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </Cell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            return (
              <TableRow
                key={`row-${row._id}-${i + 1}`}
                hover
                role="checkbox"
                tabIndex={-1}
              >
                {getRedirectCell(row._id)}

                {columns.map((column, j) => {
                  const value = row[column.id];
                  return (
                    <Cell
                      key={`cell-${column.id}-${row._id}-${j + 1}`}
                      align={column.align}
                    >
                      {column.format ? column.format(value) : value}
                    </Cell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
};

MaterialTable.defaultProps = {
  baseLink: '',
};

MaterialTable.propTypes = {
  baseLink: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MaterialTable;
