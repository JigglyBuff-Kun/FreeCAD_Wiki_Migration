---
title: Rysunek roboczy do szkicu
---
|  |
| --- |
| Rysunek Roboczy: Rysunek roboczy do szkicu |
| Lokalizacja w menu |
| Modyfikacja → Rysunek roboczy do szkicu |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Draft_Draft2Sketch.svg) **Rysunek roboczy do szkicu** konwertuje obiekty środowiska pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") na obiekty środowiska [Szkicownik](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl") i odwrotnie.

![](/images/Draft_Draft2Sketch_example.png)

Konwertowanie obiektów środowiska Rysunek Roboczy na szkice Szkicownika.

## Użycie

1. Opcjonalnie wybierz jeden lub więcej obiektów Rysunku Roboczego lub [szkic](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl") środowiska Szkicownik.
2. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Draft_Draft2Sketch.svg) **Rysunek roboczy do szkicu**.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz z menu opcję **Modyfikacja → ![](/images/Draft_Draft2Sketch.svg) Rysunek roboczy do szkicu**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Modyfikacja → ![](/images/Draft_Draft2Sketch.svg) Rysunek roboczy do szkicu** z menu.
3. Jeśli nie wybrałeś jeszcze żadnego obiektu: wybierz obiekt w oknie [widoku 3D](/3D_view/pl "3D view/pl").
4. Zostanie utworzony nowy obiekt.

## Uwagi

* Obiekty nie pochodzące ze środowiska pracy Rysunek Roboczy, które są całkowicie płaskie, również mogą być konwertowane.
* Polecenie może obsługiwać tylko obiekty zbudowane z linii prostych, łuków kołowych, łuków eliptycznych, krzywych złożónych i krzywych Béziera.
* [Krzywe Bezier'a](/Draft_BezCurve/pl "Draft BezCurve/pl") będą aproksymowane przez [Krzywe złożone przez punkty kontrolne](/Sketcher_CreateBSpline/pl "Sketcher CreateBSpline/pl") środowiska Szkicownik.
* Zewnętrzne środowisko pracy [KicadStepUp](/KicadStepUp_Workbench/pl "KicadStepUp Workbench/pl") zawiera polecenie do konwersji [krzywych złożonych](/Draft_BSpline/pl "Draft BSpline/pl") środowiska Rysunek Roboczy na serię [łuków](/Sketcher_CreateArc/pl "Sketcher CreateArc/pl") Szkicownika. Więcej informacji można znaleźć w temacie na forum [BSplines to Shape2DView and Sketcher](https://forum.freecadweb.org/viewtopic.php?f=9&t=25082).
* [Ten inny temat na forum](https://forum.freecadweb.org/viewtopic.php?f=3&t=58781#p505207) zawiera makrodefinicję do takiej konwersji.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby przekonwertować obiekty na szkic, użyj metody `make_sketch` ([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl")) modułu Rysunek Roboczy. Metoda ta zastępuje przestarzałą metodę `makeSketch`.

```
sketch = make_sketch(objects_list, autoconstraints=False, addTo=None, delete=False, name="Sketch", radiusPrecision=-1, tol=1e-3)

```

* `lista_obiektów` zawiera obiekty do konwersji. Jest to pojedynczy obiekt lub lista obiektów. Obsługiwane są obiekty `Draft`, `Part::Feature` i `Part.Shape`.
* Jeśli `więzyautomatyczne` ma wartość `Prawda`, wiązania zbieżności są dodawane do węzłów należących do tego samego obiektu źródłowego.
* `dodajDo` jest istniejącym obiektem szkicu, do którego dodawana jest geometria. Jeśli nie zostanie podany, tworzony jest nowy szkic.
* Jeśli `usuń` ma wartość `Prawda`, obiekty źródłowe są usuwane.
* `nazwa` jest nazwą nowego szkicu.
* `precyzjaPromienia` wskazuje, jak powinny być obsługiwane wiązania promienia:
  + Użyj `-1`, aby wyłączyć wiązania promienia.
  + Użyj `0`, aby dodać indywidualne wiązania promienia.
  + Użyj liczby dodatniej, aby zaokrąglić promienie zgodnie z tą precyzją i dodać wiązania równości między krzywymi o równych promieniach.
* `tol` jest tolerancją używaną do sprawdzania, czy kształty są płaskie i współpłaszczyznowe. Użyj `-1` dla ścisłej analizy.
* `szkic` jest zwracany wraz z obiektem szkicu.

Aby przekonwertować szkic na obiekty środowiska Rysunek Roboczy, użyj metody `draftify` modułu Rysunek Roboczy.

```
draftify(objectslist, makeblock=False, delete=True)

```

* `listaobiektów` zawiera obiekty do konwersji. Jest to pojedynczy obiekt lub lista obiektów.
* Jeśli `makeblock` ma wartość `Prawda`, konwertowane obiekty są grupowane w `Part::Part2DObject`.
* Jeśli `usuń` ma wartość `Prawda`, obiekty źródłowe są usuwane.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle = Draft.make_rectangle(2000, 1000)
circle = Draft.make_circle(500)
doc.recompute()

sketch_from_draft = Draft.make_sketch([rectangle, circle], autoconstraints=True, delete=False, radiusPrecision=0)
doc.recompute()

draft_from_sketch = Draft.draftify(sketch_from_draft, delete=False)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Draft2Sketch/pl&oldid=1474001>"