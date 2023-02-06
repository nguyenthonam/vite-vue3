import { useI18n } from "vue-i18n";
import { LOCALES } from "@/ultis/constant";
export default function useLocales() {
  const { locale } = useI18n();

  const setLocale = (localeInput: string) => {
    if (LOCALES.includes(localeInput)) {
      locale.value = localeInput;
    }
  };
  return { setLocale };
}
