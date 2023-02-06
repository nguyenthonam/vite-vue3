import { createI18n } from "vue-i18n";
import en from "./en.json";
import vi from "./vi.json";
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  messages: {
    en,
    vi,
  },
});

export default i18n;
