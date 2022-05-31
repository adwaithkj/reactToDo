import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function ListItem(props) {
  // console.log(length);
  const [finished, setFinish] = useState(false);

  function handleCheckBox(ev) {
    console.log(ev);
    setFinish(~finished);
  }

  let handleDelete = props.handleDelete;
  const styles = {
    padding: "10px",
  };
  let task = props.task;

  return (
    <div style={styles}>
      <Card sx={{ minWidth: 400 }}>
        <CardContent>
          <Typography variant="h4" sx={{ textAlign: "left" }}>
            Task: {task}
          </Typography>
          <Typography
            sx={{ mb: 1.5, textAlign: "left" }}
            color="text.secondary"
          >
            status: {finished ? "completed" : "not completed"}
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Label"
              onChange={(ev) => handleCheckBox(ev)}
            />
          </FormGroup>
        </CardContent>

        <CardActions>
          <Button size="small" onClick={() => setFinish(true)}>
            Edit
          </Button>

          <Button
            variant="outlined"
            size="small"
            onClick={(ev) => handleDelete(task)}
          >
            Discard
          </Button>
          {/* <Button
          variant="outlined"
          size="small"
          onClick={() => console.log("click on something else:")}
        >
          something else
        </Button> */}
        </CardActions>
      </Card>
    </div>
  );
}
