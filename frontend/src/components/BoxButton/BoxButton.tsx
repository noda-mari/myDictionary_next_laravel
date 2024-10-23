
import { IconType } from "react-icons"
import { css } from "../../../styled-system/css"



type Props = {
    children: React.ReactNode
    icon: IconType
}

const BoxButton = ({ children, icon: Icon }: Props) => {
    return (
        <button className={css({
            p: "2",
            fontSize: "24px",
            bg: "white",
            display: "flex",            
            flexDirection: "column",    
            justifyContent: "center",   
            alignItems: "center",       
            width: "200px",             
            height: "200px",
            border: "double",
            borderColor: "#C75B7A",
            borderWidth: "10px",
            rounded: "30px",
            cursor:"pointer"
        })}>
            <Icon size="96px" color="#D9ABAB" />
            <span className={css({ fontSize: '20px' })}>{children}</span>
        </button>
    )
}

export default BoxButton