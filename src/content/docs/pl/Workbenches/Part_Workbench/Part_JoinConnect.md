---
title: Część Połącz obiekty
---
|  |
| --- |
| Część: Połącz obiekty |
| Lokalizacja w menu |
| Część → Połącz → Połącz obiekty |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.16 |
| Zobacz także |
| [Osadź obiekty](/Part_JoinEmbed/pl "Part JoinEmbed/pl"), [Wycięcie dla obiektu](/Part_JoinCutout/pl "Part JoinCutout/pl"), [Operacja logiczna](/Part_Boolean/pl "Part Boolean/pl"), [Grubość](/Part_Thickness/pl "Part Thickness/pl") |
|  |

## Opis

Narzędzie ![](/images/Part_JoinConnect.svg) **Połącz obiekty** łączy wnętrza obiektów posiadających dwie ścianki *(np. rur)*. Może również łączyć powłoki i linie.

![](/images/JoinFeatures_Connect.png)

## Użycie

1. Wybierz obiekty do połączenia. Kolejność wyboru nie ma znaczenia, ponieważ działanie narzędzia jest symetryczne. Wystarczy wybrać jeden z kształtów podrzędnych każdego obiektu *(np. ściany)*. Można również wybrać złożenie zawierające wszystkie kształty do połączenia, np. [Szyk ortogonalny](/Draft_OrthoArray/pl "Draft OrthoArray/pl").
2. Istnieje kilka sposobów na wywołanie tego narzędzia:
   * Naciśnij przycisk ![](/images/Part_JoinConnect.svg) Połącz obiekty na pasku narzędzi.
   * Wybierz opcję **Część → Połącz → ![](/images/Part_JoinConnect.svg) Połącz obiekty** z menu głównego.
3. Zostanie utworzony parametryczny obiekt Connect. Oryginalne obiekty zostaną ukryte a wynik połączenia będzie pokazany w [widoku 3D](/3D_view/pl "3D view/pl").

## Właściwości

Połączenie

* DANE**Obiekty**: Lista obiektów do połączenia. Ogólnie rzecz biorąc, potrzebne są co najmniej dwa obiekty, ale wystarczy również pojedyncze złożenie zawierające kształty do połączenia. *(od wersji FreeCAD v0.17.8053 właściwość ta nie jest wyświetlana w [Edytorze właściwości](/Property_editor/pl "Property editor/pl") i można uzyskać do niej dostęp tylko za pośrednictwem skryptów [Python](#Tworzenie_skryptów))*.
* DANE**Ulepsz**: Określa, czy zastosować operację [ulepszania](/Part_RefineShape/pl "Part RefineShape/pl") wobec ostatecznego kształtu. Wartość domyślna jest określona przez pole wyboru "Automatycznie udoskonal model po wykonaniu operacji logicznej" w [Preferencjach środowiska Projekt Części](/PartDesign_Preferences/pl "PartDesign Preferences/pl").
* DANE**Tolerancja**: wartość "rozmycia". Jest to dodatkowa tolerancja stosowana podczas wyszukiwania przecięć, oprócz tolerancji przechowywanych w przetwarzanych kształtach wejściowych.

## Przykład

1. Utwórz rurę, stosując narzędzie [grubość](/Part_Thickness/pl "Part Thickness/pl") do bryły [cylindra](/Part_Cylinder/pl "Part Cylinder/pl"):

![](/images/JoinFeatures_Example_step1.png)

1. Utwórz kolejną rurę o mniejszej średnicy i [umieść](/Placement/pl "Placement/pl") ją tak, aby przebiła ścianę pierwszej rury:

![](/images/JoinFeatures_Example_step2.png)

1. Zaznacz pierwszą i drugą rurę, a następnie kliknij polecenie **Połącz obiekty** na rozwijanym pasku narzędzi Połącz.

![](/images/JoinFeatures_Example_step3_Connect.png)

1. Zastosuj narzędzie przekroju *([Przełącz płaszczyznę tnącą](/Std_ToggleClipPlane/pl "Std ToggleClipPlane/pl"), [Płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl") środowiska Architektura, [Płaszczyzna cięcia](/Arch_CutPlane/pl "Arch CutPlane/pl") środowiska Architektura)*, aby odsłonić elementy wewnętrzne. Na poniższym obrazku użyto narzędzia Płaszczyzna przekroju środowiska Architektura.

![](/images/JoinFeatures_Example_step4_Connect.png)

## Sposób działania

Algorytmy stojące za narzędziami Połącz są dość proste, a ich zrozumienie jest ważne dla prawidłowego korzystania z narzędzi. Zauważmy, że algorytm narzędzia Połącz jest nieco bardziej złożony od innych, ale wystarczy myśleć o nim jako o symetrycznym wariancie algorytmu [osadzania](/Part_JoinEmbed/pl#Sposób_działania "Part JoinEmbed/pl").

1. Każdy obiekt jest dzielony na części przez skrzyżowania z innymi obiektami. *(patrz [Fragmentacja funkcją logiczną](/Part_BooleanFragments/pl "Part BooleanFragments/pl"))*.

2. Z kawałków danego obiektu zachowuje się tylko największy, wszystkie pozostałe są usuwane.

3. Elementy przecięcia, które dotykają co najmniej dwóch obiektów, są dodawane do wyniku. Następnie elementy są łączone, aby utworzyć wynik operacji połączenia.

### Uwagi

* Jeśli w kroku 1 każdy obiekt pozostaje w jednym kawałku, wynik połączenia będzie równoważny działaniu funkcji [połączenia logicznego](/Part_Fuse/pl "Part Fuse/pl") obiektów.
* Teraz wszystkie dostarczone złożenia są rozbijane przed połączeniem. Oznacza to, że samoprzecinające się złożenia, które są nieprawidłowe dla wszystkich innych operacji logicznych, są prawidłowe dla funkcji Połącz *(Może to zostać zmienione w przyszłości)*.
* "Największy" element to ten, który ma największą masę. Oznacza to, że dla brył porównywane są objętości; dla powłok i ścian porównywane są powierzchnie i tak dalej.
* Od wersji FreeCAD v0.17.8053 i wersji OCC 6.9.0 lub wyższej, funkcja Połącz jest prawie tak szybka, jak wszystkie inne operacje logiczne. W starszych wersjach funkcja Połącz jest około 5 razy wolniejsza niż zwykła operacja logiczna i działa tylko na bryłach.

## Tworzenie skryptów

Narzędzie **Połącz obiekty** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
BOPTools.JoinFeatures.makeConnect(name)

```

* Tworzy pustą funkcję Połącz. Właściwość "Obiekty" musi zostać przypisana jawnie, a następnie.
* Zwraca nowo utworzony obiekt.

Funkcja Połącz może być również stosowana do zwykłych kształtów, bez konieczności posiadania obiektu dokumentu:

```
Part.BOPTools.JoinAPI.connect(list_of_shapes, tolerance = 0.0)

```

Może to być przydatne do tworzenia niestandardowych funkcji skryptowych Python.

Przykład:

```
import Part
j = Part.BOPTools.JoinFeatures.makeConnect(name= 'Connect')
j.Objects = FreeCADGui.Selection.getSelection()

```

Samo narzędzie jest zaimplementowane w środowisku Python, patrz /Mod/Part/BOPTools/JoinFeatures.py ([Link do Github](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Part/BOPTools/JoinFeatures.py)) w miejscu, w którym zainstalowany jest FreeCAD.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_JoinConnect/pl&oldid=1496986>"