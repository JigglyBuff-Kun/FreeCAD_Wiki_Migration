---
title: Architektura Dach
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| BIM: Dach |
| Lokalizacja w menu |
| 3D / BIM → Dach |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| R F |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie **Dach** pozwala na utworzenie pochyłego dachu z wybranej linii. Utworzony obiekt dachu jest parametryczny, zachowując relację z obiektem bazowym. Zasada jest taka, że każdej krawędzi przypisany jest profil dachu *(nachylenie, szerokość, okap, grubość)*.

**Uwaga:** Narzędzie to jest wciąż w fazie rozwoju i może zawieść w przypadku bardzo złożonych kształtów.

![](/images/RoofExample.png)

Widok z góry modelu budynku przedstawiający dach z pewną przezroczystością.

## Użycie(polilinia bazowa)

1. Stwórz zamkniętą polilinię, idąc w kierunku przeciwnym do ruchu wskazówek zegara, i zaznacz ją.
2. Naciśnij przycisk ![](/images/Arch_Roof.svg) **Dach**, lub użyj skrótu klawiszowego R, a następnie F.
3. Domyślny obiekt dachu może mieć dziwny kształt, ponieważ narzędzie brakuje niezbędnych informacji.
4. Po utworzeniu domyślnego dachu, kliknij dwukrotnie na obiekt w widoku drzewa, aby uzyskać dostęp i edytować wszystkie właściwości. Kąt musi mieć wartość pomiędzy 0° a 90°.
5. Każda linia odpowiada jednej płycie dachowej. Możesz więc ustawić właściwości dla każdej z nich.
6. Aby ułatwić sobie zadanie, możesz ustawić wartość `Angle` lub `Run` na `0` i zdefiniować `Relative Id`, co spowoduje automatyczne obliczenie danych względem `Relative Id`.
7. Działa to następująco:
   1. Jeśli `Angle = 0` i `Run = 0`, to profil jest identyczny jak względny profil.
   2. Jeśli `Angle = 0`, to `Angle` jest obliczany tak, aby wysokość była taka sama jak w względnym profilu.
   3. Jeśli `Run = 0`, to `Run` jest obliczany tak, aby wysokość była taka sama jak w względnym profilu.
8. W końcu, ustaw kąt na 90°, aby uzyskać szczyt.
9. *Uwaga*: dla lepszego zrozumienia, zapoznaj się z [prezentacją na YouTube](https://www.youtube.com/watch?v=4Urwru71dVk).

## Użycie (bryła bazowa)

Jeśli dach ma skomplikowany kształt *(np. zawiera skośne okna lub inne niestandardowe elementy)*, można utworzyć niestandardowy obiekt bryłowy za pomocą różnych innych narzędzi FreeCAD *([Część](/Part_Workbench/pl "Part Workbench/pl"), [Szkicownmik](/Sketcher_Workbench "Sketcher Workbench") itp.)* A następnie użyć tej bryły jako obiektu DANE**bazowego** dla dachu:

1. Wybierz obiekt bazowy.
2. Naciśnij przycisk ![](/images/Arch_Roof.svg) **Dach** lub naciśnij R, a następnie F.

## Odjęcie nad dachem

Dachy mają automatycznie generowaną objętość odejmowania *([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") dla dachów z podstawą z bryły)*. Gdy dach jest [usuwany](/Arch_Remove/pl "Arch Remove/pl") ze ścian budynku, zarówno sam dach, jak i wszystko nad nim jest odejmowane od ścian.

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Możliwe jest zastąpienie automatycznego odejmowania objętości poprzez ustawienie właściwości DANE**Subvolume** dachu na niestandardowy obiekt bryłowy.

![](/images/Arch_Roof_Subtract_Default.png) ![](/images/Arch_Roof_Subtract_Subvolume.png) ![](/images/Arch_Roof_Subvolume_Example.png)

Dach oparty na bryle przed *(obrazek 1.)* i po *(obrazek 2.)* [usunięciu](/Arch_Remove/pl "Arch Remove/pl") go ze ścian.  
Trzeci obraz przedstawia wygenerowaną objętość odejmowania.

## Właściwości

Obiekt Architektura: Dach dzieli wspólne właściwości i zachowania ze wszystkimi [Komponentami](/Arch_Component/pl "Arch Component/pl").

### Dane

Dach

* DANE**Kąty** (`FloatList`): Lista kątów połaci dachu.
* DANE**Długość obramowania** (`Length`): Całkowita długość granic dachu.
* DANE**Ściana** (`Integer`): Numer ściany obiektu bazowego użytej do budowy dachu (nie używane).
* DANE**Odwrócony** (`Bool`): Określa, czy kierunek dachu powinien być odwrócony.
* DANE**Wysokości** (`FloatList`): Lista obliczonych wysokości segmentów dachu.
* DANE**Id Rel** (`IntegerList`): Lista identyfikatorów profilów względnych segmentów dachu.
* DANE**Overhang** (`FloatList`): Lista wysięgników segmentów dachu.
* DANE**Długość kalenic** (`Length`): Całkowita długość grzbietów i szczytów dachu.
* DANE**Przebiegi** (`FloatList`): Lista rzutów poziomych długości segmentów dachu.
* DANE**ObjętośćPodrzędna** (`Link`): Objętość do odjęcia. Jeśli określone, jest używana zamiast automatycznie wygenerowanej objętości podrzędnej. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
* DANE**Grobość** (`FloatList`): Lista grubości segmentów dachu.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Dach** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
Roof = makeRoof(baseobj=None, facenr=0, angles=[45.,], run=[], idrel=[0,], thickness=[50.,], overhang=[100.,], name="Roof")

```

* Tworzy obiekt `Roof` z podanego `baseobj`, który może być zamkniętą linią lub obiektem stałym.
  + Jeśli `baseobj` jest linią, można podać listy dla `angles`, `run`, `idrel`, `thickness` i `overhang`, dla każdej krawędzi w linii, aby zdefiniować kształt dachu.
  + Listy są automatycznie uzupełniane w celu dopasowania do liczby krawędzi w polilinii.

Przykład:

```
import FreeCAD as App
import Arch, Draft

doc = App.newDocument()

rect = Draft.makeRectangle(3000, 4000)
doc.recompute()

roof = Arch.makeRoof(rect, angles=[30.,])

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(0, 2000, 0)

wire = Draft.make_wire([p1, p2, p3], closed=True)
doc.recompute()

roof1 = Arch.makeRoof(wire)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Roof/pl&oldid=1539887>"