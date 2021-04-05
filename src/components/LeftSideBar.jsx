import {React} from 'react';
import "../css/LeftSideBar.css";
import "../css/MainIcon.css";
import logo from '../staticResources/logo_transparent-1.png';
import { useHistory } from "react-router-dom";

import {Table,Button,Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  changeColor,
  setMapCoordinates
} from "../storeClasses/earthquakeData";
import { useDispatch} from "react-redux";

export default function LeftSideBar(props) {
  const dispatch = useDispatch();
  const history = useHistory();
//"#33ccff"
//props.rows style={{marginLeft:'0px',marginTop:'10px',width:'200px',height:'70px'}}
  return (
    <div style = {props.isDesktop?{overflowY:"scroll",height:"100vh"}:{overflowY:"scroll",height:"30vh"}}>
      <div style={{textAlign:"left"}}>
        <img src={logo} alt="Logo" className="main-icon"/>
      </div>
      <div style={{ marginLeft: "5px", marginTop: "15px" ,marginRight:"5px"}}>
        <Button color="secondary" style={{backgroundColor: "#3C90CE"}} size="sm" onClick={()=>{history.push("/about");}}>About EarthQuake Map</Button>
      </div>
      {props.rows && props.rows.length == 1? <div style={{textAlign:"center",marginTop:"60px"}}><Spinner animation="border" variant="info"/></div> :
      <Table striped hover style={{fontFamily:"Arial, Helvetica, sans-serif",marginTop:"20px"}}>
        <thead>
          <tr style={{ backgroundColor: "#3C90CE" }}>
            <th className="responsive-table-text" style={{ width: "10%" }}>Mag</th>
            <th className="responsive-table-text" style={{ width: "90%" ,textAlign:"right"}}>Place</th>
          </tr>
        </thead>
        <tbody style={{cursor: "pointer"}}>
          {props.rows && props.rows.length > 0 && props.rows.map((row) => (
            <tr key={row.key} onClick={()=>{dispatch(setMapCoordinates({lat: row.lat, long:row.long,zoom:6}));dispatch(changeColor(row.id));}} style={row.rowColor != "default" ? {backgroundColor:row.rowColor}:null}>
              <td className="responsive-table-text" style={{ width: "10%",fontWeight:"550" }}>{row.mag}</td>
              <td className="responsive-table-text" style={{ width: "90%" ,textAlign:"right"}}>
                <div>{row.place}</div><div style={{margin: '0px'}}><span style={{fontSize:'12px'}}>{row.date}</span></div></td>
            </tr>
          ))}
        </tbody>
      </Table>
      }
    </div>
  );
}

/*
import React from "react";
// import "../css/LeftSideBar.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor:'#e6faff',
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  }
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:'#00ccff',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

export default function LeftSideBar(props){
  const classes = useStyles();
    return (
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell style={{paddingRight:"5px",paddingLeft:"5px"}} align="center">Mag</StyledTableCell>
                <StyledTableCell style={{paddingRight:"10px",paddingLeft:"5px"}} align="right">Place</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.rows.map((row) => (
                <StyledTableRow key={row.key}>
                  <StyledTableCell style={{paddingRight:"5px",paddingLeft:"5px"}} align="center" component="th" scope="row" size='small'>
                    {row.magnitude}
                  </StyledTableCell>
                  <StyledTableCell style={{paddingRight:"10px",paddingLeft:"5px"}} align="right">
                    {row.place}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
}

*/
