---
title: FreeCAD Build Tool
---
**FreeCAD byggverktyg** eller **fcbt** är ett pythonskript placerat i

```
trunc/src/Tools/fcbt.py

```

Det kan användas till att förenkla en del frekventa uppgifter vid byggande, distribution och utökning av FreeCAD.

## Bruk

Med [[Python](http://sv.wikipedia.org/wiki/Python_(programspråk))] korrekt installerat, så kan *fcbt* startas med kommandot

```
python fbct.py

```

det visar en meny, där du kan välja den uppgift som du vill använda den till:

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

Mata vid inmatningsprompten in det förkortade kommandot som du vill använda. Skriv till exempel "CM" för [Skapa en modul](/Module_Creation/sv "Module Creation/sv").

### DistSrc

Kommandot "DS" **skapar en källdistribution** från det gällande källträdet.

### DistBin

Kommandot "DB" **skapar en binär distribution** från det gällande källträdet.

### DistSetup

Kommandot "DI" **skapar en setup distribution** från det gällande källträdet.

### DistSetup

Kommandot "DUI" **skapar en användar setup distribution från det gällande källträdet.**

### DistAll

Kommandot "DA" utför "DS", "DB" och "DI" i sekvens.

### NextBuildNumber

Kommandot "NBN" **ökar byggnumret** för att skapa en ny släppversion av FreeCAD.

### CreateModule

Kommandot "CM" [skapar en ny applikationsmodul](/Module_Creation/sv "Module Creation/sv").

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_Build_Tool/sv&oldid=947329>"