---
title: Std Importuj
---
|  |
| --- |
| Std: Importuj |
| Lokalizacja w menu |
| Plik → Importuj ... |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| Ctrl+Shift+I |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Otwórz](/Std_Open/pl "Std Open/pl"), [Import Export](/Import_Export/pl "Import Export/pl"), [Ustawienia Importu i Eksportu](/Import_Export_Preferences/pl "Import Export Preferences/pl") |
|  |

## Opis

Polecenie **Importuj** importuje geometrię z innego formatu pliku do aktywnego dokumentu. Obsługiwanych jest wiele formatów plików, a dla niektórych formatów istnieje wiele opcji importu. Zobacz stronę [Import eksport](/Import_Export/pl "Import Export/pl"), aby uzyskać więcej informacji.

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"): Po wybraniu formatu obrazu polecenie utworzy [Płaszczyznę obrazu](#Płaszczyzna_obrazu).

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Wybierz z menu opcję **Plik → ![](/images/Std_Import.svg) Importuj ...**.
   * Użyj skrótu klawiaturowego: Ctrl + I. wersja 1.0 i poniżej
   * Użyj skrótu klawiaturowego: Ctrl+Shift+I. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")
2. Opcjonalnie wybierz odpowiedni format pliku w oknie dialogowym.
3. Wybierz plik.
4. Naciśnij przycisk Otwórz.

## Opcje

* Naciśnij przycisk Esc lub przycisk Anuluj aby przerwać wykonywanie polecenia.

## Uwagi

* Aby przekształcić zaimportowany obiekt [siatki](/Mesh_Workbench "Mesh Workbench") w bryłę, zobacz poradnik [Importowanie plików STL lub OBJ](/Import_from_STL_or_OBJ/pl "Import from STL or OBJ/pl").
* Aby zaimportować obiekt do nowego dokumentu można użyć polecenia [Otwórz](/Std_Open/pl "Std Open/pl").
* Niektóre środowiska pracy mają dodatkowe polecenia importu. Zobacz stronę: [Import Export](/Import_Export/pl "Import Export/pl").

## Ustawienia

* Zobacz stronę: [Ustawienia Importu i Eksportu](/Import_Export_Preferences/pl "Import Export Preferences/pl").

## Płaszczyzna obrazu

Płaszczyzna obrazu to płaska reprezentacja obrazu w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Może być na przykład używana podczas tworzenia modelu na podstawie zdjęć istniejącego obiektu.

Domyślnie płaszczyzna obrazu jest umieszczana na globalnej płaszczyźnie XY. Początkowy rozmiar płaszczyzny obrazu jest obliczany przy użyciu rozdzielczości 96 px/cal.

### Edycja

1. Aby edytować płaszczyznę obrazu, wykonaj jedną z poniższych czynności:
   * Kliknij dwukrotnie Płaszczyznę obrazu w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl").
   * Kliknij prawym przyciskiem myszy Płaszczyznę obrazu w oknie Widoku drzewa i wybierz z menu kontekstowego **![](/images/Image-scaling.svg) Modyfikuj obraz ...**
2. Jeśli płaszczyzna obrazu nie jest równoległa do płaszczyzny XY, XZ lub YZ globalnego układu współrzędnych, zostanie ona wyrównana do płaszczyzny XY.
3. Otworzy się panel zadań **Ustawienia płaszczyzny obrazu**:
   * Wybierz płaszczyznę globalnego układu współrzędnych **Płaszczyzna XY**, **Płaszczyzna XZ** lub **Płaszczyzna YZ**.
   * Zaznacz **Odwróć kierunek**, aby obrócić płaszczyznę obrazu o 180°. Oś obrotu zależy od wybranej płaszczyzny. Dla płaszczyzny XY jest to globalna oś X. Dla płaszczyzny XZ i YZ jest to globalna oś Z.
   * Opcjonalnie można zmienić **Odsunięcie**. **Odsunięcie**, **Odległość X** i **Odległość Y** są względne w stosunku do układu współrzędnych Płaszczyzny obrazu. Niewielkie ujemne przesunięcie może być przydatne podczas śledzenia obrazu za pomocą geometrii [szkicu](/Sketcher_Workbench/pl "Sketcher Workbench/pl") lub środowiska pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl").
4. Opcjonalnie zmień **Przezroczystość**.
5. Opcje **Rozmiar obrazu**:
   * Skaluj według danych numerycznych:
     1. Opcjonalnie odznacz **Zachowaj proporcje** dla nierównomiernego skalowania.
     2. Wprowadź **Szerokość** i / lub **Wysokość**.
   * Skalowanie przez wybieranie punktów:
     1. Opcjonalnie zaznacz **Kalibruj**.
     2. Naciśnij przycisk Interaktywnie.
     3. Wybierz dwa punkty wewnątrz obrazu.
     4. Zostanie wyświetlona linia wymiarowa.
     5. Wprowadź pożądaną odległość.
     6. Naciśnij Enter lub przycisk Zastosuj dla potwierdzenia zmian.
6. Naciśnij przycisk OK, aby potwierdzić zmiany i zamknąć panel zadań.

### Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Płaszczyzna obrazu wywodzi się z obiektu [App: Cechy geometrii](/App_GeoFeature/pl "App GeoFeature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

#### Dane

Płaszczyzna obrazu

* DANE**Plik obrazu** (`FileIncluded`): Plik obrazu używany dla Image Plane. Plik ten jest przechowywany w pliku .FCStd.
* DANE**RozmiarX** (`Length`): Szerokość płaszczyzny obrazu.
* DANE**RozmiarY** (`Length`): Wysokość płaszczyzny obrazu.

#### Widok

Styl obiektu

* WIDOK**Oświetlenie** (`Enumeration`): Sposób oświetlenia płaszczyzny obrazu w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Może przyjmować wartość `Dwie strony` lub `Jedna strona`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Import/pl&oldid=1507031>"