---
title: Projekt Części Utwórz klona
---
|  |
| --- |
| Projekt Części: Utwórz klona |
| Lokalizacja w menu |
| Projekt części → Utwórz klona |
| Środowisko pracy |
| [Projekt części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Klon](/Draft_Clone/pl "Draft Clone/pl") |
|  |

## Opis

Funkcja **Klon** środowiska Projekt Części tworzy połączoną kopię wybranego obiektu, która będzie podążać za wszelkimi przyszłymi edycjami oryginalnego obiektu *(z wyjątkiem umiejscowienia)*. Na przykład, jednym z przypadków użycia jest wykonanie [operacji logicznej](/PartDesign_Boolean/pl "PartDesign Boolean/pl") na obiekcie utworzonym w innym środowisku roboczym. Większość typów obiektów jest akceptowana, o ile są to pojedyncze bryły. Jeśli potrzebujesz sklonować wiele obiektów *(np. bryły)* lub [kontener](/Std_Part/pl "Std Part/pl") środowiska Część, możesz użyć funkcji [klon](/Draft_Clone/pl "Draft Clone/pl") ze środowiska Rysunek Roboczy. Jednym z zastrzeżeń jest to, że klon środowiska roboczego Projekt części ustawia bieżące położenie klonu jako zero *(zarówno translację kartezjańską, jak i orientację przestrzenną)*. Podczas gdy klon środowiska roboczego Rysunek Roboczy oblicza i ustawia wartości liczbowe bieżącego położenia i orientacji klonowanych obiektów w odniesieniu do pojemnika klonowanego obiektu.

![Clone of the inner gear while being translated in 3D space as an independent object](/images/Clone.png)

Klon wewnętrznego koła zębatego podczas przesuwania w przestrzeni 3D jako niezależny obiekt

## Użycie

1. W drzewie modelu wybierz obiekt, który ma zostać sklonowany.
2. Naciśnij przycisk ![](/images/PartDesign_Clone.svg) **Utwórz klona**.

## Właściwości

* DANE**Cecha bazowa**: ustawia oryginalny obiekt, na którym bazuje klon. Aby zastąpić, naciśnij przycisk ..., aby uzyskać listę dostępnych obiektów.
* DANE**Umiejscowninie**: określa orientację i pozycję klona w przestrzeni 3D. Zobacz stronę [Umiejscowienie](/Placement/pl "Placement/pl").
* DANE**Etykieta**: etykieta nadawana obiektowi Klon. Zmień ją zgodnie z własnymi potrzebami.

## Ograniczenia

* Do klonowania w środowisku Projekt Części można użyć tylko jednego obiektu.
* Obsługiwane są tylko obiekty składające się z pojedynczej bryły. Dlatego [złożenia](/Glossary/pl#Compound "Glossary/pl") takie jak [Część: kontener](/Std_Part/pl "Std Part/pl"), [Część: Utwórz złożenie](/Part_Compound/pl "Part Compound/pl") lub [Rysunek Roboczy: Szyk ortogonalny](/Draft_OrthoArray/pl "Draft OrthoArray/pl") nie są obsługiwane.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Clone/pl&oldid=1425110>"