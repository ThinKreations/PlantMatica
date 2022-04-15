import EditIcon from '@mui/icons-material/Edit'
import uid from 'tiny-uid'
import stylesE from '../../styles/EditarFicha.module.css'
import { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import styles from '../../styles/Fichas.module.css'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Chip from '@mui/material/Chip'

export default function OrigenDisEdit ({
  fichaParaEdicionChafa,
  changeValueDetalles,
  changeValueNombre,
  edicionNombre,
  edicionDetalles
}) {
  const [visible, setVisible] = useState(false)
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
        {visible === true ? 'Visualizar' : 'Editar'} Origen y distribución
      </button>
      {visible === false ? (
        <>
          {fichaParaEdicionChafa.length > 0 ? (
            <>
              <p className={styles.textU2}>{`Origen y distribución: `}</p>

              {fichaParaEdicionChafa.map(o => {
                return (
                  <div key={o.nombre}>
                    <p className={styles.titlefichaU2}>Nombre:</p>
                    <p className={styles.textU2}>{o.nombre}</p>
                    <br />
                    {o.detalles ? (
                      <>
                        <p className={styles.titlefichaU2}>Detalles: </p>
                        <p className={styles.textU2}>{o.detalles}</p>
                      </>
                    ) : (
                      ''
                    )}

                    <br />
                  </div>
                )
              })}
            </>
          ) : (
            <p
              className={styles.textU2}
            >{`No se registraron lugares de origen o distribución`}</p>
          )}
        </>
      ) : (
        <>
          <p className={styles.titlefichaU2}>Nombre:</p>
          <input
            value={edicionNombre}
            onChange={changeValueNombre}
            className={stylesE.input}
          />
          <p className={styles.titlefichaU2}>Detalles: </p>
          <input
            value={edicionDetalles}
            onChange={changeValueDetalles}
            className={stylesE.input}
          />
        </>
      )}
    </>
  )
}
