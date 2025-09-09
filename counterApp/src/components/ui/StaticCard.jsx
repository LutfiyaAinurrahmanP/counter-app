import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function StaticCard() {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setValue((prev) => prev - 1);
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <Fragment>
          <CardContent>
            <Typography variant="h3" gutterBottom>
              Static Counter
            </Typography>
            <Typography variant="h4" gutterBottom>
              Value : {value}
            </Typography>
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
