---
title: Arbeitsbereich zum Addon-Manager hinzufügen
---
## Einleitung

Dies ist eine Schritt-für-Schritt-Anleitung, wie man einen Python-Arbeitsbereich zum [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") hinzufügt.

Voraussetzungen:

* Eine lokale git-Dateiablage.
* Eine entfernte git-Dateiablage. Unterstützte git-Hosts sind [GitHub](https://github.com), [GitLab](https://about.gitlab.com/), [Framagit](https://framagit.org/public/projects) und [Debian Salsa](https://salsa.debian.org/public).
* Git muss installiert sein.

## Entwicklermodus aktivieren

1. Den [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de") öffnen: Den Menüeintrag **Bearbeiten → ![](/images/Std_DlgPreferences.svg) Einstellungen...** auswählen.
2. Die Menüoption **![](/images/Std_AddonMgr.svg) Addon-Manager** in der linken Leiste auswählen.
3. Auf dem Menüreiter **Addon-Manager Optionen** den Haken in der Checkbox **Addon-Entwickler-Modus** setzen. Dies aktiviert die Schaltfläche Entwicklerwerkzeuge... im Addon-Manager.
4. Die Schaltfläche OK drücken, um den Voreinstellungseditor zu schließen.

## Die package.xml-Datei erstellen

1. Open the [Addon Manager](/Std_AddonMgr "Std AddonMgr"): select the **Tools → ![](/images/Std_AddonMgr.svg) Addon manager** option from the menu.
2. Press the Developer tools... button.
3. The **Addon Developer Tools** dialog opens.  
   ![](/images/Addon_Manager_Addon_Developer_Tools_Dialog.png)
4. Enter the following:
   * **Path to Addon**: The path to the local git repository.
   * **Addon Name**: This will appear in the listings of the Addon Manager.
   * **Description**: Idem.
   * **Version**: Idem.
   * **Repository URL**
   * **Primary branch**
   * **README URL**: Recommended.
   * **Icon**: The icon must be part of the repository.
5. Press the ![](/images/List-add.svg) button at the bottom of the dialog.
6. The **Content Item** dialog opens.  
   ![](/images/Addon_Manager_Content_Item_Dialog.png)
7. The **Content type** should be set to `Workbench`.
8. Check the **This is the only item in the Addon** checkbox.
9. Enter the **Workbench class name**. This is the class name specified in the InitGui.py file.
10. For the **Subdirectory** enter `./`.
11. Press the OK button to close the dialog.
12. Press the Save button to close the **Addon Developer Tools** dialog and save the package.xml file.
13. Press the ![](/images/Process-stop.svg) Close button to close the Addon Manager.
14. Push the created file to your remote repository.

## Den Arbeitsbereich zur .gitmodules-Datei hinzufügen

1. Fork <https://github.com/FreeCAD/FreeCAD-addons>.
2. Create a new branch.
3. Edit the .gitmodules file to include your new Addon, in alphabetical order.
4. Push the new branch to GitHub.
5. Submit a Pull Request to the FreeCAD-Addons repository with the new .gitmodules file.

## Siehe auch

* [Arbeitsbereiche erstellen](/Workbench_creation/de "Workbench creation/de")
* [Package Metadata](/Package_Metadata/de "Package Metadata/de"): Detaillierte Informationen über die package.xml-Datei.

Retrieved from "<http://wiki.freecad.org/index.php?title=Add_Workbench_to_Addon_Manager/de&oldid=1422372>"