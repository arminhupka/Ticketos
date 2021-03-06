import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFile, FaCheckSquare, FaTrash } from 'react-icons/all';
import StatusBlob from '../StatusBlob/StatusBlob';
import { firestore } from '../../services/firebase';

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const StyledTableHead = styled.thead`
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  text-align: left;
`;

const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  transition: background-color 0.3s;

  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const StyledTalbleName = styled.th`
  padding: 1.2rem 1.5rem;
`;

const StyledTableBody = styled.tbody``;

const TableWrapper = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 2rem 0 rgb(136 152 170 / 15%);
  overflow: hidden;
  overflow-x: auto;
`;

const StyledTableData = styled.td`
  padding: 1.2rem 1.5rem;

  :first-of-type {
    font-weight: 700;
  }
`;

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.gray};
    transition: color 0.3s;
    :hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const Table = ({ tickets, getTickets }) => {
  const removeTicket = async (ticketId) => {
    await firestore.collection('tickets').doc(ticketId).delete();
  };

  return (
    <TableWrapper>
      <StyledTable>
        <StyledTableHead>
          <StyledTableRow>
            <StyledTalbleName>Ticket ID</StyledTalbleName>
            <StyledTalbleName>Name</StyledTalbleName>
            <StyledTalbleName>Email</StyledTalbleName>
            <StyledTalbleName>Subject</StyledTalbleName>
            <StyledTalbleName>Category</StyledTalbleName>
            <StyledTalbleName>Status</StyledTalbleName>
            <StyledTalbleName>Created</StyledTalbleName>
            <StyledTalbleName>Actions</StyledTalbleName>
          </StyledTableRow>
        </StyledTableHead>
        <StyledTableBody>
          {tickets.map((ticket) => (
            <StyledTableRow key={ticket.id}>
              <StyledTableData>{ticket.id}</StyledTableData>
              <StyledTableData>name</StyledTableData>
              <StyledTableData>email</StyledTableData>
              <StyledTableData>{ticket.title}</StyledTableData>
              <StyledTableData>{ticket.category}</StyledTableData>
              <StyledTableData>
                <StatusBlob status={ticket.status} />
              </StyledTableData>
              <StyledTableData>{new Date(ticket.createdAt.seconds * 1000).toLocaleString('pl-PL')}</StyledTableData>
              <StyledTableData>
                <StyledButton>
                  <Link to={`/ticket/${ticket.id}`}>
                    <FaFile />
                  </Link>
                </StyledButton>
                <StyledButton>
                  <FaCheckSquare />
                </StyledButton>
                <StyledButton
                  onClick={async () => {
                    await removeTicket(ticket.id);
                    await getTickets();
                  }}
                >
                  <FaTrash />
                </StyledButton>
              </StyledTableData>
            </StyledTableRow>
          ))}
        </StyledTableBody>
      </StyledTable>
    </TableWrapper>
  );
};

export default Table;
