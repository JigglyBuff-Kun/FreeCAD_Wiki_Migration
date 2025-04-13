---
title: BIM Menadżer ilości IFC
---

|                                             |
| ------------------------------------------- |
| BIM: Menadżer ilości IFC                    |
| Lokalizacja w menu                          |
| Zarządzanie → Menadżer ilości IFC           |
| Środowisko pracy                            |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót                              |
| _brak_                                      |
| Wprowadzono w wersji                        |
| -                                           |
| Zobacz także                                |
| _brak_                                      |
|                                             |

## Opis

**Menedżer ilości IFC** umożliwia sprawdzenie "jawnych ilości" dołączonych do obiektów, które mają zostać wyeksportowane do IFC.

![](/images/BIM_ifcquantities_screenshot.png)

Menadżer ilości IFC.

Format IFC pozwala na uwzględnienie, dla dowolnego obiektu, jawnych wielkości, które mogą być takie jak "Szerokość", "Wysokość" lub "Powierzchnia". Nie ma standardu określającego, który typ obiektu musi zawierać dany rodzaj wielkości, a także nie ma gwarancji, że takie jawne wielkości faktycznie odzwierciedlają geometrię obiektu. Innymi słowy, wielkości te mogą mieć błędne wartości lub nawet kłamać. Ściana może mieć geometrię sześcianu o długości 10 metrów, ale może mieć dołączoną wartość "Długość" równą 8 metrów.

Ideą ilości jawnych jest udostępnienie ich aplikacjom, które nie są w stanie odczytać geometrii, takim jak arkusze kalkulacyjne. Taka aplikacja, czytając plik IFC z jawnymi wielkościami, nadal może uzyskać pojęcie o wymiarach obiektu i wykorzystać je na przykład do obliczeń ilościowych.

Domyślnie podczas eksportowania pliku IFC z FreeCAD nie są eksportowane żadne jawne ilości. Dzięki menedżerowi ilości IFC możesz zaznaczyć, które ilości powinny zostać wyeksportowane i sprawdzić ich wartości. Znaki ostrzegawcze będą wyświetlane obok wartości zerowych, powiadamiając o możliwych problemach, które można naprawić przed eksportem.

Można również użyć menedżera ilości, aby zmienić lub naprawić rzeczywiste wartości _wysokości_, _szerokości_ i _długości_ obiektów. Wpłynie to jednak na geometrię obiektu w FreeCAD.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_IfcQuantities/pl&oldid=1439384>"
