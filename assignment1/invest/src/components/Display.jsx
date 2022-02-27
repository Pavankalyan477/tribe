import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

export default function Display() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await axios.get("http://gov.uk/bank-holidays.json");
    console.log("data", result);
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 320 }}>
        <InputLabel id="demo-controlled-open-select-label">
          Divisions
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          label="Divisions"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="england-and-wales">england-and-wales</MenuItem>
          <MenuItem value="northern-ireland">northern-ireland</MenuItem>
          <MenuItem value="scotland">scotland</MenuItem>
        </Select>
        <TextField
          id="date"
          label="Birthday"
          type="date"
          defaultValue="yyyy-mm-dd"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>
    </div>
  );
}
