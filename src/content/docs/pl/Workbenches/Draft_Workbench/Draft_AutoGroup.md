---
title: Rysunek Roboczy Grupowanie automatyczne
---
|  |
| --- |
| Rysunek Roboczy: Grupowanie automatyczne |
| Lokalizacja w menu |
| *brak* |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Warstwa](/Draft_Layer/pl "Draft Layer/pl"), [Grupa](/Std_Group/pl "Std Group/pl") |
|  |

## Opis

Polecenie **Grupowanie automatyczne** zmienia aktywną [warstwę](/Draft_Layer/pl "Draft Layer/pl") lub, [opcjonalnie](#Ustawienia), aktywną [grupę](/Std_Group/pl "Std Group/pl") lub podobny do grupy obiekt [BIM](/BIM_Workbench/pl "BIM Workbench/pl"). Nowe obiekty [Rysunku roboczego](/Draft_Workbench/pl "Draft Workbench/pl") i [BIM](/BIM_Workbench/pl "BIM Workbench/pl") są automatycznie umieszczane w tej aktywnej warstwie lub grupie.

Polecenie to było pierwotnie przeznaczone dla grup, stąd jego nazwa, ale zostało przeprojektowane w wersji FreeCAD 0.19, kiedy wprowadzono system warstw. Ponieważ obsługa warstw jest teraz domyślna dla polecenia, pozostała część tej strony skupia się głównie na warstwach.

![](/images/Draft_Tray_Menu.png)

Menu warstw w tacce narzędziowej (obrazek zaktualizowany dla wersji 1.1).

## Użycie

1. Opcjonalnie wybierz warstwę, którą chcesz aktywować w [widoku drzewa](/Tree_view/pl "Tree view/pl").
2. Polecenie można wywołać na kilka sposobów:
   * Nacisnąć przycisk w ![](/images/Draft_tray_button_layer.png) [tacce narzędziowej](/Draft_Tray/pl "Draft Tray/pl"). Przycisk ten może wyglądać inaczej. Jeśli jest aktywna warstwa, wyświetli jej nazwę i ikonę z kolorem linii i kolorem kształtu warstwy.
   * Jeśli zaznaczyłeś warstwę: wybierz opcję **![](/images/Button_right.svg) Aktywuj tę warstwę** z menu kontekstowego [Widok drzewa](/Tree_view/pl "Tree view/pl").
3. Jeśli warstwa nie została jeszcze wybrana, otworzy się menu warstw. Wykonaj jedną z następujących czynności:
   * Wybierz **![](/images/Button_invalid.svg) Brak**, aby pracować bez aktywnej warstwy.
   * Wybierz istniejącą warstwę do uaktywnienia.
   * Wybierz **![](/images/Draft_NewLayer.svg) Nowa warstwa...**, aby utworzyć nową warstwę:
     1. Otwarte zostanie okno dialogowe **Utwórz nową warstwę**. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")
     2. Wprowadź **Nazwę warstwy**.
     3. Wciśnij przycisk OK.
     4. Nowa warstwa zostanie aktywowana. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")
4. Jeśli aktywna warstwa została zmieniona, przycisk w [tacce narzędziowej](/Draft_Tray/pl "Draft Tray/pl") zostanie zaktualizowany.

## Uwagi

* Nową [warstwę](/Draft_Layer "Draft Layer") można również utworzyć, klikając prawym przyciskiem myszy kontener warstwy w [widoku drzewa](/Tree_view/pl "Tree view/pl") i wybierając opcję **![](/images/Draft_NewLayer.svg) Dodaj nową warstwę** z menu kontekstowego.
* Jeśli [tryb konstrukcyjny](/Draft_ToggleConstructionMode/pl "Draft ToggleConstructionMode/pl") jest włączony, aktywna [warstwa](/Draft_Layer/pl "Draft Layer/pl") jest ignorowana.

## Ustawienia

Zobacz także strony: [Edytor ustawień](/Preferences_Editor/pl "Preferences Editor/pl") oraz [Rysunek Roboczy: Ustawienia](/Draft_Preferences/pl "Draft Preferences/pl").

* To polecenie może opcjonalnie obsługiwać również grupy: **Edycja → Preferencje ... → Rysunek Roboczy → Ogólne → Dołącz grupy do listy warstw**.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Jeśli środowisko pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") jest aktywne, obiekt aplikacji FreeCADGui posiada właściwość `draftToolBar`. Obiekt `draftToolBar` posiada właściwość `autogroup`, która zawiera nazwę aktywnej grupy automatycznej lub `Brak`, jeśli żadna grupa nie jest aktywna. Aby zmienić aktywną grupę automatyczną, użyj metody `setAutoGroup` obiektu `draftToolBar`. Aby umieścić obiekty w aktywnej grupę automatyczną, użyj metody `autogroup` modułu Draft.

```
# This code only works if the Draft Workbench is active!

import FreeCAD as App
import FreeCADGui as Gui
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(5, radius=1000)
polygon2 = Draft.make_polygon(3, radius=500)
polygon3 = Draft.make_polygon(6, radius=220)

layer = Draft.make_layer()
Gui.draftToolBar.setAutoGroup(layer.Name)

Draft.autogroup(polygon1)
Draft.autogroup(polygon2)
Draft.autogroup(polygon3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_AutoGroup/pl&oldid=1550641>"