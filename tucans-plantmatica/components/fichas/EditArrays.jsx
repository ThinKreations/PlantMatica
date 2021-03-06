import EditIcon from '@mui/icons-material/Edit'
import uid from 'tiny-uid'
import stylesE from '../../styles/EditarFicha.module.css'
import { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import styles from '../../styles/Fichas.module.css'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Chip from '@mui/material/Chip'

export default function EditArrays ({
  fichaParaEdicion,
  visualizarNombreDato,
  editarVista,
  changeArray
}) {
  const [visible, setVisible] = useState(editarVista)

  return (
    <>
      <button className={stylesE.editBtn} onClick={() => setVisible(!visible)}>
        {visible === true ? (
          <VisibilityIcon
            className={stylesE.editIcon}
            fontSize='medium'
            color='success'
          />
        ) : (
          <EditIcon
            className={stylesE.editIcon}
            fontSize='medium'
            color='success'
          />
        )}
        {visible === true ? 'Visualizar' : 'Editar'} {visualizarNombreDato}
      </button>
      <br />
      <p className={styles.titlefichaU}>{visualizarNombreDato}</p>
      <br />
      {visible === true ? (
        <>
          <Autocomplete
            multiple
            id='carac-esp'
            onChange={changeArray}
            options={fichaParaEdicion.map(option => option)}
            defaultValue={fichaParaEdicion.map(option => option)}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip key={uid()}
                  variant='outlined'
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={params => (
              <TextField
                {...params}
                label={`${visualizarNombreDato}`}
                variant='filled'
                color='success'
                placeholder={`Presiona enter para agregar`}
              />
            )}
          />
        </>
      ) : (
        <>
          {fichaParaEdicion.length > 0 ? (
            <ul>
              {fichaParaEdicion.map(c => {
                return (
                  <li key={uid()} className={styles.list}>
                    {c}
                  </li>
                )
              })}
            </ul>
          ) : (
            <p className={styles.titlefichaU}>
              No se registraron {visualizarNombreDato}
            </p>
          )}
        </>
      )}
    </>
  )
}
