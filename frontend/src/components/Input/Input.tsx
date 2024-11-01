"use client"

import React, { useState } from 'react'
import { css } from '../../../styled-system/css'
import { flex } from '../../../styled-system/patterns'

type LabelProps = {
  label?: string,
  placeholder?: string
}


export const LabelInput = ({ label, placeholder }: LabelProps) => {

  return (
    <div className={flex({ gap: '2px', textAlign: "left", align: "end" })}>
      <label className={css({
        fontSize: "20px",
        color: "primary",
        fontWeight: "bold",
        width: "100px",
        textAlign: "left"
      })}>
        {label ? label : null}
      </label>
      <Input/>
    </div>
  )
}



type InputProps = {
  placeholder?: string
}


export const Input = ({ placeholder }: InputProps) => {
  const [inputValue, setInputValue] = useState('')
  const [isError, setIsError] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    // // 簡単なバリデーション：空のまま送信しない
    // setIsError(e.target.value.trim() === '')
  }

  return (
    <>
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
          maxW: "300px",
          bg: 'white',
          // outline: isError ? '2px solid red' : 'none', // エラー時にアウトラインを赤に
          rounded: '8px',
          outline:"none",
        })}
      />
      {/* {isError && (
        <span className={css({ color: 'red', fontSize: '12px' })}>
          キーワードを入力してください。
        </span>
      )} */}
    </>
  )

}