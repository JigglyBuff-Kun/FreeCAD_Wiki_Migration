---
title: Część Krojenie
---
|  |
| --- |
| Część: Rozbij na kształty złożenia |
| Lokalizacja w menu |
| Część → Rozdziel → Rozbij na kształty złożenia |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Funkcja logiczna rozdzielająca](/Part_BooleanFragments/pl "Part BooleanFragments/pl"), [Logiczny XOR](/Part_XOR/pl "Part XOR/pl"), [Połącz obiekty](/Part_CompJoinFeatures/pl "Part CompJoinFeatures/pl"), [Operacje logiczne na bryłach](/Part_Boolean/pl "Part Boolean/pl") |
|  |

## Opis

Narzędzie ![](/images/Part_Slice.svg) Rozbij na kształty złożenia znane również jako **Pokrój na składniki** służy do dzielenia kształtów przez przecięcie z innymi kształtami. Na przykład dla prostopadłościanu i płaszczyzny zostanie utworzone złożenie dwóch brył.

![](/images/Part_Slice_Demo.png)

Powyżej: elementy zostały później ręcznie rozsunięte, aby uwidocznić cięcie.

Istnieją dwa polecenia do przecinania kształtu: ![](/images/Part_SliceApart.svg) [Rozbij](/Part_SliceApart/pl "Part SliceApart/pl") i ![](/images/Part_Slice.svg) [Rozbij na kształty złożenia](/Part_Slice "Part Slice"). Oba tworzą parametryczną cechę *Rozbicia*, która umieszcza pokrojone kawałki w złożeniu. Jednakże ![](/images/Part_SliceApart.svg) [Rozbij](/Part_SliceApart/pl "Part SliceApart/pl") rozbija powstałe złożenie na oddzielne obiekty. "Rozbij na kształty złożenia" jest w pełni parametryczne i nie powoduje żadnych problemów, gdy zmienia się liczba części. Natomiast "Rozbij" nie aktualizuje liczby obiektów wraz ze zmianą liczby części.

Kształt wyjściowy zajmuje tę samą przestrzeń co oryginał. Jest on jednak dzielony tam, gdzie przecina się z innymi kształtami. Podzielone części są umieszczane w bryle złożonej *(lub bryle zespolonej)*, więc obiekt wydaje się pozostawać w jednym kawałku. Musisz rozbić złożenie, aby uzyskać poszczególne elementy. Jeśli chcesz uzyskać dostęp do poszczególnych części w sposób parametryczny, możesz użyć do tego celu ![](/images/Part_CompoundFilter.svg) [Filtr złożeń](/Part_CompoundFilter/pl "Part CompoundFilter/pl"). Dla szybkiego dostępu nieparametrycznego użyj narzędzia ![](/images/Draft_Downgrade.svg) [Rozbij kształt](/Draft_Downgrade/pl "Draft Downgrade/pl").

Narzędzie ma trzy tryby pracy: "Standardowy", "Podziel" i "BryłaZłożona". Nie ma żadnego formularza wyboru, są one predefiniowane, ale można uzyskać do nich dostęp po wykonaniu operacji na poziomie wynikowych segmentów.

**Standard** i **Podziel** różnią się działaniem narzędzia na linach, powłokach i bryłach. W przypadku opcji "Podziel" są one rozdzielane. W przypadku opcji "Standard" są one utrzymywane razem *(otrzymują dodatkowe segmenty)*.

Struktura łączenia w trybach "Standard" i "Podziel" jest zgodna ze strukturą łączenia krojonego kształtu.

W trybie "BryłaZłożona" bryły są łączone w bryłę złożoną *(lub złożenie brył złożonych, jeśli powstałe bryły tworzą więcej niż jedną wyspę połączeń)*. Złożone bryły to zestaw brył połączonych ścianami. Są one powiązane z bryłami tak, jak linie są powiązane z krawędziami, a powłoki są powiązane ze ścianami. Nazwa pochodzi więc od wyrażenia "bryła złożona".

Ogólne działanie narzędzia jest bardzo podobne do ![](/images/Part_BooleanFragments.svg) [Fragmentacja funkcją logiczną](/Part_BooleanFragments/pl "Part BooleanFragments/pl"), z wyjątkiem tego, że tylko fragmenty z pierwszego kształtu znajdują się w wyniku.

## Użycie

1. Wybierz najpierw obiekt, który ma zostać pocięty, a następnie kilka obiektów, którymi ma zostać pocięty.   
    Kolejność wyboru jest ważna. Złożenia z samoprzecięciami nie są dozwolone *(samoprzecięcia czasami mogą być uwzględnione poprzez przepuszczenie złożenia przez ![](/images/Part_BooleanFragments.svg) [Part Boolean Fragments](/Part_BooleanFragments/pl "Part BooleanFragments/pl"))*.
2. Wywołaj polecenie *Rozbij na kształty złożenia*  na kilka sposobów:
   * Naciśnij przycisk ![](/images/Part_Slice.svg) **Rozbij na kształty złożenia** na pasku narzędzi.
   * Użyj polecenia **Część → Rozdziel → Rozbij na kształty złożenia**  w menu części.

1. Uwagaː Obiekty do cięcia muszą całkowicie oddzielać obiekt do przecięcia. W ten sposób prostopadłościan nie może zostać przecięty przez polilinię, ale na przykład przez płaszczyznę pochodzącą z wyciągniętej polilinii.

