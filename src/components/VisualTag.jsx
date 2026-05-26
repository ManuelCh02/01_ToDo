import styles from "../styles/VisualTag.module.css"

export function VisualTag({setVisualTag}) {
    if (!setVisualTag || !setVisualTag[1]) return null
    
    return <span className={styles.visualTag}>{setVisualTag}</span>
}