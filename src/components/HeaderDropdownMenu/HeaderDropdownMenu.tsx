import { useState } from 'react'
import styles from './HeaderDropdownMenu.module.scss'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'

export const HeaderDropdownMenu = () => {
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false)

  return (
    <div className={styles.profileIconWrap}>
      <button onClick={() => setDropdownMenuOpen((prev) => !prev)}>
        <PermIdentityIcon />
      </button>

      {dropdownMenuOpen && (
        <div className={styles.dropdown}>
          <button className={styles.dropdownItem}>Панель Админа</button>
        </div>
      )}
    </div>
  )
}
