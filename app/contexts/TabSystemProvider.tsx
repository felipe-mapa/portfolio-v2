import React, { useState, useContext, useCallback, useMemo } from "react";

import type { WithChildrenProp } from "~/models/types";

interface TabSystemContextValue {
    openedTabs: string[];
    activeTab: string;
    onFileSelect: (id: string) => void;
    onTabClose: (id: string) => void;
}

const defaultState: TabSystemContextValue = {
    openedTabs: ["welcomeFile"],
    activeTab: "welcomeFile",
    onFileSelect: () => {},
    onTabClose: () => {},
};

const TabSystemContext =
    React.createContext<TabSystemContextValue>(defaultState);

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
