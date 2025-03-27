import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

interface BudgetSettings {
    cashOnHand: number;
    needPercent: number;
    wantPercent: number;
    savingPercent: number;
    totalIncome: number;
    taxPercentage: number;
    user: string;
    
    setCashOnHand: (value: number) => void;
    setNeedPercent: (value: number) => void;
    setWantPercent: (value: number) => void;
    setSavingPercent: (value: number) => void;
    setTotalIncome: (value: number) => void;
    setTaxPercentage: (value: number) => void;
    setUser: (value: string) => void;
}

const BudgetContext = createContext<BudgetSettings | undefined>(undefined);

export const BudgetContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const getInitialValue = async <T extends number | string>(key: string, defaultValue: T): Promise<T> => {
        try {
            const saved = await AsyncStorage.getItem(key);
            return saved ? JSON.parse(saved) : defaultValue;
        } catch (error) {
            console.error(`Error loading ${key}:`, error);
            return defaultValue;
        }
    };

    const [cashOnHand, setCashOnHand] = useState<number>(50);
    const [needPercent, setNeedPercent] = useState<number>(50);
    const [wantPercent, setWantPercent] = useState<number>(30);
    const [savingPercent, setSavingPercent] = useState<number>(20);
    const [totalIncome, setTotalIncome] = useState<number>(1250);
    const [taxPercentage, setTaxPercentage] = useState<number>(10);
    const [user, setUser] = useState<string>("");

    useEffect(() => {
        const loadSettings = async () => {
            setCashOnHand(await getInitialValue("cashOnHand", 50));
            setNeedPercent(await getInitialValue("needPercent", 50));
            setWantPercent(await getInitialValue("wantPercent", 30));
            setSavingPercent(await getInitialValue("savingPercent", 20));
            setTotalIncome(await getInitialValue("totalIncome", 1000));
            setTaxPercentage(await getInitialValue("taxPercentage", 10));
            setUser(await getInitialValue<string>("user", ""));
        };
        loadSettings();
    }, []);

    useEffect(() => {
        AsyncStorage.setItem("cashOnHand", JSON.stringify(cashOnHand));
    }, [cashOnHand]);

    useEffect(() => {
        AsyncStorage.setItem("needPercent", JSON.stringify(needPercent));
    }, [needPercent]);

    useEffect(() => {
        AsyncStorage.setItem("wantPercent", JSON.stringify(wantPercent));
    }, [wantPercent]);

    useEffect(() => {
        AsyncStorage.setItem("savingPercent", JSON.stringify(savingPercent));
    }, [savingPercent]);

    useEffect(() => {
        AsyncStorage.setItem("totalIncome", JSON.stringify(totalIncome));
    }, [totalIncome]);

    useEffect(() => {
        AsyncStorage.setItem("taxPercentage", JSON.stringify(taxPercentage));
    }, [taxPercentage]);

    useEffect(() => {
        AsyncStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return (
        <BudgetContext.Provider value={{
            cashOnHand,
            needPercent,
            wantPercent,
            savingPercent,
            totalIncome,
            taxPercentage,
            user,
            setCashOnHand,
            setNeedPercent,
            setWantPercent,
            setSavingPercent,
            setTotalIncome,
            setTaxPercentage,
            setUser
        }}>
            {children}
        </BudgetContext.Provider>
    );
};

export const useBudgetContext = () => {
    const context = useContext(BudgetContext);
    if (!context) {
        throw new Error("useBudgetContext must be used within a BudgetContextProvider");
    }
    return context;
};