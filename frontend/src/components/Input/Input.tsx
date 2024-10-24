"use client"

import React, { useState } from 'react'
import { css } from '../../../styled-system/css'
import { flex } from '../../../styled-system/patterns'

type Props = {
  label?: string,
  placeholder?: string
}


const Input = ({ label, placeholder}: Props) => {
  const [inputValue, setInputValue] = useState('')
  const [isError, setIsError] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    // 簡単なバリデーション：空のまま送信しない
    setIsError(e.target.value.trim() === '')
  }

  return (
    <div className={flex({ gap: '2px', textAlign:"left", align:"end" })}>
      <label className={css({
        fontSize: "20px",
        color: "primary",
        fontWeight: "bold",
        width: "100px",
        textAlign:"left"
      })}>
        {label ? label : null}
      </label>
      <input
        id="search-input"
        type="text"
        placeholder={placeholder ? placeholder : "キーワードを入力してください"}
        value={inputValue}
        onChange={handleInputChange}
        className={css({
          py: '2',
          px: '4',
          w: '100%',
          maxW:"400px",
          bg: 'white',
          outline: isError ? '2px solid red' : 'none', // エラー時にアウトラインを赤に
          rounded: '8px',
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
