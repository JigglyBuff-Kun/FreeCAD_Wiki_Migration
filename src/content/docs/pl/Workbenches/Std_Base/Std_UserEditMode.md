---
title: Std Tryb edycji użytkownika
---
|  |
| --- |
| Std: Tryb edycji |
| Lokalizacja w menu |
| Edycja → Przełącz tryb edycji → ... |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.20 |
| Zobacz także |
| [Edycja](/Std_Edit/pl "Std Edit/pl") |
|  |

## Opis

Polecenie **Std: Tryb edycji użytkownika** definiuje tryb edycji, który będzie używany, gdy dwukrotnie kliknie się na obiekt w [widoku drzewa](/Tree_view/pl "Tree view/pl").

## Użycie

1. W menu głównym przejdź do **Edycja → Przełącz tryb Edycji** i wybierz tryb edycji.

## Dostępne tryby edycji

### Domyślny

Obiekt będzie edytowany w trybie domyślnym. Ten tryb edycji jest zdefiniowany wewnętrznie jako najbardziej odpowiedni dla typu obiektu. Na przykład, będzie to edycja właściwości kształtu dla [brył pierwotnych](/Part_Primitives/pl "Part Primitives/pl") środowiska Część i [cech](/PartDesign_Feature/pl "PartDesign Feature/pl") środowiska Projekt Części, edycja umiejscowienia dla [operacji logicznych](/Part_Boolean "Part Boolean") środowiska Część, itd.

### Przemieszczenie

Obiekt będzie miał swoje umiejscowienie, które można edytować za pomocą polecenia [Std: Przemieszczenie](/Std_TransformManip "Std TransformManip").

### Cięcie

Ten tryb edycji jest zaimplementowany jako dostępny, ale obecnie nie wydaje się być używany przez żaden obiekt.

### Kolor

Obiekt będzie miał kolor poszczególnych ścian, który można edytować za pomocą polecenia [Kolor powierzchni](/Part_ColorPerFace/pl "Part ColorPerFace/pl").

## Uwagi

* Nie wszystkie obiekty obsługują dostępne tryby edycji. Jeśli wybrany tryb nie jest obsługiwany przez obiekt, zostanie użyty jego domyślny tryb edycji.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby wyświetlić listę dostępnych trybów edycji:

```
import FreeCADGui
FreeCADGui.listUserEditModes()

```

Aby przejść do aktywnego trybu edycji:

```
import FreeCADGui
FreeCADGui.getUserEditMode()

```

Aby ustawić aktywny tryb edycji:

```
import FreeCADGui
FreeCADGui.setUserEditMode(MODENAME)  # Where MODENAME is a string available in the list of edit modes

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_UserEditMode/pl&oldid=1496513>"