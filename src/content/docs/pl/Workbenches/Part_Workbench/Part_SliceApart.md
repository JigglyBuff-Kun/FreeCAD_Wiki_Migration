---
title: Część Rozetnij
---
|  |
| --- |
| Część: Rozetnij |
| Lokalizacja w menu |
| Część → Rozdziel → Rozetnij |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.18 |
| Zobacz także |
| [Krojenie](/Part_Slice/pl "Part Slice/pl"), [Rozbij kształt złożony](/Part_ExplodeCompound/pl "Part ExplodeCompound/pl") |
|  |

## Opis

Jest to narzędzie do dzielenia kształtów przez przecięcie innym kształtem. Na przykład dla prostopadłościanu i płaszczyzny tworzone są dwie bryły.
  
![](/images/Part_Slice_Demo.png)

Powyżej: elementy zostały później ręcznie rozsunięte, aby uwidocznić cięcie.

Narzędzie **Rozetnij** jest tym samym, co ![](/images/Part_Slice.svg) [Rozbij na kształty złożenia](/Part_Slice/pl "Part Slice/pl"), po którym następuje działanie funkcji jak w narzędziu ![](/images/Part_ExplodeCompound.svg) [Rozbij na kształty złożenia](/Part_ExplodeCompound/pl "Part ExplodeCompound/pl"). Podczas gdy "Rozbij na kształty złożenia" jest w pełni parametryczne i nie powoduje żadnych problemów, gdy zmienia się liczba elementów, "Rozetnij" nie aktualizuje liczby obiektów, gdy zostanie zmieniona liczba elementów w operacji.
Oba tworzą parametryczną cechę *Rozbicia*, która umieszcza pocięte kawałki w złożeniu, ale funkcja "Rozbij" rozbija wynikowe złożenie na osobne obiekty.

Kształt wyjściowy zajmuje tę samą przestrzeń co oryginał. Jest on jednak dzielony w miejscach przecięcia z innymi kształtami. Podzielone elementy są odrębnymi elementami.

Więcej informacji można znaleźć na stronie [Rozbij na kształty złożenia](/Part_Slice/pl "Part Slice/pl").

## Struktura drzewa cechy Rozetnij

Polecenie Rozbij tworzy coś więcej niż tylko wycięty obiekt. W poniższym przykładzie prostopadłościan jest przecinany przez ścianę.

Zostaje utworzony fragment, a dla każdej jego części tworzony jest [Filtr złożenia](/Part_CompoundFilter/pl "Part CompoundFilter/pl"), dzięki czemu ten sam fragment występuje wielokrotnie pod każdym Filtrem złożenia. Wszystkie te Filtry złożeń są połączone w jeden obiekt Złożenia.

![](/images/Part_SliceApartTree.png)

## Przykład

* Tworzenie puzzli: patrz przykład zastosowania funkcji [Rozbij na kształty złożenia](/Part_Slice/pl "Part Slice/pl"), kroki od 1 do 6.

## Tworzenie skryptów

Narzędzie Rozetnij może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
BOPTools.SplitFeatures.makeSlice(name)

```

Ustaw tryb na *podziel*, aby uzyskać podział na części.

* Tworzy pusty cechę Rozbij. Właściwości "Baza" i "Narzędzia" muszą zostać przypisane jawnie.
* Zwraca nowo utworzony obiekt.

Obiekt Rozbij może być również stosowany do zwykłych kształtów, bez konieczności posiadania obiektu dokumentu:

```
BOPTools.SplitAPI.slice(base_shape, tool_shapes, mode, tolerance = 0.0)

```

Może to być przydatne do tworzenia niestandardowych funkcji skryptowych Python.

Przykład:

```
import BOPTools.SplitFeatures
j = BOPTools.SplitFeatures.makeSlice(name= 'Slice')
j.Base = FreeCADGui.Selection.getSelection()[0]
j.Tools = FreeCADGui.Selection.getSelection()[1:]

```

Samo narzędzie jest zaimplementowane w środowisku Python, patrz /Mod/Part/BOPTools/SplitFeatures.py *([GitHub link](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Part/BOPTools/SplitFeatures.py))* w miejscu, w którym zainstalowany jest FreeCAD.

## Uwagi

Narzędzie zostało wprowadzone w wersji FreeCAD v0.18.15506. FreeCAD musi być skompilowany z OCC **6.9.0** lub nowszym. W przeciwnym razie narzędzie jest niedostępne.

## Poradniki Wideo

* <https://www.youtube.com/watch?v=tzHkQaHgrfQ> : FreeCad 0.18 środowisko pracy Część z użyciem narzędzi Rozbij na kształty złożenia i Rozetnij *(język angielski)*, autor: Ha Gei

* <https://www.youtube.com/watch?v=JJAL5JmqqKQ> : FreeCAD, funkcje Rozbij na kształty złożenia oraz Rozetnij, oraz inne sztuczki *(język niemiecki)*, autor: Ha Gei

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_SliceApart/pl&oldid=1285550>"