import {useCallback, useState} from "react";

export const useCollapse = (initialState: boolean) => {
    const [collapsed, setCollapsed] = useState<boolean>(initialState);

    const handleCollapse = useCallback(() => {
        setCollapsed(prevState => !prevState);
    }, [setCollapsed]);

    return {collapsed, handleCollapse};
}
