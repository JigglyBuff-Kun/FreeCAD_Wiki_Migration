---
title: Загрузка
---
## Текущая стабильная версия

Релиз FreeCAD версии 1.0 был опубликован 18.11.2024. Чтобы узнать о нововведениях, ознакомьтесь с [примечаниями к выпуску](/Release_notes_1.0/ru "Release notes 1.0/ru").

Контрольные суммы SHA256 для проверки целостности вашей загрузки вы можете найти на [странице релиза 1.0.0](https://github.com/FreeCAD/FreeCAD/releases/tag/1.0.0).

Предыдущие версии можно загрузить со страницы [релизов](https://github.com/FreeCAD/FreeCAD/releases).

|  |  |  |
| --- | --- | --- |
| [Install instructions](/Installing_on_Windows "Installing on Windows")  [64-bit installer](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-Windows-x86_64-installer-1.exe)  [64-bit portable version (.7z)](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-Windows-x86_64-py311.7z) | [Install instructions](/Installing_on_Mac "Installing on Mac")  [ARM (M-series) disk image](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-macOS-arm64-py311.dmg)  [Intel disk image](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-macOS-x86_64-py311.dmg) | [Install instructions](/Installing_on_Linux "Installing on Linux")  [x86\_64 AppImage](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-Linux-x86_64-py311.AppImage)  [aarch64 AppImage](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-Linux-aarch64-py311.AppImage) |

### Примечания для пользователей Windows

* Поддерживаются следующие версии Windows: 64-разрядные версии 8/10/11.
* Пакет также можно установить из менеджера пакетов [Chocolatey](https://chocolatey.org/packages/freecad). Пакет из Chocolatey пока не в новейшей версии.

### Примечания для пользователей macOS

* macOS 10.12 Sierra — минимальная поддерживаемая версия.

### Примечания для GNU/Linux пользователей

Большинство дистрибутивов поддерживают FreeCAD из их официальных репозиториев, однако, если дистрибутив не следует модели гладкого обновления, версия может быть устаревшей. Вместо установки из репозитория вы можете загрузить AppImage по ссылке сверху, разрешить загруженному файлу права на исполнения и запустить его без установки.

Смотрите страницу [Установка в Linux](/Installing_on_Linux/ru "Installing on Linux/ru") насчёт дополнительных опций установки, включая однодневные сборки для Ubuntu и производных.

Портативную версию, не требующую установки, можно создать, запустив FreeCAD с следующими командами:

```
cd path/to/directory_containing_AppImage/
chmod +x ./name_of_AppImage_file.AppImage
HOME="$PWD/Settings" FREECAD_USER_HOME="$PWD/Settings" ./name_of_AppImage_file.AppImage

```

Дополнительную информацию о переменных среды FreeCAD можно найти на [странице конфигурирования](/Start_up_and_Configuration/ru#Переменные_Среды_Окружения "Start up and Configuration/ru").

## Разрабатываемые версии

FreeCAD активно развивается.

* Для получения информации о сборках и исходном коде разработки, смотрите страницу [weekly builds](https://github.com/FreeCAD/FreeCAD-Bundle/releases/tag/weekly-builds). Еженедельные сборки доступны для Linux, MacOS и Windows там. Для Linux также доступны ежедневные сборки: используйте канал [снимков](/Ubuntu_Snap/ru "Ubuntu Snap/ru") или [ежедневный PPA FreeCAD](https://launchpad.net/~freecad-maintainers/+archive/ubuntu/freecad-daily) (последнее только для дистрибутивов на базе Debian).
* Чтобы скомпилировать новейший исходный код, смотри страницу [Компиляция](/Compiling/ru "Compiling/ru").

## Дополнительные модули и макросы

Сообщество FreeCAD предлагает множество различных модулей и макросов. Они могут быть легко установлены напрямую из FreeCAD через ![](/images/Std_AddonMgr.svg) [Менеджер дополнений](/Std_AddonMgr/ru "Std AddonMgr/ru").

Retrieved from "<http://wiki.freecad.org/index.php?title=Download/ru&oldid=1561910>"