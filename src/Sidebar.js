import React from "react";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>
    </div>
  );
}

export default Sidebar;
