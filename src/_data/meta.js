module.exports = {
    // NOTE: `process.env.URL` is provided by Netlify, and may need
    // adjusted pending your host
    url: process.env.URL || "http://localhost:8080",
    siteLang: "ru", // en, fr, ru, etc
    siteName: "Компания.бел",
    siteSlug: "быстро и качественно",
    siteTitle: "Лучшая компания по изготовлению всего",
    siteDescription: "Лучшая компания по изготовлению всего",
    authorName: "Vadim",
    contacts: {
        phone: "375 00 123-45-99", // without `+`
        email: "somemail@domen.by",
    },
    socials: {
        twitter: "", // username without `@`
        instagram: "",
        vk: "",
        facebook: "",
        tiktok: "",
    },
    messengers: {
        viber  : "", // phone number
        whatsapp: "", // phone number
        telegram: "", // username
    }
  };