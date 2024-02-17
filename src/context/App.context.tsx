// Importation des hooks et types nécessaires de React
import { ReactNode, createContext, useContext, useState } from "react";

// Définition de l'interface pour la valeur du contexte de l'application
interface IAppContextValue {
  theme: "light" | "dark"; // Le thème peut être soit "light" soit "dark"
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
  const [theme, setTheme] = useState<"light" | "dark">("light"); // État local pour le thème
  const value = {
    // Valeur qui sera passée au contexte
    theme,
  };
  // Le fournisseur de contexte enveloppe les enfants et leur fournit la valeur du contexte
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
