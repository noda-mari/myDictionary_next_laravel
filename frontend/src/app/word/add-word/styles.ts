import { css } from "../../../../styled-system/css";
import { flex } from "../../../../styled-system/patterns";

const styles = {
  container: flex({
    direction: "column",
    margin: "auto",
    gap: "4",
    w: "70%",
  }),

  flexBox: flex({
    margin: "auto",
    w: "80%",
    justify: "space-between",
    align: "end",
  }),

  input: flex({
    direction: "column",
    align: "stretch",
    gap: "4",
    w: "60%",
  }),

  inputRight: flex({
    direction: "column",
    gap: "8",
    h: "100%",
  }),

  bookMarkIcon: css({
    color: "white",
    fontSize: "20px",
  }),

  textarea: css({
    p: "4",
    margin: "auto",
    w: "80%",
    h: "300px",
    outline: "none",
    rounded: "8",
    bg: "white",
    resize: "none",
  }),

  button: css({
    margin: "auto",
    textAlign: "center",
    w: "30%",
  }),

  // 追加: select の素朴なスタイル
  select: css({
    appearance: "none",
    bg: "white",
    rounded: "8",
    p: "3",
    border: "1px solid",
    borderColor: "gray.200",
    _focusVisible: { outline: "2px solid token(colors.blue.400)" },
  }),
}

export const modalStyles = {
  overlay: css({
    position: "fixed",
    inset: 0,
    bg: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
    p: "4",
  }),
  card: css({
    bg: "white",
    rounded: "12px",
    w: "full",
    maxW: "640px",
    p: "6",
    boxShadow: "lg",
  }),
  title: css({
    fontSize: "xl",
    fontWeight: "bold",
    mb: "4",
  }),
  content: css({
    mb: "6",
  }),
  dl: css({
    display: "grid",
    gridTemplateColumns: "120px 1fr",
    rowGap: "3",
    columnGap: "4",
  }),
  row: css({
    display: "contents",
    "& dt": {
      color: "gray.600",
      fontWeight: "semibold",
    },
    "& dd": {
      color: "gray.900",
      wordBreak: "break-word",
    },
  }),
  pre: css({
    whiteSpace: "pre-wrap",
  }),
  actions: css({
    display: "flex",
    justifyContent: "flex-end",
    gap: "3",
  }),
}


export default styles
