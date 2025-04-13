---
title: Start up and Configuration
---
:::caution
In FreeCAD version 0.20 the default location of the program's configuration, data and cache files was changed for Linux.SeeRelease notes 0.20for more information. This page has not yet been updated accordingly.
:::

## Overview

Această pagină prezintă modalitățile diferite de a lansa FreeCAD și cele mai importante funcții de configurare.

## Pornirea FreeCAD din Linia de Comandă

FreeCAD poate fi pornit în mod normal prin dublul clic pe pictograma desktop sau selectând-o din meniul de pornire, dar poate fi pornit și direct din linia de comandă. Aceasta vă permite să modificați unele dintre opțiunile de pornire implicite.

### Using command line options without a command line shell

### Utilizarea opțiunilor din linia de comandă fără coajă de linie de comandă

* Pe Ubuntu puteți crea o pictogramă desktop și puteți edita proprietățile. Adăugați opțiunile din linia de comandă separate prin spații în spatele numelui programului în câmpul "Comandă".
* Pe Windows creați o scurtătură și editați proprietățile. Adăugați opțiunile din linia de comandă separate prin spații în câmpul "Țintă".

### Opțiuni linia de Commandă

Opțiunile din linia de comandă sunt supuse unor modificări frecvente.Astfel, este o idee bună să verificați opțiunile curente introducând:

```
FreeCAD --help

```

Din răspuns puteți citi parametrii posibili:

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

### Response and config files

FreeCAD poate citi unele dintre aceste opțiuni dintr-un fișier de configurare. Acest fișier trebuie să fie în calea bin și trebuie să fie numit FreeCAD.cfg. Rețineți că opțiunile specificate în linia de comandă suprascriu fișierul de configurare!

Unele sisteme de operare au o limită foarte mică de caractere pe linia de comandă. Modul comun de a evita aceste limitări este utilizarea fișierelor de răspuns. Un fișier de răspuns este doar un fișier de configurare care utilizează aceeași sintaxă ca și linia de comandă. Dacă linia de comandă specifică un nume de fișier de răspuns, acesta este încărcat, analizat și se adaugă în plus la de linia de comandă:

```
FreeCAD @ResponseFile.txt 

```

or:

```
FreeCAD --response-file=ResponseFile.txt

```

or:

```
FreeCAD --response-file ResponseFile.txt

```

### Opțiuni ascunse

Există câteva opțiuni care nu sunt vizibile pentru utilizator. Aceste opțiuni sunt de ex. parametrii X-Window analizați de sistemul Windows:

* *-display* - Setează afișarea X (implicit este$DISPLAY).
* *-geometry* - Setează geometria clientului din prima fereastră care este afișată.
* *-fn* or *-font* - Definește fontul aplicației. Fontul trebuie specificat utilizând o descriere a fontului logic X.
* *-bg* or *-background* - Setează culoarea de fundal implicită și o paletă de aplicații (se calculează nuanțe luminoase și întunecate).
* *-fg* or *-foreground* - Definește culoarea implicită a prim-planului.
* *-btn* or *-button* - Definește culoare implicită a butonului.
* *-name* - Definește numele aplicației.
* *-title* - Definește titlul aplicației.
* *-visual* - Forțează aplicația să utilizeze o imagine TrueColor vizuală pe un afișaj pe 8 biți.
* *-ncols* - Limitează numărul de culori alocate în cubul de culoare pe un afișaj pe 8 biți, dacă aplicația folosește QApplication::ManyColor color specification. Dacă numărul este 216, atunci este utilizat un cub colorat de 6x6x6 (adică 6 nivele de roșu, 6 de verde și 6 de albastru); pentru alte valori, este utilizat un cub aproximativ proporțional cu un cub 2x3x1.
* *-cmap* - Determină aplicația de a instala o hartă color privată pe un afișaj pe 8 biți.

## Rularea FreeCAD fără GUI

