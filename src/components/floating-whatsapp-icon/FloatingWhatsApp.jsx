import React, { useState } from "react";
import { IconButton, Modal, Box, Typography, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseIcon from "@mui/icons-material/Close";
import "./floating-whatsapp.scss";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "8766971902";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <>
      <IconButton
        className="whatsapp-icon"
        onClick={() => setIsOpen(true)}
        aria-label="WhatsApp"
      >
        <WhatsAppIcon fontSize="large" />
      </IconButton>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box className="whatsapp-modal">
          <IconButton className="close-btn" onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6">Connect with us on WhatsApp!</Typography>
          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={handleWhatsAppClick}
          >
            Chat Now
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default FloatingWhatsApp;
