---
title: Projekt Części Płaszczyzna odniesienia
---
|  |
| --- |
| Projekt Części: Utwórz płaszczyznę odniesienia |
| Lokalizacja w menu |
| Projekt Części → Utwórz układ odniesienia → Utwórz płaszczyznę odniesienia |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Utwórz punkt odniesienia](/PartDesign_Point/pl "PartDesign Point/pl"), [Utwórz linię odniesienia](/PartDesign_Line/pl "PartDesign Line/pl") |
|  |

## Opis

Tworzy **płaszczyznę odniesienia**, która może być używana jako odniesienie dla szkiców lub innej geometrii odniesienia. Szkice mogą być dołączane do płaszczyzn odniesienia.

![](/images/Datum_plane.png)

*Płaszczyzna odniesienia przecinająca 3 rogi sześcianu z naszkicowanym na niej walcem wykorzystującym płaszczyznę odniesienia jako płaszczyznę X-Y*.

## Wymagania wstępne

Płaszczyzna odniesienia może być tworzona tylko wewnątrz ![](/images/PartDesign_Body.svg) [Zawartości](/PartDesign_Body/pl "PartDesign Body/pl"). Każda bryła ma punkt początkowy *(punkt doniesienia położenia)*, który jest domyślnie ukryty. Aby móc odwoływać się do płaszczyzn bazowych położenia początkowego, ustaw punkt doniesienia położenia jako widoczny. Można to zrobić przed utworzeniem płaszczyzny odniesienia.

## Użycie

1. Naciśnij przycisk ![](/images/PartDesign_Plane.svg) [Utwórz płaszczyznę odniesienia](/PartDesign_Plane "PartDesign Plane").
2. Zdefiniuj parametry płaszczyzny. Wybierz pierwsze odniesienie w widoku 3D, aby filtrować dostępne tryby [dołączania](/Part_EditAttachment "Part EditAttachment").
3. W zależności od wybranego odniesienia, na liście może być dostępny jeden lub więcej trybów dołączania. Najbardziej prawdopodobny z nich zostanie automatycznie wybrany i wyróżniony pogrubioną czcionką na liście. Tekst "Dołączono w trybie" wraz z nazwą trybu dołączania pojawi się w kolorze zielonym w górnej części panelu Parametry punktu odniesienia.
4. Aby umieścić dodatkowe odniesienie, naciśnij następny przycisk Odniesienie. Po naciśnięciu jego etykieta zmienia się na *Wybieranie ...* do momentu dokonania wyboru.
5. Wybierz tryb dołączania z listy.

**Przesunięcia:** Zdefiniuj wartości Odsunięcie dołączenia. **Uwaga**, przesunięcia x, y i z reprezentują lokalny układ współrzędnych płaszczyzny odniesienia, a nie globalny układ współrzędnych. Dlatego przesunięcie z jest zawsze przesunięciem wzdłuż wektora normalnego płaszczyzny odniesienia.

1. **Obrót:** Zmiana opcji "Wokół osi x" powoduje obrót płaszczyzny wokół lokalnej osi X. Zmiana opcji "Wokół osi y" powoduje obrót płaszczyzny wokół lokalnej osi Y. Zmiana opcji "Wokół osi z" powoduje obrót płaszczyzny wokół lokalnej osi Z.
2. Naciśnij OK.

## Opcje

Kliknij dwukrotnie etykietę PłaszczyznaOdniesienia w drzewie modelu lub kliknij prawym przyciskiem myszy i wybierz **Edytuj odniesienie** z menu kontekstowego, aby edytować jego parametry. Aby uzyskać więcej informacji na temat trybu dołączania i przesunięcia dołączania, zobacz stronę [Edytuj dołączenie](/Part_EditAttachment/pl "Part EditAttachment/pl").

## Ustawienia

Domyślny kolor i przezroczystość [geometrii konstrukcyjnych środowiska Projekt Części](/PartDesign_CompDatums/pl "PartDesign CompDatums/pl") są kontrolowane przez [parametr dostosowywania](/Fine-tuning/pl#środowisko_pracy_Projekt_Części "Fine-tuning/pl") **DefaultDatumColor**.

## Przydatne do

Płaszczyzny odniesienia są przydatne jako:

* dowolne płaszczyzny odbicia lustrzanego,
* baza z odpowiednim odsunięciem dla wielu szkiców,
* baza dla szkicu, który musi być odpowiednio odsunięty/obrócony względem początku układu współrzędnych,
* obiekt służący do wizualizacji (np. płaszczyzna ogniskowa).

Jako bazy dla pojedynczych szkiców są praktycznie zbędne. Są podatne na [Problem nazewnictwa topologicznego](/Topological_naming_problem/pl "Topological naming problem/pl") w takim samym stopniu jak szkice.

## Właściwości

* DANE**Tryb mapowania**: wymienia używany tryb dołączania.
* DANE**Odsunięcie dołaczenia**: stosuje transformację (przesunięcie i obrót) w odniesieniu do umieszczenia dołaczenia.
* DANE**Etykieta**: nazwa nadana obiektowi, nazwa ta może być dowolnie zmieniana.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Plane/pl&oldid=1542949>"