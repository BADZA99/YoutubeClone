// Importation des hooks et types nécessaires de React
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { LANGUAGE } from "../utils/translation";

// Définition de l'interface pour la valeur du contexte de l'application
interface IAppContextValue {
  theme: "light" | "dark"; // Le thème peut être soit "light" soit "dark"
  language: "french" | "english";
  ToggleLanguage: () => void;
  ToggleTheme: () => void;
  text: (typeof LANGUAGE)["english"];
  SearchBarText: string;
  setSearchBarText: Dispatch<SetStateAction<string>>;
  isMenuSmall: boolean;
  ToggleMenuSize: () => void;
}

// Création du contexte de l'application avec une valeur par défaut de null
const AppContext = createContext<IAppContextValue | null>(null);

// Hook personnalisé pour utiliser le contexte de l'application
export const useAppContext = () => {
  const Appcontext = useContext(AppContext); 
  if (!Appcontext) {
    throw new Error("useAppContext must be used within AppContextProvider");
  }
  return Appcontext; 
};

// Définition de l'interface pour les props du fournisseur de contexte de l'application
interface IAppContextProviderProps {
  children: ReactNode; // Les enfants qui seront enveloppés par le fournisseur de contexte
}

// Composant fournisseur de contexte de l'application
export const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark"); 
  const [language, setlanguage] = useState<"french" | "english">("english"); 
  const [SearchBarText, setSearchBarText] = useState<string>("");
  const [isMenuSmall, setisMenuSmall] = useState(false);

  const ToggleLanguage = ()=>{
    setlanguage((CurrentLanguage)=>CurrentLanguage==="english"?"french":"english");
  }

  const ToggleTheme =()=>{
    setTheme((CurrentTheme)=>CurrentTheme==="light"?"dark":"light");
  }

  const ToggleMenuSize=()=>{setisMenuSmall((state) => !state);}





  const value = {
    theme,
    language,
    ToggleLanguage,
    ToggleTheme,
    text:LANGUAGE[language],
    SearchBarText,
    setSearchBarText,
    isMenuSmall,
    setisMenuSmall,
    ToggleMenuSize
  };
  // Le fournisseur de contexte enveloppe les enfants et leur fournit la valeur du contexte
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
