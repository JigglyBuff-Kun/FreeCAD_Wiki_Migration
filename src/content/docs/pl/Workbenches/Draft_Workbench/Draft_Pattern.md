---
title: Rysunek Roboczy Kreskowanie
---
## Opis

Obiekty środowiska pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") z właściwością DANE**Utwórz ścianę** mogą wyświetlać wzór SVG zamiast jednolitego koloru ściany.

![](/images/DraftPatternSample.png)

Elipsa i wielokąt z wzorem SVG.

## Użycie

1. Upewnij się, że obiekty są zamknięte, płaskie i nie przecinają się.
2. Aby zamknąć [polilinię](/Draft_Wire/pl "Draft Wire/pl"), [krzywa złożoną](/Draft_BSpline/pl "Draft BSpline/pl"), [Sześcienną krzywą Béziera](/Draft_CubicBezCurve/pl "Draft CubicBezCurve/pl") lub [Krzywą Bézier'a](/Draft_BezCurve/pl "Draft BezCurve/pl") ustaw ich właściwość DANE**Zamknięty** na `PRAWDA`.
3. Aby zamknąć [okrąg](/Draft_Circle/pl "Draft Circle/pl") lub [elipsę](/Draft_Ellipse/pl "Draft Ellipse/pl") ustaw ich właściwości DANE**kąt pierwszy** i DANE**kąt drugi** na tę samą wartość.
4. Wybierz obiekty.
5. Przejdź do zakładki **Widok** w [Edytorze właściwości](/Property_editor "Property editor").
6. WIDOK**Tryb wyświetlania** musi być ustawiony na `Cieniowany z krawędziami`.
7. Wybierz WIDOK**Wzór**.
8. Opcjonalnie zmień rozmiar WIDOK**Rozmiar wzoru**. Należy pamiętać, że większa wartość skutkuje gęstszym wzorem.
9. Wzór nie jest wyświetlany, gdy obiekty są zaznaczone. Usuń ich zaznaczenie, aby sprawdzić wynik.
10. Opcjonalnie można ponownie wybrać obiekty, aby zmienić właściwości wzoru.

## Dostępne wzory

* ![aluminium](/images/Aluminium.svg)

  aluminium
* ![brick01](/images/Brick01.svg)

  brick01
* ![concrete](/images/Concrete.svg)

  concrete
* ![cross](/images/Cross.svg)

  cross
* ![cuprous](/images/Cuprous.svg)

  cuprous
* ![diagonal1](/images/Diagonal1.svg)

  diagonal1
* ![diagonal2](/images/Diagonal2.svg)

  diagonal2
* ![earth](/images/Earth.svg)

  earth
* ![general_steel](/images/General_steel.svg)

  general\_steel
* ![glass](/images/Glass.svg)

  glass
* ![hatch45L](/images/Hatch45L.svg)

  hatch45L
* ![hatch45R](/images/Hatch45R.svg)

  hatch45R
* ![hbone](/images/Hbone.svg)

  hbone
* ![line](/images/Line.svg)

  line
* ![plastic](/images/Plastic.svg)

  plastic
* ![plus](/images/Plus.svg)

  plus
* ![simple](/images/Simple.svg)

  simple
* ![solid](/images/Solid.svg)

  solid
* ![square](/images/Square.svg)

  square
* ![steel](/images/Steel.svg)

  steel
* ![titanium](/images/Titanium.svg)

  titanium
* ![wood](/images/Wood.svg)

  wood
* ![woodgrain](/images/Woodgrain.svg)

  woodgrain
* ![zinc](/images/Zinc.svg)

  zinc

## Uwagi

* Wzory SVG są przechowywane w plikach .SVG. Możliwe jest użycie własnych niestandardowych wzorców. Zobacz [Ustawienia](#Ustawienia).
* Same wzory nie są zapisywane w dokumencie FreeCAD. Obiekty, których WIDOK**Wzór** nie zostanie znaleziony, są wyświetlane z jednolitym kolorem powierzchni.

## Ustawienia

Zobacz także strony: [Edytor ustawień](/Preferences_Editor/pl "Preferences Editor/pl") oraz [Rysunek Roboczy: Ustawienia](/Draft_Preferences/pl "Draft Preferences/pl").

* Aby zmienić WIDOK**Rozmiar wzoru** używany dla nowych obiektów: **Edycja → Preferencje ... → Rysunek Roboczy → Wygląd → Rozmiar wzoru SVG**.
* Aby określić katalog z dodatkowymi wzorcami SVG: **Edycja → Preferencje ... → Rysunek Roboczy → Wygląd → Dodatkowa lokalizacja wzorów SVG**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Pattern/pl&oldid=1346028>"