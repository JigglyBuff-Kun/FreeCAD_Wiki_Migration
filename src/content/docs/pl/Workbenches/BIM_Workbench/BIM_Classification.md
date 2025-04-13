---
title: BIM Klasyfikacja
---

|                                             |
| ------------------------------------------- |
| BIM: Klasyfikacja                           |
| Lokalizacja w menu                          |
| Zarządzanie → Klasyfikacja                  |
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

**Menedżer klasyfikacji** umożliwia przypisanie standardowej klasy do obiektu lub materiału BIM. Standardowe systemy nie są dołączone do programu FreeCAD i należy pobrać te, z których chce się korzystać przed użyciem tego narzędzia. Zobacz sekcję [Pobieranie systemów klasyfikacji](#Pobieranie_systemów_klasyfikacji) poniżej.

![](/images/BIM_classification_screenshot.png)

Menedżer klasyfikacji

## Użycie

1. Zainstaluj jeden lub więcej standardowych plików klasyfikacji XML lub IFC, jak wyjaśniono powyżej.
2. Jeśli chcesz dodać lub edytować klasę dla obiektu, wybierz ten obiekt i naciśnij przycisk BIM Klasyfikacja.
3. Jeśli chcesz dodać lub edytować klasę dla materiału, nie wybieraj niczego i naciśnij przycisk BIM Klasyfikacja. Będziesz mógł przeglądać materiały bezpośrednio z okna menedżera klasyfikacji.

## Pobieranie systemów klasyfikacji

Kilka systemów klasyfikacji jest dostępnych w formie XML lub IFC _(oba są obsługiwane przez to narzędzie)_ ze strony <https://github.com/Moult/IfcClassification>, bezpośrednio od ich wydawców lub ze strony <https://www.graphisoft.com/downloads/archicad/BIM_Data.html>. Aby te pliki XML lub IFC były znane FreeCAD, muszą być umieszczone w katalogu BIM folderu użytkownika FreeCAD. Dokładna lokalizacja w systemie jest podana w oknie dialogowym klasyfikacji BIM. Jeśli dostępny jest zarówno plik IFC, jak i XML, narzędzie klasyfikacji BIM preferuje plik IFC.

Dostępne jest [makro](/Macro_Download_Classifications/pl "Macro Download Classifications/pl") pozwalające pobrać wszystkie systemy dostępne w repozytorium <https://github.com/Moult/IfcClassification> i umieścić je bezpośrednio w odpowiednim folderze. Po uruchomieniu makra wszystko jest gotowe do użycia tego narzędzia.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Classification/pl&oldid=1534558>"
