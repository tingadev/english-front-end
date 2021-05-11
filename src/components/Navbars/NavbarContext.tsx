import React from "react";
import { TestGroupInfoFragment } from "../../schema/schema";

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
  testGroupsData?: TestGroupInfoFragment[] | undefined;
  setTestGroupsData: (val: TestGroupInfoFragment[] | undefined) => void;
}
interface NavbarContextProviderProps {
  isHomePage?: boolean;
  isStyle?: boolean;
}

export const NavbarContext = React.createContext<NavbarProps>(
  {} as any as NavbarProps
);

const useChatContextProvider = ({
  isHomePage,
}: NavbarContextProviderProps): NavbarProps => {
  const [isStyle, setIsStyle] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState(
    !isStyle ? "bg-primary" : "navbar-transparent"
  );
  const [topFixed, setTopFixed] = React.useState("81px");
  const [hiddenBrand, setHiddenBrand] = React.useState("");
  const [modalLogin, setModalLogin] = React.useState(false);
  const [testGroupsData, setTestGroupsData] =
    React.useState<TestGroupInfoFragment[] | undefined>(undefined);
  const [y, setY] = React.useState(0);
  const [scrolState, setScrolState] = React.useState("up");
  const handleNavigation = (e: any) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      setScrolState("up");
    } else if (y < window.scrollY) {
      setScrolState("down");
    }
    setY(window.scrollY);
  };

  React.useMemo(() => {

    document.documentElement.classList.remove("nav-open");
    window.addEventListener("scroll", handleNavigation);
    return function cleanup() {
      document.body.classList.remove("sidebar-collapse");
      window.addEventListener("scroll", handleNavigation);
    };
  }, [y]);

  React.useMemo(() => {
    if (scrolState === "up") {
      setTopFixed("81px");
      setNavbarColor("");
      setHiddenBrand("");
      document.body.classList.remove("scrollDown");
    } else {
      setTopFixed("0px");
      setNavbarColor(`${isStyle ? "bg-black-blur" : "bg-primary"}`);
      setHiddenBrand("hide-nav");
      document.body.classList.add("scrollDown");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolState]);
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
    testGroupsData,
    setTestGroupsData,
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
