---
title: Szkicownik wymagania wobec szkicu
---
|  |
| --- |
| Ćwiczenie |
| Temat |
| Szkicownik |
| Poziom trudności |
| Początkujący |
| Czas wykonania |
|  |
| Autorzy |
| [Maker](/User:Maker "User:Maker") |
| Wersja FreeCAD |
| dowolna |
| Pliki z przykładami |
| *Nie dołączono* |
| Zobacz również |
| *-* |
|  |

## Minimalne wymagania dotyczące szkicu

Tworzenie bryły w środowisku pracy Projekt części jest już możliwe i osiągalne "tylko" za pomocą krzywej zamkniętej *(profilu)*. Całkowite określenie wszystkich wymiarów i właściwości *("w pełni związane")* nie jest jeszcze wymagane.

To, że krzywa zamknięta jest obecna, nie jest oczywiste i nie jest łatwe do rozpoznania. Podczas łączenia łuku kołowego z linią prostą, np. może mieć miejsce sytuacja że dwa punkty końcowe są tworzone tylko jeden nad drugim. Należy użyć wiązania ![](/images/Constraint_PointOnPoint.svg) [zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl"), po to aby utworzyć pojedynczy punkt, który faktycznie łączy prostą i łuk.

![](/images/Skizze2a.png)

Najprostszy szkic.
  
Po lewej: Krzywa zamknięta tylko w czterech miejscach *(czerwony, automatyczne wiązania utworzone podczas rysowania narzędziem ![](/images/Sketcher_CreatePolyline.svg) [linia łamana](/Sketcher_CreatePolyline/pl "Sketcher CreatePolyline/pl"))*.
  
W środku: Ostrzeżenie - ... rozbita ścianka *(rozbita krzywa)*.
  
Po prawej: Krzywa zamknięta w pozostałych czterech miejscach (zielony)

Jednak dzięki konsekwentnej pracy parametrycznej szkic jest całkowicie zdefiniowany.

## Całkowite zdefiniowanie szkicu

Nawet stosunkowo najprostszy szkic może zawierać dziesiątki nieoznaczoności *(oznaczonych w widoku połączonym)*. Wyeliminowanie ich razem na samym końcu jest stosunkowo skomplikowanym zadaniem.

![](/images/Skizze4a.png)

Zwykły szkic, całkowicie zdefiniowany przez 25 wiązań, z których tylko 5 jest wiązaniami wymiarowymi.

Taka praca jest bardziej przejrzysta i mniej skomplikowana, jeśli od razu wyeliminuje się *swobody* każdego dodanego elementu geometrycznego, czyli te *wymiary* *(czyli wartości dla wymiarów i rozmieszczenie)*. Wstępna kompletność jest osiągnięta, jeśli wszystkie linie są wyświetlane w kolorze zielonym.

Jeśli poczekamy z tym do końca rysunku, to pozostałe *swobody* znajdziemy dotykając punktów i linii kursorem myszki i ustalając, gdzie nie są one jeszcze utwierdzone. Po zakończeniu cały rysunek jest wyświetlany w kolorze zielonym.

Jeśli przypadkowo utworzysz *nadmierną ilość wiązań*, pojawi się ostrzeżenie w widoku połączonym z prośbą o cofnięcie odpowiednich akcji *(wiązań)*.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_requirement_for_a_sketch/pl&oldid=871985>"