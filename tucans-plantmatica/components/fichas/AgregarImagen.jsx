import React from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Input } from "@mui/material";
import Typography from "@mui/material/Typography";


export default function addImg(){

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'rgb(50,50,50)',
        border: 'none',
        boxShadow: 24,
        p: 4,
        color: 'white'
    };

    const btnImg = {
        
    };

    const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return(
        
        <>
            <Button onClick={handleOpen}>Agregar Imagen</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" >
                <font size={5} face="Work Sans" >Si deseas agregar una imagen haz clic en el siguiente botón:</font>
                </Typography>
                <Input type="file" id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Input>
            </Box>
            </Modal>
        </>
        
    )

}