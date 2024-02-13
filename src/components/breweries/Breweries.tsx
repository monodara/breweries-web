import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { SearchElement } from "../../misc/type";
import "./Breweries.css";
import { useFetch } from "../../hook/useFetch";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Breweries({ urlSuffix }: SearchElement) {
  // console.log(url);
  const url = `https://api.openbrewerydb.org/v1/breweries${urlSuffix}`;
  const { breweries, loading, error } = useFetch(url);
  const moreButtonHandler = () => {};
  if (loading)
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  if (error) return <p>{error}</p>;
  return (
    <div>
      {urlSuffix === "" && <h1>All Breweries</h1>}
      {urlSuffix !== "" && <h1>Search Result</h1>}
      {breweries.length === 0 && <p>No Results</p>}
      <div className="block">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Type</StyledTableCell>
                <StyledTableCell align="right">State</StyledTableCell>
                <StyledTableCell align="right">City</StyledTableCell>
                <StyledTableCell align="right">Address</StyledTableCell>
                <StyledTableCell align="right">More Details</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {breweries.map((brewery) => (
                <StyledTableRow key={brewery.id}>
                  <StyledTableCell component="th" scope="row">
                    {brewery.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {brewery.brewery_type}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {brewery.state}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {brewery.city}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {brewery.street}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Link to={`/breweries/${brewery.id}`}>
                      <Button size="small" onClick={moreButtonHandler}>
                        More
                      </Button>
                    </Link>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
