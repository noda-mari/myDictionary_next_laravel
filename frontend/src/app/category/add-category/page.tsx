'use client'

import React, { useEffect } from 'react'
// import { css } from '../../../../styled-system/css'
// import { center, container, flex } from '../../../../styled-system/patterns'
import styles from '../style'
import { Input } from '@/components/Input/Input'
import { button } from '@/components/Button/button.css'
import { useState } from 'react';

const AddCategoryPage = () => {

  type Category = {
    id: number
    name: string
  }

  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState<Category[]>([])// 一覧用ステート


  // カテゴリ一覧を取得
  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/categories') // Laravel 側のエンドポイントに合わせる
      if (!res.ok) {
        throw new Error('カテゴリ取得に失敗しました')
      }
      const json = await res.json()
      console.log('status:', res.status)
      console.log('json:', json)
      setCategories(json.categories) // 'data: { categories: [...] }' の構造に対応
    } catch (err) {
      console.error(err)
      alert('カテゴリ一覧の取得に失敗しました')
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const handleSubmit = async () => {
    console.log('送信するカテゴリ名:', category)
    console.log('handleSubmit 実行')
    try {
      const res = await fetch('/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: category,
        }),
      })

      if (!res.ok) {
        throw new Error('登録に失敗しました')
      }

      alert('カテゴリーを登録しました！')
      setCategory('')
      fetchCategories()
    } catch (err) {
      console.error(err)
      alert('エラーが発生しました')
    }
  }

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.whiteContainer}>
        <h2>カテゴリー一覧</h2>
        <ul>
          {categories.map((cat) => (
            <li key={cat.id}>{cat.name}</li>
          ))}
        </ul>
      </div>
      <div className={styles.whiteContainer}>
        <div className={styles.categoryInput}>
          <Input
            placeholder='登録したいカテゴリー名を入力してください'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className={styles.submitButton}>
          <button
            className={button({ variant: 'solidSoft', size: 'md' })}
            onClick={handleSubmit}
          >
            保存
          </button>
        </div>
      </div>
    </div>
  )
}
export default AddCategoryPage