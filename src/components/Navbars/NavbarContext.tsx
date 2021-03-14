import React from "react";

interface NavbarProps {
  navbarColor: string;
  setNavbarColor: (color: string) => void;
  topFixed: string;
  setTopFixed: (val: string) => void;
  hiddenBrand: boolean;
  setHiddenBrand: (val: boolean) => void;
  modalLogin: boolean;
  setModalLogin: (val: boolean) => void;
}
interface NavbarContextProviderProps {
  isHomePage?: boolean;
}

export const NavbarContext = React.createContext<NavbarProps>(
  ({} as any) as NavbarProps
);

const useChatContextProvider = ({
  isHomePage,
}: NavbarContextProviderProps): NavbarProps => {
  const [navbarColor, setNavbarColor] = React.useState(isHomePage ? "navbar-transparent" : 'bg-brand');
  const [topFixed, setTopFixed] = React.useState("100px");
  const [hiddenBrand, setHiddenBrand] = React.useState(false);
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
    if(!isHomePage) return;
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 89 ||
        document.body.scrollTop > 89
      ) {
        setNavbarColor("bg-brand");
       
      } else if (
        document.documentElement.scrollTop < 90 ||
        document.body.scrollTop < 90
      ) {
        setNavbarColor("navbar-transparent");
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
