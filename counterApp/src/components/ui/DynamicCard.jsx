import { Fragment, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DynamicInputValue from "./DynamicInputValue";

export default function DynamicCard() {
  const [value, setValue] = useState(0);
  const numberInputRef = useRef();

  const handleIncrement = () => {
    const num = parseInt(numberInputRef.current.value || 0);
    setValue((prev) => prev + num);
  };

  const handleDecrement = () => {
    const num = parseInt(numberInputRef.current.value || 0);
    setValue((prev) => prev - num);
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <Fragment>
          <CardContent>
            <Typography variant="h3" gutterBottom>
              Dynamic Counter
            </Typography>

            <Typography variant="h4" gutterBottom>
              Value : {value}
            </Typography>
            <DynamicInputValue ref={numberInputRef} />
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" onClick={handleIncrement}>
              Increment
            </Button>
            <Button variant="contained" onClick={handleDecrement}>
              Decrement
            </Button>
          </CardActions>
        </Fragment>
      </Card>
    </Box>
  );
}
