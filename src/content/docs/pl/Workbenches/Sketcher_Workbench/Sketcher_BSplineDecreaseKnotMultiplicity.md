---
title: Szkicownik Zmniejsz krotność węzła krzywej złożonej
---
|  |
| --- |
| Szkicownik: Zwiększ krotność węzła krzywej złożonej |
| Lokalizacja w menu |
| Szkic → Narzędzia szkicownika krzywej złożonej → Zwiększ krotność węzła krzywej złożonej |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Zwiększ krotność węzła krzywej złożonej](/Sketcher_BSplineIncreaseKnotMultiplicity/pl "Sketcher BSplineIncreaseKnotMultiplicity/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) **Zmniejsz krotność węzła krzywej złożonej** zmniejsza krotność węzła [krzywej złożonej](/B-Splines/pl "B-Splines/pl").

## Użycie

1. Wybierz węzeł krzywej złożonej.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) **Zmniejsz stopień krzywej złożonej**.
   * Wybierz z menu **Szkic → Narzędzia szkicownika krzywej złożonej → ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) Zmniejsz stopień krzywej złożonej**.

## Przykład

Zapoznaj się z informacjami na stronie: [Zwiększ krotność węzłów krzywej złożonej](/Sketcher_BSplineIncreaseKnotMultiplicity/pl#Użycie "Sketcher BSplineIncreaseKnotMultiplicity/pl")

## Uwagi

Zmniejszenie krotności węzła do zera powoduje jego zniknięcie. W sensie matematycznym pojawia się on wtedy zero razy w wektorze węzłów, co oznacza, że nie ma już funkcji bazowej. Aby to zrozumieć, potrzeba trochę matematyki, ale będzie to również jasne, jeśli spojrzysz na krotność.
Na przykład węzeł o krotności 0 na krzywej zlożonej o stopniu 3
oznacza, że w miejscu węzła dwie części Béziera są połączone ciągłością „C3”. Zatem trzecia pochodna powinna być równa po obu stronach węzła. Jednak w przypadku sześciennej krzywej Béziera oznacza to, że obie strony muszą być częścią tej samej krzywej. W rzeczywistości nie ma już węzła łączącego dwie krzywe Béziera.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_BSplineDecreaseKnotMultiplicity/pl&oldid=1405801>"