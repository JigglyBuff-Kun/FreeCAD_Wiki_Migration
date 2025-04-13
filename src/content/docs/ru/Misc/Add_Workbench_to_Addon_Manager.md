---
title: Добавление верстака в Менеджер дополнений
---
## Вступление

Данная страница содержит пошаговую инструкцию позволяющую добавить Python верстак в [Менеджер дополнений](/Std_AddonMgr/ru "Std AddonMgr/ru").

Требуется:

* Наличие локального git репозитория.
* Наличие удаленного git репозитория. Поддерживаемые git хостинги: [GitHub](https://github.com), [GitLab](https://about.gitlab.com/), [Framagit](https://framagit.org/public/projects) и [Debian Salsa](https://salsa.debian.org/public).
* Git должен быть установлен локально.

## Активация режима для разработчиков

1. Откройте [Редактор настроек](/Preferences_Editor/ru "Preferences Editor/ru"): через пункт меню **Правка → ![](/images/Std_DlgPreferences.svg) Настройки...**.
2. Выберите раздел **![](/images/Std_AddonMgr.svg) Менеджер дополнений** в панели слева.
3. На в кладке **Настройки менеджера дополнений** включите флажок **Режим разработчика дополнений**. Это сделает доступной кнопку Инструменты разработчика... в Менеджере дополнений.
4. Нажмите кнопку OK для закрытия Редактора настроек.

## Создание package.xml файла

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

## Добавление верстака в .gitmodules файл

1. Сделайте Fork <https://github.com/FreeCAD/FreeCAD-addons> репозитория.
2. Создайте новую ветвь.
3. Отредактируйте файл .gitmodules, добавьте в него ваше дополнение (Addon) в алфавитном порядке.
4. Сделайте Push в новую ветку GitHub.
5. Отправьте Pull Request с изменениями в FreeCAD-Addons репозиторий с измененным .gitmodules файлом.

## Смотрите также

* [Workbench creation](/Workbench_creation "Workbench creation")
* [Package Metadata](/Package_Metadata "Package Metadata"): Detailed information about the package.xml file.

Retrieved from "<http://wiki.freecad.org/index.php?title=Add_Workbench_to_Addon_Manager/ru&oldid=1417554>"