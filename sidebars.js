module.exports = {
  docs: [
    {
      type: "doc",
      id: "getting-started",
    },
    {
      type: "doc",
      id: "features",
    },
    {
      type: "category",
      label: "Bot Setup",
      collapsed: false,
      items: [
        "Setup/dependencies",
        "Setup/pre-installation",
        "Setup/recommendations",
        {
          type: "category",
          label: "Hosting",
          collapsed: false,
          items: [
            "Setup/Hosting/linux",
            "Setup/Hosting/mac-os",
            "Setup/Hosting/windows",
            "Setup/Hosting/docker",
          ],
        },
      ],
    },
    {
      type: "doc",
      id: "updating",
    },
    {
      type: "category",
      label: "Bot Management",
      collapsed: true,
      items: ["Management/customizing", "Management/config", "Management/lang"],
    },
    {
      type: "category",
      label: "First Party Addons",
      collapsed: true,
      items: ["Addons/advanced-verification"],
    },
    {
      type: "category",
      label: "Development",
      collapsed: true,
      items: [
        "Developers/contributing",
        "Developers/template",
        "Developers/third-party-tos",
        {
          type: "category",
          label: "Addons",
          collapsed: false,
          items: [
            "Developers/Addons/creating-addons",
            "Developers/Addons/first-party",
            "Developers/Addons/third-party",
          ],
        },
      ],
    },
    {
      type: "doc",
      id: "faq",
    },
    {
      type: "doc",
      id: "support",
    },
  ],
};
