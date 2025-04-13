---
title: Architektura Przestrzeń
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| Architektura: |
| Lokalizacja w menu |
| 3D / BIM → Przestrzeń |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| S P |
| Wprowadzono w wersji |
| 0.14 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie **Przestrzeń** pozwala zdefiniować pustą objętość, opierając ją na bryle, definiując jej granice lub łącząc oba te sposoby. Jeśli jest on oparty wyłącznie na granicach, objętość jest obliczana poprzez rozpoczęcie od obwiedni wszystkich podanych granic i odjęcie przestrzeni za każdą z nich. Obiekt Przestrzeń zawsze definiuje objętość bryły. Można również wyświetlić powierzchnię podłogi obiektu przestrzeni, obliczoną przez przecięcie płaszczyzny poziomej w środku masy objętości przestrzeni.

![](/images/Arch_Space_example.jpg)

Obiekt przestrzenny utworzony z istniejącego obiektu bryłowego, a następnie dodane dwie ściany jako granice.

## Użycie

1. Wybierz istniejący obiekt bryły lub ściany obiektów granicznych.
2. Uruchom polecenie używając jednej z kilku metod:
   * Naciśnij przycisk ![](/images/Arch_Space.svg) **Przestrzeń** na pasku narzędzi.
   * Użyj klawiszy S, a następnie P.
   * Użyj opcji menu głównego **3D / BIM → Przestrzeń**.

Po utworzeniu przestrzeni możesz również dodać lub usunąć z niej brzegi używając przycisków ![](/images/Arch_Add.svg) [Dodaj](/Arch_Add/pl "Arch Add/pl") lub ![](/images/Arch_Remove.svg) [Usuń](/Arch_Remove/pl "Arch Remove/pl") na pasku narzędzi. Alternatywnie, możesz też to zrobić w panelu zadań lub w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

Jako przykład, aby dodać brzeg mając przestrzeń, która przecina ścianę:

1. Wybierz powierzchnię ściany, która przenika przestrzeń. To będzie nowy brzeg.
2. Przytrzymując klawisz Ctrl, wybierz przestrzeń.
3. Wciśnij przycisk ![](/images/Arch_Add.svg) [Dodaj](/Arch_Add/pl "Arch Add/pl") na pasku narzędzi.
4. Powierzchnia ściany definiuje teraz nowy brzeg a przestrzeń będzie się rozciągać tylko do powierzchni ściany w kierunku zwróconym ku niej.

Ten sam przykład: dodaj brzeg mając przestrzeń, która przenika ścianę. Tym razem użyjemy panelu zadań:

1. Dwukrotnie kliknij na obiekcie przestrzeni w widoku drzewa. To aktywuje jego panel zadań
2. Wybierz powierzchnię ściany, która przenika przestrzeń. To będzie nowy brzeg.
3. Wciśnij przycisk ![](/images/Arch_Add.svg) [Dodaj](/Arch_Add/pl "Arch Add/pl") w panelu zadań. Nazwa powierzchni ściany zostanie wyświetlona w sekcji "Brzegi przestrzeni".
4. Wciśnij przycisk OK w panelu zadań.
5. Powierzchnia ściany definiuje teraz nowy brzeg a przestrzeń będzie się rozciągać tylko do powierzchni ściany w kierunku zwróconym ku niej.

Kolejna alternatywa: dodaj brzeg mając przestrzeń przenikającą ścianę. Tym razem użyjemy Edytora właściwości:

1. Przejdź do Widoku właściwości i zlokalizuj właściwość DANE**Boundaries** pod grupą "Space".
2. Po prawej stronie włąściwości DANE**Boundaries**, kliknij na przycisku elipsy.
3. Wybierz powierzchnię ściany, która przenika przestrzeń. To będzie nowy brzeg. Okno dialogowe "Łącze" odzwierciedli wybór.
4. Wciśnij przycisk OK w oknie dialogowym "Łącze".
5. Powierzchnia ściany definiuje teraz nowy brzeg a przestrzeń będzie się rozciągać tylko do powierzchni ściany w kierunku zwróconym ku niej.

### Ograniczenia