FreeCAD este de obicei construit cu două executabile: o funcție GUI apelat FreeCAD și o linie de comandă apelat doar FreeCADCmd.
FreeCAD poate fi folosit în modul consolă folosind comutatorul "-c", acesta este comportamentul implicit al FreeCADCmd:

```
FreeCAD --console

```

din linia de comandă. În modul consolă, nu va fi afișată nici o interfață de utilizator și veți primi un prompt de interpretor python. Din acel prompt python, aveți aceeași funcționalitate ca interpretorul python care rulează în interiorul FreeCAD GUI și accesul normal la toate modulele și pluginurile FreeCAD, cu excepția modulului FreeCADGui. Rețineți că modulele care depind de FreeCADGui pot fi, de asemenea, indisponibile.

To read more about console or headless mode, refer to [Headless FreeCAD](/Headless_FreeCAD "Headless FreeCAD").

### Running modules, macros and scripts

| File type | System | Command line example |
| --- | --- | --- |
| Module | Windows | `"C:\Program Files\FreeCAD\bin\FreeCAD.exe" -M "C:\FreeCAD\Mod\Draft"` |
|  | Linux | `FreeCAD_0.19 -M ~/.FreeCAD/Mod/Draft` |
|  | Linux (AppImage) | `path/to/FreeCADXXX.AppImage -M ~/.FreeCAD/Mod/Draft` |
| .FCMacro or .py | Windows | `"C:\Program Files\FreeCAD\bin\FreeCAD.exe" "C:\Users\userName\AppData\Roaming\FreeCAD\Mod\WorkFeature\start_WF.FCMacro"` |
|  | Linux | `FreeCAD_0.19 ~/.FreeCAD/Mod/WorkFeature/start_WF.FCMacro` |
|  | Linux (AppImage) | `path/to/FreeCADXXX.AppImage ~/.FreeCAD/Mod/WorkFeature/start_WF.FCMacro` |

See [Macro at Startup](/Macro_at_Startup "Macro at Startup") on how to set up a macro to automatically run at FreeCAD startup.

## Environment variables

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

Unele biblioteci trebuie să apeleze variabilele mediului sistemului. Uneori, atunci când există o problemă cu o instalare FreeCAD, aceasta se datorează faptului că unele variabile de mediu lipsesc sau sunt setate incorect. Prin urmare, unele variabile importante sunt duplicate în Config și salvate în fișierul jurnal(log file).

**Variabile de mediu Python:**

* PYTHONPATH
* PYTHONHOME
* TCL\_LIBRARY
* TCLLIBPATH

**Variabile de mediu relativ la OpenCascade:**

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

## The Config set

La fiecare pornire, FreeCAD examinează parametrii din jur și cei ai liniei de comandă. Se construiește un **configuration set** care conține esența informațiilor de execuție( runtime). Aceste informații se folosesc mai târziu pentru a determina unde să se salveze datele utilizatorului sau fișierele de jurnal. De asemenea, este foarte important pentru analizele *post-mortem*. Prin urmare, acesta este salvat în fișierul jurnal.

### Informații legate de utilizator

User config entries

| Config var name | Synopsis | Example M$ | Example Posix (Linux) |
| --- | --- | --- | --- |
| UserAppData | Path where FreeCAD stores User Related application data. | C:\Documents and Settings\username\Application Data\FreeCAD | /home/username/.FreeCAD |
| UserParameter | File where FreeCAD stores User Related application data. | C:\Documents and Settings\username\Application Data\FreeCAD\user.cfg | /home/username/.FreeCAD/user.cfg |
| SystemParameter | File where FreeCAD stores Application Related data. | C:\Documents and Settings\username\Application Data\FreeCAD\system.cfg | /home/username/.FreeCAD/system.cfg |
| UserHomePath | Home path of the current user | C:\Documents and Settings\username\My Documents | /home/username |

