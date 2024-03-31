// Importation des hooks et types nécessaires de React
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { LANGUAGE } from "../utils/translation";
import {Video,Videos, createClient } from "pexels";
import { PEXELS_API_KEY } from "../utils/pexels";
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
  activeMenuText: string;
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<string>>;
  videos:Video[];
  isFetchingVideos:boolean;
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
const client = createClient(PEXELS_API_KEY)

// Composant fournisseur de contexte de l'application
export const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark"); 
  const [language, setlanguage] = useState<"french" | "english">("english"); 
  const [SearchBarText, setSearchBarText] = useState<string>("");
  const [isMenuSmall, setisMenuSmall] = useState(false);
  const [activeMenuText, setactiveMenuText]=useState("home");
  const [activeCategory, setActiveCategory]=useState("all");
  const [videos, setVideos]=useState<Video[]>([]);
  const [isFetchingVideos, setIsFetchingVideos]=useState(false);

  useEffect(() => {
    fetchVideos(activeCategory);
  }, [activeCategory]);
  
  useEffect(() => {
    fetchVideos(SearchBarText);
  }, [ SearchBarText]);

  const fetchVideos = async (query:string)=>{
    setIsFetchingVideos(true);
    try{
      const response = await client.videos.search({query:query, per_page:44});
      console.log(response);
      setVideos((response as Videos).videos);
    }catch (error){
      console.log(error);

    }
    setIsFetchingVideos(false);

  }
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
    text: LANGUAGE[language],
    SearchBarText,
    setSearchBarText,
    isMenuSmall,
    setisMenuSmall,
    ToggleMenuSize,
    activeMenuText,
    setactiveMenuText,
    activeCategory,
    setActiveCategory,
    videos,
    isFetchingVideos
  };
  // Le fournisseur de contexte enveloppe les enfants et leur fournit la valeur du contexte
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
