import React, { useState } from "react";
import MensajesIngles from "../lang/en-US.json";
import MensajesEspañol from "../lang/es-ARG.json";
import { IntlProvider } from "react-intl";
const langContext = React.createContext();

const LangProvider = ({ children }) => {
  const [mensaje, establecerMensajes] = useState(MensajesIngles);
  const [locale, establecerLocale] = useState("en-US");

  const establecerLenguaje = (lenguaje) => {
    switch (lenguaje) {
      case "es-MX":
        establecerMensajes(MensajesEspañol);
        establecerLocale("es-MX");
        break;
      case "en-US":
        establecerMensajes(MensajesIngles);
        establecerLocale("en-US");
        break;
      default:
        establecerMensajes(MensajesIngles);
        establecerLocale("es-MX");
    }
    console.log(lenguaje);
  };
  return (
    <langContext.Provider value={{ establecerLenguaje: establecerLenguaje }}>
      <IntlProvider locale={locale} messages={mensaje}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};
export { LangProvider, langContext };
