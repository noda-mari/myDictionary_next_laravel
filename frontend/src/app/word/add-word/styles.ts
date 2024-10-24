import { css } from "../../../../styled-system/css";
import { flex } from "../../../../styled-system/patterns";


const styles = {
    container: flex({
        direction: "column",
        margin: "auto",
        gap:"4",
        w: "70%",
    }),

    flexBox: flex({
        margin:"auto",
        w: "80%",
        justify: "space-between",
        align:"end",
    }),

    input: flex({
        direction: "column",
        align: "stretch",
        gap: "4",
        w:"60%",
    }),

    inputRight: flex({
        direction: "column",
        gap:"8",
        h:"100%",
    }),

    bookMarkIcon: css({
        color: "white",
        fontSize:"20px"
    }),

    textarea: css({
        p: "4",
        margin:"auto",
        w: "80%",
        h:"300px",
        outline: "none",
        rounded:"8",
        bg: "white",
        resize:"none",
    }),

    button: css({
        margin: "auto",
        textAlign:"center",
        w: "30%",
    })
}

export default styles