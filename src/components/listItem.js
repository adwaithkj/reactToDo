import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { useSelector, useDispatch } from "react-redux";
import {
  handleCheck,
  handleEdit,
  handleDelete,
} from "../features/counter/counterSlice";

export default function ListItem(props) {
  const tasks = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const styles = {
    padding: "10px",
  };
  let task = props.task;
  let text = props.text;

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
                onChange={(ev) => dispatch(handleCheck())}
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
          <Button
            size="small"
            onClick={(ev) => dispatch(handleEdit([task, text]))}
          >
            Edit
          </Button>

          <Button
            variant="outlined"
            size="small"
            onClick={(ev) => dispatch(handleDelete(task))}
          >
            Discard
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
