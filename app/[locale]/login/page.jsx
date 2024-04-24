import LoginForm from "../../../components/LoginForm";
import LanguageChanger from "../../../components/LanguageChanger";
import ThemeSwitch from "../../../components/ThemeSwitch";
import TranslationsProvider from "../../../components/TranslationsProvider";
import initTranslations from "../../i18n";

const i18nNamespace = ["header"];

export default async function LoginPage({ locale }) {
  const { t, resources } = await initTranslations(locale, i18nNamespace);

  // async function handleLogin(username, password) {
  //   "use server";
  //   const response = await fetch("http://localhost:3000/api/login", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       username,
  //       password,
  //     }),
  //   });
  // }

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespace}
    >
      <div className="grid grid-cols-2 items-center h-screen text-white bg-stale-400  ">
        <div className="h-5/6 w-4/6 justify-self-end bg-[#6f526d] p-8">
          <div className=" flex h-full flex-col gap-12 justify-center items-center">
            <h1 className="text-2xl ">New to our Shop?</h1>
            <p className="text-center">
              There are advances being made in science and technology everyday,
              and a good example of this is the
            </p>
            <button className=" w-4/6 py-4 border border-gray-300 rounded-md hover:bg-white hover:text-red-500 duration-500">
              CREATE ACCOUNT
            </button>
          </div>
        </div>
        <div className="flex  flex-col h-5/6 gap-16 relative text-black w-4/6 justify-start pt-24 items-start pl-16  dark:text-white">
          <div>
            <p className="text-2xl">Welcome Back ! </p>
            <p className="text-2xl">Please Sign in now</p>
          </div>
          <div className=" absolute top-2 right-32 text-md px-8 py-2 mb-3 rounded-md">
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
