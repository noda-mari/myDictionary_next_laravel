import { LiButton, TextButton } from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import { MdOutlineTipsAndUpdates } from "react-icons/md"
import { IoBookmarkOutline } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa6";
import styles from './styles'
import { button } from '@/components/Button/button.css';
import { flex } from '../../../../styled-system/patterns';



const AddWordPaga = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flexBox}>
        <div className={styles.input}>
          <Input placeholder='登録したい単語を入力してください' label='単語' />
          <Input label='カテゴリー' />
        </div>
        <div className={styles.inputRight}>
          <button className={button({ variant: "solidSoft", size: "md" })}>
            <div className={flex({ align:"end", gap:"4"})}>
              <IoBookmarkOutline className={styles.bookMarkIcon} />
              しおり
            </div>
          </button>
          <TextButton icon={MdOutlineTipsAndUpdates}>
            しおり機能とは？
          </TextButton>
        </div>
      </div>

      <textarea className={styles.textarea} />

      <div className={styles.button}>
        <button className={button({ variant: "solidSoft", size: "md" })}>
          登録
        </button>
      </div>
    </div>
  )
}

export default AddWordPaga