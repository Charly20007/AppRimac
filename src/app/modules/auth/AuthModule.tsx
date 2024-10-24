import { useState } from "react";
import { Footer } from "./components/Footer";
import ImgFamily from "../../../assets/imgs/family.png";
import RmButton from "../../../library/components/button/RmButton";
import RmInput from "../../../library/components/input/RmInput";
import RmInputSelect from "../../../library/components/input-select/RmInputSelect";
import RmSeparator from "../../../library/components/separator/RmSeparator";
import RmCheckbox from "../../../library/components/checkbox/RmCheckbox";
import { IFormAuth } from "../../core/interfaces";
import { CREDENTIALS_ERRORS, getUserValue, verifyCredentials } from "./services";
import { useNavigate } from "react-router-dom";
import { IUserAuth } from "../../core/store/types";
import { SESSION_STORAGE } from "../../core/constants";
import "./auth-module.scss";
import "./auth-module-mobile.scss";
import { useUserAuthStore } from "../../core/hooks";
import React from "react";

const AuthModule = () => {
  const navigation = useNavigate();
  const { setUser } = useUserAuthStore();

  const [form, setForm] = useState<IFormAuth>({
    numberCellPhone: "",
    numberDocument: "",
    isCommunicationPolicy: false,
    isPrivacyPolicy: false,
  });

  const [errors, setErrors] = useState({
    numberDocument: "",
    numberCellPhone: "",
    isPrivacyPolicy: "",
    isCommunicationPolicy: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validateInput = (field: string, value: string | boolean) => {
    let error = "";

    switch (field) {
      case "numberDocument":
        if (value.toString().length < 8) {
          error = "El número de documento debe tener al menos 8 caracteres.";
        }
        break;
      case "numberCellPhone":
        if (value.toString().length < 9) {
          error = "El número de celular debe tener al menos 9 caracteres.";
        }
        break;
      case "isPrivacyPolicy":
        if (!value) {
          error = "Debe aceptar la Política de Privacidad.";
        }
        break;
      case "isCommunicationPolicy":
        if (!value) {
          error = "Debe aceptar la Política de Comunicaciones Comerciales.";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  const verifyFormValid = () => {
    return (
      form.numberCellPhone.length >= 9 &&
      form.numberDocument.length >= 8 &&
      form.isPrivacyPolicy &&
      form.isCommunicationPolicy
    );
  };

  const userValues = async () => {
    try {
      setIsLoading(true);
      setErrors({
        numberDocument: "",
        numberCellPhone: "",
        isPrivacyPolicy: "",
        isCommunicationPolicy: "",
      });

      verifyCredentials(form.numberDocument, form.numberCellPhone);
      const user = await getUserValue();
      const userAuth: IUserAuth = {
        loggued: true,
        numberCellPhone: form.numberCellPhone,
        numberDocument: form.numberDocument,
        name: user.name,
        lastName: user.lastName,
        birthDay: user.birthDay,
      };

      setUser(userAuth);
      navigation("/dashboard");
      sessionStorage.setItem(
        SESSION_STORAGE.TOKEN_AUTH,
        JSON.stringify(userAuth)
      );
    } catch (error: any) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        numberDocument: CREDENTIALS_ERRORS["document"] === error?.message ? "Documento incorrecto." : "",
        numberCellPhone: CREDENTIALS_ERRORS["phone"] === error?.message ? "Número de celular incorrecto." : "",
      }));
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="container-auth">
        <div className="container-auth__family">
          <img src={ImgFamily} alt="img-family" />
        </div>
        <div className="container-auth__form">
          <div className="form-width caf-header">
            <div className="caf-header__description">
              <div className="caf-header__description__dot">
                Seguro Salud Flexible
              </div>
              <div className="caf-header__description__family">
                Creado para ti y tu familia
              </div>
            </div>
            <img src={ImgFamily} alt="img-family" />
          </div>
          <div className="form-width container-auth__form__separator"></div>
          <div className="form-width container-auth__form__message">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría, 100% online.
          </div>
          <div className="form-width container-auth__form__inputs">
            <RmInputSelect
              value={form.numberDocument}
              label="Nro. de documento"
              placeholder="Nro. de documento"
              type="number"
              changeValue={(numberDocument) => {
                setForm({ ...form, numberDocument });
                validateInput("numberDocument", numberDocument);
              }}
            />
            {errors.numberDocument && (
              <span className="message-error-form">*{errors.numberDocument}</span>
            )}
            <RmSeparator height={15} />
            <RmInput
              value={form.numberCellPhone}
              label="Celular"
              placeholder="Celular"
              type="number"
              changeValue={(numberCellPhone) => {
                setForm({ ...form, numberCellPhone });
                validateInput("numberCellPhone", numberCellPhone);
              }}
            />
            {errors.numberCellPhone && (
              <span className="message-error-form">*{errors.numberCellPhone}</span>
            )}
            <RmSeparator height={20} />
            <RmCheckbox
              value={form.isPrivacyPolicy}
              label="Acepto la Política de Privacidad"
              changeValue={(isPrivacyPolicy) => {
                setForm({ ...form, isPrivacyPolicy });
                validateInput("isPrivacyPolicy", isPrivacyPolicy);
              }}
            />
            {errors.isPrivacyPolicy && (
              <span className="message-error-form">{errors.isPrivacyPolicy}</span>
            )}
            <RmSeparator height={10} />
            <RmCheckbox
              value={form.isCommunicationPolicy}
              label="Acepto la Política de Comunicaciones Comerciales"
              changeValue={(isCommunicationPolicy) => {
                setForm({ ...form, isCommunicationPolicy });
                validateInput("isCommunicationPolicy", isCommunicationPolicy);
              }}
            />
            {errors.isCommunicationPolicy && (
              <span className="message-error-form">{errors.isCommunicationPolicy}</span>
            )}
            <RmSeparator height={8} />
            <span className="termins-conditions cp">
              Aplican Términos y Condiciones.
            </span>
            <RmSeparator height={20} />
            <div className="container-ca-button">
              <RmButton
                label="Cotiza aquí"
                changeButton={() => userValues()}
                disabled={isLoading}
                size={window.innerWidth >= 500 ? "l" : "m"}
                theme="secondary"
              />
            </div>
            <RmSeparator height={10} />
            <RmSeparator height={20} />
          </div>
        </div>
      </div>
      <RmSeparator height={90} />
      <Footer />
    </>
  );
};

export default AuthModule;
