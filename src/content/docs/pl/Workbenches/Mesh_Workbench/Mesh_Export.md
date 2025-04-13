---
title: Siatka Eksport
---
|  |
| --- |
| Siatka: Eksportuj |
| Lokalizacja w menu |
| Siatki → Eksportuj siatkę ... |
| Środowisko pracy |
| [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Eksport](/Std_Export/pl "Std Export/pl"), [Import Eksport](/Import_Export/pl "Import Export/pl") |
|  |

## Opis

Polecenie **Eksportuj siatkę ...** eksportuje obiekt siatkowy do formatu pliku siatkowego. Obsługiwanych jest kilka formatów plików.

## Użycie

1. Wybierz pojedynczy obiekt siatki.
2. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Mesh_Export.svg) **Eksportuj siatkę ...**.
   * Wybierz opcję z menu **Siatki → ![](/images/Mesh_Export.svg) Eksportuj siatkę ...**.
   * Wybierz opcję **![](/images/Mesh_Export.svg) Eksportuj siatkę ...** z menu kontekstowego okna [Widoku drzewa](/Tree_view/pl "Tree view/pl") lub [Widoku 3D](/3D_view/pl "3D view/pl").
3. Wybierz odpowiedni format pliku w oknie dialogowym.
4. Wprowadź nazwę pliku. Jeśli w poprzednim kroku wybrałeś opcję `Wszystkie pliki (*.*)` i nie podałeś tutaj rozszerzenia pliku, zostanie użyte rozszerzenie .stl.
5. Naciśnij przycisk Zapisz.

## Uwagi

Istnieje kilka [preferencji eksportu związanych z formatami siatki](/Import_Export_Preferences/pl#Formaty_Siatki "Import Export Preferences/pl"), ale nie dotyczą one tego polecenia. Są one używane przez polecenie [Std: Eksport](/Std_Export/pl "Std Export/pl").

## Ustawienia

* Przechowywana jest ostatnio używana lokalizacja pliku: **Przybory → Edycja parametrów ... → BaseApp → Preferences → General → FileOpenSavePath**.

## Tworzenie skryptów

Zobacz również: [FreeCAD podstawy tworzenia skryptów](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby wyeksportować obiekty *(w tym obiekty siatkowe)* do formatu pliku siatkowego użyj metody `export` modułu *Mesh*.

```
import FreeCAD
import Mesh

doc = FreeCAD.ActiveDocument

Mesh.export([doc.Cone, doc.Cylinder], 'D:/testfiles/mymodel.stl')

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Export/pl&oldid=1333164>"