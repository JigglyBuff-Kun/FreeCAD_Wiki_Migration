---
title: Część Odsunięcie 3D
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Część: Odsunięcie 3D |
| Lokalizacja w menu |
| Część → Odsunięcie 3D |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Grubość](/Part_Thickness/pl "Part Thickness/pl"), [Odsunięcie 2D](/Part_Offset2D/pl "Part Offset2D/pl") |
|  |

## Opis

Narzędzie ![](/images/Part_Offset.svg) **Odsunięcie 3D** tworzy równoległe kopie wybranego kształtu w pewnej odległości od kształtu bazowego, równocześnie tworząc nowy obiekt.

![](/images/PartOffset0.png) → ![](/images/PartOffset1.png)

## Użycie

1. Wybierz obiekt, z którym chcesz utworzyć odsunięcie.
2. Naciśnij przycisk ![](/images/Part_Offset.svg) **Odsunięcie 3D**
3. Dostosuj odległość i parametry w zależności od wymaganych rezultatów.

## Uwagi

* Obiekty typu [App: Łącze](/App_Link/pl "App Link/pl") powiązane z odpowiednimi typami obiektów oraz kontenery typu [App: Część](/App_Part/pl "App Part/pl") z odpowiednimi widocznymi obiektami wewnątrz mogą być również używane jako obiekty źródłowe. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

## Przykłady

![](/images/PartOffset0.png) → ![](/images/PartOffset1.png)

Obiekt z niewielkim odsunięciem i zaokrąglonymi rogami *(łuk)*.

![](/images/PartOffset3.png)

Ten sam obiekt z ostrymi *(przecinającymi się)* narożnikami.

![](/images/PartOffset2.png)

Ten sam obiekt z dużym odstępem wypełnia przednią lewą lukę i umożliwia przecięcie linii.

![](/images/PartOffset4.png)

Arbitralny kształt *([polilinii](/Draft_Wire/pl "Draft Wire/pl"))* z odsunięciem 3D *(ignoruje parametr MODE)*.

![](/images/PartOffset5.png)

Ten sam kształt z odsunięciem 3D jako POWŁOKA i *wypełnionym* odsunięciem.

![](/images/PartOffset6.png)

Odsunięcie **wypełnione** z 2 cylindrami tworzącymi cięcia funkcją logiczną. Cylinder A przechodzi przez WYPEŁNIENIE, podczas gdy Cylinder B przechodzi tylko przez WYPEŁNIENIE, a NIE przez źródłowy kształt 2D.

## Właściwości

* DANE**Offset**: Odległość, o którą mają być przesunięte wierzchołki kształtu
* DANE**Mode**: Tryb tworzenia. **Powłoka** tworzy nowy kształt wokół kształtu źródłowego. **Rura** *(do zrobienia)*. **RectoVerso** *(do zrobienia)*.
* DANE**Join type**: W jaki sposób budowane są nowe narożniki. **Przecięcie** daje ostre narożniki przez liniowe przedłużenie krawędzi. **Łuk** i **styczna** dają zaokrąglone narożniki.

1. Opcjaː Przecięcieː Pozwala na podsunięcia skierowane do wewnątrz w celu "zalania" luki przez przecięcie wynikowego kształtu, aż do osiągnięcia przeciwległych powierzchni.
2. Opcjaː Samodzielne przecięcieː *(do zrobienia)*
3. Opcjaː Wypełnianie odsunięciaː Jeśli kształt był dwuwymiarowy, luka pomiędzy dwoma kształtami zostanie wypełniona. Wypełnienie jest teraz bryłą, stąd kształt źródłowy nie jest bryłą. Tak więc operacje logiczne mogą prowadzić do dziwnych rezultatów *(patrz przykład poniżej)*.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Offset/pl&oldid=1476546>"