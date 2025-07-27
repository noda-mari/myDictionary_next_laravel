"use client"

// import React, { useState } from 'react'
import { css } from '../../../styled-system/css'
import { flex } from '../../../styled-system/patterns'

type LabelProps = {
  label?: string,
  placeholder?: string,
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const LabelInput = ({ label, placeholder, value, onChange }: LabelProps) => {
  return (
    <div className={flex({ gap: '2px', textAlign: "left", align: "end" })}>
      <label className={css({
        fontSize: "20px",
        color: "primary",
        fontWeight: "bold",
        width: "100px",
        textAlign: "left"
      })}>
        {label ?? null}
      </label>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}




type InputProps = {
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <input
      id="search-input"
      type="text"
      placeholder={placeholder ?? "キーワードを入力してください"}
      value={value}
      onChange={onChange}
      className={css({
        py: '2',
        px: '4',
        w: '100%',
        maxW: '300px',
        bg: 'white',
        rounded: '8px',
        outline: 'none',
      })}
    />
  )
}
