import { center, container, flex } from "../../../styled-system/patterns";

const styles = {
    containerWrapper: flex({
        p: "4",
        h: "calc(100% - 100px)",
    }),

    whiteContainer: container({
        w: "40%",
        bg: "white",
        rounded: "5px",
    }),

    categoryInput: center({
        mt: "30%",
        borderBottom: "solid 2px",
        borderColor: "primary.300",
    }),

    submitButton: center({
        inlineSize: "100%",
        blockSize: "50%",
    })
}

export default styles