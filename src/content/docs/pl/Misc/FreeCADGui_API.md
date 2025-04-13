---
title: Skrypty FreeCAD GUI
---
:::caution
(Październik 2019)Nie edytuj tych stron. Informacje są niekompletne i nieaktualne. Najnowsze API można znaleźć wautomatycznie generowana dokumentacja API, lub wygenerować dokumentację samodzielnie, śledząc dokumentDokumentacja źródłowa.
:::

Moduł ten jest odpowiednikiem modułu FreeCAD. Zawiera wszystko co jest związane z interfejsem użytkownika i widokami 3D. Przykład:

```
import FreeCAD as App
import FreeCADGui as Gui

# get the 3D model document
doc = App.ActiveDocument    

# get the visual representation model document
gui_doc = Gui.ActiveDocument

gui_doc.activateWorkbench("myWorkbench")

```

![](/images/Method.png) **activateWorkbench(***string***)**

**Description**: aktywuje stanowisko pracy według nazwy

**Returns**: nothing

![](/images/Method.png) **activeDocument(****)**

**Description**:

**Returns**: aktywny dokument lub Brak, jeśli nie istnieje

![](/images/Method.png) **activeWorkbench(****)**

**Description**:

**Returns**: aktywny obiekt środowiska pracy

![](/images/Method.png) **addCommand(***string, object***)**

**Description**: dodaje polecenie FreeCAD. String jest nazwą polecenia, a object jest nazwą klasy definiującej polecenie.

**Returns**:

![](/images/Method.png) **addIcon(***string, string or list***)**

**Description**: dodaje do systemu ikonę w postaci nazwy pliku lub w formacie XPM

**Returns**:

![](/images/Method.png) **addIconPath(***string***)**

**Description**: dodaje nową ścieżkę do systemu, gdzie mają znajdować się pliki ikon

**Returns**:

![](/images/Method.png) **addPreferencePage(***string,string***)**

**Description**: dodaje formularz UI do okna dialogowego preferencji. Pierwszy argument określa nazwę pliku, a drugi nazwę grupy.

**Returns**:

![](/images/Method.png) **addWorkbench(***string, object***)**

**Description**: dodaje środowisko pracy pod określoną nazwą. String jest nazwą środowisko pracy, a object jest nazwą klasy definiującej to środowisko pracy.

**Returns**:

![](/images/Method.png) **createDialog(***string***)**

**Description**: otwiera plik UI

**Returns**:

![](/images/Method.png) **getDocument(***string***)**

**Description**: pobiera dokument według jego nazwy

**Returns**: the document

![](/images/Method.png) **getWorkbench(***string***)**

**Description**: pobiera środowisko pracy według jego nazwy

**Returns**: the workbench

![](/images/Method.png) **insert(***string***)**

**Description**: otwiera plik makrodefinicji, Inventor lub VRML

**Returns**: the document

![](/images/Method.png) **listWorkbenches(****)**

**Description**: wyświetla listę wszystkich środowisk pracy

**Returns**: a list

![](/images/Method.png) **open(***string***)**

**Description**: otwiera plik makrodefinicji, Inventor lub VRML

**Returns**: the openend document

![](/images/Method.png) **removeWorkbench(***string***)**

**Description**: usuwa środowisko pracy według nazwy

**Returns**:

![](/images/Method.png) **runCommand(***string***)**

**Description**: uruchamia polecenie FreeCAD według nazwy

**Returns**:

![](/images/Method.png) **updateGui(****)**

**Description**: aktualizuje okno główne i wszystkie jego okna

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCADGui_API/pl&oldid=897060>"