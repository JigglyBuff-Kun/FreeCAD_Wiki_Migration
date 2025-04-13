---
title: Architektura Rama
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| BIM: Rama |
| Lokalizacja w menu |
| 3D / BIM → Rama |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| F R |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie **Rama** służy do tworzenia wszelkiego rodzaju obiektów ramowych na podstawie profilu i układu. Profil jest wyciągnięty wzdłuż krawędzi układu, który może być dowolnym obiektem 2D, takim jak [szkic](/Sketcher_Workbench/pl "Sketcher Workbench/pl") lub [rysunek roboczy](/Draft_Workbench/pl "Draft Workbench/pl"). Jest to szczególnie przydatne do tworzenia balustrad lub ścian szkieletowych. Obiekty szkieletowe można następnie łatwo przekształcić w obiekty [ścian](/Arch_Wall/pl "Arch Wall/pl") lub [konstrukcji](/Arch_Structure/pl "Arch Structure/pl").

![](/images/Arch_Frame_example.jpg)

Obiekt Ramy utworzony z [szyku ortogonalnego](/Draft_OrthoArray/pl "Draft OrthoArray/pl") [linii](/Draft_Line/pl "Draft Line/pl"), przy użyciu [okręgu](/Draft_Circle/pl "Draft Circle/pl") jako profilu.

## Użycie

1. Utwórz obiekt układu i obiekt profilu, na przykład za pomocą środowiska [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") lub [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl").
2. Wybierz najpierw obiekt układu, a następnie, przy wciśniętym przycisku Ctrl, wybierz obiekt profilu.
3. Naciśnij przycisk ![](/images/Arch_Frame.svg) **Rama** lub naciśnij F, a następnie R.

## Opcje

* Obiekt ramy można umieścić w pewnej odległości od obiektu układu, ustawiając jego właściwość Odsunięcie.
* Profil zostanie skopiowany u podstawy każdej krawędzi obiektu układu, a następnie wyciągnięty wzdłuż niej. Można kontrolować sposób umieszczenia profilu u podstawy każdej krawędzi za pomocą właściwości Wyrównanie i Obrót.

## Właściwości

* Ramy dzielą wspólne właściwości i zachowania wszystkich [komponentów](/Arch_Component/pl "Arch Component/pl").

### Dane

Komponent

* DANE**Base** (`Link`): Układ, na którym oparta jest ta rama.

Informacje o innych właściwościach w tej grupie można znaleźć na stronie [Komponent](/Arch_Component/pl#Właściwości "Arch Component/pl").

Rama

* DANE**Wyrównaj** (`Bool`): Określa, czy profil musi zostać obrócony, aby jego oś normalna była wyrównana z każdą krawędzią.
* DANE**Punkt bazowy** (`Integer`): Indeks bazujący na zerze, wskazujący punkt przecięcia ścieżki na profilu:

```
 ** 0: Podstawa Umiejscowienia profilu. Ten punkt jest również używany w przypadku nieprawidłowego indeksu.
 ** 1: Środek pierwszej krawędzi profilu.
 ** 2: Punkt końcowy pierwszej krawędzi profilu.
 ** 3: Środek drugiej krawędzi profilu.
 ** 4: Punkt końcowy drugiej krawędzi profilu.
 ** ...
 ** n*2-1: Środek n-tej krawędzi profilu.
 ** n*2: Punkt końcowy n-tej krawędzi profilu.

```

* DANE**Krawędzie** (`Enumeration`): Typ krawędzi do rozważenia. Opcje to:

```
 ** Wszystkie krawędzie
 ** Pionowe krawędzie
 ** Poziome krawędzie
 ** Dolne poziome krawędzie: Na podstawie globalnej współrzędnej Z środka masy krawędzi.
 ** Górne poziome krawędzie: Jak wyżej.

```

* DANE**Scal** (`Bool`): Jeśli prawda, zachodzące na siebie bryły są scalane.
* DANE**Odsunięcie** (`VectorDistance`): Opcjonalna odległość między obiektem układu a obiektem ramy.
* DANE**Profil** (`Link`): Profil, na którym oparta jest ta rama.
* DANE**Umiejscowienie profilu** (`Placement`): Opcjonalne dodatkowe umiejscowienie do dodania do profilu przed jego wyciągnięciem. Używana jest tylko **Rotacja** **Umiejscowienia**. Ignorowane, jeśli DANE**Wyrównaj** ma wartość `PRAWDA`.
* DANE**Obrót** (`Angle`): Obrót profilu wokół jego osi wyciągania.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Rama** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
Frame = makeFrame(baseobj, profile)

```

* Tworzy obiekt `Frame` z podanego `baseobj` i `profile`.
  + `baseobj` jest dowolnym obiektem zawierającym polilinie, takim jak [polilinia](/Draft_Wire/pl "Draft Wire/pl") środowiska Rysunek Roboczy lub [szyk ortogonalny](/Draft_OrthoArray/pl "Draft OrthoArray/pl") z ich kolekcją.
  + `profile` jest wytłaczanym obiektem 2D zawierającym ściany lub zamknięte przewody.

Przykład:

```
import Draft, Arch

Line = Draft.makeLine(FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(0, 0, 2000))
baseobj = Draft.makeArray(Line, FreeCAD.Vector(1000, 0, 0), FreeCAD.Vector(0, 1, 0), 6, 1)

profile = Draft.makeCircle(200)
Frame = Arch.makeFrame(baseobj, profile)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Frame/pl&oldid=1539909>"