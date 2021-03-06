import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Switch from "@mui/material/Switch";

export default function ListItem(props) {
  // console.log(length);
  // const [finished, setFinish] = useState(false);

  // function handleCheckBox(ev) {
  //   console.log(ev);
  //   setFinish(~finished);
  // }
  let handleCheckBox = props.handleCheck;

  let handleEdit = props.handleEdit;

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
            status: {props.check ? "completed" : "not completed"}
          </Typography>
          <div style={{ display: "flex", width: "20px" }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                onChange={(ev) => handleCheckBox(task)}
              />
            </FormGroup>
            <div
              style={{
                width: "300px",
                whiteSpace: "nowrap",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                verticalAlign: "middle",
                marginTop: "10px",
              }}
            >
              Mark as completed
            </div>
          </div>
        </CardContent>

        <CardActions>
          <Button size="small" onClick={(ev) => handleEdit(task)}>
            Edit
          </Button>

          <Button
            variant="outlined"
            size="small"
            onClick={(ev) => handleDelete(task)}
          >
            Discard
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
