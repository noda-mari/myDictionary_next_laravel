'use client'

import { TextButton } from '@/components/Button/Button'
import { LabelInput } from '@/components/Input/Input'
import { MdOutlineTipsAndUpdates } from "react-icons/md"
import { IoBookmarkOutline } from "react-icons/io5"
import styles from './styles'
import { button } from '@/components/Button/button.css'
import { flex } from '../../../../styled-system/patterns'
import { modalStyles } from './styles'
import { useEffect, useState, useCallback, useMemo } from 'react'

type Category = {
  id: number
  name: string
}

type SavedData = {
  name: string
  categoryId: number | null
  categoryName: string
  meaning: string
}

const AddWordPage = () => {
  const [word, setWord] = useState('')
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null)
  const [description, setDescription] = useState('')

  // 送信後の確認モーダル
  const [isOpen, setIsOpen] = useState(false)
  const [savedData, setSavedData] = useState<SavedData | null>(null)

  // カテゴリー名の逆引き
  const categoryName = useMemo(() => {
    if (selectedCategoryId == null) return ''
    return categories.find(c => c.id === selectedCategoryId)?.name ?? ''
  }, [selectedCategoryId, categories])

  // カテゴリー一覧を取得
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/categories')
        if (!res.ok) throw new Error('カテゴリー取得に失敗しました')
        const json = await res.json()
        setCategories(json.categories ?? [])
      } catch (e) {
        console.error(e)
        alert('カテゴリーの取得でエラーが発生しました')
      }
    }
    fetchCategories()
  }, [])

  const resetForm = () => {
    setWord('')
    setSelectedCategoryId(null)
    setDescription('')
  }

  const handleSubmit = useCallback(async () => {
    if (!word.trim()) {
      alert('単語を入力してください')
      return
    }
    if (selectedCategoryId == null) {
      alert('カテゴリーを選択してください')
      return
    }

    try {
      const res = await fetch('/api/words', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: word.trim(),
          category_id: selectedCategoryId,
          meaning: description.trim(),
        }),
      })

      if (!res.ok) throw new Error('登録に失敗しました')

      // 登録済みデータをモーダルで確認
      const dataForModal: SavedData = {
        name: word.trim(),
        categoryId: selectedCategoryId,
        categoryName: categoryName || '',
        meaning: description.trim(),
      }
      setSavedData(dataForModal)
      setIsOpen(true)

      // 入力はクリアしておく（モーダルは savedData を表示）
      resetForm()
    } catch (err) {
      console.error(err)
      alert('エラーが発生しました')
    }
  }, [word, selectedCategoryId, description, categoryName])

  // モーダル外クリック/ESCで閉じる
  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setIsOpen(false)
  }
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

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
            className={styles.select}
            value={selectedCategoryId ?? ''}
            onChange={(e) => setSelectedCategoryId(e.target.value ? Number(e.target.value) : null)}
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
        placeholder="意味・メモなどを入力（任意）"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className={styles.button}>
        <button
          className={button({ variant: "solidSoft", size: "md" })}
          onClick={handleSubmit}
        >
          登録
        </button>
      </div>

      {/* 確認モーダル */}
      {isOpen && savedData && (
        <div className={modalStyles.overlay} onClick={onOverlayClick}>
          <div
            className={modalStyles.card}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <h2 id="modal-title" className={modalStyles.title}>登録が完了しました</h2>
            <div className={modalStyles.content}>
              <dl className={modalStyles.dl}>
                <div className={modalStyles.row}>
                  <dt>単語</dt>
                  <dd>{savedData.name}</dd>
                </div>
                <div className={modalStyles.row}>
                  <dt>カテゴリー</dt>
                  <dd>{savedData.categoryName || `ID: ${savedData.categoryId}`}</dd>
                </div>
                <div className={modalStyles.row}>
                  <dt>説明</dt>
                  <dd className={modalStyles.pre}>{savedData.meaning || '（未入力）'}</dd>
                </div>
              </dl>
            </div>

            <div className={modalStyles.actions}>
              <button
                className={button({ variant: "solidSoft", size: "sm" })}
                onClick={() => setIsOpen(false)}
              >
                閉じる
              </button>
              <button
                className={button({ variant: "outline", size: "sm" })}
                onClick={() => setIsOpen(false)}
              >
                続けて登録
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddWordPage
