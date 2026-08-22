export default function InnerContainer({children}) {
    return (
        <div style={{ flex: 1, minWidth: 0 }}>
            {children}
        </div>
    )
}
