---
title: Personalización del interfaz
---
## Introducción

La interfaz de FreeCAD está basada en el moderno kit de herramientas [Qt](http://en.wikipedia.org/wiki/Qt_(toolkit)) y tiene una organización a nivel de la técnica . Algunos aspectos de la interfaz pueden ser personalizados. Puedes, por ejemplo, añadir barras de herramientas personalizadas, con herramientas de varios ambientes de trabajo o herramientas definidas en macros, y puedes crear tus propios atajos de teclado. Pero los menús y las barras de herramientas por defecto que vienen con FreeCAD y sus ambientes de trabajo no se pueden cambiar.

![](/images/Std_DlgCustomize_tab_Toolbars.png)

El cuadro diálogo Personalizar

## Utilización

1. Los comandos disponibles en el cuadro de diálogo Personalizar dependen de los ambientes de trabajo que se hayan cargado en la sesión actual de FreeCAD. Así que deberías cargar primero todos las ambientes de trabajo a cuyos comandos quieras tener acceso.
2. Hay varias formas de invocar el ![](/images/Std_DlgCustomize.svg) [Std DiálogoPersonalizar](/Std_DlgCustomize/es "Std DlgCustomize/es") comando:
   * Seleccione la opción **Herramientas → ![](/images/Std_DlgCustomize.svg) Personalizar...** en el menú.
   * Haga clic con el botón derecho en un área de la barra de herramientas y elija **![](/images/Std_DlgCustomize.svg) Personalizar...** en el menú contextual.
3. Se abre el cuadro de diálogo Personalizar. Para más información, consulte [Opciones](#Opciones).
4. El botón Ayuda no funciona en este momento.
5. Pulse el botón Cerrar para cerrar el cuadro de diálogo.

## Opciones

En el cuadro de diálogo Personalizar están disponibles las siguientes pestañas:

### Teclado

![](/images/Std_DlgCustomize_tab_Keyboard.png)

La pestaña del teclado

En esta pestaña se pueden definir atajos de teclado personalizados. Los atajos de teclado para los comandos de macros se pueden definir en la pestaña [Macros](#Macros).

#### Search

You can search for commands by entering at least 3 characters of their menu text or name in the search field. The search is case-insensitive.

It is also possible to search for shortcuts:

* In the search field special keys in shortcuts must be entered as strings. For example to search for commands that use Ctrl in their shortcut enter `ctrl` (4 letters).
* Add parenthesis to search for single character shortcuts, for example: `(c)`.
* Add a comma and space between the characters of multi-character shortcuts, for example: `g, b, b`.

#### Añadir un atajo personalizado

1. Select a command category from the **Category** dropdown list.
2. Select a command from the **Commands** panel.
   * Optionally click the `Command`, `Shortcut` or `Default` column headings to reorder the list.
   * Optionally drag the splitter to the right of the panel to resize it.
3. The **Current shortcut** box displays the current short cut, if available.
4. Enter a new shortcut in the **New shortcut** input box. Shortcuts can be up to 4 inputs long. Each input is either a single character, a combination of one or more special keys or a combination of one or more special keys and a character. Use Backspace to correct mistakes.
5. Other active commands (see [Notes](#Notes)) that already use the shortcut will be listed in the **Shortcut priority list**.
6. Press the Assign button to assign the new shortcut.
7. If the **Shortcut priority list** contains more than one command: optionally change its order by selecting individual commands and pressing the Up button or the Down button. If active commands share the same shortcut, the shortcut will trigger the one that is highest in the list.

#### Remove a shortcut

1. Select a command category from the **Category** dropdown list.
2. Select a command from the **Commands** panel.
3. Press the Clear button.

#### Restore a default shortcut

1. Select a command category from the **Category** dropdown list.
2. Select a command from the **Commands** panel.
3. Press the Reset button.

#### Restore all default shortcuts

1. Pulse el botón Reiniciar todo.

#### Notes

* Shortcuts only work for active commands. Active commands are commands that appear in the standard menu, or in the menu of the active workbench, or commands that appear in a *visible* toolbar.

[Inicio](#top)

### Barras Herramientas

![](/images/Std_DlgCustomize_tab_Toolbars.png)

La pestaña Barras Herramientas

En esta pestaña se pueden crear y modificar barras de herramientas personalizadas.

#### Search

See [Keyboard](#Search).

#### Seleccione el ambiente de trabajo

1. In the dropdown list on the right select the workbench whose custom toolbars you want to modify. The `Global` option is there for custom toolbars that should be available in all workbenches.

#### Crear una barra herramientas

1. Press the New... button.
2. Enter a name in the dialog box that opens.
3. Press the OK button.
4. The new toolbar will appear in the panel on the right.

#### Renombrar una barra herramientas

1. Select a toolbar in the panel on the right.
2. Press the Rename... button.
3. Enter a new name in the dialog box that opens.
4. Press the OK button.

#### Eliminar una barra herramientas

1. Select a toolbar in the panel on the right.
2. Press the Delete button.

#### Desactivar una barra herramientas

1. Uncheck the checkbox in front of the toolbar name in the panel on the right.
2. A disabled toolbar will be invisible in the FreeCAD interface.

#### Añadir un comando

1. At least one custom toolbar is required. See [Create a toolbar](#Create_a_toolbar).
2. Select the correct toolbar in the panel on the right. If no toolbar is selected, the command will be added to the first toolbar in the list.
3. Select a command category from the **Category** dropdown list. Macro commands that have been set up on the [Macros](#Macros) tab appear in the `Macros` category.
4. Select a command from the **Commands** panel, or select `<Separator>` to add a separator (a line between two toolbar buttons).
   * Optionally drag the splitter to the right of the panel to resize it.
5. Press ![](/images/Button_right.svg) button.

#### Elimina un comando

1. If required, expand the toolbar in the panel on the right.
2. Select a command.
3. Press ![](/images/Button_left.svg) button.

#### Cambiar la posición de un position comando

1. If required, expand the toolbar in the panel on the right.
2. Select a command.
3. Press the ![](/images/Button_up.svg) button or the ![](/images/Button_down.svg) button.
4. Optionally repeat this until the command is in the correct position.

#### Notes

* Toolbars belonging to the current workbench are updated immediately, but after disabling/re-enabling a toolbar a workbench change is required (switch to a different workbench and then switch back).
* To update global toolbars a workbench change (if commands have been added or removed) or a restart (if the order of a toolbar has changed or a toolbar was renamed) is required.

[Inicio](#top)

### Macros

![](/images/Std_DlgCustomize_tab_Macros.png)

La pestaña Macros

On this tab macro commands can be set up. Once set up, they can be added to custom toolbars. Macros installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr") are set up automatically, and added to a `Global` toolbar (see [Toolbars](#Toolbars)), if you confirm the **Add button** popup during the installation process.

If you want to use a macro downloaded from a different source you will have to install it manually. See [How to install macros](/How_to_install_macros "How to install macros") for more information. Note that FreeCAD uses a dedicated folder for macros and only macros in that folder can be set up. Use the ![](/images/Std_DlgMacroExecute.svg) [Std DlgMacroExecute](/Std_DlgMacroExecute "Std DlgMacroExecute") command to find this folder on your system.

#### Añadir un macrocomando

1. In the **Macro** dropdown list select a macro.
2. Enter a **Menu text**. This will be the name used to identify the macro command and will also appear in the toolbar if there is no icon.
3. Optionally enter a **Tool tip**. This text will appear near the location of the mouse when you hover the toolbar icon.
4. Optionally enter a **Status text**. This text will appear in the [status bar](/Status_bar "Status bar") when you hover the toolbar icon.
5. Optionally enter the wiki page for the macro, if available, in the **What's this** input box. Enter the page name, not the full URL.
6. Optionally enter a shortcut in the **Accelerator** input box. See [Keyboard](#Keyboard) for more information.
7. To add an icon:
   1. Press the **Pixmap** ... button.
   2. The **Choose Icon** dialog box opens.
   3. If required press the Icon folders... button to add an icon folder.
   4. Select an icon from the panel. The **Choose Icon** dialog box closes automatically.
8. Press the Add button.
9. The macro command appears in the panel on the left.
10. The macro command can now be selected on the [Toolbars](#Toolbars) tab.

#### Elimina un macrocomando

1. Select the macro command in the panel on the left.
2. Press the Remove button.

#### Cambiar un macrocomando

1. Double-click the macro command in the panel on the left.
2. Make the required changes. Note that you cannot remove the icon, you can only replace it.
3. Press the Replace button.

[Inicio](#top)

### Movimiento Bola Espacial

This tab is blank if no Spaceball is detected. See: [3Dconnexion input devices](/3Dconnexion_input_devices "3Dconnexion input devices").

[Inicio](#top)

### Botones Bola Espacial

This tab is blank if no Spaceball is detected. See: [3Dconnexion input devices](/3Dconnexion_input_devices "3Dconnexion input devices").

[Inicio](#top)

## Temas

FreeCAD supports complete theming of the interface, via .qss stylesheets. The [qss format](https://doc.qt.io/qt-5/stylesheet-syntax.html) is very similar to the [css format](https://en.wikipedia.org/wiki/CSS) used in web pages, it basically adds methods to reference the different widgets and elements of the Qt interface. You can change the default theme (which simply takes the style defined by your desktop system) by selecting a **style sheet** in the [FreeCAD preferences](/Preferences_Editor#General "Preferences Editor").

You can also create your own theme if you are not satisfied with the themes that are bundled with FreeCAD, for example by editing an [existing style sheet](https://github.com/FreeCAD/FreeCAD/tree/master/src/Gui/Stylesheets). Your new style must be placed in a specific folder for it to be found by FreeCAD:

* %APPDATA%/FreeCAD/Gui/Stylesheets (on Windows). The %APPDATA% folder can be retrieved by entering `App.getUserAppDataDir()` in the [Python console](/Python_console "Python console").
* $HOME/.FreeCAD/Gui/Stylesheets (on Linux).
* $HOME/Library/Application Support/FreeCAD/Gui/Stylesheets (on macOS).

[Inicio](#top)

## Complementos

Los complementos ofrecen otra forma de personalizar la interfaz de uso. A continuación se muestran algunos complementos creados por usuarios de la comunidad de FreeCAD. Pueden descargarse a través del ![](/images/Std_AddonMgr.svg) [Gestor Complementos](/Std_AddonMgr/es "Std AddonMgr/es") (nota: están listados en la pestaña ambientes de trabajo).

[Inicio](#top)

Retrieved from "<http://wiki.freecad.org/index.php?title=Interface_Customization/es&oldid=1520729>"