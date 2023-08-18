import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import "./popup.scss";

const PopupComponent = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleYes = () => {
    localStorage.removeItem("user");
    setOpen(false);

    // Perform a hard refresh of the page
    window.location.reload(true);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        {/* Content of the popup */}
        <div style={{ padding: "16px" }}>
          <h2>Logout</h2>
          <p>Are you sure you want to Logout?</p>
          <Button variant="contained" onClick={handleYes}>
            YES
          </Button>
          <Button variant="contained" onClick={handleClose}>
            NO
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default PopupComponent;
