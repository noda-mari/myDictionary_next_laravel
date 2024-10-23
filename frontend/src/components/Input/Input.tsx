"use client"

import React, { useState } from 'react'
import { css } from '../../../styled-system/css'
import { flex } from '../../../styled-system/patterns'


const Input = () => {
  const [inputValue, setInputValue] = useState('')
  const [isError, setIsError] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    // 簡単なバリデーション：空のまま送信しない
    setIsError(e.target.value.trim() === '')
  }

  return (
    <div className={flex({ direction: 'column', gap: '4px' })}>
      <input
        id="search-input"
        type="text"
        placeholder="キーワードをいれてください"
        value={inputValue}
        onChange={handleInputChange}
        className={css({
          py: '2',
          px: '4',
          w: '100%',
          maxW: '400px',
          bg: 'white',
          outline: isError ? '2px solid red' : '1px solid gray', // エラー時にアウトラインを赤に
          rounded: '50px',
          transition: 'outline-color 0.3s ease',
          '&:focus': {
            outline: '2px solid primary', // フォーカス時に色を変更
          },
        })}
      />
      {isError && (
        <span className={css({ color: 'red', fontSize: '12px' })}>
          キーワードを入力してください。
        </span>
      )}
    </div>
  )
}

export default Input
