import React from "react";

interface NavbarProps {
  navbarColor: string;
  setNavbarColor: (color: string) => void;
  topFixed: string;
  setTopFixed: (val: string) => void;
  hiddenBrand: string;
  setHiddenBrand: (val: string) => void;
  modalLogin: boolean;
  setModalLogin: (val: boolean) => void;
  setIsStyle: (val: boolean) => void;
  isStyle: boolean;
}
interface NavbarContextProviderProps {
  isHomePage?: boolean;
  isStyle?: boolean;
}

export const NavbarContext = React.createContext<NavbarProps>(
  ({} as any) as NavbarProps
);

const useChatContextProvider = ({
  isHomePage,
}: NavbarContextProviderProps): NavbarProps => {
  const [isStyle, setIsStyle] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState(!isStyle ? "bg-primary" : "navbar-transparent");
  const [topFixed, setTopFixed] = React.useState("81px");
  const [hiddenBrand, setHiddenBrand] = React.useState("");
  const [modalLogin, setModalLogin] = React.useState(false);
 
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  React.useEffect(() => {
    // if(!isHomePage) return;
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 89 ||
        document.body.scrollTop > 89
      ) {
        
        setTopFixed('0px');
        setNavbarColor(`${isStyle ? 'bg-black-blur' : 'bg-primary'}`);
        setHiddenBrand("d-none");
      } else if (
        document.documentElement.scrollTop < 90 ||
        document.body.scrollTop < 90
      ) {
        setTopFixed('81px');
        setNavbarColor("");
        setHiddenBrand("");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const navbarContextProvider: NavbarProps = {
    navbarColor,
    setNavbarColor,
    topFixed,
    setTopFixed,
    hiddenBrand,
    setHiddenBrand,
    modalLogin,
    setModalLogin,
    setIsStyle,
    isStyle,
  };
  return navbarContextProvider;
};

const NavBarContextProvider: React.FC<NavbarContextProviderProps> = ({
  isHomePage,
  children,
}) => {
  const navBarContextProvider = useChatContextProvider({
    isHomePage,
  });

  return (
    <NavbarContext.Provider value={navBarContextProvider}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavBarContextProvider;
