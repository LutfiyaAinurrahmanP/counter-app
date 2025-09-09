import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AddIcon from "@mui/icons-material/Add";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

export default function NavigationBottom({ onChangeLink }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === 0) {
      onChangeLink("static");
    } else if (newValue === 1) {
      onChangeLink("dynamic");
    }
  };
  return (
    <>
      <Box
        sx={{
          width: 300,
          position: "fixed",
          bottom: 0,
          py: 2,
          boxShadow: 3,
          left: "50%",
          transform: "translateX(-50%)",
          bgcolor: "background.paper",
        }}
      >
        <BottomNavigation showLabels value={value} onChange={handleChange}>
          <BottomNavigationAction label="Static" icon={<AddIcon />} />
          <BottomNavigationAction label="Dynamic" icon={<AutoFixHighIcon />} />
        </BottomNavigation>
      </Box>
    </>
  );
}
