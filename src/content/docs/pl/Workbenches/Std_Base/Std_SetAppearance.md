---
title: Std Wygląd zewnętrzny
---
|  |
| --- |
| Std: Wygląd zewnętrzny |
| Menu location |
| Widok → Wygląd zewnętrzny ... |
| Workbenches |
| [Materiał](/Material_Workbench/pl "Material Workbench/pl"), [Część](/Part_Workbench/pl "Part Workbench/pl"), [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") i inne |
| Default shortcut |
| Ctrl + D |
| Introduced in version |
| - |
| See also |
| [Materiał](/Std_SetMaterial/pl "Std SetMaterial/pl"),[Kolor dla ściany](/Part_ColorPerFace/pl "Part ColorPerFace/pl") |
|  |

## Opis

Polecenie **Wygląd zewnętrzny** ustawia właściwości wyświetlania wybranych obiektów.

Ta strona została zaktualizowana do wersji 1.0.

![](/images/Std_SetAppearance_Taskpanel.png)

Panel zadań Właściwości wyświetlania

## Użycie

1. Wybierz jeden lub więcej obiektów.
2. Istnieje kilka sposobów na wywołanie polecenia:
   * Wybierz opcję **Widok → ![](/images/Std_SetAppearance.svg) Wygląd zewnętrzny ...** z menu.
   * Wybierz opcję **![](/images/Std_SetAppearance.svg) Wygląd zewnętrzny ...** z menu kontekstowego [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl").
   * Użyj skrótu klawiszowego: Ctrl+D.
3. Otwarty zostanie panel zadań **Wyświetl właściwości**. Zobacz [Opcje](#Opcje).
4. Zmień jedną lub więcej właściwości.
5. Obiekty zostaną natychmiast zaktualizowane.
6. Opcjonalnie wybierz jeden lub więcej dodatkowych obiektów, których właściwości chcesz zmienić.
7. Wciśnij przycisk Zamknij aby zamknąć panel zadań i zakończyć polecenie.

## Opcje

### Ustawienia trybu wyświetlania

* Wybierz WIDOK**Tryb wyświetlania** z rozwijanej listy. Dostępne opcje to: `Cieniowany z krawędziami`, `Cieniowany` *(nie dotyczy obiektów środowiska pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"))*, `Szkielet` i `Tylko punkty`. Więcej informacji znajdziesz w opisie polecenia [Styl kreślenia](/Std_DrawStyle/pl "Std DrawStyle/pl").

### Materiał

* Wybierz materiał z listy.
  1. Opcjonalnie wybierz kategorię z listy rozwijanej pod listą materiałów aby przefiltrować materiały. Dostępne kategorie to `Podstawowy wygląd`, `Wygląd tekstury` (takie materiały nie są jeszcze dostępne) i `Wszystkie materiały`.
  2. Opcjonalnie wciśnij przycisk Uruchom edytor aby uruchomić [Edytor materiałów](/Material_Edit/pl "Material Edit/pl").
* **Własny wygląd:** wciśnij przycisk ... aby nadpisać wygląd materiału. Zostanie otwarte okno dialogowe **Właściwości materiału**. Zobacz [Kolor dla ściany](/Part_ColorPerFace/pl#Użycie "Part ColorPerFace/pl").
* **Kolor na wydruku:** nieobsługiwane w tym momencie.
* **Kolor linii:** ustawia właściwość WIDOK**Kolor linii**. Naciśnij przycisk, aby otworzyć okno dialogowe Wybierz kolor.
* **Kolor punktu:** ustawia właściwość WIDOK**Kolor punktu**. Naciśnij przycisk, aby otworzyć okno dialogowe Wybierz kolor.

### Wyświetlanie

* **Wielkość punktu:** ustawia właściwość WIDOK**Rozmiar punktu** *(w pikselach)*.
* **Szerokość linii:** ustawia właściwość WIDOK**Szerokość linii** *(w pikselach)*.
* **Przezroczystość:** ustawia właściwość WIDOK**Przezroczystość** *(w procentach)*. 0% to brak przezroczystości, 100% to pełna przezroczystość.
* **Przezroczystość linii:** obecnie nie jest obsługiwana.

## Uwagi

* Wymienione właściwości widoku można również zmienić w oknie [Edytora właściwości](/Property_editor/pl "Property editor/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_SetAppearance/pl&oldid=1540792>"