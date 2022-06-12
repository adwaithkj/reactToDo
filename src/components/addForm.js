import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function addForm(props) {
  let text = props.text;
  let onTextChange = props.onTextChange;
  let handleAdd = props.handleAdd;
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          // minWidth: "30ch",
          // width: "",
        },
      }}
      // sx={{
      //   "& .MuiTextField-root": { m: 1, width: "10ch" },
      // }}
      noValidate
      autoComplete="on"
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
        }}
      >
        <form className="addForm">
          <TextField
            fullWidth
            id="taskAdd"
            required
            placeholder="Add task"
            value={text}
            onChange={(ev) => {
              onTextChange(ev);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter")
                text !== ""
                  ? handleAdd(e)
                  : alert("Text field must not be empty");
            }}
          />
          <Button
            variant="contained"
            onClick={(ev) =>
              text !== ""
                ? handleAdd(ev)
                : alert("Text field must not be empty")
            }
          >
            Add
          </Button>
        </form>
      </div>
    </Box>
  );
}
