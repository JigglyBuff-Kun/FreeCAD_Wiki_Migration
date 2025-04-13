---
title: Szkicownik Obiekt szkicu
---
## Wprowadzenie

![](/images/Sketcher_Sketch.svg)

Obiekt SketchObject, lub formalnie `Sketcher::SketchObject`, jest podstawowym elementem do tworzenia obiektów 2D za pomocą środowiska pracy [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl").

Obiekt `Sketcher::SketchObject` wywodzi się z obiektu [Part2DObject](/Part_Part2DObject/pl "Part Part2DObject/pl"), co oznacza, że jest to obiekt [Cecha](/Part_Feature/pl "Part Feature/pl") wyspecjalizowany dla geometrii 2D. Podobnie jak obiekt Part2DObject, obiekt SketchObject może być dołączany do płaszczyzn i powierzchni. Ponadto obiekt SketchObject może obsługiwać wiązania geometryczne.

![](/images/FreeCAD_core_objects.svg)

Uproszczony diagram zależności pomiędzy podstawowymi obiektami w programie FreeCAD.

## Użycie

Zapoznaj si z informacjami na stronie: [Utwórz szkic](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl").

## Właściwości

Zobacz stronę [Właściwości](/Property/pl "Property/pl") dla wszystkich typów właściwości, które mogą mieć obiekty tworzone skryptami.

Obiekt SketchObject *(klasa `Sketcher::SketchObject`)* wywodzi się z obiektu [Part2DObject](/Part_Part2DObject/pl "Part Part2DObject/pl") *(klasa `Part::Part2DObject`)* i dziedziczy wszystkie jego właściwości.

Obiekt SketchObject ma także następujące dodatkowe właściwości w obszarze [edytora właściwości](/Property_editor/pl "Property editor/pl"). Ukryte właściwości można pokazać za pomocą polecenia **Pokaż ukryte** w menu kontekstowym okna [edycji właściwości](/Property_editor/pl "Property editor/pl").

### Dane

Szkic

* DANE (ukryty)**Geometria** (`GeometryList`): lista geometrii części istniejących wewnątrz szkicu.
* DANE**Wiązania**: nazwane wiązania, jeśli istnieją. W przeciwnym razie jest to pusta lista `[]`.
* DANE**Geometria zewnętrzna** (`LinkSubList`): lista geometrii części spoza tego szkicu, które są używane jako odniesienie.
* DANE (ukryty)**W pełni związany** (`Bool`): *(tylko do odczytu)* jeśli parametr przyjmuje wartość `PRAWDA` szkic jest w pełni związany.

### Widok

Wiązania automatyczne

* WIDOK**Wiązania automatyczne** (`Bool`): jeśli parametr ma wartość `PRAWDA` to podczas rysowania geometrii automatycznie dodawane są wiązania.
* WIDOK**Unikaj wiązań nadmiarowych** (`Bool`): jeśli parametr ma wartość `PRAWDA` unika się zbędnych automatycznych wiązań.

Siatka

* WIDOK**Automatyczny rozmiar siatki** (`Bool`): jeśli parametr ma wartość `PRAWDA` rozmiar siatki jest zmieniany na podstawie ramki otaczającej geometrii szkicu.
* WIDOK**Rozmiar siatki** (`Length`): wielkość odstępu między liniami siatki lokalnej w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Wartość domyślna to `10 mm`.
* WIDOK**Pokaż siatkę** (`Bool`): jeśli parametr ma wartość `PRAWDA` w oknie [widoku 3D](/3D_view/pl "3D view/pl") zostanie wyświetlona siatka lokalna obiektu. Siatka ta jest niezależna od [siatki projektu](/Draft_ToggleGrid/pl "Draft ToggleGrid/pl").

Widoczność automatyczna

* WIDOK**Środowisko edycji** (`String`): nazwa środowiska roboczego, które ma zostać uaktywnione podczas edycji szkicu. Wartością domyślną jest `SketcherWorkbench`.
* WIDOK**Wymuś Ortho** (`Bool`): jeśli parametr ma wartość `PRAWDA` po otwarciu szkicu ujęcie widoku zostanie ustawione w trybie [ortogonicznym](/Std_OrthographicCamera/pl "Std OrthographicCamera/pl").
* WIDOK**Ukryj zależne** (`Bool`): jeśli parametr ma wartość `PRAWDA` wszystkie obiekty zależne od szkicu są ukrywane po otwarciu szkicu.
* WIDOK**Restore Camera** (`Bool`): jeśli parametr ma wartość `PRAWDA` pozycja ujęcia widoku jest zapisywana przed otwarciem szkicu i przywracana po jego zamknięciu.
* WIDOK**Widok Przekroju** (`Bool`): jeśli parametr ma wartość `PRAWDA` podczas edycji szkicu widoczne są tylko obiekty *(ich części)* znajdujące się za płaszczyzną szkicu.
* WIDOK**Wyświetl odnośniki** (`Bool`): jeśli parametr ma wartość `PRAWDA` wszystkie obiekty używane w łączach do geometrii zewnętrznej są wyświetlane po otwarciu szkicu.
* WIDOK**Wyświetl podparcie** (`Bool`): jeśli parametr ma wartość `PRAWDA` po otwarciu szkicu są wyświetlane wszystkie obiekty, do których jest dołączony ten szkic.
* WIDOK (ukryty)**Tempo Vis** (`PythonObject`): klasa niestandardowa powiązana z tym obiektem, która obsługuje ukrywanie i pokazywanie innych obiektów podczas otwierania i zamykania szkicu.

## Tworzenie skryptów

*Zobacz również:* [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl"), oraz [Obiekty skryptowe](/Scripted_objects/pl "Scripted objects/pl").

Ogólne informacje na temat dodawania obiektów do dokumentu można znaleźć na stronie [Część: właściwość](/Part_Feature/pl "Part Feature/pl").

Obiekt *SketchObject* jest tworzony za pomocą metody dokumentu `addObject()`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Sketcher::SketchObject", "Sketch")
obj.Label = "Custom label"

```

Dlatego też, dla klasy podrzędnej [Python](/Python/pl "Python/pl"), powinieneś stworzyć obiekt `Sketcher::SketchObjectPython`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Sketcher::SketchObjectPython", "CustomSketch")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SketchObject/pl&oldid=1560953>"