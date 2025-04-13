---
title: Std Przełącz widoczność
---
|  |
| --- |
| Std: Przełącz widoczność |
| Lokalizacja w menu |
| Widok → Przełącz widoczność |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| Spacja |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Pokaż zaznaczone](/Std_ShowSelection/pl "Std ShowSelection/pl"), [Ukryj zaznaczone](/Std_HideSelection/pl "Std HideSelection/pl"), [Przełącz widoczność](/Std_ToggleObjects/pl "Std ToggleObjects/pl"), [Wyświetl wszystkie obiekty](/Std_ShowObjects/pl "Std ShowObjects/pl"), [Ukryj wszystkie obiekty](/Std_HideObjects/pl "Std HideObjects/pl") |
|  |

## Opis

Polecenie **Przełącz widoczność** przełącza widoczność wybranych obiektów w oknie [widoku 3D](/3D_view/pl "3D view/pl").

## Użycie

1. Wybierz jeden lub więcej obiektów.
   * Niewidoczne obiekty mogą być zaznaczone w [widoku drzewa](/Tree_view/pl "Tree view/pl").
   * Bądź ostrożny, gdy używasz kombinacji klawiszy Ctrl + A, aby wybrać wszystkie obiekty w oknie widoku drzewa. Spowoduje to również zaznaczenie elementów podrzędnych [Zawartości](/PartDesign_Body/pl "PartDesign Body/pl") środowiska Projekt Części i obiektów używanych dla [funkcji logicznych](/Part_Boolean/pl "Part Boolean/pl") środowiska Część. W większości przypadków powinny one pozostać niewidoczne.
   * Obiekty używane dla [funkcji logicznych](/Part_Boolean/pl "Part Boolean/pl") środowiska Część są również wybierane, gdy używasz kombinacji klawiszy Ctrl + A w oknie widoku 3D.
2. Istnieje kilka sposobów na wywołanie polecenia:
   * Wybierz opcję z menu **Widok → ![](/images/Std_ToggleVisibility.svg) Przełącz widoczność**.
   * Wybierz opcję **![](/images/Std_ToggleVisibility.svg) Przełącz widoczność** z menu kontekstowego widoku drzewa lub widoku 3D.
   * Użyj skrótu klawiszowego: Spacja.

## Uwagi

* Niewidoczne obiekty są wyświetlane z wyszarzoną etykietą i wyszarzoną ikoną w [widoku drzewa](/Tree_view/pl "Tree view/pl").
* Obiekty zagnieżdżone w [Części](/Std_Part/pl "Std Part/pl"), lub [obiekcie połączonym](/Std_LinkMake/pl "Std LinkMake/pl") do [Grupy](/Std_Group/pl "Std Group/pl"), lub Grupy linków, oraz [cech](/PartDesign_Feature/pl "PartDesign Feature/pl") w [Zawartości Projektu Części](/PartDesign_Body/pl "PartDesign Body/pl") będą widoczne w [widoku 3D](/3D_view/pl "3D view/pl") tylko wtedy, gdy ich obiekty nadrzędne są również widoczne. Oznacza to, że element w Zawartości Projektu Części, który jest zagnieżdżony w obiekcie Część będzie widoczny w widoku 3D tylko wtedy, gdy sam element, Zawartość Projektu Części i Część są widoczne. A jeśli obiekt Część jest z kolei zagnieżdżony w innym obiekcie Część, to ten ostatni obiekt musi być również widoczny.
* Jeśli widoczność [Grupy](/Std_Group/pl "Std Group/pl") *(lub obiektu pochodnego, takiego jak [Część budowli](/Arch_BuildingPart/pl "Arch BuildingPart/pl") środowiska Architektura)* zostanie zmieniona, widoczność jej zagnieżdżonych obiektów zmieni się odpowiednio. Ale ich widoczność może być również zmieniana indywidualnie.
* Działanie tego polecenia nie może być cofnięte za pomocą przycisku [Cofnij](/Std_Undo/pl "Std Undo/pl").
* Widoczność obiektu można również zmienić poprzez jego powiązaną właściwość DANE**Widoczność** w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Użyj metod obiektu `show` i `hide`, aby zmienić jego widoczność. Właściwość `Visibility` obiektu może też być zmieniona bezpośrednio.

```
import FreeCADGui

obj = FreeCADGui.ActiveDocument.myObjectName

if obj.Visibility == True:
    obj.hide()
else:
    obj.show()

# Alternatively:
obj.Visibility = not obj.Visibility

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ToggleVisibility/pl&oldid=1468548>"