---
title: Cum se instalează Ateliere suplimentare
---
|  |
| --- |
| Tutorial |
| Topic |
| Programming |
| Level |
| Medium programmer |
| Time to complete |
| 15 minutes |
| Authors |
| [r-frank](/User:R-Frank "User:R-Frank") |
| FreeCAD version |
| All |
| Example files |
| *None* |
| See also |
| *None* |
|  |

## Description

## Descriere

Utilizatorii Power au extins FreeCAD cu diferite Ateliere de lucru externe personalizate, care nu sunt integrate în codul sursă al FreeCAD (încă!),
dar sunt ușor de instalat pe un FreeCAD instalat deja. Aici vom acoperi metodele de instalare pentru diferite sisteme de operare.

**Notă** Începând cu versiunea 0.17, FreeCAD dispune de un manager addon din meniul Instrumente, care vă permite să instalați cu ușurință o serie de Ateliere externe. Instrucțiunile de mai jos sunt necesare numai dacă executați o versiune anterioară, sau dacă doriți să instalați un Ateliere de lucru care nu se află în lista oferită de managerul de aplicații.

## Instalarea sub Windows

How to install additional workbenches and addons on Windows

### Manual Install

**Metodă de instalare Alternativă “manual install”**

* download the workbench from github by clicking on the button “clone or download” on the github page (upper right corner) and choosing "Download ZIP"
* unpack the downloaded archive on your local hard disk
* within FreeCAD, locate the macro path by choosing “Edit > Preferences > General > Macro” and look for the ”Macro path”
* supposed your Windows-Login is “User-Name” the default macro path is “C:\User-Name\Appdata\Roaming\FreeCAD”
* within the macro-directory create (if not already present) a folder called “Mod”
* within the folder mod create a folder with the name of the workbench, for example “Assembly2”
* now move the unpacked files and sub-folders of the workbench to the just created workbench-folder
* after restart of FreeCAD you should now have an entry in the workbench-pulldown-menu

**Additional Recommendation for upating workbenches**

Sub windows, atunci când se actulizează un atelier deja instalat, Windows păstrează vechile fișiere .py ca fișiere .pyc.  
Deoarece acest lucru poate duce la probleme, este recomandat să dezinstalați atelierul de lucru, să reporniți FreeCAD și să instalați  
noua versiune de atelier.

## Instalare sub Linux (Ubuntu/Mint)

How to install additional workbenches and addons on Linux

### Using git

Adăugând [community-ppa](https://launchpad.net/~freecad-community/+archive/ubuntu/ppa) în interiorul ppa-manager.  
Instalarea atelierelor via manager packet.

```
$ sudo apt-get install git python-numpy python-pyside
$ mkdir ~/.FreeCAD/Mod
$ cd ~/.FreeCAD/Mod
$ git clone https://github.com/hamish2014/FreeCAD_assembly2.git

```

FreeCAD va avea acum o nouă intrare de lucru numită "Assembly 2". Odată instalată, utilizați git pentru a face upgrade la ultima versiune prin BASH după cum urmează

```
$ cd ~/.FreeCAD/Mod/FreeCAD_assembly2
$ git pull
$ rm *.pyc

```

### Manual Installation

**Metosă de instalare Alternativă “manual install”**

* descărcați atelierul de lucru de la github făcând clic pe butonul "clona sau descărca" pe pagina github (colțul din dreapta sus) și selectând "Download ZIP"
* unpack the downloaded archive on your local hard disk
* within FreeCAD, locate the macro path by choosing “Edit > Preferences > General > Macro” and look for the ”Macro path”
* by default, the macro directory is the (hidden) "/.FreeCAD"-directory in your home-directory
* within the macro-directory create (if not already present) a folder called “Mod”
* within the folder "mod" create a folder with the name of the workbench, for example “Assembly2”
* now move the unpacked files and sub-folders of the workbench to the just created workbench-folder
* după repornirea programului FreeCAD, trebuie să aveți acum o intrare în meniul derulant al atelierului de lucru

## Instalarea pe Mac

How to install additional workbenches and addons on macOS

### Manual Installation

*Note:* This method is possible but not necessary with the introduction of the [Addon Manager](/Std_AddonMgr "Std AddonMgr"). Nevertheless, the information here may still be useful to some.

**Alternative installation method “manual install”** - aici este o descriere a atelierului "assembly2"

* download the git repository as ZIP
* assuming FreeCAD is installed in "/Applications/FreeCAD/v0.15", go to "/Applications/FreeCAD/v0.15" in the Browser, and select FreeCAD.app
* right-click and select "Show Package Contents", a new window will appear with a folder named "Contents"
* single-click on the folder "Contents" and select the folder "Mod"
* in the folder "Mod" create a new folder named "assembly2"
* dezarhivați depozitul descărcat în dosarul "Contents/Mod/assembly2"

## Depanare Generală

* Nu utilizați caractere speciale (de exemplu, în germană umlauts) în numele dvs. de utilizator Windows, altfel FreeCAD nu va recunoaște fișierele și folderele în calea macrocomenzii
* If you have already set up a user name with special characters either create a new user name or point the macro path to a directory not using special characters
* Workbench still not showing up ? In FreeCAD, choose “Tools > Customize > Workbenches” and make sure it is not set to invisible
* **Notes for users with 32-bit system and FreeCAD 0.16.6706** . After attempts to install, the additional Workbenches may not be available. In this case
  + hold the Report panel open while starting FreeCAD, and read the error
  + urmăriți firul discuțiilor pe forumul acesta: <http://forum.freecadweb.org/viewtopic.php?t=12839#p102933>

Retrieved from "<http://wiki.freecad.org/index.php?title=How_to_install_additional_workbenches/ro&oldid=1296803>"