---
title: Część Odsunięcie 2D
---
|  |
| --- |
| Część: Odsunięcie 2D |
| Lokalizacja w menu |
| Część → Odsunięcie 2D |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Odsunięcie 3D](/Part_Offset/pl "Part Offset/pl"), [Grubość](/Part_Thickness/pl "Part Thickness/pl"), [Odsunięcie](/Draft_Offset/pl "Draft Offset/pl") |
|  |

## Opis

Narzędzie ![](/images/Part_Offset2D.svg) **Offset 2D** tworzy polilinię równoległą do oryginalnej polilinii w pewnej odległości od niej. Lub powiększa/zmniejsza płaską ścianę, w podobny sposób.

Polilinia / ściana musi być płaska. W jednym obiekcie może znajdować się wiele przewodów, niekoniecznie współpłaszczyznowych.

![](/images/Part_Offset2D_Demo.png)

## Użycie

1. Wybierz obiekt do przesunięcia.
2. Naciśnij przycisk ![](/images/Part_Offset2D.svg) Odsunięcie 2D.
3. Ustaw przesunięcie w oknie [Panelu zadań](/Task_panel/pl "Task panel/pl").
4. Naciśnij OK.

## Uwagi

* Obiekty typu [App: Łącze](/App_Link/pl "App Link/pl") powiązane z odpowiednimi typami obiektów oraz kontenery typu [App: Część](/App_Part/pl "App Part/pl") z odpowiednimi widocznymi obiektami wewnątrz mogą być również używane jako obiekty źródłowe. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

## Znane problemy

* Większość trybów innych niż domyślne będzie działać tylko z OCC 7.0.0 lub nowszym.

* Korzystanie z narzędzia może spowodować awarię FreeCAD *(patrz następny punkt)*. W systemie Windows awarie te są konwertowane na wyjątki i generalnie nie powodują zamknięcia FreeCAD. W innych systemach operacyjnych tak nie jest, dlatego zaleca się zapisanie projektu przed próbą użycia narzędzia. Nie są również obsługiwane elipsy.

* Powiększanie ścian z okrągłymi otworami o ilość wystarczającą do zamknięcia otworów powoduje awarię *(OCC 7.0.0)*. Problem wydaje się być specyficzny dla okręgów; inne kształty wydają się zamykać prawidłowo.

* Podczas kompensowania okręgów, które mają niezerowe Umiejscowienie, wynik jest umieszczany nieprawidłowo. *(OCC 7.0.0)*

* Podczas przesuwania okręgów czasami są one przesuwane w nieoczekiwanym kierunku *(np. do wewnątrz zamiast na zewnątrz). (OCC 7.0.0)*

* Wypełnienie - wartość `Prawda` nie działa podczas zbiorczego odsunięcia otwartych polilinii w trybie "Powłoka".

* Tryb łączenia "styczny" nie działa *(OCC 7.0.0)*.

* Odsunięcie polilinii wykonanej z pojedynczego segmentu linii nie jest obsługiwane *(ponieważ segment linii nie definiuje płaszczyzny)*. Pojedyncze segmenty linii również nie mogą uczestniczyć w przesunięciu zbiorowym.

## Właściwości

* DANE**Źródło**: Łącze do oryginalnego kształtu

* DANE**Wartość**: Odległość, o którą ma zostać powiększona polilinia / ściana. Jeśli wartość jest ujemna, przewód / powierzchnia zostanie zmniejszona.

* DANE**Tryb** *("Rura" lub "Powłoka")*: ustawia sposób przetwarzania niezamkniętych przewodów. Jeśli wybrano "Rura", to polilinia jest obrysowywana tak, jakby była bardzo cienkim zamkniętym konturem. Jeśli "Powłoka", tworzony jest rozwarta linia.

:   ![](/images/Part_Offset2D_Mode.png)

* DANE**Połącz** *("Łuk", "Stycznie", "Przecięcie")*: ustawia zachowanie wokół załamań. Jeśli wybrano "Łuk", przesunięte segmenty są połączone łukiem okręgu, wyśrodkowanym w wierzchołku. "Stycznie" nie jest obsługiwane w OCC7.0.0. "Przecięcie": przesunięte segmenty są przedłużane do momentu ich przecięcia.

:   ![](/images/Part_Offset2D_Join.png)

* DANE**Przecięcie** przyjmuje wartości *(`Fałsz` i `Prawda`)*: ustawia, czy wiele linii ma być traktowanych łącznie, czy niezależnie. Jeśli wybrano `Fałsz`, przewody są przesunięte niezależnie, przecięcia między wynikowymi liniami są ignorowane. Jeśli `Prawda`, linie są przesunięte grupowo.

:   ![](/images/Part_Offset2D_Intersection.png)

Tylko linie wewnątrz struktury złożonej są połączone. Na przykład, jeśli struktura jest typu *compound(wire1, wire2, compound(wire3, wire4))*, linie wire1 i wire2 będą traktowane zbiorczo, ale niezależnie od linii wire3 i wire4. Podobnie, wire3 i wire4 są traktowane zbiorczo, ale niezależnie od wire1 + wire2.

Również w trybie zbiorczym kierunki linii są ważne i wpływają na kierunek przesunięcia. Jest to ściśle związane z tym, jak traktowane są otwory w ścianach.

Przewody traktowane zbiorczo muszą być współpłaszczyznowe. Przewody traktowane niezależnie nie muszą być współpłaszczyznowe.

* DANE**Wypełnienie** przyjmuje wartości *(`Fałsz`, `Prawda`)*: jeśli wybrano `Prawda`, przestrzeń między oryginalną linią/ścianą a przesunięciem jest wypełniana ścianą.

:   ![](/images/Part_Offset2D_Fill.png)

## Tworzenie skryptów

Narzędzie **Odsunięcie 2D** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
f = App.ActiveDocument.addObject("Part::Offset2D", "Offset2D")
f.Source =  #some object
f.Value = 10.0

```

Odsunięcie 2D jest również dostępne jako metoda `Part.Shape.` Przykład:

```
import Part
circle = Part.Circle().toShape()
enlarged_circle = circle.makeOffset2D(10.0)
Part.show(circle)
Part.show(enlarged_circle)
# makeOffset2D(offset, join = 0, fill = False, openResult = false, intersection = false)
# 
# * offset: distance to expand the shape by. 
# 
# * join: method of offsetting non-tangent joints. 0 = arcs, 1 = tangent, 2 =
# intersection
# 
# * fill: if true, the output is a face filling the space covered by offset. If
# false, the output is a wire/face.
# 
# * openResult: True for "Skin" mode; False for Pipe mode. 
# 
# * intersection: collective offset
# 
# Returns: result of offsetting (wire or face or compound of those). Compounding
# structure follows that of source shape.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Offset2D/pl&oldid=1282936>"