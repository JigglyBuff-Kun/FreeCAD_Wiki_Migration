---
title: Std Grupa
---
|  |
| --- |
| Std: Grupa |
| Lokalizacja w menu |
| [Widok drzewa](/Tree_view/pl "Tree view/pl") → Kliknij prawym przyciskiem myszki nazwę dokumentu → Utwórz grupę ... |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Część](/Std_Part/pl "Std Part/pl"), [Wybierz grupę](/Draft_SelectGroup/pl "Draft SelectGroup/pl"), [Dodaj do grupy](/Draft_AddToGroup/pl "Draft AddToGroup/pl") |
|  |

## Opis

Obiekt **Std: Grupa** *(wewnętrznie nazywany [App DocumentObjectGroup](/App_DocumentObjectGroup/pl "App DocumentObjectGroup/pl"))* jest kontenerem ogólnego przeznaczenia, który pozwala na grupowanie różnych typów obiektów w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl"), niezależnie od ich typu danych. Jest on używany jako prosty folder do kategoryzowania i organizowania obiektów w modelu w celu zachowania logicznej struktury. Obiekty Std: Grupa mogą być zagnieżdżone wewnątrz innych obiektów Std: Grupa.

Narzędzie Std: Grupa nie jest zdefiniowane przez konkretne środowisko pracy, lecz przez system bazowy, a więc znajduje się na **pasku narzędzi konstrukcji**, który jest dostępny we wszystkich [środowiskach pracy](/Workbenches/pl "Workbenches/pl").

Aby zgrupować obiekty 3D jako pojedynczą jednostkę, z zamiarem tworzenia złożeń, należy użyć obiektu [Std: Część](/Std_Part/pl "Std Part/pl").

![](/images/Std_Group_example.png)

Różne elementy wewnątrz obiektu Std: Grupa w widoku drzewa.

## Użycie

1. Wykonaj jedną z następujących czynności:
   * Kliknij prawym przyciskiem myszy nazwę dokumentu w [Widoku Drzewa](/Tree_view/pl "Tree view/pl") i w menu kontekstowym wybierz pozycje **Utwórz grupę ...**.
   * Naciśnij przycisk ![](/images/Std_Group.svg) Utwórz grupę.
2. Utworzona zostanie pusta grupa.
3. Aby dodać obiekty do grupy, wybierz je w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl"), a następnie przeciągnij i upuść na grupę.
4. Aby usunąć obiekty z Grupy, przeciągnij je poza Grupę na etykietę dokumentu w górnej części okna [Widoku drzewa](/Tree_view/pl "Tree view/pl").
5. Obiekty mogą być również dodawane i usuwane poprzez edycję właściwości DANE**Grupa**.

## Właściwości

Obiekt **Std: Grupa**, wewnętrznie nazywany [App DocumentObjectGroup](/App_DocumentObjectGroup/pl "App DocumentObjectGroup/pl") *(klasa `App::DocumentObjectGroup`)*, jest pochodną podstawowego obiektu [App DocumentObject](/App_DocumentObject/pl "App DocumentObject/pl") *(klasa `App::DocumentObject`)* i dziedziczy wszystkie jego właściwości.

Obiekt Std Grupa ma takie same właściwości jak [App: FeaturePython](/App_FeaturePython/pl#Właściwości "App FeaturePython/pl"), który jest najbardziej podstawową instancją [App DocumentObject](/App_DocumentObject/pl "App DocumentObject/pl"). Posiada on również następujące dodatkowe właściwości w [edytorze właściwości](/Property_editor/pl "Property editor/pl"). Ukryte właściwości można wyświetlić za pomocą polecenia **Pokaż ukryte** w menu kontekstowym [edytora właściwości](/Property_editor/pl "Property editor/pl").

### Dane

Podstawa

* DANE**Grupa** (`LinkList`): lista obiektów, do których istnieją odniesienia. Domyślnie jest ona pusta `[]`.
* DANE (Hidden)**\_ Group Touched** (`Bool`): niezależnie od tego, czy grupa została zmodyfikowana, czy nie.

## Tworzenie skryptów

*Zobacz również:* [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl"), oraz [Obiekty skryptowe](/Scripted_objects/pl "Scripted objects/pl").

Ogólne informacje na temat dodawania obiektów do dokumentu można znaleźć na stronie [Część: właściwość](/Part_Feature/pl "Part Feature/pl").

Element Std: Grupa *([App DocumentObjectGroup](/App_DocumentObjectGroup/pl "App DocumentObjectGroup/pl"))* jest tworzony przy pomocy metody `addObject()` dokumentu. Gdy istnieje element Part, inne obiekty mogą być do niego dodane za pomocą metod `addObject()` lub `addObjects()` tej Części.

```
import FreeCAD as App

doc = App.newDocument()
group = App.ActiveDocument.addObject("App::DocumentObjectGroup", "Group")

obj1 = App.ActiveDocument.addObject("PartDesign::Body", "Body")
obj2 = App.ActiveDocument.addObject("Part::Box", "Box")

group.addObjects([obj1, obj2])
App.ActiveDocument.recompute()

```

Ten podstawowy obiekt `App::DocumentObjectGroup` nie posiada obiektu Proxy, więc nie może być w pełni wykorzystany do tworzenia klas podrzędnych.

Dlatego też, dla klasy podrzędnej [Python](/Python/pl "Python/pl"), powinieneś stworzyć obiekt `App::DocumentObjectGroupPython`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::DocumentObjectGroupPython", "Name")
obj.Label = "Custom label"

```

Na przykład [Analiza MES](/FEM_Analysis/pl "FEM Analysis/pl") jest obiektem `App::DocumentObjectGroupPython` z niestandardową ikoną i dodatkowymi właściwościami.

## Odnośniki internetowe

* [Przypadek użycia w poradniku Architektury](/Arch_tutorial/pl#Porządkowanie_modelu "Arch tutorial/pl")
* [Struktura dokumentu](/Document_structure/pl "Document structure/pl")
* [Porządkowanie modelu](http://www.freecadweb.org/wiki/index.php?title=Arch_tutorial#Organizing_your_model)

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Group/pl&oldid=1560942>"