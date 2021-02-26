import {Link} from 'react-router-dom'
import styled from "styled-components";
import StatusBlob from "../StatusBlob/StatusBlob";

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const StyledTableHead = styled.thead`
  background-color: ${({theme}) => theme.primary};
  color: #fff;
  text-align: left;
`;

const StyledTableRow = styled.tr`
  border-bottom: 1px solid #dddddd;

  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const StyledTalbleName = styled.th`
  padding: 1.2rem 1.5rem;
`;

const StyledTableBody = styled.tbody``;

const TableWrapper = styled.div`
  border-radius: .5rem;
  overflow: hidden;
  overflow-x: auto;
`

const StyledTableData = styled.td`
  padding: 1.2rem 1.5rem;

  :first-of-type {
    font-weight: 700;
  }
`;


const Table = ({tickets}) => (
    <TableWrapper>
        {console.log(tickets)}
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
                {tickets.map(ticket => (
                    <StyledTableRow key={ticket.id}>
                        {console.log()}
                        <StyledTableData>{ticket.id}</StyledTableData>
                        <StyledTableData>name</StyledTableData>
                        <StyledTableData>email</StyledTableData>
                        <StyledTableData>{ticket.title}</StyledTableData>
                        <StyledTableData>category</StyledTableData>
                        <StyledTableData><StatusBlob status={ticket.status}/></StyledTableData>
                        <StyledTableData>{new Date(ticket.createdAt.seconds * 1000).toLocaleString("pl-PL")}</StyledTableData>
                        <StyledTableData>
                            <button>
                                <Link to={`/ticket/${ticket.id}`}>Show ticket</Link>
                            </button>
                        </StyledTableData>
                    </StyledTableRow>
                ))}
            </StyledTableBody>
        </StyledTable>
    </TableWrapper>
);

export default Table
