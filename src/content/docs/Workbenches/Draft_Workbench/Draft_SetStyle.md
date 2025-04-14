---
title: Draft SetStyle
---

|                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draft SetStyle                                                                                                                                      |
| Menu location                                                                                                                                       |
| Utilities → Set style                                                                                                                               |
| Workbenches                                                                                                                                         |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench")                                                                  |
| Default shortcut                                                                                                                                    |
| Draft: S S                                                                                                                                          |
| Introduced in version                                                                                                                               |
| 0.19                                                                                                                                                |
| See also                                                                                                                                            |
| [Draft AnnotationStyleEditor](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor"), [Draft ApplyStyle](/Draft_ApplyStyle "Draft ApplyStyle") |
|                                                                                                                                                     |

## Description

The ![](/images/Draft_SetStyle.svg) **Draft SetStyle** command sets the default style for new objects.

![](/images/Draft_SetStyle_Taskpanel_Tab_Shape.png) ![](/images/Draft_SetStyle_Taskpanel_Tab_Annotation.png)

The two tabs ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) of the Style settings task panel

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/images/Draft_tray_button_style.png) button in the [Draft Tray](/Draft_Tray "Draft Tray"). Depending on the current style settings this button can look different.
   - [Draft](/Draft_Workbench "Draft Workbench"): Select the **Utilities → ![](/images/Draft_SetStyle.svg) Set style** option from the menu, or from the [Tree view](/Tree_view "Tree view") or [3D view](/3D_view "3D view") context menu.
   - Draft: Use the keyboard shortcut: S then S.
2. The **Style settings** task panel opens. See [Options](#Options) for more information.
3. Optionally change one or more settings.
4. Press the OK button to save the settings.
5. The button in the [Draft Tray](/Draft_Tray "Draft Tray") is updated.

## Options

- From the dropdown list at the top of the task panel an exiting style preset can be selected.
- Press the ![](/images/Document-save.svg) button to save the current style settings as a preset.
- On the **Shape** tab the following settings can be specified:
  - **Shape appearance**
    - **Shape color**.
    - **Ambient shape color**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
    - **Emissive shape color**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
    - **Specular shape color**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
    - **Shape transparency**.
    - **Shape shininess**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
  - **Other**
    - **Line color**.
    - **Line width**.
    - **Point color**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
    - **Point size**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
    - **Draw style**.
    - **Display mode**.
- The settings on the **Annotation** tab apply to [Draft Texts](/Draft_Text "Draft Text"), [Draft Dimensions](/Draft_Dimension "Draft Dimension") and [Draft Labels](/Draft_Label "Draft Label"). The following settings can be specified (see [Draft Text](/Draft_Text#View "Draft Text") and [Draft Dimension](/Draft_Dimension#View "Draft Dimension") for details):
  - **Texts**
    - **Font name**.
    - **Font size**. This is in fact the default line height, the letters are smaller.
    - **Line spacing factor**. Not used for dimensions.
    - **Scale multiplier**. This is the inverse of the scale set in the [Draft annotation scale widget](/Draft_annotation_scale_widget "Draft annotation scale widget"). If the scale is `1:100` the multiplier is `100`. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
    - **Text color**.
  - **Lines and arrows**
    - **Line width**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
    - **Arrow type**.
    - **Arrow size**.
    - **Line and arrow color**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
  - **Dimensions**
    - **Show unit**.
    - **Unit override**.
    - **Dim line overshoot**. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
    - **Ext line length**. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
    - **Ext line overshoot**. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
    - **Text spacing**.
- Press the ![](/images/Draft_SetStyle.svg) Selected button to apply the settings to selected objects or groups. Objects can be selected while the task panel is open.
- Press the ![](/images/Draft_Text.svg) Annotations button to apply the settings to all [Draft Texts](/Draft_Text "Draft Text"), [Draft Dimensions](/Draft_Dimension "Draft Dimension") and [Draft Labels](/Draft_Label "Draft Label") in the current document. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
- Press the Cancel button to finish the command without saving the settings.

## Notes

- The settings on the **Shape** tab, except **Draw style** and **Display mode**, are not only used for Draft objects, but also for objects created with other workbenches.
- All settings, except **Draw style** and **Display mode**, can also be changed in the preferences. See [PartDesign Preferences](/PartDesign_Preferences#Shape_appearance "PartDesign Preferences") and [Draft Preferences](/Draft_Preferences#Texts_and_dimensions "Draft Preferences").
- Styles are saved in a file with a fixed name: StylePresets.json which is stored in FreeCAD's user Draft folder:
  - On Linux it is usually /home/<username>/.local/share/FreeCAD/Draft/.
  - On Windows it is %APPDATA%\FreeCAD\Draft\, which is usually C:\Users\<username>\Appdata\Roaming\FreeCAD\Draft\.
  - On macOS it is usually /Users/<username>/Library/Preferences/FreeCAD/Draft/.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_SetStyle/en&oldid=1513529>"
