
import { IconType } from 'react-icons'
import { css } from '../../../styled-system/css'

type Props = {
  children: React.ReactNode
  size?:string
  variant?: string
  disabled?: boolean
  icon?: IconType
}

export const LiButton = ({ children, variant = "solid", size = "mb", disabled = false, ...props }: Props) => {
  return (
    <button
      className={css({
        py: "2",
        px: "4",
        w: "100%",
        maxW: "300px",
        borderRadius: "8px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: disabled ? "not-allowed" : "pointer", // disabledならカーソルを変更
        transition: "background-color 0.3s",
        backgroundColor: disabled
          ? "gray.300"
          : variant === "primary"
            ? "primary"
            : "secondary",
        color: "white",
        border: "none",
        "&:hover": {
          backgroundColor: disabled
            ? "gray.300"
            : variant === "primary"
              ? "primary.300"
              : "secondary.300",
        },
        opacity: disabled ? 0.6 : 1, // disabled時の透明度
      })}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export const TextButton = ({ children, icon: Icon, }: Props) => {

  return (
    <button className={css({
      display: 'flex',       
      alignItems: 'center',  
      gap: '4px',
      lineHeight:1,
      border: "none",
      cursor: 'pointer',
    })}>
      {children}
      {Icon && <Icon className={css({ marginLeft: 'auto', fontSize:"20px" })}/>}
    </button>
  )
}