* Właściwości granic nie są obecnie edytowalne przez GUI.
* Zobacz [ogłoszenie na forum](http://forum.freecadweb.org/viewtopic.php?f=9&t=4275).

## Właściwości

* DANE**Baza**: Obiekt bazowy, jeśli istnieje *(musi być bryłą)*.
* DANE**Granice**: Lista opcjonalnych elementów brzegowych.
* DANE**Obszar**: Obliczona powierzchnia tej przestrzeni.
* DANE**Wykończenie podłogi**: Wykończenie podłogi w tej przestrzeni.
* DANE**Wykończenie ścian**: Wykończenie ścian w tej przestrzeni.
* DANE**Wykończenie sufitu**: Wykończenie sufitu w tej przestrzeni.
* DANE**Grupa**: Obiekty znajdujące się w tej przestrzeni, takie jak meble.
* DANE**Typ przestrzeni**: Rodzaj tej przestrzeni.
* DANE**Grubość posadzki**: Grubość wykończenia podłogi.
* DANE**Ilość ludzi**: Liczba osób, które zazwyczaj zajmują tę przestrzeń.
* DANE**Moc oświetlenia**: Moc elektryczna potrzebna do oświetlenia tej przestrzeni w watach.
* DANE**Moc wyposażenia**: Moc elektryczna wymagana przez wyposażenie tej przestrzeni w watach.
* DANE**AutoPower**: Jeśli opcja ma wartość `Prawda`, właściwość Moc sprzętu zostanie automatycznie wypełniona przez sprzęt znajdujący się w tej przestrzeni.
* DANE**Klimatyzacja**: Typ klimatyzacji tej przestrzeni.
* DANE**Wnętrze**: Określa, czy ta przestrzeń jest wewnętrzna czy zewnętrzna.

* WIDOK**Tekst**: Tekst do wyświetlenia. Użyj $area, $label, $floor, $walls, $ceiling, aby wstawić odpowiednie dane.
* WIDOK**Nazwa czcionki**: Nazwa czcionki.
* WIDOK**Kolor tekstu**: Kolor tekstu.
* WIDOK**Rozmiar czcionki**: Rozmiar tekstu.
* WIDOK**Pierwsza linia**: Rozmiar pierwszego wiersza tekstu *(mnoży rozmiar czcionki. 1 = ten sam rozmiar, 2 = podwójny rozmiar, itd.)*
* WIDOK**Odstęp między wierszami**: Odstęp między wierszami tekstu.
* WIDOK**Pozycja tekstu**: Pozycja tekstu. Pozostaw (0,0,0) dla pozycji automatycznej.
* WIDOK**Wyrównanie tekstu**: Wyrównanie tekstu.
* WIDOK**Dziesiętne**: Liczba miejsc po przecinku do użycia w tekstach wyliczanych.
* WIDOK**Wyświetl jednostki**: Pokaż przyrostek jednostki lub nie.

## Opcje

* Aby utworzyć strefy grupujące kilka przestrzeni, należy użyć obiektu [Część budynku](/Arch_BuildingPart/pl "Arch BuildingPart/pl") i ustawić jego typ IFC na "Strefa przestrzeni".
* Obiekt Przestrzeń ma te same tryby wyświetlania, co inne obiekty środowiska Architektura i Część, z jednym dodatkowym, zwanym **Footprint**, który wyświetla tylko dolną powierzchnię przestrzeni.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Przestrzeń** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
Space = makeSpace(objects=None, baseobj=None, name="Space")

```

* Tworzy obiekt `Space` z podanego `objects` lub `baseobj`, który może być
  + pojedynczym obiektem dokumentu, w którym to przypadku staje się on kształtem bazowym obiektu Space, lub
  + listą zaznaczonych obiektów zwróconych przez `FreeCADGui.Selection.getSelectionEx()`, lub
  + listą krotek `(object, subobjectname)`.

Przykład:

```
import FreeCAD, Arch

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 1000
Box.Width = 1000
Box.Height = 1000

Space = Arch.makeSpace(Box)
Space.ViewObject.LineWidth = 2
FreeCAD.ActiveDocument.recompute()

```

Po utworzeniu obiektu przestrzeni można dodać do niego wybrane powierzchnie za pomocą następującego kodu:

```
import FreeCAD, FreeCADGui, Draft, Arch

points = [FreeCAD.Vector(-500, 0, 0), FreeCAD.Vector(1000, 1000, 0)]
Line = Draft.makeWire(points)
Wall = Arch.makeWall(Line, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

# Select a face of the wall
selection = FreeCADGui.Selection.getSelectionEx()
Arch.addSpaceBoundaries(Space, selection)

```

Granice można również usunąć, ponownie wybierając wskazane ściany:

```
selection = FreeCADGui.Selection.getSelectionEx()
Arch.removeSpaceBoundaries(Space, selection)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Space/pl&oldid=1559165>"