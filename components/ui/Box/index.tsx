import { PropsWithChildren } from "react"


const Box = ({ children }: PropsWithChildren) => {
    return (
        <div className="py-10">
            {children}
        </div>
    )
}

export default Box