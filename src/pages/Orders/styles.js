import styled from 'styled-components';
import { TableContainer, TableHead, TableCell } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {
  primaryColor,
  white,
  primaryColorDeep,
  secondaryColor,
} from '../../GlobalStyle';

export const Container = styled.div`
  min-height: calc(100vh - 58px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

export const ContentPage = styled.div`
  width: 50%;
`;

export const Typography = styled.h2`
  font-size: 1.7rem;
  padding-bottom: 15px;
`;

export const TableWrap = styled(TableContainer)`
  min-width: 900px;
`;

export const TbHead = styled(TableHead)`
  background: ${primaryColor};
  color: ${white};
`;

export const TbCellHead = styled(TableCell)`
  color: ${white};
  font-weight: bold;
`;

export const ViewIcon = styled(SearchIcon)`
  background: ${primaryColor};
  color: ${white};
  border-radius: 5px;
  font-size: 31px;
  padding: 3px;
  width: 50px;
  cursor: pointer;

  &:hover {
    background: ${primaryColorDeep};
  }
`;

export const InsertBtn = styled.button`
  background: ${secondaryColor};
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  padding: 7px 20px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background: ${primaryColorDeep};
  }
`;
