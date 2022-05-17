import swal from 'sweetalert';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export const atraparErrores = async (res, resJSON, error) => {
    if (res.status !== 200) {
        try {
            //Array errors de backend
            let arrayErrors = resJSON.errors
            arrayErrors.forEach(e => {
                swal({
                    title: `${error}`,
                    text: e.msg,
                    icon: 'error',
                    button: 'Ok'
                })
            })
        } catch (error) {
            //Algun mensaje de error no previsto proveniente d3el backend
            swal({
                title: 'Algo salio mal...',
                text: resJSON.msg,
                icon: 'error',
                button: 'Ok'
            })
        }
    } else {
        swal({
            title: 'Finalizado',
            text: resJSON.msg,
            icon: 'success',
            button: 'Ok',
            timer: '3000'
        })
    }
}