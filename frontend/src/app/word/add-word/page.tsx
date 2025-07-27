'use client'

import { TextButton } from '@/components/Button/Button'
import { LabelInput } from '@/components/Input/Input'
import { MdOutlineTipsAndUpdates } from "react-icons/md"
import { IoBookmarkOutline } from "react-icons/io5";
import styles from './styles'
import { button } from '@/components/Button/button.css';
import { flex } from '../../../../styled-system/patterns';
import { useEffect, useState } from 'react';



const AddWordPage = () => {

  type Category = {
    id: number
    name: string
  }

  const [word, setWord] = useState('')
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null)
  const [description, setDescription] = useState('')

  // カテゴリー一覧を取得
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('/api/categories')
      const json = await res.json()
      setCategories(json.categories)
    }
    fetchCategories()
  }, [])

  const handleSubmit = async () => {
    console.log('handleSubmit 実行')
    try {
      const res = await fetch('/api/words', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: word,
          category_id: selectedCategoryId,
          meaning: description,
          // user_id: 1,
        }),

      })

      if (!res.ok) {
        throw new Error('登録に失敗しました')
      }

      alert('単語を登録しました！')
      setWord('')
      setSelectedCategoryId(null)
      setDescription('')
    } catch (err) {
      console.error(err)
      alert('エラーが発生しました')
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.flexBox}>
        <div className={styles.input}>
          <LabelInput
            placeholder='登録したい単語を入力してください'
            label='単語'
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <select
            value={selectedCategoryId ?? ''}
            onChange={(e) => setSelectedCategoryId(Number(e.target.value))}
          >
            <option value="" disabled>カテゴリーを選択</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.inputRight}>
          <button className={button({ variant: "solidSoft", size: "md" })}>
            <div className={flex({ align: "end", gap: "4" })}>
              <IoBookmarkOutline className={styles.bookMarkIcon} />
              しおり
            </div>
          </button>
          <TextButton icon={MdOutlineTipsAndUpdates}>
            しおり機能とは？
          </TextButton>
        </div>
      </div>

      <textarea
        className={styles.textarea}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className={styles.button}>
        <button className={button({ variant: "solidSoft", size: "md" })}
          onClick={handleSubmit}
        >
          登録
        </button>
      </div>
    </div>
  )

}

export default AddWordPage