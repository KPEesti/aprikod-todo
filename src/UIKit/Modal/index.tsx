import React from "react";
import {Portal} from "../Portal";
import styles from './modal.module.scss'

interface ModalProps {
    isOpened: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal = ({isOpened, onClose, children}: ModalProps) => {
    if (!isOpened) {
        return null;
    }

    return (
        <Portal>
            <div className={styles.container}>
                <div className={styles.overlay} onClick={onClose}></div>
                <div className={styles.content}>{children}</div>
            </div>
        </Portal>
    );
}
