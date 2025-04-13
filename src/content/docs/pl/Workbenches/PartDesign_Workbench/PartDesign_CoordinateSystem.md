---
title: Projekt Części Lokalny układ współrzędnych
---
|  |
| --- |
| Projekt Części: Utwórz lokalny układ współrzędnych. |
| Lokalizacja w menu |
| Projekt Części → Utwórz lokalny układ współrzędnych |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.18 |
| Zobacz także |
| [Punkt odniesienia](/PartDesign_Point/pl "PartDesign Point/pl"), [Linia odniesienia](/PartDesign_Line/pl "PartDesign Line/pl"), [Płaszczyzna odniesienia](/PartDesign_Plane/pl "PartDesign Plane/pl") |
|  |

## Opis

Tworzy **lokalny układ współrzędnych**, który może być użyty jako odniesienie dla innej geometrii układu odniesienia. Pomaga również zidentyfikować orientację geometrii odniesienia w przestrzeni 3D.

![](/images/PartDesign_LocalCoordinateSystem_Example.png)

Lokalny układ współrzędnych pochodzący z punktu położenia odniesienia płaszczyzny.

## Użycie

1. Naciśnij przycisk ![](/images/PartDesign_CoordinateSystem.svg) **Utwórz lokalny układ współrzędnych**.
2. Zdefiniuj parametry układu współrzędnych. Wybierz pierwsze odniesienie w oknie widoku 3D, aby filtrować dostępne tryby dołączania.
3. W zależności od wybranego odniesienia, na liście może być dostępny jeden lub więcej trybów dołączania. Najbardziej prawdopodobny z nich zostanie automatycznie wybrany i wyróżniony pogrubioną czcionką na liście. Tekst "Dołączono w trybie" wraz z nazwą trybu dołączania pojawi się w kolorze zielonym w górnej części panelu Parametry punktu odniesienia.
4. Aby dodać dodatkowe odniesienie, naciśnij następny przycisk Odniesienie. Po naciśnięciu jego etykieta zmienia się na *Wybieranie ...* do momentu dokonania wyboru.
5. Wybierz tryb dołączania z listy.
6. Zdefiniuj wartości przesunięcia dołączenia.
7. Naciśnij OK.

## Opcje

Kliknij dwukrotnie etykietę **Local\_CS** w Drzewie modelu lub kliknij prawym przyciskiem myszy i wybierz **Edytuj odniesienie** z menu kontekstowego, aby edytować jego parametry. Aby uzyskać więcej informacji na temat trybu dołączania i przesunięcia dołączania, zobacz stronę [Edytuj dołączenie](/Part_EditAttachment/pl "Part EditAttachment/pl").

## Ustawienia

Zobacz [Projekt Części: Płaszczyzna odniesienia](/PartDesign_Plane/pl#Właściwości "PartDesign Plane/pl").

## Właściwości

### Dane

* DANE**Tryb mapowania**: wymienia używany tryb dołączania.
* DANE**Odwrócenie dołączenia**: wskazuje, czy układ współrzędnych jest odwrócony w orientacji.
* DANE**Odsunięcie dołaczenia**: stosuje transformację *(przesunięcie i obrót)* w odniesieniu do umieszczenia dołączenia.
* DANE**Umiejscowienie**: wskazuje współrzędne i wyrównanie początku układu współrzędnych.
* DANE**Etykieta**: nazwa nadawana obiektowi, nazwa ta może być dowolnie zmieniana.

## Tworzenie skryptów

```
lcs = App.activeDocument().addObject( 'PartDesign::CoordinateSystem', 'LCS' )

```

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_CoordinateSystem/pl&oldid=1462467>"