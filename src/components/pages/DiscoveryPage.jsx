import React from 'react';
import styled from 'styled-components';

// Sample Data: Replace with your real Telegram group data.
import telegramGroups from '../../components/telegramGroups.json'; // Load your JSON file here

const DiscoveryPage = () => {
  return (
    <PageContainer>
      <Header>Telegram Groups</Header>
      <TableContainer>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Group Link</TableHeader>
              <TableHeader>Action</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {telegramGroups.map((group, index) => (
              <TableRow key={index}>
                <TableCell data-label="Group Link">{group.telegram_link}</TableCell>
                <TableCell data-label="Action">
                  <GroupLink href={group.telegram_link} target="_blank" rel="noopener noreferrer">
                    Join Group
                  </GroupLink>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Header = styled.h1`
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 10px;
  }
`;

const TableHeader = styled.th`
  background-color: #007bff;
  color: white;
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;

  @media (max-width: 768px) {
    display: none; /* Hide headers on mobile */
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;

  @media (max-width: 768px) {
    display: block;
    text-align: right;
    padding-left: 50%;
    position: relative;

    &::before {
      content: attr(data-label);
      position: absolute;
      left: 10px;
      font-weight: bold;
      text-align: left;
    }
  }
`;

const GroupLink = styled.a`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;

  &:hover {
    color: #0056b3;
  }
`;

export default DiscoveryPage;
