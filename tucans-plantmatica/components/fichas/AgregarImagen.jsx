import { useState } from 'react'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Input } from '@mui/material'
import Typography from '@mui/material/Typography'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import { uploadImagen } from '../../pages/api/uploads-http'

/* Agregar o editar imagen jaja */
export default function AddImg ({
  mostrarBtn = false,
  texto = 'Agregar',
  id_coleccion = null
}) {
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
  }

  const [selectedFile, setSelectedFile] = useState()
  const [isFilePicked, setIsFilePicked] = useState(false)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const onChangeFile = e => {
    setSelectedFile(e.target.files[0])
  }

  const changeImageReq = async () => {
    if (id_coleccion !== null) {
      const res = await uploadImagen(selectedFile, 'fichas', id_coleccion);
      if(res.status === 200){
        handleClose()
      }
    }
  }

  return (
    <>
      {mostrarBtn ? (
        <Button onClick={handleOpen} color='success' variant='outlined'>
          <AttachFileIcon color='success' /> {texto} imagen
        </Button>
      ) : (
        ''
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6'>
            <font size={5} face='Work Sans'>
              Si deseas {texto.toLowerCase()} una imagen haz clic en el
              siguiente botón:
            </font>
          </Typography>
          <Input
            type='file'
            color='success'
            id='modal-modal-description'
            sx={{ mt: 2 }}
            onChange={e => onChangeFile(e)}
          >
            {texto} imagen.
          </Input>
          <Button onClick={() => changeImageReq()} sx={{ m: '10px' }} color='success' type='submit'>
            {texto} imagen.
          </Button>
        </Box>
      </Modal>
    </>
  )
}
