import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";


export default function Display() {
  const [data, setData] = useState([]);
  const [date,setDate]=useState("");
  const [from,setFrom]=useState("");
  const [to,setTo]=useState("");
  const [division,setDivision]=useState("");

  const fetchData = async () => {
    const result = await axios.get("http://gov.uk/bank-holidays.json");
    // console.log("data", result);
    setData(result);
  };

  const divisions=()=>{
        setDivision(document.getElementById("demo").value) ;
        console.log("some",division)
  }

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data);

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
        <div style={{display:"flex",flexDirection:"row"}}>
        <h5>Select Your Particular Date here:</h5>
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue="yyyy-MM-dd"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      
        
        <h5>Select Your Custom Dates range here:</h5>
        {/* <div style={{display:"flex",flexDirection:"row",gap:"45%"}}>
          <label ><strong>FROM :</strong></label>
          <label ><strong>TO :</strong></label>
        </div> */}
        <br />
        <div style={{display:"flex",flexDirection:"row",gap:"5%"}}>
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
    </div>
  );
}
