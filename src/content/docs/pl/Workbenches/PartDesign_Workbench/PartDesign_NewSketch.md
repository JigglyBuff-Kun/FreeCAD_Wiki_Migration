---
title: Projekt Części Utwórz szkic
---
|  |
| --- |
| Projekt Części: Utwór szkic |
| Lokalizacja w menu |
| Szkic → Utwór szkic |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Utwór szkic](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl") |
|  |

## Opis

Narzędzie to tworzy nowy szkic, tworzy nową [Zawartość](/PartDesign_Body/pl "PartDesign Body/pl") ze szkicem, jeśli taka nie istnieje i następnie automatycznie otwiera środowisko pracy [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl").

Podczas tworzenia modeli przy użyciu środowiska [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"), narzędzie to powinno być preferowane w odniesieniu do narzędzia ![](/images/Sketcher_NewSketch.svg) [Utwórz szkic](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl") znajdującego się w środowisku [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl").

## Użycie

1. Naciśnij przycisk ![](/images/PartDesign_NewSketch.svg) Utwórz szkic z paska narzędzi Projekt Części.
2. W panelu Zadania zostanie wyświetlone okno dialogowe **Wybierz cechę**. Wybierz jedną z płaszczyzn na liście lub w oknie Widoku 3D, którą można zmienić dla lepszego zobrazowania.
3. Naciśnij OK.
4. Interfejs automatycznie przełączy się na środowisko pracy Szkicownik i szkic będzie można edytować. Po wyjściu ze szkicu interfejs jest przywracany do środowiska pracy Projekt Części, a widok 3D jest przywracany do ujęcia przed utworzeniem szkicu.
5. Alternatywnie, przed utworzeniem szkicu można wybrać płaszczyznę lub ścianę na istniejącej aktywnej bryle, w którym to przypadku szkic jest tworzony natychmiast.

## Opcje

* Aby zmienić dołączenie istniejącego szkicu, zmień jego właściwość *Tryb mapowania* *(zobacz akapit [Właściwości](#Właściwości))*.

* Okno dialogowe *Wybierz cechę* definiuje cechy nowego szkicu.

:   :   ![](/images/PartDesign.CreateSketch.SelectFeatureDialog.jpeg)
    :   Okno dialogowe *Wybierz cechę*. Te ustawienia tworzą szkic na płaszczyźnie XY i umożliwiają odniesienia z innych elementów tej samej bryły.

Ustawienia okna dialogowego

* Pole układu współrzędnych: określa orientację płaszczyzny szkicu.
* Zezwalaj na używane cechy:

:   Zezwalaj na cechy zewnętrzne

* Z innych zawartości tej samej bryły: można odwoływać się do dowolnych elementów używanych w obrębie tej samej bryły.
* Z różnych części lub swobodnych cech:
* Utwórz niezależną kopię: wszystkie inne elementy będą oddzielnymi kopiami, tj. nie zmienią się, gdy zmieni się oryginał.
* Utwórz zależną kopię: elementy będą kopiami, ale zachowana zostanie zależność od oryginalnych elementów. Jest to w zasadzie użycie funkcji [Łącznik kształtu](/PartDesign_ShapeBinder/pl "PartDesign ShapeBinder/pl").
* Utwórz dowiązanie: połączone elementy nie będą kopiami, ale będą wskazywać na oryginalne elementy, np. szkic główny. Wszelkie zmiany są odzwierciedlane w tym szkicu

Aby odwołać się do dowolnych elementów w w obrębie środowiska pracy [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), użyj przycisków ![](/images/Sketcher_External.svg) [Utwórz zewnętrzną geometrię](/Sketcher_External/pl "Sketcher External/pl") i ![](/images/Sketcher_CarbonCopy.svg) [Utwórz kalkę techniczną](/Sketcher_CarbonCopy/pl "Sketcher CarbonCopy/pl"). Generalnie zaleca się używanie innych szkiców jako źródła odniesień, a nie ścian lub krawędzi, ponieważ są one w mniejszym stopniu dotknięte problemem nazewnictwa topologicznego.

## Właściwości

* DANE**Tryb mapowania**: Tryb dołączenia szkicu do innego obiektu, zazwyczaj płaszczyzny lub ściany, ale mogą to być także inne typy obiektów. Kliknij raz w pole, aby wyświetlić przycisk ... i naciśnij go, aby otworzyć okno dialogowe [Dołączenie](/Part_EditAttachment/pl "Part EditAttachment/pl"). Jeśli wartość jest ustawiona na *Wyłączone*, właściwość *Umiejscowienie* jest włączona.
* DANE**Umiejscowienie**: kontroluje orientację szkicu w przestrzeni 3D. Zobacz [Umiejscowienie](/Std_Placement/pl "Std Placement/pl"). Opcja zostaje wyłączona, jeśli szkic jest dołączony poprzez właściwość **Tryb mapowania**.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_NewSketch/pl&oldid=1462549>"