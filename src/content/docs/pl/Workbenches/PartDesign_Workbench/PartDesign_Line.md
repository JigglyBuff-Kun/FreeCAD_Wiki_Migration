---
title: Projekt Części Linia odniesienia
---
|  |
| --- |
| Projekt Części: Utwórz linię odniesienia |
| Lokalizacja w menu |
| Projekt Części → Utwórz układ odniesienia → Utwórz linię odniesienia |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Utwórz punkt odniesienia](/PartDesign_Point/pl "PartDesign Point/pl"), [Utwórz płaszczyznę odniesienia](/PartDesign_Plane/pl "PartDesign Plane/pl") |
|  |

## Opis

Tworzy **linię odniesienia**, która może być używana jako odniesienie dla szkiców, innej geometrii odniesienia lub elementów. Na przykład może być używana jako oś obrotu dla funkcji obrotu i rowka.

![](/images/Datum_line.png)

Dwie linie odniesienia przechodzące przez przeciwległe narożniki sześcianu spotykają się w środku masy.

## Użycie

1. Naciśnij przycisk ![](/images/PartDesign_Line.svg) **Utwórz linię odniesienia**.
2. Zdefiniuj parametry linii. Wybierz pierwsze odniesienie w oknie widoku 3D, aby przefiltrować dostępne tryby mocowania.
3. W zależności od wybranego odniesienia, na liście może być dostępny jeden lub więcej trybów dołączania. Najbardziej prawdopodobny z nich zostanie automatycznie wybrany i wyróżniony pogrubioną czcionką na liście. Tekst "Dołączono w trybie" wraz z nazwą trybu dołączania pojawi się w kolorze zielonym w górnej części panelu Parametry punktu odniesienia.
4. Aby umieścić dodatkowe odniesienie, naciśnij następny przycisk Odniesienie. Po naciśnięciu jego etykieta zmienia się na *Wybieranie ...* do momentu dokonania wyboru.
5. Wybierz tryb dołączania z listy.
6. Zdefiniuj wartości przesunięcia dołączenia.
7. Naciśnij OK.

## Opcje

Kliknij dwukrotnie etykietę LiniaOdniesienia w drzewie modelu lub kliknij prawym przyciskiem myszy i wybierz **Edytuj odniesienie** z menu kontekstowego, aby edytować jego parametry. Aby uzyskać więcej informacji na temat trybu dołączania i przesunięcia dołączania, zobacz stronę [Edytuj dołączenie](/Part_EditAttachment/pl "Part EditAttachment/pl").

## Ustawienia

Zobacz [Projekt Części: Płaszczyzna odniesienia](/PartDesign_Plane/pl#Właściwości "PartDesign Plane/pl").

## Właściwości

* DANE**Tryb mapowania**: wymienia używany tryb dołączania.
* DANE**Odsunięcie dołaczenia**: stosuje transformację (przesunięcie i obrót) w odniesieniu do umieszczenia dołaczenia.
* DANE**Etykieta**: nazwa nadana obiektowi, nazwa ta może być dowolnie zmieniana.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Line/pl&oldid=1462574>"