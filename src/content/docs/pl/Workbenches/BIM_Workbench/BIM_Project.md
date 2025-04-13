---
title: BIM Projekt
---

|                                             |
| ------------------------------------------- |
| BIM: Projekt                                |
| Lokalizacja w menu                          |
| 3D/BIM → Projekt                            |
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

Narzędzie **BIM Projekt** tworzy projekt [natywnego IFC](/index.php?title=NativeIFC/pl&action=edit&redlink=1 "NativeIFC/pl (page does not exist)") w bieżącym dokumencie. W IFC, projekt (IfcProject) to baza wszystkich części modelu. Wymagane jest posiadanie jednego projektu w każdym pliku IFC.

Nie jest jednak konieczne tworzenie projektu żeby wyeksportować model programu FreeCAD do IFC, ponieważ domyślny projekt zostanie dodany za każdym razem podczas eksportu pliku IFC. Jednak, podczas pracy z [natywnym IFC](/index.php?title=NativeIFC/pl&action=edit&redlink=1 "NativeIFC/pl (page does not exist)"), plik IFC jest dołączany do modelu i wszystkie geometrie i właściwości modelu i jego komponenty pochodzą z dołączonego pliku IFC. Projekt jest miejscem, w którym plik IFC jest dołączony do dokumentu.

Zwykle projekt BIM jest tworzony aby dołączyć plik IFC. Podczas tworzenia projektu, dołączony plik IFC jest pusty i niezapisany. Przy następnym zapisie pliku programu FreeCAD pojawi się pytanie o zapisanie pliku IFC.

Jeśli udostępniasz plik programu FreeCAD, wszystkie dołączone pliki IFC muszą być udostępnione razem. W innym wypadku FreeCAD nie będzie mógł wyciągnąć geometrii. Jednak, jeśli właściwość **shape mode** wszystkich obiektów zawartych w projekcie jest ustawiona na **Shape** to plik programu FreeCAD może być udostępniony bez towarzyszącego pliku IFC i nadal będzie się otwierał poprawnie na innych komputerach. Obiekty IFC nie będą już jednak edytowalne.

Podczas wstawiania pliku IFC tworzony jest obiekt projektu, który ma całą zawartość pliku. Jak wszystkie obiekty NativeIFC, projekt może być rozszerzony poprzez kliknięcie dwukrotnie w drzewie.

## Użycie

1. Upewnij się, że masz otwarty dokument programu FreeCAD.
2. Wciśnij przycisk ![](/images/BIM_Project.svg) Projekt.
3. Opcjonalnie, zablokuj dokument wciskając przycisk ![](/images/IFC.svg) [Blokada IFC](/index.php?title=NativeIFC/pl&action=edit&redlink=1 "NativeIFC/pl (page does not exist)").

## Tryb zablokowany i odblokowany

W [środowisku pracy BIM](/BIM_Workbench "BIM Workbench"), pasek statusu zawiera przycisk ![](/images/IFC.svg) [Blokada IFC](/index.php?title=NativeIFC/pl&action=edit&redlink=1 "NativeIFC/pl (page does not exist)"), który pozwala na przełączanie między trybami **zablokowany** i **odblokowany**. W trybie odblokowanym możesz mieć kilka projektów w dokumencie programu FreeCAD i mieć elementy IFC oraz inne niż IFC.

W trybie zablokowanym, dane dołączone do obiektu projektu stają się dołączone bezpośrednio do dokumentu programu FreeCAD. Dokument programu FreeCAD działa jak wierna replika lub render dokumentu IFC. Obiekt projektu jest więc usuwany. Możesz mieć tylko jeden projekt w dokumencie programu FreeCAd i nie możesz mieć obiektów innych niż IFC (każdy nowy obiekt jest od razu przekształcany do IFC).

## Dodawanie obiektów do projektu

Aby dodać obiekty do projektu wystarczy przeciągnąć i upuścić je do projektu w widoku drzewa. Te obiekty zostaną przekształcone na IFC i mogą stracić niektóre wcześniejsze zachowania parametryczne jeśli nie są one wspierane przez IFC.

## Diff

Gdy projekt zawiera niezapisane zmiany, na jego ikonie w widoku drzewa wyświetlana jest czerwona kropka. Kliknięcie prawym przyciskiem myszy na projekcie i wybranie **IFC → Diff** otworzy okno dialogowe z [diff](https://en.wikipedia.org/wiki/Diff) tego co zmieniło się w dołączonym pliku IFC. Jest to dobry sposób na upewnienie się, że wprowadzone zmiany są poprawne.

## Zapisywanie

Pliki IFC dołączone do projektu są automatycznie zapisywane przy każdym zapisie pliku programu FreeCAD. Można je również zapisać ręcznie w każdej chwili klikając prawym przyciskiem myszy na projekcie i wybierając **IFC → Zapisz**.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Project/pl&oldid=1539892>"
