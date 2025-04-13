---
title: Insrumentul de construcție al FreeCAD
---
Instrumentul de construcție **FreeCAD build tool** sau **fcbt** este un script python localizat la:

```
trunc/src/Tools/fcbt.py

```

Acesta poate fi folosit pentru a simplifica unele sarcini frecvente în construirea, distribuirea și extinderea FreeCAD.

## Utilizare

Cu [Python](http://en.wikipedia.org/wiki/Python_(programming_language) "wikipedia:Python (programming language)") corect instalat, *fcbt* can poate fi invocat prin comanda

```
python fbct.py

```

Afișează un meniu, unde puteți selecta următoarele:

```
FreeCAD Build Tool
 Usage:
    fcbt <command name> [command parameter]
 possible commands are:
  - DistSrc         (DS)   Build a source Distr. of the current source tree
  - DistBin         (DB)   Build a binary Distr. of the current source tree
  - DistSetup       (DI)   Build a Setup Distr. of the current source tree
  - DistSetup       (DUI)  Build a User Setup Distr. of the current source tree
  - DistAll         (DA)   Run all three above modules
  - NextBuildNumber (NBN)  Increase the Build Number of this Version
  - CreateModule    (CM)   Insert a new FreeCAD Module (Workbench) in the module directory
 
 For help on the modules type:
   fcbt <command name> ?

```

La promptul de introducere introduceți comanda abreviată pe care doriți să o apelați. De exemplu, tastați "CM" pentru crearea unui modul [creating a workbench](/Workbench_creation/ro "Workbench creation/ro").

### DistSrc

Comanda "DS" **creează sursa de distribuire** a arborelui sursă curent

### DistBin

Comanda "DB" **creează o distribuție binară**  a arborelui sursă curent.

### DistSetup

Comanda "DI" **creează o distribuție de instalare a arborelui sursă curent.**

### DistSetup

Comanda "DUI" **creează o distribuție de configurare utilizator a arborelui sursă curent.**

### DistAll

Comanda "DA" execută secvența "DS", "DB" and "DI" .

### NextBuildNumber

Comanda "NBN" **incrementează numărul de compilări pentru a crea noua veresiiune FreeCAD.**

### CreateModule

Comanda "CM" [creates a new application module (Workbench)](/Workbench_creation/ro "Workbench creation/ro").

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_Build_Tool/ro&oldid=1061637>"