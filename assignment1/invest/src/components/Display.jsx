import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

export default function Display() {
  const [data, setData] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [division, setDivision] = useState("");
  const [custom, setCustom] = useState([]);

  const fetchData = async () => {
    const result = await axios.get("http://gov.uk/bank-holidays.json");
    console.log("data", result.data["northern-ireland"].events);
    return result.data;
  };
  useEffect(() => {
    fetchData();
  }, []);

  // if (division === "england-and-wales") {
  //   fetchData("england-and-wales");
  //   //  setCustom(res.data.england-and-wales.events);
  // } else if (division === "northern-ireland") {
  // } else if (division === "scotland") {
  // }

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
          onChange={(e) => setDivision(e.target.value)}
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
        <div>
          <h3>Select Your Custom Dates range here:</h3>
          <br />
          <div style={{ display: "flex", flexDirection: "row", gap: "5%" }}>
            <TextField
              id="date"
              label="FROM"
              type="date"
              onChange={(e) => setFrom(e.target.value)}
              // defaultValue="yyyy-MM-dd"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="date"
              label="TO"
              type="date"
              onChange={(e) => setTo(e.target.value)}
              // defaultValue="yyyy-MM-dd"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
        <br />
      </FormControl>
      <div style={{ margin: "auto" }}>
        <div style={{ display: "flex", flexDirection: "row", margin: "auto" }}>
          <l style={{ width: "15%" }}>
            {" "}
            <strong>Title</strong>{" "}
          </l>
          <l style={{ width: "15%" }}>
            {" "}
            <strong>Date</strong>
          </l>
          <l style={{ width: "15%" }}>
            <strong>Notes</strong>
          </l>
          <l style={{ width: "15%" }}>
            <strong>Bounting</strong>
          </l>
        </div>
        <br />
        {data.map((res) => (
          <div
            style={{ display: "flex", flexDirection: "row", margin: "auto" }}
          >
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
