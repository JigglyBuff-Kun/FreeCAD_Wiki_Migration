---
title: Szkicownik Wybierz elementy bez wiązań
---
|  |
| --- |
| Szkicownik: Wybierz elementy bez wiązań |
| Lokalizacja w menu |
| Szkic → Widok szkicu → Wybierz elementy bez wiązań |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| Z F |
| Wprowadzono w wersji |
| 0.18 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Sketcher_SelectElementsWithDoFs.svg) **Wybierz elementy bez wiązań** wybiera nie w pełni związane elementy w szkicu.

Jeśli takie elementy istnieją w szkicu, [sekcja komunikatów Solvera w oknie dialogowym Szkcownika](/Sketcher_Dialog/pl#Komunikaty_solvera "Sketcher Dialog/pl") wyświetla następujący komunikat:

* Niezwiązany: n DoF

Gdzie „n” to pozostała liczba stopni swobody. Kliknięcie podkreślonego tekstu spowoduje zaznaczenie niedostatecznie związanych elementów.

Należy pamiętać, że szkic może również zawierać nadmiarowe więzy, jeśli zostanie wyświetlony jeden z innych [komunikatów solvera](/Sketcher_Dialog/pl#Komunikaty_solvera "Sketcher Dialog/pl").

## Użycie

1. Narzędzie można wywołać na kilka sposobów:
   * Kliknij podkreślony tekst w oknie dialogowym szkicownika, jak opisano powyżej.
   * Wybierz z menu opcję **Szkic → Widok szkicu → ![](/images/Sketcher_SelectElementsWithDoFs.svg) Wybierz elementy bez wiązań**.
   * Użyj skrótu klawiaturowego: Z, następnie F.
2. Wybierane są elementy szkicu zawierające niewystarczające wiązania.
3. Opcjonalnie kliknij w pustym obszarze w [widoku 3D](/3D_view/pl "3D view/pl"), aby usunąć zaznaczenie.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SelectElementsWithDoFs/pl&oldid=1462447>"