import React from "react";
import { MeFragment, UserRole } from "../schema/schema";
export const notMe: MeFragment = {
  firstName: "",
  id: "-1",
  lastName: "",
  name: "",
  email: "",
  role: UserRole.Member,
};
export const MeContext = React.createContext<MeFragment>({} as MeFragment);

export const useMe = (): MeFragment => {
  return React.useContext(MeContext);
};
