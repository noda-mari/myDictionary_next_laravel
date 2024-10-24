import { cva } from '../../../styled-system/css';

export const button = cva({
    base: {
        w: "100%",
        maxW: "300px",
        borderRadius: "8px",
        fontWeight: "bold",
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        '&:disabled': {
            bg: 'secondary.300',
            color: 'white',
            cursor: 'not-allowed',
            border: 'none',
        },
    },
    variants: {
        variant: {
            solid: {
                bg: "primary",
                color: "white",
                _hover: { bg: "primary.300" },
            },
            solidSoft: {
                bg: "primary.300",
                color: "white",
                _hover: { bg: "secondary" },
            },
            outline: {
                bg: "white",
                color: "primary",
                border: "2px solid primary",
                _hover: { border: "2px solid primary.300" },
            },
            outlineSfot: {
                bg: "white",
                color: "primary.300",
                border: "2px solid primary.300",
                _hover: { border: "2px solid secondary" },
            },
        },
        size: {
            sm: { fontSize: '12px', padding: '6px 12px' },
            md: { fontSize: '16px', padding: '8px 16px' },
            lg: { fontSize: '20px', padding: '10px 20px' },
        },
    },
});

