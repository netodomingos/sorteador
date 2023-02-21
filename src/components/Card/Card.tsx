import React from "react"
import { CardComponent } from './style'

const Card: React.FC = ({ children }) => {
    return (
        <CardComponent>
            {children}
        </CardComponent>
    )
}

export default Card