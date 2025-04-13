---
title: Запуск и Конфигурирование
---
:::caution
In FreeCAD version 0.20 the default location of the program's configuration, data and cache files was changed for Linux.SeeRelease notes 0.20for more information. This page has not yet been updated accordingly.
:::

## Overview

## Обзор

На этой странице показаны различные способы запуска FreeCAD и наиболее важные особенности конфигурации.

## Запуск FreeCAD из командной строки

FreeCAD может быть запущен, как правило, двойным щелчком по иконке на рабочем столе или выбором в стартовом меню, его также можно запустить напрямую из командной строки. Это позволяет вам изменять при запуске некоторые параметры по умолчанию.

### Using command line options without a command line shell

### Использование опций командной строки без оболочки командной строки

* В Ubuntu Вы можете создать иконку на десктопе (это будет файл формата XDG с расширением .desktop) и редактировать её параметры. Добавьте опции командной строки, разделённые пробелами, после имени программы в поле "Command".
* В Windows создайте ссылку и редактируйте её параметры. Добавьте разделённые пробелами опции командной строки в поле "Target".

### Параметры командной строки

Параметры командной строки часто меняются. Следовательно, будет отличной идей проверить текущие опции, введя:

```
FreeCAD --help

```

Из появившегося ответа вы можете прочесть назначение параметров:

```
 Usage: FreeCAD [options] File1 File2 ...
 
 Allowed options:
 
 Generic options:
   -v [ --version ]          Prints version string
   --verbose                 Prints verbose version string
   -h [ --help ]             Prints help message
   -c [ --console ]          Starts in console mode
   --response-file arg       Can be specified with '@name', too
   --dump-config             Dumps configuration
   --get-config arg          Prints the value of the requested configuration key
   --set-config arg          Sets the value of a configuration key
   --keep-deprecated-paths   If set then config files are kept on the old 
                             location
 
 Configuration:
   -l [ --write-log ]        Writes FreeCAD.log to the user directory.
   --log-file arg            Unlike --write-log this allows logging to an 
                             arbitrary file
   -u [ --user-cfg ] arg     User config file to load/save user settings
   -s [ --system-cfg ] arg   System config file to load/save system settings
   -t [ --run-test ] arg     Run a given test case (use 0 (zero) to run all 
                             tests). If no argument is provided then return list
                             of all available tests.
   -r [ --run-open ] arg     Run a given test case (use 0 (zero) to run all 
                             tests). If no argument is provided then return list
                             of all available tests.  Keeps UI open after 
                             test(s) complete.
   -M [ --module-path ] arg  Additional module paths
   -P [ --python-path ] arg  Additional python paths
   --single-instance         Allow to run a single instance of the application
   --safe-mode               Force enable safe mode
   --pass arg                Ignores the following arguments and pass them 
                             through to be used by a script

```

In the following table, selected options are described in more detail:

