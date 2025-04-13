---
title: Część Fragmentacja funkcją logiczną
---
|  |
| --- |
| Część: Fragmentacja funkcją logiczną |
| Lokalizacja w menu |
| Część → Rozdziel → Fragmentacja funkcją logiczną |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Krojenie](/Part_Slice/pl "Part Slice/pl"), [Logiczny XOR](/Part_XOR/pl "Part XOR/pl"), [Połącz obiekty](/Part_CompJoinFeatures/pl "Part CompJoinFeatures/pl"), [Operacje logiczne na bryłach](/Part_Boolean/pl "Part Boolean/pl") |
|  |

## Opis

Narzędzie ![](/images/Part_BooleanFragments.svg) **Fragmentacja funkcją logiczną** oblicza wszystkie fragmenty, które mogą wynikać z zastosowania operacji logicznych między kształtami wejściowymi. Na przykład dla dwóch przenikających się kul generowane są trzy nienakładające się, ale stykające się bryły.

![](/images/Part_BooleanFragments_Demo.png)

Na powyższym obrazku poszczególne elementy zostały ręcznie rozsunięte, aby uwidocznić cięcie.

Kształt wyjściowy jest zawsze złożony. Zawartość złożenia zależy od typu kształtu wejściowego i trybu działania. Oznacza to, że nie masz natychmiastowego dostępu do poszczególnych elementów wyniku - elementy pozostają zgrupowane. Poszczególne elementy można wyodrębnić poprzez rozbicie złożenia funkcją *([Rozbij kształt](/Draft_Downgrade/pl "Draft Downgrade/pl"))*.

Narzędzie ma trzy tryby pracy: "Standardowy", "Podziel" i "BryłaZłożona".

**Standard** i **Podziel** różnią się działaniem narzędzia na linach, powłokach i bryłach. W przypadku opcji "Podziel " są one rozdzielane. W przypadku opcji "Standard" są one utrzymywane razem *(otrzymują dodatkowe segmenty)*.

Struktura łączenia w trybach "Standard" i "Podziel" jest zgodna ze strukturą łączenia krojonego kształtu. Oznacza to, że jeśli wprowadzisz dwa złożenia, każde zawierające kulę, jak w powyższym przykładzie, wynik będzie również zawierał dwa złożenia, każde zawierające kawałki pierwotnie zawartej kuli. Oznacza to, że wspólny element zostanie powtórzony dwukrotnie w wyniku. Tylko jeśli kule wejściowe nie są częścią złożenia, wynik będzie zawierał wspólny element tylko raz.

W trybie "BryłaZłożona" bryły są łączone w bryłę złożoną *(bryła złożona to zestaw brył połączonych ścianami. Są one powiązane z bryłami tak, jak linie są powiązane z krawędziami, a powłoki są powiązane ze ścianami. Nazwa pochodzi więc od wyrażenia "bryła złożona")*. Wynikiem jest nie zagnieżdżony zbiór brył złożonych

## Użycie

1. Wybierz obiekty do przecięcia. Kolejność wyboru nie ma znaczenia, ponieważ działanie narzędzia jest symetryczne. Wystarczy wybrać jeden kształt podrzędny każdego obiektu *(np. ściany)*. Możesz także wybrać złożenie zawierające wszystkie kształty do połączenia, np. [w Szyku ortogonalnym](/Draft_OrthoArray/pl "Draft OrthoArray/pl").
2. Istnieje kilka sposobów na wywołanie tego narzędzia:
   * Naciśnij przycisk ![](/images/Part_BooleanFragments.svg) Fragmentacja funkcją logiczną.
   * Wybierz opcję **Część → Podziel → ![](/images/Part_BooleanFragments.svg) Fragmentacja funkcją logiczną** z menu.
3. Utworzony zostanie parametryczny obiekt Boolean Fragments. Oryginalne obiekty zostaną ukryte a wynik przecięcia będzie pokazany w [widoku 3D](/3D_view/pl "3D view/pl").

## Właściwości

Fragmenty logiczne

* DANE**Obiekty**: Lista obiektów do przecięcia. Ogólnie rzecz biorąc, potrzebne są co najmniej dwa obiekty, ale pojedyncze złożenie zawierające kształty do przecięcia również się nada. *(od wersji FreeCAD v0.17.8053 właściwość ta nie jest wyświetlana w edytorze właściwości i można uzyskać do niej dostęp tylko za pośrednictwem środowiska Python)*.
* DANE**Tryb**: **Standartowy**, **Podziel** lub **BryłaZłożona**. Wartość "Standardowy" jest ustawieniem domyślnym. Standartowy i Podziel różnią się działaniem narzędzia na kształcie typu zbiorczego: jeśli wybrano Podziel, są one rozdzielane. W przeciwnym razie są trzymane razem *(otrzymują dodatkowe segmenty)*.
* DANE**Tolerancja**: wartość **Rozmyj**. Jest to dodatkowa tolerancja stosowana podczas wyszukiwania przecięć, oprócz tolerancji przechowywanych w kształtach wejściowych.

## Szczegóły realizacji

Narzędzie Boolean Fragments w "trybie standardowym" to Ogólny Operator Scalenia *(**G**eneral **F**use **O**perator GFA)* OpenCascade. Akceptuje on kombinację prawdopodobnie wszystkich typów kształtów, a logika wyjścia jest dość zawiła. Zobacz [Podręcznik użytkownika OpenCascade: Operacje logiczne](https://www.opencascade.com/doc/occt-7.0.0/overview/html/occt_user_guides__boolean_operations.html) jeśli ten temat Cię zainteresował.

W trybach "Podziel" i "BryłaZłożona" przeprowadzane jest przez FreeCAD dodatkowe przetwarzanie końcowe.

## Tworzenie skryptów

Narzędzie **Fragmentacja funkcją logiczną** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
BOPTools.SplitFeatures.makeBooleanFragments(name)

```

* Tworzy pustą cechę Fragmentacja funkcją logiczną. Właściwość "Obiekty" musi zostać przypisana jawnie, a następnie.
* Zwraca nowo utworzony obiekt.

Funkcja Fragmentacja funkcją logiczną może być również stosowana do zwykłych kształtów, bez konieczności posiadania obiektu dokumentu:

```
import BOPTools.SplitAPI
BOPTools.SplitAPI.booleanFragments(list_of_shapes, mode, tolerance = 0.0)

# OR, for Standard mode:

list_of_shapes = [App.ActiveDocument.Sphere.Shape, App.ActiveDocument.Sphere001.Shape]
pieces, map = list_of_shapes[0].generalFuse(list_of_shapes[1:], tolerance)
# pieces receives a compound of shapes; map receives a list of lists of shapes, defining list_of_shapes <--> pieces correspondence

```

Może to być przydatne do tworzenia niestandardowych funkcji skryptowych Python.

Przykład:

```
import BOPTools.SplitFeatures
j = BOPTools.SplitFeatures.makeBooleanFragments(name= 'BooleanFragments')
j.Objects = FreeCADGui.Selection.getSelection()

```

Samo narzędzie jest zaimplementowane w środowisku Python, patrz /Mod/Part/BOPTools/SplitFeatures.py w miejscu instalacji FreeCAD.

## Uwagi

Narzędzie zostało wprowadzone w wersji FreeCAD v0.17.8053. FreeCAD musi być skompilowany z OCC **6.9.0** lub nowszym. W przeciwnym razie narzędzie jest niedostępne.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_BooleanFragments/pl&oldid=1496991>"