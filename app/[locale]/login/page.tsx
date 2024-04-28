import LoginForm from "../../../components/LoginForm";
import LanguageChanger from "../../../components/LanguageChanger";
import ThemeSwitch from "../../../components/ThemeSwitch";
import TranslationsProvider from "../../../components/TranslationsProvider";
import initTranslations from "../../i18n";

// interface MainProps {
//   params: {
//     locale: string;
//   };
// }

const i18nNamespace = ["login"];

export default async function LoginPage({ locale }) {
  const { t, resources } = await initTranslations(locale, i18nNamespace);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespace}
    >
      <div className="grid grid-cols-2 items-center h-screen text-white bg-stale-400  ">
        <div className="h-5/6 w-4/6 justify-self-end bg-[#6f526d] p-8">
          <div className=" flex h-full flex-col gap-12 justify-center items-center">
            <h1 className="text-2xl ">{t("login:left-h1")}</h1>
            <p className="text-center">{t("login:left-p")}</p>
            <button
              type="button"
              className=" w-4/6 py-4 border border-gray-300 rounded-md hover:bg-white hover:text-red-500 duration-500"
            >
              {t("login:left-button")}
            </button>
          </div>
        </div>
        <div className="flex  flex-col h-5/6 gap-20 relative text-black w-4/6 justify-start pt-24 items-start pl-16  dark:text-white">
          <div>
            <p className="text-2xl">{t("login:right-p1")}</p>
            <p className="text-2xl">{t("login:right-p2")}</p>
          </div>
          <div className=" absolute top-4 right-24 text-md   flex items-center justify-center  rounded-md border border-gray-500 outline-none  [transition:all_ease_0.2s]">
            <ThemeSwitch />
          </div>
          <div className=" absolute top-4 right-4">
            <LanguageChanger />
          </div>
          <LoginForm />
        </div>
      </div>
    </TranslationsProvider>
  );
}
