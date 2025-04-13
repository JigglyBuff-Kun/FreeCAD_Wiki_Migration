---
title: Architektura Materiał wielowarstwowy
---

:::caution
TO NARZĘDZIE JEST PRZESTARZAŁENie będzie ono dostępne wwersja 1.0 i powyżej. Zamiast tego należy użyć narzędziaMateriał BIM.
:::

|                                                                                                     |
| --------------------------------------------------------------------------------------------------- |
| Architektura: Narzędzia materiałowe                                                                 |
| Lokalizacja w menu                                                                                  |
| Architektura → Narzędzia materiałowe → Materiał wielowarstwowy                                      |
| Środowisko pracy                                                                                    |
| [Architektura](/Arch_Workbench/pl "Arch Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót                                                                                      |
| _brak_                                                                                              |
| Wprowadzono w wersji                                                                                |
| 0.17                                                                                                |
| Zobacz także                                                                                        |
| [Materiał](/Arch_SetMaterial/pl "Arch SetMaterial/pl")                                              |
|                                                                                                     |

## Opis

Narzędzie Materiał wielowarstwowy definiuje listę [materiały](/index.php?title=Material/pl&action=edit&redlink=1 "Material/pl (page does not exist)") z nazwą i wartością grubości dla każdego materiału. Taką listę materiałów można następnie dodać do obiektu [Architektury](/Arch_Workbench/pl "Arch Workbench/pl") zamiast pojedynczego [materiału](/Arch_SetMaterial/pl "Arch SetMaterial/pl").

![](/images/Arch_multimaterial_example.png)

Nie wszystkie obiekty Architektury mogą obecnie korzystać z materiałów wielowarstwowych, a sposób ich wykorzystania jest różny. Obecnie:

- ![](/images/Arch_Wall.svg) [Ściana](/Arch_Wall/pl "Arch Wall/pl") z materiałem wielowarstwowym użyje definicji materiału i grubości do stworzenia wielowarstwowej ściany.
- ![](/images/Arch_Window.svg) [Okno](/Arch_Window/pl "Arch Window/pl") z materiałem wielowarstwowym przypisze materiały o danej nazwie zdefiniowanej wewnątrz materiału wielowarstwowego do komponentów okna o tej samej nazwie lub typie _(patrz poniżej)_. Grubość materiału nie jest brana pod uwagę.
- ![](/images/Arch_Panel.svg) [Panel](/Arch_Panel/pl "Arch Panel/pl") z materiałem wielowarstwowym użyje definicji i grubości materiału do utworzenia wielowarstwowego panelu.

## Użycie

1. Stwórz najpierw serię ![](/images/Arch_SetMaterial.svg) [materiałów](/Arch_SetMaterial/pl "Arch SetMaterial/pl"), które będą potrzebne w twoim materiale wielowarstwowym.
2. Opcjonalnie, wybierz obiekt Architektury, któremu chcesz przypisać nowy materiał wielowarstwowy.
3. Naciśnij przycisk ![](/images/Arch_MultiMaterial.svg) Materiał wielowarstwowy.
4. Ustaw żądane warstwy materiału.

## Opcje

![](/images/Arch_multimaterial_panel.png)

Po utworzeniu lub edycji materiału wielowarstwowego poprzez dwukrotne kliknięcie go w drzewie, dostępne są następujące opcje:

- **Duplikuj** inny istniejący Materiał wielowarstwowy z tego samego dokumentu. Kopiuje to tylko wartości i nie łączy w żaden sposób tych dwóch materiałów.
- Pole _Nazwa_ ustawi również etykietę obiektu materiału.
- Lista _Kompozycja_ to lista różnych warstw materiału, które składają się na ten materiał. Każda warstwa ma nazwę, materiał i wartość grubości.
- Kliknij Dodaj, aby dodać nową warstwę, Up, aby przesunąć wybraną warstwę w górę, Down, aby przesunąć wybraną warstwę w dół lub Del, aby usunąć wybraną warstwę.
- Dwukrotne kliknięcie na **nazwę** warstwy umożliwia jej edycję, obiekt materiał wyświetli rozwijaną listę dostępnych [materiałów](/Arch_SetMaterial/pl "Arch SetMaterial/pl") w tym samym dokumencie, a grubość można ustawić na dowolną wartość w dowolnej jednostce.
- Pola Nazwa i Materiał są obowiązkowe. Grubość może pozostać pusta _(przyjmie wtedy wartość 0)_.
- Gdy Materiał wielowarstwowy zawiera warstwy o grubości równej zero, grubość ta jest uważana za zmienną. Obiekty Architektury, które używają tego materiału, takie jak Ściany i Panele, potraktują to odpowiednio i dadzą tej warstwie pozostałą dostępną przestrzeń, biorąc pod uwagę ich własną szerokość lub grubość.
- Jeśli nazwiesz różne komponenty Materiału wielowarstwowego "Rama", "Panel pełny", "Panel szklany" lub "Żaluzja" i zastosujesz ten materiał do okna, podane materiały zostaną zastosowane do odpowiednich komponentów okna.

## Powiązania z IFC

Z grubsza odpowiada to kombinacji [IfcMaterialLayerSet](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/link/ifcmateriallayerset.htm) i [IfcMaterialLayer](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/link/ifcmateriallayer.htm).

## Ograniczenia

## Tworzenie skryptów

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_MultiMaterial/pl&oldid=1468845>"
