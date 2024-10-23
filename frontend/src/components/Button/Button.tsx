import { css } from '../../../styled-system/css';

type Props = {
    children: React.ReactNode
    variant?: string
    disabled?: boolean
}

const Button = ({ children, variant = "primary", disabled = false, ...props }: Props) => {
    return (
      <button
        className={css({
          py: "2",
          px: "4",
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
    );
  };
  

export default Button