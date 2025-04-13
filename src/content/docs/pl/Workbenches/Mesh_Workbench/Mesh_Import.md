---
title: Siatka Import
---
|  |
| --- |
| Siatka: Import |
| Lokalizacja w menu |
| Siatki → Importuj siatkę ... |
| Środowisko pracy |
| [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Importuj](/Std_Import/pl "Std Import/pl"), [Otwórz](/Std_Open/pl "Std Open/pl"), [Import Eksport](/Import_Export/pl "Import Export/pl") |
|  |

## Opis

Polecenie **Importuj siatkę** importuje geometrię z formatu pliku siatki do aktywnego dokumentu. Obsługiwanych jest kilka formatów plików. Polecenie tworzy nieparametryczny obiekt siatki, [cechę](/Mesh_Feature/pl "Mesh Feature/pl").

## Użycie

1. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Mesh_Import.svg) **Importuj siatkę ...**.
   * Wybierz opcję z menu **Siatki → ![](/images/Mesh_Import.svg) Importuj siatkę ...**.
   * Wybierz opcję **![](/images/Mesh_Import.svg) Importuj siatkę ...** z menu podręcznego w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl") lub [Widoku 3D](/3D_view/pl "3D view/pl"). Ta opcja jest dostępna tylko wtedy, gdy został wybrany istniejący obiekt siatki. Zauważ, że wybrany obiekt nie jest w rzeczywistości używany ani modyfikowany przez polecenie.
2. Opcjonalnie wybierz odpowiedni format pliku w oknie dialogowym.
3. Wybierz plik.
4. Naciśnij przycisk Otwórz.

## Obsługiwane formaty plików

Polecenie obsługuje pliki: stl, ast, bms, obj, off, iv, ply, nas i bdf. Dla formatu plików NASTRAN *(nas/bdf)* obsługiwane są tylko karty GRID, CTRIA3 i CQUAD4.

## Ustawienia

* Przechowywana jest ostatnio używana lokalizacja pliku: **Przybory → Edycja parametrów ... → BaseApp → Preferences → General → FileOpenSavePath**.

## Właściwości

Zapoznaj się z informacjami na stronie: [cecha siatki](/Mesh_Feature/pl "Mesh Feature/pl").

## Tworzenie skryptów

Zobacz również: [FreeCAD podstawy tworzenia skryptów](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby zaimportować plik siatki użyj metody `insert` modułu *Mesh*.

```
import Mesh
Mesh.insert('D:/testfiles/cylinder.stl')

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Import/pl&oldid=1333174>"