import EditIcon from '@mui/icons-material/Edit'
import stylesE from '../../styles/EditarFicha.module.css'
import { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import styles from '../../styles/Fichas.module.css'

export default function EditVisualBtn ({ editarVista, fichaParaEdicion, changeValue, visualizarNombreDato }) {
  const [vista, setVista] = useState(editarVista)
  const [valor, setValor] = useState(fichaParaEdicion)

  return (
    <>
      {vista === false ? (
        <>
          <button className={stylesE.editBtn} onClick={() => setVista(!vista)}>
            <EditIcon
              className={stylesE.editIcon}
              fontSize='medium'
              color='success'
            />
            Editar {visualizarNombreDato}
          </button>
          <p className={styles.textU}>{visualizarNombreDato}:</p>
          <p className={styles.titlefichaU}>{valor}</p>
        </>
      ) : (
        <>
          <button className={stylesE.editBtn} onClick={() => setVista(!vista)}>
            <VisibilityIcon
              className={stylesE.editIcon}
              fontSize='medium'
              color='success'
            />
            Visualizar {visualizarNombreDato}
          </button>
          <input
            value={fichaParaEdicion}
            onChange={changeValue}
            className={stylesE.input}
          />
        </>
      )}
    </>
  )
}
