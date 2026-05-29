var klaroConfig = {
  version: 1,

  // Banner posicionado abajo
  position: "bottom",

  // Idioma por defecto
  lang: "es",

  // Color principal ITDO
  styling: {
    theme: ["light", "bottom"],
  },

  translations: {
    es: {
      consentNotice: {
        description:
          "Utilizamos cookies para mejorar tu experiencia en nuestra web. Puedes aceptarlas todas o personalizar tu elección.",
        learnMore: "Personalizar",
      },
      consentModal: {
        title: "Preferencias de cookies",
        description:
          "Aquí puedes ver y personalizar los servicios que queremos utilizar en este sitio web.",
        privacyPolicy: {
          text: "Para más información, consulta nuestra {privacyPolicy}.",
          name: "política de privacidad",
        },
      },
      acceptAll: "Aceptar todas",
      declineAll: "Rechazar",
      close: "Cerrar",
      save: "Guardar preferencias",
      purposes: {
        analytics: {
          title: "Analítica",
          description:
            "Estas cookies nos ayudan a entender cómo los usuarios interactúan con el sitio web.",
        },
        marketing: {
          title: "Marketing",
          description:
            "Estas cookies se utilizan para mostrarte publicidad relevante.",
        },
        necessary: {
          title: "Necesarias",
          description:
            "Estas cookies son imprescindibles para el funcionamiento del sitio web.",
        },
      },
    },
  },

  services: [
    {
      name: "google-analytics",
      title: "Google Analytics",
      purposes: ["analytics"],
      cookies: [
        [/^_ga/, "/", ""],
        [/^_gid/, "/", ""],
      ],
    },
    {
      name: "meta-pixel",
      title: "Meta Pixel",
      purposes: ["marketing"],
    },
  ],
};