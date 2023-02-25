import {
    useState,
    useContext,
    useCallback,
    useMemo,
    createContext,
} from "react";

import type { WithChildrenProp } from "~/models/types";

interface TabSystemContextValue {
    openedTabs: string[];
    activeTab: string;
    onFileSelect: (id: string) => void;
    onTabClose: (id: string) => void;
    setOpenedTabs: React.Dispatch<React.SetStateAction<string[]>>;
}

const defaultState: TabSystemContextValue = {
    openedTabs: ["welcomeFile"],
    activeTab: "welcomeFile",
    onFileSelect: () => {},
    onTabClose: () => {},
    setOpenedTabs: () => {},
};

const TabSystemContext = createContext<TabSystemContextValue>(defaultState);

const TabSystemProvider = ({ children }: WithChildrenProp) => {
    const [activeTab, setActiveTab] = useState<string>(defaultState.activeTab);
    const [openedTabs, setOpenedTabs] = useState<string[]>(
        defaultState.openedTabs
    );

    const onFileSelect = useCallback(
        (id: string) => {
            setActiveTab(id);

            if (!openedTabs.includes(id)) {
                setOpenedTabs((prevState) => [...prevState, id]);
            }
        },
        [openedTabs]
    );

    const onTabClose = useCallback(
        (id: string) => {
            const newTabsList = openedTabs.filter((tab) => tab !== id);

            if (id === activeTab) {
                setActiveTab(newTabsList[0]);
            }

            setOpenedTabs(newTabsList);
        },
        [openedTabs, activeTab]
    );

    const value = useMemo(
        () => ({
            activeTab,
            openedTabs,
            onFileSelect,
            onTabClose,
            setOpenedTabs,
        }),
        [activeTab, openedTabs, onFileSelect, onTabClose]
    );

    return (
        <TabSystemContext.Provider value={value}>
            {children}
        </TabSystemContext.Provider>
    );
};

const useTabSystemContext = () => useContext(TabSystemContext);

export { TabSystemProvider, useTabSystemContext };
