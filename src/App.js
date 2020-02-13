import React from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";

export default class App extends React.Component {
  renderUI() {
    return (
      <form>
        <div id="heading">
          <h1>Collects Data</h1>
          <h2>
            React web application that collects data into an array where each
            array element is an object representing the collected data
          </h2>
        </div>
        <TextField id="standard1" label="input" />
        &nbsp;
        <TextField id="standard2" label="more input" />
        &nbsp;
        <br /> <br />
        <TextField id="outlined" label="Textarea" variant="outlined" />
        <br />
        <br />
        <div className="dropDown">
          <InputLabel id="dropDown">Quantity</InputLabel>
          <Select labelId="dropDown" id="demo-simple-select">
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
          </Select>
        </div>
        <br />
        <br />
        <div className="checkBox">
          <Checkbox id="box1" color="primary" />
          <label for="box1">Subscribe</label>
          <Checkbox id="box2" color="primary" />
          <label for="box2">I Agree...</label>
        </div>
        <br />
        <br />
        <div className="radioButtons">
          <Radio name="radio1" color="primary" />
          <label for="radio1">Yes</label> <br />
          <Radio name="radio2" color="primary" />
          <label for="radio2">No</label>
        </div>
        &nbsp;
        <div className="buttons">
          <Button type="submit" variant="outlined" color="primary">
            Submit
          </Button>
          <Button type="reset" variant="outlined" color="primary">
            Reset
          </Button>
        </div>
        &nbsp;
      </form>
    );
  }

  render() {
    return <div className="App">{this.renderUI()}</div>;
  }
}
