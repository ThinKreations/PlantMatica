import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} variant="contained" color="success">
                Terminos y Condiciones
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {`Aviso de privacidad y términos de uso.`}
                        </Typography>
                        <p>
                            {`Tucan’s Software es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente.
                            De manera adicional, utilizaremos su información personal para las siguientes finalidades secundarias que no son necesarias para el servicio solicitado, pero que nos permiten y facilitan brindarle una mejor atención:`}
                        </p>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Edad" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Ubicacion" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Sexo" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Mercadotecnia" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Prospeccion comercial" />
                        </FormGroup>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}