---
title: Rysunek Roboczy Ustaw styl
---
|  |
| --- |
| Rysunek Roboczy: Ustaw styl |
| Lokalizacja w menu |
| Narzędzia → Ustaw styl |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| Rysunek Roboczy: S S |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Edytor stylu opisu](/Draft_AnnotationStyleEditor/pl "Draft AnnotationStyleEditor/pl"), [Zastosuj bieżący styl](/Draft_ApplyStyle/pl "Draft ApplyStyle/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_SetStyle.svg) **Ustaw styl** ustawia domyślny styl dla nowych obiektów.

![](/images/Draft_SetStyle_Taskpanel_Tab_Shape.png) ![](/images/Draft_SetStyle_Taskpanel_Tab_Annotation.png)

Dwie zakładki ([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")) panelu zadań ustawień stylu

## Użycie

1. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Draft_tray_button_style.png) w [tacce narzędziowej](/Draft_Tray/pl "Draft Tray/pl"). W zależności od bieżących ustawień stylu przycisk ten może wyglądać inaczej.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz opcję **Narzędzia → ![](/images/Draft_SetStyle.svg) Ustaw styl** z menu lub menu kontekstowego [widoku drzewa](/Tree_view/pl "Tree view/pl") bądź [widoku 3D](/3D_view/pl "3D view/pl").
   * Rysunek Roboczy: Użyj skrótu klawiaturowego: S, a następnie S.
2. Otworzy się panel zadań **Ustawienia stylu**. Więcej informacji można znaleźć w sekcji [Opcje](#Opcje).
3. Opcjonalnie można zmienić jedno lub więcej ustawień.
4. Naciśnij przycisk OK, aby zapisać ustawienia.
5. Przycisk w [tacce narzędziowej](/Draft_Tray/pl "Draft Tray/pl") zostanie zaktualizowany.

## Opcje

* Z rozwijanej listy w górnej części panelu zadań można wybrać bieżące ustawienie stylu.
* Naciśnij przycisk ![](/images/Document-save.svg), aby zapisać bieżące ustawienia stylu jako ustawienie wstępne.
* W sekcji **Kształty** można określić następujące ustawienia:
  + **Wygląd kształtu**
    - **Kolor kształtu**.
    - **Kolor kształtu otoczenia**. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
    - **Kolor kształtu emisyjny**. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
    - **Kolor kształtu lustrzany**. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
    - **Przezroczystość**.
    - **Połysk kształtu**. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
  + **Inne**.
    - **Kolor linii**
    - **Szerokość linii**.
    - **Kolor punktu**. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
    - **Rozmiar punktu**. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
    - **Styl kreślenia**.
    - **Tryb wyświetlania**.
* Ustawienia w sekcji **Adnotacje** mają zastosowanie do [Adnotacja wieloliniowa](/Draft_Text "Draft Text"), [Wymiarów](/Draft_Dimension "Draft Dimension") i [Etykiet](/Draft_Label "Draft Label"). Można określić następujące ustawienia *(zobacz [Adnotacja wieloliniowa](/Draft_Text#Widok "Draft Text") i [Wymiar](/Draft_Dimension/pl#Widok "Draft Dimension/pl") aby uzyskać szczegółowe informacje)*:
  + **Teksty**
    - **Nazwa czcionki**.
    - **Rozmiar czcionki**. W rzeczywistości jest to domyślna wysokość wiersza, litery są mniejsze.
    - **Odstępy między wierszami**. Nie używane dla wymiarów.
    - **Mnożnik skali**. Jest to odwrotność skali ustawionej w [widżecie skalowania adnotacji](/Draft_annotation_scale_widget/pl "Draft annotation scale widget/pl"). Jeśli skala wynosi `1:100`, mnożnik wynosi `100`. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
    - **Kolor tekstu**.
  + **Linie i strzałki**
    - **Szerokość linii**. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
    - **Styl strzałki**.
    - **Rozmiar strzałki**.
    - **Kolor linii i strzałek**. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
  + **Wymiary**
    - **Wyświetlaj jednostki**.
    - **Zastępuj jednostki**.
    - **Przedłużenie wymiaru**. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
    - **Linie pomocnicze**. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
    - **Przedłużenie linii pomocniczych**. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
    - **Odstępy w tekście**.
* Naciśnij przycisk ![](/images/Draft_SetStyle.svg) Zaznaczone, aby zastosować ustawienia do wybranych obiektów lub grup. Obiekty można zaznaczać, gdy panel zadań jest otwarty.
* Naciśnij przycisk ![](/images/Draft_Text.svg) Adnotacje, aby zastosować ustawienia do wszystkich [adnotacji wieloliniowych](/Draft_Text/pl "Draft Text/pl"), [wymiarów](/Draft_Dimension/pl "Draft Dimension/pl") i [etykiet](/Draft_Label/pl "Draft Label/pl") w bieżącym dokumencie. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
* Naciśnij przycisk Anuluj, aby zakończyć polecenie bez zapisywania ustawień.

## Uwagi

* Ustawienia w sekcji **Kształt**, z wyjątkiem **Styl rysowania** i **Tryb wyświetlania**, są używane nie tylko dla obiektów środowiska Rysunek Roboczy, ale także dla obiektów utworzonych w innych środowiskach pracy.
* Wszystkie ustawienia, z wyjątkiem **Styl rysowania** i **Tryb wyświetlania**, można również zmienić w preferencjach. Zobacz stronę [Preferencje środowiska Projekt Części](/PartDesign_Preferences/pl#Wygląd_kształtu "PartDesign Preferences/pl") i [Preferencje środowiska Rysunek Roboczy](/Draft_Preferences/pl#Teksty_i_wymiary "Draft Preferences/pl").
* Style są zapisywane w pliku o określonej nazwie: StylePresets.json, który jest przechowywany w folderze użytkownika FreeCAD Draft:
  + W systemie Linux jest to zazwyczaj /home/<nazwa\_użytkownika>/.local/share/FreeCAD/Draft/.
  + W systemie Windows jest to %APPDATA%\FreeCAD\Draft\, który zwykle znajduje się w C:\Users\<nazwa\_użytkownika>\Appdata\Roaming\FreeCAD\Draft\.
  + W systemie macOS jest to zazwyczaj /Users/<nazwa\_użytkownika>/Library/Preferences/FreeCAD/Draft/.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_SetStyle/pl&oldid=1513713>"