Tworzony jest obiekt parametryczny Rozbicia. Oryginalne obiekty są ukrywane, a wynik połączenia jest wyświetlany w oknie [widoku 3D](/3D_view/pl "3D view/pl").

## Struktura drzewa cechy Rozbij

Polecenie *Rozbij na kształty złożenia* tworzy coś więcej niż tylko wycięty obiekt. W poniższym przykładzie prostopadłościan jest przecinany przez ścianę.

Tworzony jest wycinek, a każdy jego element jest łączony w Złożenie.

![](/images/Part_SliceTree.png)

## Właściwości

Rozkrój

* DANE**Baza**: Obiekt do pokrojenia.
* DANE**Narzędzia**: Lista obiektów do cięcia. *(od wersji FreeCAD v0.17.8053 właściwość ta nie jest wyświetlana w edytorze właściwości i można uzyskać do niej dostęp tylko za pośrednictwem środowiska Python)*.
* DANE**Tryb**: "Standardowy", "Podziel" i "BryłaZłożona". "Podziel" jest wartością domyślną. Standard i Podziel różnią się działaniem narzędzia na kształtach typu zbiorczego: jeśli zostanie wybrana opcja podziel, kształty te zostaną rozdzielone. W przeciwnym razie będą one trzymane razem *(otrzymają dodatkowe segmenty)*.
* DANE**Tolerancja**: wartość **Rozmyj**. Jest to dodatkowa tolerancja stosowana podczas wyszukiwania przecięć, oprócz tolerancji przechowywanych w kształtach wejściowych.

̈Uwagaː Właściwości są dostępne na etapie wewnętrznego obiektu wycinka, a nie na poziomie wyniku.

## Przykład

### Tworzenie układanki

1. Przełącz się na środowisko pracy ![](/images/Workbench_Sketcher.svg) [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl")
   * Utwórz nowy szkic.
   * Narysuj prostokąt, który wyznaczy ogólny kształt układanki.
   * Zamknij szkic.   
     ![](/images/Slice_example_step1.png)
2. Przełącz się do środowiska pracy ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl").
   * Zaznacz szkic i wybierz z menu opcję **Część → ![](/images/Part_MakeFace.svg) [Utwórz ścianę z polilinii](/Part_MakeFace/pl "Part MakeFace/pl")**.   
     ![](/images/Slice_example_step2.png)
3. Przełącz się z powrotem do ![](/images/Workbench_Sketcher.svg) [Szkicownika](/Sketcher_Workbench/pl "Sketcher Workbench/pl")
   * Utwórz kolejny szkic na tej samej płaszczyźnie.
   * Używając narzędzia polilinia, narysuj linie, które podzielą układankę na części.  
     ![](/images/Slice_example_step3.png).
4. Przełącz się z powrotem do środowiska pracy ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl").
   * Zaznacz szkic przedstawiający podział i zastosuj narzędzie ![](/images/Part_BooleanFragments.svg) [Fragmentacja funkcją logiczną](/Part_BooleanFragments/pl "Part BooleanFragments/pl"). Spowoduje to wstawienie wierzchołków tam, gdzie przecinają się linie szkicu rozdzielającego. Ich obecność jest niezbędna, aby wykonać następny krok.   
     ![](/images/Slice_example_step4.png)
5. Zaznacz prostokątną ścianę i fragmenty Fragmentów logicznych szkicu rozdzielającego i zastosuj narzędzie ![](/images/Part_Slice.svg) Rozbij na kształty złożenia.  
   ![](/images/Slice_example_step5.png)
6. Użyj narzędzia ![](/images/Part_ExplodeCompound.svg) [Rozbij kształt złożony](/Part_ExplodeCompound/pl "Part ExplodeCompound/pl") na ścianie pokrojonej w wycinki, aby ponownie rozbić złożenie utworzone przez Part Slice na pojedyncze kawałki.

**Uwaga:** Kroki 5 i 6 można wykonać jednym kliknięciem przy użyciu narzędzia ![](/images/Part_SliceApart.svg) [Rozkrój](/Part_SliceApart/pl "Part SliceApart/pl").

## Uwagi

* Narzędzie zostało wprowadzone w wersji FreeCAD v0.17.8053. FreeCAD musi być skompilowany z OCC **6.9.0** lub nowszym. W przeciwnym razie narzędzie jest niedostępne.
* Właściwości są dostępne na wewnętrznym obiekcie wycinka, a nie na poziomie wyniku.
* Obiekty do cięcia muszą całkowicie oddzielać obiekt do cięcia. Prostopadłościan nie może więc zostać pokrojony przez polilinię, ale na przykład przez płaszczyznę pochodzącą z wyciągniętej polilinii.
* Obiekt krojony musi przejść kontrolę *BOP*. Zobacz stronę ![](/images/Part_CheckGeometry.svg) [Sprawdź geometrię](/Part_CheckGeometry/pl "Part CheckGeometry/pl").

## Tworzenie skryptów

Narzędzie **Odsunięcie 2D** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
BOPTools.SplitFeatures.makeSlice(name)

```

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

## Poradniki

* [: FreeCad 0.18 środowisko pracy Część z użyciem narzędzi Rozbij na kształty złożenia i Rozbij](https://www.youtube.com/watch?v=tzHkQaHgrfQ) *(język angielski)*, autor: Ha Gei

* [: FreeCAD, funkcje Rozbij na kształty złożenia oraz Rozbij, oraz inne sztuczki](https://www.youtube.com/watch?v=JJAL5JmqqKQ) *(język niemiecki)*, autor: Ha Gei

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Slice/pl&oldid=1285835>"