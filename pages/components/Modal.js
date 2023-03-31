import styles from "../../styles/Modal.module.css";
import Image from "next/image";
import {useEffect} from "react";

export default function Modal({imageUrl, onClose}) {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    return (
        <div className={styles.overlay}>
            <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    X
                </button>
                <Image className={styles.image}
                       src={imageUrl}
                       alt="Full size"
                       layout="responsive"
                       width={1920}
                       height={1080}/>
            </div>
        </div>
    );
}
