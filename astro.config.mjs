// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  site: "https://JigglyBuff-Kun@github.io",
  base: "FreeCAD_Wiki_Migration",
  integrations: [
    starlight({
      plugins: [starlightImageZoom()],
      title: "FreeCAD Docs",
      defaultLocale: "root",
      locales: {
        // Bulgarian docs
        bg: {
          label: "Български",
        },
        // Simplified Chinese docs
        cn: {
          label: "简体中文",
          lang: "zh-CN",
        },
        // Czech docs
        cs: {
          label: "Čeština",
        },
        // Czech (alternative code)
        cz: {
          label: "Čeština",
        },
        // German docs
        de: {
          label: "Deutsch",
        },
        // English docs
        root: {
          label: "English",
          lang: "en",
        },
        // Spanish docs
        es: {
          label: "Español",
        },
        // Finnish docs
        fi: {
          label: "Suomi",
        },
        // French docs
        fr: {
          label: "Français",
        },
        // Croatian docs
        hr: {
          label: "Hrvatski",
        },
        // Hungarian docs
        hu: {
          label: "Magyar",
        },
        // Indonesian docs
        id: {
          label: "Bahasa Indonesia",
        },
        // Italian docs
        it: {
          label: "Italiano",
        },
        // Japanese docs
        ja: {
          label: "日本語",
        },
        // Korean docs
        ko: {
          label: "한국어",
        },
        // Polish docs
        pl: {
          label: "Polski",
        },
        // Brazilian Portuguese docs
        "pt-br": {
          label: "Português do Brasil",
          lang: "pt-BR",
        },
        // Portuguese docs
        pt: {
          label: "Português",
        },
        // Romanian docs
        ro: {
          label: "Română",
        },
        // Russian docs
        ru: {
          label: "Русский",
        },
        // Slovak docs
        sk: {
          label: "Slovenčina",
        },
        // Swedish docs
        sv: {
          label: "Svenska",
        },
        // Turkish docs
        tr: {
          label: "Türkçe",
        },
        // Ukrainian docs
        uk: {
          label: "Українська",
        },
        // Vietnamese docs
        vi: {
          label: "Tiếng Việt",
        },
        // Simplified Chinese docs
        "zh-cn": {
          label: "简体中文",
          lang: "zh-CN",
        },
        // Chinese (Simplified)
        "zh-hans": {
          label: "简体中文",
          lang: "zh-Hans",
        },
        // Chinese (Traditional)
        "zh-hant": {
          label: "繁體中文",
          lang: "zh-Hant",
        },
        // Traditional Chinese docs
        "zh-tw": {
          label: "繁體中文",
          lang: "zh-TW",
        },
        // Chinese (generic)
        zh: {
          label: "中文",
        },
      },

      sidebar: [
        {
          label: "User Manual",
          collapsed: true,
          items: [
            "user_manual/manual_introduction",
            {
              label: "Discovering FreeCAD",
              items: [
                "user_manual/manual_what_is_freecad",
                "user_manual/manual_installing",
                "user_manual/manual_the_freecad_interface",
                "user_manual/manual_navigating_in_the_3d_view",
                "user_manual/manual_the_freecad_document",
                "user_manual/manual_parametric_objects",
                "user_manual/manual_import_and_export_to_other_filetypes",
              ],
            },
            {
              label: "Working with FreeCAD",
              items: [
                "user_manual/manual_all_workbenches_at_a_glance",
                "user_manual/manual_traditional_modeling_the_csg_way",
                "user_manual/manual_traditional_2d_drafting",
                "user_manual/manual_modeling_for_product_design",
                "user_manual/manual_preparing_models_for_3d_printing",
                "user_manual/manual_generating_2d_drawings",
                "user_manual/manual_bim_modeling",
                "user_manual/manual_using_spreadsheets",
                "user_manual/manual_creating_fem_analyses",
                "user_manual/manual_creating_renderings",
              ],
            },
            {
              label: "Python Scripting",
              items: [
                "user_manual/manual_a_gentle_introduction",
                "user_manual/manual_creating_and_manipulating_geometry",
                "user_manual/manual_creating_parametric_objects",
                "user_manual/manual_creating_interface_tools",
              ],
            },
            "user_manual/manual_the_community",
          ],
        },
        {
          label: "Workbenches",
          collapsed: true,
          autogenerate: { directory: "/Workbenches" },
        },
        {
          label: "Other Workbenches",
          collapsed: true,
          autogenerate: { directory: "/Other_Workbenches" },
        },
        {
          label: "Macros",
          collapsed: true,
          autogenerate: { directory: "/Macros" },
        },
        {
          label: "Tutorials",
          collapsed: true,
          autogenerate: { directory: "/Tutorials" },
        },
        {
          label: "Misc",
          collapsed: true,
          autogenerate: { directory: "/Misc" },
        },
      ],
    }),
  ],
});
