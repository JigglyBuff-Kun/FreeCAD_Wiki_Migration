---
title: Część Operacje logiczne na bryłach
---

|                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Część: Operacja logiczna                                                                                                                                                        |
| Lokalizacja w menu                                                                                                                                                              |
| Część → Operacje logiczne → Operacja logiczna ...                                                                                                                               |
| Środowisko pracy                                                                                                                                                                |
| [Część](/Part_Workbench/pl "Part Workbench/pl")                                                                                                                                 |
| Domyślny skrót                                                                                                                                                                  |
| _brak_                                                                                                                                                                          |
| Wprowadzono w wersji                                                                                                                                                            |
| -                                                                                                                                                                               |
| Zobacz także                                                                                                                                                                    |
| [Suma](/Part_Fuse/pl "Part Fuse/pl"), [Część wspólna](/Part_Common/pl "Part Common/pl"), [Wytnij](/Part_Cut/pl "Part Cut/pl"), [Przecięcie](/Part_Section/pl "Part Section/pl") |
|                                                                                                                                                                                 |

## Opis

Narzędzie ![](/images/Part_Boolean.svg) **Operacja logiczna** jest ogólnym narzędziem logicznym wszystko w jednym. Pozwala ono na określenie obiektów i operacji do wykonania za pomocą jednego okna dialogowego.

Aby uzyskać szybszy dostęp do tych operacji, użyj ![](/images/Part_Fuse.svg) [Połączenie](/Part_Fuse/pl "Part Fuse/pl"), ![](/images/Part_Common.svg) [Część wspólna](/Part_Common/pl "Part Common/pl"), ![](/images/Part_Cut.svg) [Wytnij](/Part_Cut/pl "Part Cut/pl"), oraz ![](/images/Part_Section.svg) [Przecięcie](/Part_Section/pl "Part Section/pl").

![](/images/PartBooleansDialog.png)

Okno dialogowe do wyboru obiektów i wykonywania na nich operacji logicznych.

## Jak używać

Patrz poszczególne polecenia:

- ![](/images/Part_Cut.svg) [Wytnij](/Part_Cut/pl "Part Cut/pl")
- ![](/images/Part_Fuse.svg) [Połączenie](/Part_Union/pl "Part Union/pl")
- ![](/images/Part_Common.svg) [Część wspólna](/Part_Common/pl "Part Common/pl")
- ![](/images/Part_Section.svg) [Przecięcie](/Part_Section/pl "Part Section/pl")

## Problemy współpłaszczyznowe

Operacje typu logicznego są wykonywane przez wewnętrzne jądro geometrii, [technologię OpenCASCADE](/OpenCASCADE "OpenCASCADE") _(OCCT)_. Biblioteka ta czasami ma problemy z generowaniem wyników operacji logicznych, gdy obiekty wejściowe mają wspólne krawędzie lub powierzchnie. Aby być pewnym, że operacja logiczna zakończy się sukcesem, zaleca się, aby kształty przecinały się wyraźnie; oznacza to, że w większości przypadków jeden kształt powinien wystawać lub być większy od drugiego.

W przypadku współbieżności, nawet jeśli pierwsza operacja logiczna zakończy się sukcesem, kolejne operacje logiczne mogą zawieść. W tym przypadku, problem może nie występować w ostatniej wykonanej operacji, ale w poprzednich, czyli w zagnieżdżonych operacjach, jak wskazano w [widoku drzewa](/Tree_view/pl "Tree view/pl"). Aby rozwiązać te problemy, zaleca się użycie ![](/images/Part_CheckGeometry.svg) narzędzia [Part: sprawdź geometrie](/Part_CheckGeometry/pl "Part CheckGeometry/pl") do sprawdzania wszystkich obiektów pod kątem problemów.

![](/images/Part_Boolean_cut_coplanar_1.png)

![](/images/Part_Boolean_cut_coplanar_2.png)

Po lewej: kształty, które mają wspólną powierzchnię czołową, cięcie logiczne może dawać nieprawidłowe wyniki.  
 Po prawej: kształty, które przecinają się wyraźnie, cięcie logiczne będzie skuteczne w większości przypadków.

![](/images/Part_Boolean_fusion_coplanar_1.png)

![](/images/Part_Boolean_fusion_coplanar_2.png)

Po lewej: kształty, które mają wspólną powierzchnię, połączenie logiczne może dać nieprawidłowe wyniki.  
Po prawej: kształty, które przecinają się wyraźnie, połączenie logiczne będzie skuteczne w większości przypadków.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Boolean/pl&oldid=1466663>"
