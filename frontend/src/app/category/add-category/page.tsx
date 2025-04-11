import React from 'react'
// import { css } from '../../../../styled-system/css'
// import { center, container, flex } from '../../../../styled-system/patterns'
import styles from '../style'
import { Input } from '@/components/Input/Input'
import { button } from '@/components/Button/button.css'


const AddCategoryPage = () => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.whiteContainer}>

      </div>
      <div className={styles.whiteContainer}>
        <div className={styles.categoryInput}>
          <Input placeholder='登録したいカテゴリー名を入力してください' />
        </div>
        <div className={styles.submitButton}>
          <button className={button({ variant: "solidSoft", size: "md" })}>
            保存
          </button>
        </div>
      </div>

    </div>
  )
}

export default AddCategoryPage