| Long option | Corresponding [config var name](#Configuration_set) | Synopsis |
| --- | --- | --- |
| `--user-cfg <filename>` | UserParameter | Filename or relative path that ends with a filename. Defaults to `user.cfg`. |
| `--module-path <dir>` | Prepends to AdditionalModulePaths | Directory that contains modules. This option can be given repeatedly to specify multiple directories. |
| `--get-config <config-var-name>` | most | Outputs the requested value in a popup dialog. Exits upon confirmation with OK. Cannot be used repeatedly. If an unknown/illegal variable name is used, the response is empty. The `--console` flag is not honored. |

Options can written in two forms: `--long-option arg` and `--long-option=arg`.

### Файлы конфигурации и ответов(response)

FreeCAD может считать некоторые параметры из конфигурационного файла. Этот файл должен находится в пути bin и должен называться FreeCAD.cfg. Помните, у параметров командной строки приоритет над конфигурационным файлом!

Некоторые операционные системы имеют очень лимитированную по символам командную строку. Чтобы обойти это ограничение используют обычно файлы ответов. Файл ответов - это просто конфигурационный файл, который использует синтаксис командной строки. Если в командной строке указан файл ответов, он загружается и обрабатывается как дополнение к командной строке:

```
FreeCAD @ResponseFile.txt 

```

или:

```
FreeCAD --response-file=ResponseFile.txt

```

или:

```
FreeCAD --response-file ResponseFile.txt

```

### Скрытые опции

Существует несколько параметров не видных пользователю. Эти параметры такие как X-Window параметры, анализируются оконной системой:

* -display display, устанавливает значение X дисплея (по умолчанию это $DISPLAY).
* -geometry geometry, устанавливает клиент геометрии первое окно что отображается.
* -fn или -font font, определяет шрифт приложения. Шрифт должен быть указан используя X логическо описание шрифта.
* -bg или -background color, устанавливает цвет фона по умолчанию и палитру приложения (рассчитываются темные и светлые оттенки).
* -fg или -foreground color, устанавливает цвет по умолчанию переднего плана.
* -btn или -button color, устанавливает цвет по умолчанию для кнопок.
* -name name, устанавливает имя приложения.
* -title title, устанавливает заголовок приложения.
* -visual TrueColor, заставляет приложение использовать TrueColor визуальное отображение на 8-битном дисплее.
* -ncols count, граничивает число цветов выделенных в цветовой куб на 8-битном дисплее, если приложение использует QApplication::ManyColor цветовую спецификацию. Если количество 216 то используется цветовой куб 6x6x6 (т.е. 6 уровней красного, 6 зеленого, и 6 синего); для остальных значений, используется куб пропорциональный 2x3x1.
* -cmap, вызывает приложение для установки вашей карты цветов на 8-битном дисплее.

## Запуск FreeCAD без Графического Интерфейса

FreeCAD обычно компилируется в два исполняемых файла: с графическим интерфейсом, FreeCAD, и только с командной строкой, FreeCADCmd. FreeCAD может запускаться в консольном режиме с помощью ключа "-c", для FreeCADCmd это поведение по умолчанию:

```
FreeCAD --console

```

в командной строке. В консольном режиме, не будет отображаться пользовательский интерфейс, а вам будет предоставлена строка интерпретатора python. С помощью командной строки python, вы обладаете той же функциональностью, что и интерпретатором python, запущенном внутри FreeCAD GUI, и обладаете доступом ко всем модулям и плагинам FreeCAD, исключая модуль FreeCADGui. Имейте в виду, что модули, зависящие от FreeCADGui, также могут быть недоступны.

To read more about console or headless mode, refer to [Headless FreeCAD](/Headless_FreeCAD "Headless FreeCAD").

### Пример выполнения файла

Конфигурация командной строки для выполнения файла

| Выполнить файл | Система | Конфигурация командной строки |
| --- | --- | --- |
| Module, cfg | Windows | "C:\Program Files\FreeCAD\bin\FreeCAD.exe" -M "C:\FreeCAD\Mod\Draft" -u "C:\FreeCAD\Config\user.cfg" -s "C:\FreeCAD\Config\system.cfg" |
|  | Linux | todo |
| .FCMacro or .py | Windows | "C:\Program Files\FreeCAD\bin\FreeCAD.exe" "C:\Users\userName\AppData\Roaming\FreeCAD\Mod\WorkFeature\start\_WF.FCMacro" |
|  | Linux | todo |
| Как установить макрос для автоматического запуска при старте FreeCAD | Windows / Linux / Mac | Смотри как установить макрос для автоматического запуская во время старта FreeCAD, на странице [Макрос при старте](/Macro_at_Startup/ru "Macro at Startup/ru"). |

See [Macro at Startup](/Macro_at_Startup "Macro at Startup") on how to set up a macro to automatically run at FreeCAD startup.

## Переменные Среды Окружения

FreeCAD supports the following environment variables, which can be used to configure directories: [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

| Environment variable | Corresponding [config var name](#Configuration_set) | Synopsis |
| --- | --- | --- |
| `FREECAD_USER_HOME` | UserHomePath | FreeCAD's "base" directory for keeping local user data. |
| `FREECAD_USER_DATA` | UserAppData | If not set, defaults to `FREECAD_USER_HOME/.FreeCAD`, but only if `FREECAD_USER_HOME` is set. |
| `FREECAD_USER_TEMP` | AppTempPath | If not set, defaults to `FREECAD_USER_HOME/temp`, but only if `FREECAD_USER_HOME` is set. |

If the specified path does not exist, the setting is ignored!

The above environment variables are meant to be used to realize a *portable* FreeCAD environment. For an example how environment variables can be used from the command line on Linux refer to the [notes for Linux users on the downloads page](/Download#Notes_for_GNU.2FLinux_users "Download").

### `HOME`

FreeCAD uses [Qt](/Third_Party_Libraries#Qt "Third Party Libraries"), which does honor the `HOME` environmental variable. Thus, setting `HOME` can be used to specify the base directory of Qt-related configuration files (`.config/FreeCAD/FreeCAD.conf`).

FreeCad itself does not honor the `HOME` environmental variable (because it determines the user's home directory from a lower-level system API). Use `FREECAD_USER_HOME` for this pupose.

### `TMPDIR`

The default temporary directory is /tmp/. The `TMPDIR` environmental variable can be used to override the default. (*Editor: precedence?*).

### Libraries

Некоторые библиотеки нуждаются в вызове системных переменных. Иногда когда возникают проблемы с установкой FreeCAD , потому что некоторые переменные отсутствуют или установлены неправильно. Таким образом, некоторые важные переменные дублируются в Config и сохраняются в журнале(log file).

**Python**

* PYTHONPATH
* PYTHONHOME
* TCL\_LIBRARY
* TCLLIBPATH

**OpenCascade**

* CSF\_MDTVFontDirectory
* CSF\_MDTVTexturesDirectory
* CSF\_UnitsDefinition
* CSF\_UnitsLexicon
* CSF\_StandardDefaults
* CSF\_PluginDefaults
* CSF\_LANGUAGE
* CSF\_SHMessage
* CSF\_XCAFDefaults
* CSF\_GraphicShr
* CSF\_IGESDefaults
* CSF\_STEPDefaults

## Конфигурационные параметры

При каждом запуске FreeCAD проверяет своё окружение и параметры командной строки. Он выстраивает **конфигурационный набор** который хранит суть о процессе выполнения программы (runtime information). Эта информация позже используется для определения места где сохранены пользовательские данные или файлы логов. Это также важно для анализа после крушения программы. Поэтому она сохраняется в лог файле (журнале).

### Пользовательская информация

Записи пользовательской конфигурации

| Имя конф. переменной | Краткий обзор | Пример для M$ | Пример для Posix (Linux) |
| --- | --- | --- | --- |
| UserAppData | Путь где FreeCAD хранит пользовательские данные программы. | C:\Documents and Settings\username\AppData\FreeCAD  ---  *Short path :* %APPDATA%\FreeCAD | /home/username/.FreeCAD  ---  *Short path :* ~/.FreeCAD |
| UserParameter | Файл где FreeCAD хранит пользовательские данные программы. | C:\Documents and Settings\username\AppData\FreeCAD\user.cfg  ---  *Short path :* %APPDATA%\FreeCAD\user.cfg | /home/username/.FreeCAD/user.cfg  ---  *Short path :* ~/.FreeCAD/user.cfg |
| SystemParameter | Файл где FreeCAD хранит данные программы. | C:\Documents and Settings\username\AppData\FreeCAD\system.cfg  ---  *Short path :* %APPDATA%\FreeCAD\system.cfg | /home/username/.FreeCAD/system.cfg  ---  *Short path :* ~/.FreeCAD/system.cfg |
| UserHomePath | Домашняя папка текущего пользователя. | C:\Documents and Settings\username  ---  *Short path :* %USERPROFILE% | /home/username  ---  *Short path :* ~ |

Note: For Linux distributions, an additional configuration file that relates to [Qt](/Third_Party_Tools#Qt-Toolkit "Third Party Tools") may exist at path /home/username/.config/FreeCAD/FreeCAD.conf.

### Аргументы командной строки

Записи пользовательской конфигурации

| Имя конф. переменной | Краткий обзор | Пример |
| --- | --- | --- |
| LoggingFile | 1 если ведение журнала включено | 1 |
| LoggingFileName | Имя файла куда помещен журнал | C:\Documents and Settings\username\AppData\FreeCAD\FreeCAD.log |
| RunMode | Это показывает, как будет работать основной цикл. **"Script"** означает что данный сценарий вызывается, а затем выходит. **"Cmd"** запускает командную строку интепритатора. **"Internal"** запускает внутренний сценарий. **"Gui"** входит в цикл Gui событий. **"Module"** загружается как python модуль. | "Cmd" |
| FileName | Значение зависит от RunMode |  |
| ScriptFileName | Значение зависит от RunMode |  |
| Verbose | Уровень детализации сообщений в FreeCAD | "" or "strict" |
| OpenFileCount | Содержит количество файлов, открытых через аргументы командной строки | "12" |
| AdditionalModulePaths | Содержит дополнительные Пути к модулям заданных в командной строке | "extraModules/" |

### Связанные с системой

Записи пользовательской конфигурации

| Имя конф. переменной | Краткий обзор | Пример для M$ | Пример для Posix (Linux) |
| --- | --- | --- | --- |
| AppHomePath | Путь куда установлен FreeCAD | c:/Progam Files/FreeCAD\_0.7 | /user/local/FreeCAD\_0.7 |
| PythonSearchPath | Содержит список путей для поиска модулей python. Начальная конфигурация может изменятся во время выполнения программы |  |  |

### Информация связанная со Сборкой

Приведенная ниже таблица показывает доступную информацию о версии сборки. Большая часть её взята из хранилища Subversion. Этот материал нужен, чтобы точно восстановить версию!

Записи пользовательской конфигурации

| Имя конф. переменной | Краткий обзор | Пример |
| --- | --- | --- |
| BuildVersionMajor | Основной номер версии Сборки. Задан в src/Build/Version.h.in | 0 |
| BuildVersionMinor | Малый номер версии Сборки. Задан в src/Build/Version.h.in | 7 |
| BuildRevision | Номер ревизии исходных кодов в хранилище SVN в Build. Генерируется SVN | 356 |
| BuildRevisionRange | Диапазон различных изменений | 123-356 |
| BuildRepositoryURL | URL Хранилища | <https://free-cad.svn.sourceforge.net/svnroot/free-cad/trunk/src> |
| BuildRevisionDate | Дата упомянутой ревизии | 2007/02/03 22:21:18 |
| BuildScrClean | Показывает, были ли исходные коды изменены после синхронизации | Src modified |
| BuildScrMixed |  | Src not mixed |

### Связанная с Брендированием

Это конфигурационные записи связанные с механизмом брендинга FreeCAD. Смотри [Брендинг](/Branding/ru "Branding/ru") для более подробной информации.

Записи пользовательской конфигурации

| Имя конф. переменной | Краткий обзор | Пример |
| --- | --- | --- |
| ExeName | Название собранного исполняемого файла. Может запускаться из FreeCAD если используются различные main.cpp. | FreeCAD.exe |
| ExeVersion | Переопределённая версия, показываемая во время запуска | V0.7 |
| AppIcon | Иконка исполняемого файла, показывается в главном окне приложения. | "FCIcon" |
| ConsoleBanner | Баннер, выводимый в консольном режиме |  |
| SplashPicture | Название изображения используемого в качестве заставки | "FreeCADSplasher" |
| SplashAlignment | Alignment of the Text in the Splash dialog | "Bottom" or "Left" |
| SplashTextColor | Выравнивание текста в окне заставки | "#000000" |
| StartWorkbench | Название верстака, автоматически открывающегося при запуске приложения | "Part design" |
| HiddenDockWindow | Список панелей (разделенный запятой), которые будут отключены | "Property editor" |

### Querying the configuration

**From FreeCAD's Python console**

Entries of the configuration set can be queried with the **config var name** (see tables above) from the [Python console](/Python_console "Python console"). For example:

```
 >>> FreeCAD.ConfigGet("ExeVersion")
 '0.19'

```

If the name is not found, an empty string is returned.

**Из командной строки**

Use the `--get-config <config-var-name>` option to query a single name. Not all names are supported. For example:

```
 FreeCAD --get-config ExeVersion

```

Use the `--dump-config` option to get a list of names and their values. Not all names are supported.

**Из консоли FreeCAD**

Start FreeCAD in console mode with `--console` and query with Python code. For example:

```
 $ FreeCAD --console
 [FreeCAD Console mode <Use Ctrl-D (i.e. EOF) to exit.>]
 >>> FreeCAD.ConfigGet("ExeVersion")
 '0.19'
 >>> exit()

```

For Linux (bash shell) you can modify the following command line to suit your needs:

```
 $ FreeCAD --console <<EOF
 print( "FREECAD_USER_HOME: " + ( "not set" if ( os.environ.get('FREECAD_USER_HOME') is None ) else os.environ.get('FREECAD_USER_HOME') ) )
 print( "UserHomePath: " + FreeCAD.ConfigGet("UserHomePath") )
 exit()
 EOF

```

## Starting FreeCAD from the desktop

### Linux: Creating an additional start option

The following assumes that your desktop is configured such that you can launch FreeCAD from it. Depending on your Linux distribution and desktop environment, you may have to adapt the following steps:

1. Copy the freedesktop entry file for FreeCAD from /usr/share/applications/freecad.desktop to ~/.local/share/applications.
2. Change the name from freecad.desktop to something else (e.g. MyFreeCADConfig.desktop).
3. Open the file with a text editor and change how FreeCAD is invoked by modifying the line starting with `Exec`.
4. As a result, an additional entry in your start menu/application launcher is available. This way, you can have multiple FreeCAD entries with various launch options.

## Starting FreeCAD from a portable USB medium

**Windows**

Put the FreeCAD executable, FreeCAD.exe, on the USB medium. Create a batch file, FreeCAD.bat, and put it into the same directory as FreeCAD.exe. Inside the batch file write:

```
set CURRENTDIR=%cd%
set FREECAD_USER_HOME=%CURRENTDIR%
start FreeCAD.exe -u FreeCAD/user.cfg -s FreeCAD/system.cfg --write-log

```

Or with `FREECAD_USER_DATA` ([see](https://forum.freecadweb.org/viewtopic.php?f=12&t=54784&start=60#p474759)):

```
set CURRENTDIR="%cd%"
set FREECAD_USER_DATA=%CURRENTDIR%/..
start FreeCAD.exe -u %FREECAD_USER_DATA%/user.cfg -s %FREECAD_USER_DATA%/system.cfg

```

With the batch in the root of the USB medium:

```
set CURRENTDIR=%cd%
set FREECAD_USER_DATA=%CURRENTDIR%FreeCAD\
start %cd%FreeCAD\bin\FreeCAD.exe -u %FREECAD_USER_DATA%user.cfg -s %FREECAD_USER_DATA%system.cfg

```

Now double-click the batch file to start FreeCAD. ([see](https://forum.freecadweb.org/viewtopic.php?f=4&t=49028))

Retrieved from "<http://wiki.freecad.org/index.php?title=Start_up_and_Configuration/ru&oldid=1501145>"