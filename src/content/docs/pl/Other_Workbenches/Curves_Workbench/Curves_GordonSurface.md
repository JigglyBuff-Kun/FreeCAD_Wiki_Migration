---
title: Krzywe Powierzchnia Gordona
---
|  |
| --- |
| Krzywe: Powierzchnia Gordona |
| Lokalizacja w menu |
| Surfaces → Gordon surface |
| Środowisko pracy |
| [Krzywe](/Curves_Workbench/pl "Curves Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie ![](/images/Curves_GordonSurface.svg) **Powierzchnia Gordona** tworzy powierzchnię, która pokrywa się siecią krzywych. Narzędzie to jest częścią [zewnętrznego środowiska pracy](/External_workbenches/pl "External workbenches/pl") o nazwie [Krzywe](/Curves_Workbench/pl "Curves Workbench/pl").

![](/images/GordonSurf-1.png)

## Użycie

1. Powierzchnia Gordon wymaga sieci linii lub krzywych, które tworzą sieć wsparcia dla powierzchni.
   * Powierzchnia będzie "napięta" pomiędzy i nad tymi liniami.
2. W powyższym przykładzie niebieskie linie (lub żebra) reprezentują kształt powierzchni w różnych punktach wzdłuż powierzchni.
   * Można je traktować jako przekroje wzdłuż powierzchni. Lub, jak podpory, nad którymi powierzchnia będzie "rozciągać się".
3. Żółte linie reprezentują zakres i kształt powierzchni pomiędzy przekrojami ("żebrami") zdefiniowanymi przez niebieskie linie.
4. Te linie (niebieskie i żółte) mogą być tworzone na szkicach.
   * Szkice zawierające niebieskie żebra zazwyczaj mają przesunięcie położenia.
     + Każde "żebro" znajduje się w osobnym szkicu.
   * Szkice zawierające linie zasięgu/kształtu (żółte) będą zazwyczaj odnosić się do geometrii zewnętrznej ze szkiców "żeber" w celu dokładnego pozycjonowania.
5. Należy je utworzyć przed następnym krokiem.
6. Przełącz się do środowiska pracy ![](/images/Curves_workbench_icon.svg) [Krzywe](/Curves_Workbench/pl "Curves Workbench/pl") *(instalacja za pomocą ![](/images/Std_AddonMgr.svg) [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl") jest konieczna, jeśli nie zainstalowano go wcześniej)*.
7. Teraz wybierz wszystkie linie, które będą definiować powierzchnię.
8. Kolejność wyboru definiuje kolejność zszywania lub rozciągania powierzchni.
9. Użyj wielokrotnego wyboru, aby zaznaczyć wszystkie linie definiujące powierzchnię. *(Kliknij lewym przyciskiem myszy, przytrzymując klawisz Ctrl)*.
10. Wybierz żebra jako pierwsze, w kolejności. *(W powyższym przykładzie zaznacz niebieskie linie od lewej do prawej lub od prawej do lewej)*.
11. Kontynuuj przytrzymywanie klawisza Ctrl i zaznaczaj linie zasięgu. *(Żółte linie w powyższym przykładzie)*.
12. Aby wywołać polecenie, wykonaj jedną z następujących czynności:
    * Naciśnij przycisk ![](/images/Curves_GordonSurface.svg)
    * Użyj **Surfaces → Gordon surface**.

## Właściwości

* DANE**Umiejscowienie**: Może być używane do dostosowania położenia wynikowej powierzchni Gordon. Zobacz informacje na stronie: [Umiejscowienie](/Placement/pl "Placement/pl").
  + Uwaga: Właściwości Umiejscowienie nie dostosowują położenia krzywych / linii użytych do utworzenia powierzchni, a jedynie samą powierzchnię.
* DANE**Etykieta**: Określona przez użytkownika etykieta (nazwa) powierzchni. *(Domyślnie: Gordon)*
* DANE**Wyjście**: Określa typ wyjścia. *(Domyślnie: Powierzchnia, opcje: Powierzchnia, Szkielet)*
* DANE**Gordon>Max Ctrl Pts**: *(Domyślnie: 80)*
* DANE**Gordon>Sources**: Wybrane przez użytkownika linie, które są używane do tworzenia powierzchni Gordona.
* DANE**Gordon>Tol3D**: Tolerancja 3D *(Domyślnie: 0.01)*
* DANE**Wireframe>Samples U**: Liczba próbek w kierunku U. *(Domyślnie: 16)*
  + Ta wartość jest używana do określenia gęstości siatki, gdy właściwość Wyjście jest ustawiona na Szkielet.
* DANE**Wireframe>Samples V**: Liczba próbek w kierunku V. *(Domyślnie: 16)*
  + Ta wartość jest używana do określenia gęstości siatki, gdy właściwość Wyjście jest ustawiona na Szkielet.
  + Powierzchnia Gordona w trybie szkielet, U=16, V=16

[600px](/index.php?title=Plik:GordonSurf-wireframe.png&action=edit&redlink=1 "Plik:GordonSurf-wireframe.png (page does not exist)")

## Uwagi

* krzywe każdej grupy *(żebra i szyny)* powinny stykać się ze wszystkimi krzywymi drugiej grupy.
  + Innymi słowy, muszą one tworzyć siatkę lub wzór siatki, jak pokazano tutaj:

![](/images/Grid.png)

* Ogólnie rzecz biorąc, normalna powierzchni wynikowej powierzchni Gordona będzie określona przez kierunek żeber.

W tym przykładzie, powierzchnia po lewej stronie, szyny zostały narysowane od +Y do -Y, a wynikowa normalna powierzchni wynosi +Z
  
Po prawej stronie żebra zostały narysowane od -Y do +Y, w wyniku czego normalna powierzchni wynosi -Z.

![](/images/Normals_shown.png)

* [Wyciągnięcie](/Part_Extrude/pl "Part Extrude/pl") środowiska Część może być użyte do stworzenia bryły z powierzchni.

* [Wyciągnięcie](/PartDesign_Pad/pl "PartDesign Pad/pl") środowiska Projekt Części może również utworzyć bryłę z powierzchni. Przeciągnięcie powierzchni do bryły tworzy [cechę bazową](/PartDesign_Body/pl#Cecha_podstawowa "PartDesign Body/pl"), która może być następnie wypełniona.

## Ograniczenia

## Tworzenie skryptów

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_GordonSurface/pl&oldid=1355060>"