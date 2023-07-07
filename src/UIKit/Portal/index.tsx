import React, {useEffect, useState} from "react";
import {createPortal} from "react-dom";

interface PortlaProps {
    children: React.ReactNode
}

export const Portal = ({children}: PortlaProps) => {
    const [container] = useState(() => document.createElement('div'));

    useEffect(() => {
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        }
    }, []);

    return createPortal(children, container);
}
