import { ReactNotificationOptions } from "react-notifications-component";


export const notificationAdd = (name: string, action = "Created" ,options = {}) => {

  const notification: ReactNotificationOptions = {
    ...options,
    title: "Success!",
    message: `You've ${action} ${name} success`,
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 2000,
      pauseOnHover: true,
    },
  };
  return notification;
};
