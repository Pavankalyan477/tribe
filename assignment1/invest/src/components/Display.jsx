import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { DataGrid } from "@mui/x-data-grid";
import { v4 as uuidv4 } from "uuid";
import { margin } from "@mui/system";

export default function Display() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [division, setDivision] = useState("");
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    const result = await axios.get("http://gov.uk/bank-holidays.json");
    console.log("data", result.data.scotland.events);
    setData(result.data.scotland.events);
  };

  const divisions = () => {
    setDivision(document.getElementById("demo").value);
    console.log("some", division);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  const handleGetRowId = () => {
    // return uuidv4();
    setCount(count + 1);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Title",
      width: 150,
      editable: true,
    },
    {
      field: "data",
      headerName: "DATE",
      width: 150,
      editable: true,
    },
    {
      field: "notes",
      headerName: "NOTES",
      width: 110,
      editable: true,
    },
    {
      field: "bunting",
      headerName: "BUNTING",
      type: Boolean,
      width: 160,
    },
  ];

  return (
    <div>
      <h3>Select Your Division here:</h3>
      <FormControl sx={{ m: 1, minWidth: 320 }}>
        <InputLabel id="demo-controlled-open-select-label">
          Divisions
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo"
          label="Divisions"
          onChange={divisions}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="england-and-wales">england-and-wales</MenuItem>
          <MenuItem value="northern-ireland">northern-ireland</MenuItem>
          <MenuItem value="scotland">scotland</MenuItem>
        </Select>
      </FormControl>
      <br /> <br />
      <FormControl sx={{ m: 2, Width: 220 }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {/* <h5>Select Your Particular Date here:</h5>
          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue="yyyy-MM-dd"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          /> */}

          <h3>Select Your Custom Dates range here:</h3>
          <br />
          <div style={{ display: "flex", flexDirection: "row", gap: "5%" }}>
            <TextField
              id="date"
              label="FROM"
              type="date"
              defaultValue="yyyy-MM-dd"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="date"
              label="TO"
              type="date"
              defaultValue="yyyy-MM-dd"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
      </FormControl>
      {/* <DataGrid
      getRowId={handleGetRowId}
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[6]}
        checkboxSelection
        disableSelectionOnClick
      /> */}
      <div style={{margin:"auto"}}>
        <div style={{ display: "flex", flexDirection: "row",margin:"auto" }}>
          <l style={{ width: "15%" }}> <strong>Title</strong> </l>
          <l style={{ width: "15%" }}> <strong>Date</strong></l>
          <l style={{ width: "15%" }}><strong>Notes</strong></l>
          <l style={{ width: "15%" }}><strong>Bounting</strong></l>
        </div>
        <br />
        {data.map((res) => (
          <div style={{ display: "flex", flexDirection: "row", margin:"auto" }}>
            <l style={{ width: "15%" }}>{res.title}</l>
            <l style={{ width: "15%" }}>{res.date}</l>
            <l style={{ width: "15%" }}>{res.notes}</l>
            <l style={{ width: "15%" }}>{res.bunting.toString()}</l>
          </div>
        ))}
      </div>
    </div>
  );
}
