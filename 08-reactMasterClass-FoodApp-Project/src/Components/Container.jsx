export default function Container({children}) {
    return(
        <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
            {children}
        </div>
    )
}
