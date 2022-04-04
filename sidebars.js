module.exports = {
  docs: [
    {
      type: "doc",
      id: "getting-started",
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
          collapsed: true,
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
      type: "category",
      label: "Bot Management",
      collapsed: true,
      items: ["Management/customizing", "Management/config", "Management/lang"],
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
  ],
};