Note: For Linux distributions, an additional configuration file that relates to [Qt](/Third_Party_Tools#Qt-Toolkit "Third Party Tools") may exist at path /home/username/.config/FreeCAD/FreeCAD.conf.

### Argumentele liniei de Command

User config entries

| Config var name | Synopsis | Example |
| --- | --- | --- |
| LoggingFile | 1 if the logging is switched on | 1 |
| LoggingFileName | File name where the log is placed | C:\Documents and Settings\username\Application Data\FreeCAD\FreeCAD.log |
| RunMode | This indicates how the main loop will work. **"Script"** means that the given script is called and then exit. **"Cmd"** runs the command line interpreter. **"Internal"** runs an internal script. **"Gui"** enters the Gui event loop. **"Module"** loads a given python module. | "Cmd" |
| FileName | Meaning depends on the RunMode |  |
| ScriptFileName | Meaning depends on the RunMode |  |
| Verbose | Verbosity level of FreeCAD | "" or "strict" |
| OpenFileCount | Holds the number of files opened through command line arguments | "12" |
| AdditionalModulePaths | Holds the additional Module paths given in the cmd line | "extraModules/" |

### Sisteme conexe

User config entries

| Config var name | Synopsis | Example M$ | Example Posix (Linux) |
| --- | --- | --- | --- |
| AppHomePath | Path where FreeCAD is installed | c:/Progam Files/FreeCAD\_0.7 | /user/local/FreeCAD\_0.7 |
| PythonSearchPath | Holds a list of paths which python search modules. This is at startup can change during execution |  |  |

### Construirea de informații conexe

Tabelul de mai jos prezintă informațiile disponibile despre versiunea disponibilă Build. Cea mai mare parte a lor provine din depozitul Subversion. Acest truc este necesar pentru a reconstrui exact o versiune!

User config entries

| Config var name | Synopsis | Example |
| --- | --- | --- |
| BuildVersionMajor | Major Version number of the Build. Defined in src/Build/Version.h.in | 0 |
| BuildVersionMinor | Minor Version number of the Build. Defined in src/Build/Version.h.in | 7 |
| BuildRevision | SVN Repository Revision number of the src in the Build. Generated by SVN | 356 |
| BuildRevisionRange | Range of different changes | 123-356 |
| BuildRepositoryURL | Repository URL | <https://free-cad.svn.sourceforge.net/svnroot/free-cad/trunk/src> |
| BuildRevisionDate | Date of the above Revision | 2007/02/03 22:21:18 |
| BuildScrClean | Indicates if the source was changed after checkout | Src modified |
| BuildScrMixed |  | Src not mixed |

### Branding related

Aceste intrări de configurare sunt legate de mecanismul de branding al FreeCAD. Consultați [Branding](/Branding "Branding") pentru mai multe informații.

User config entries

| Config var name | Synopsis | Example |
| --- | --- | --- |
| ExeName | Name of the build Executable file. Can differ from FreeCAD if a different main.cpp is used. | FreeCAD.exe |
| ExeVersion | Over all Version shows up at start time | V0.7 |
| AppIcon | Icon which is used for the Executable, shows in Application MainWindow. | "FCIcon" |
| ConsoleBanner | Banner which is prompted in console mode |  |
| SplashPicture | Name of the Icon used for the Splash Screen | "FreeCADSplasher" |
| SplashAlignment | Alignment of the Text in the Splash dialog | "Bottom" or "Left" |
| SplashTextColor | Color of the splasher Text | "#000000" |
| StartWorkbench | Name of the Workbench which get started automatically after Startup | "Part design" |
| HiddenDockWindow | List of dockwindows (separated by a semicolon) which will be disabled | "Property editor" |

### Querying the configuration

**From FreeCAD's Python console**

Entries of the configuration set can be queried with the **config var name** (see tables above) from the [Python console](/Python_console "Python console"). For example:

```
 >>> FreeCAD.ConfigGet("ExeVersion")
 '0.19'

```

If the name is not found, an empty string is returned.

**From command line**

Use the `--get-config <config-var-name>` option to query a single name. Not all names are supported. For example:

```
 FreeCAD --get-config ExeVersion

```

Use the `--dump-config` option to get a list of names and their values. Not all names are supported.

**From FreeCAD console**

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Start_up_and_Configuration/ro&oldid=1501148>"