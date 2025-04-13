---
title: Środowisko pracy Raytracing
---

:::caution
ŚrodowiskoRaytracingnie jest już dołączone po wersji 0.20..
Zamiast niego należy użyć zewnętrznego środowiskaRender.
:::
![](/images/Workbench_Raytracing.svg)

Ikonka FreeCAD dla Środowiska pracy Raytracing

## Wprowadzenie

Narzędzie ![](/images/Workbench_Raytracing.svg) Środowisko pracy Raytracing służy do generowania fotorealistycznych obrazów modeli poprzez przetwarzanie ich za pomocą zewnętrznego programu renderującego.

Środowisko pracy Raytracing współpracuje z [szablonami](/Raytracing_templates "Raytracing templates"), które są plikami projektu definiującymi scenę dla Twojego modelu 3D. Można w nich umieszczać światła i geometrię, takie jak płaszczyzny podłoża, a także zawiera symbole zastępcze dla położenia kamery oraz dla informacji o materiale obiektów w scenie. Projekt może być następnie wyeksportowany do pliku gotowego do dalszej obróbki lub wyrenderowany bezpośrednio w programie FreeCAD.

Obecnie obsługiwane są dwa systemy renderowania: [POV-Ray](/POV-Ray "POV-Ray") i [LuxRender](/LuxRender "LuxRender"). Aby móc renderować z poziomu FreeCAD, przynajmniej jeden z tych programów musi być zainstalowany i skonfigurowany w Twoim systemie. Jednakże, jeśli żaden renderer nie jest zainstalowany, nadal będziesz mógł wyeksportować plik projektu, który będzie renderowany w innym czasie.

Środowisko pracy Raytracingu jest przestarzałe, zewnętrzne środowisko [Render](https://github.com/FreeCAD/FreeCAD-render) jest jego zamiennikiem. Niemniej jednak, informacje zawarte na tej stronie są ogólnie przydatne dla nowego środowiska, ponieważ oba działają w ten sam sposób.

![](/images/Raytracing_example.jpg)

## Typowy przepływ pracy

1. Utwórz lub otwórz projekt FreeCAD, dodaj kilka obiektów brył w środowisku _([Część](/Part_Workbench/pl "Part Workbench/pl") lub [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"))_, siatki nie są obecnie obsługiwane.
2. Utwórz projekt Raytrackingu _(povray lub luxrender)_.
3. Wybierz obiekty, które chcesz dodać do projektu Raytracing i dodaj je.
4. Eksportuj plik projektu lub renderuj go bezpośrednio.

![](/images/Raytracing_Workbench_workflow.svg)

Przepływ pracy Środowiska pracy Raytracing;  
Środowisko to przygotowuje plik projektu z danego szablonu, a następnie wywołuje zewnętrzny program w celu wytworzenia rzeczywistego renderingu sceny. Zewnętrzny renderer może być używany niezależnie od FreeCAD.

## Przybory

### Narzędzia projektu

Są to główne narzędzia do eksportowania projektu 3D do zewnętrznych rendererów.

- ![](/images/Raytrace_New.svg) [Wstaw nowy projekt PovRay ...](/Raytracing_New/pl "Raytracing New/pl"): Wstawia nowy projekt PovRay do dokumentu.
- ![](/images/Raytrace_Lux.svg) [Wstaw nowy projekt LuxRender ...](/Raytracing_Lux/pl "Raytracing Lux/pl"): Wstawia nowy projekt LuxRender do dokumentu.
- ![](/images/Raytrace_NewPartSegment.svg) [Wstaw nową część do projektu](/Raytracing_InsertPart/pl "Raytracing InsertPart/pl"): Wstawienie widoku części do projektu raytracingu.
- ![](/images/Raytrace_ResetCamera.svg) [Ustawia widok kamery z wybranego projektu ...](/Raytracing_ResetCamera/pl "Raytracing ResetCamera/pl"): Dopasowuje pozycję kamery projektu raytracingu do aktualnego widoku.
- ![](/images/Raytrace_ExportProject.svg) [Eksport projektu Raytracing do pliku](/Raytracing_ExportProject/pl "Raytracing ExportProject/pl"): Eksportuje projekt raytracingu do pliku sceny w celu renderowania w zewnętrznym programie renderującym.
- ![](/images/Raytrace_Render.svg) [Renderuje obecny projekt ...](/Raytracing_Render/pl "Raytracing Render/pl"): Renderuje projekt raytracingu za pomocą zewnętrznego programu renderującego.

### Przydatne narzędzia

Są to narzędzia pomocnicze do ręcznego wykonywania określonych zadań.

- ![](/images/Raytracing_WriteView.svg) [Eksport widoku do Povray](/Raytracing_WriteView "Raytracing WriteView"): Zapisuje aktywny widok 3D z kamerą i całą jego zawartością do pliku Povray.
- ![](/images/Raytracing_WriteCamera.svg) [Eksport widoku kamery do Povray](/Raytracing_WriteCamera "Raytracing WriteCamera") Eksportuj pozycję kamery z aktywnego widoku 3D w formacie POV-Ray do pliku.
- ![](/images/Raytracing_WritePart.svg) [Exksport części do Povray](/Raytracing_WritePart "Raytracing WritePart"): Zapisz wybraną część _(obiekt)_ jako plik Povray.

## Ustawienia

- ![](/images/Preferences-raytracing.svg) [Preferenje](/Raytracing_Preferences "Raytracing Preferences"): Preferencje dostępne dla narzędzia Raytracing.

## Poradniki

- [Basic Raytracing tutorial](/Raytracing_tutorial "Raytracing tutorial")
- [Intermediate Raytracing tutorial](/Tutorial_FreeCAD_POV_ray "Tutorial FreeCAD POV ray")

## Ręczne tworzenie pliku Povray

Opisane powyżej narzędzia użytkowe pozwalają na wyeksportowanie bieżącego widoku 3D i całej jego zawartości do pliku [Povray](http://www.povray.org/). Najpierw należy załadować lub utworzyć dane CAD i ustawić orientację widoku 3D według własnego uznania. Następnie wybierz z menu Raytracing "Narzędzia → Eksportuj widok...".

![](/images/FreeCAD_Raytracing.jpg)

Zostaniesz poproszony o podanie lokalizacji do zapisania pliku wynikowego \*.pov. Następnie można go otworzyć w programie [Povray](http://www.povray.org/) i wyrenderować:

![](/images/Povray.jpg)

Jak zwykle w programie renderującym, można wykonywać duże i ładne zdjęcia:

![](/images/Scharniergreifer_render.jpg)

## Tworzenie skryptów

Informacje na temat tworzenia scen w sposób programowy można znaleźć w [Przykład API Raytracing](/Raytracing_API_example "Raytracing API example").

## Odnośniki internetowe

### POV-Ray

- [POV-Ray strona na Wiki](/POV-Ray "POV-Ray")
- <http://www.spiritone.com/~english/cyclopedia/>
- <http://www.povray.org/>
- <http://en.wikipedia.org/wiki/POV-Ray>

### Luxrender

- [LuxRender strona na Wiki](/LuxRender "LuxRender")
- <http://www.luxrender.net/>

### Kolejne możliwe do wdrożenia w przyszłości programy renderujące

- <http://www.yafaray.org/>
- <http://www.mitsuba-renderer.org/>
- <http://www.kerkythea.net/>
- <http://www.artofillusion.org/>

## Eksport do Kerkythea

Chociaż bezpośredni eksport do formatu XML-File-Format Kerkythea nie jest jeszcze obsługiwany, możesz wyeksportować swoje obiekty jako Mesh-Files _(.obj)_, a następnie zaimportować je do Kerkythea.

- jeśli używasz Kerkythea dla Linuksa, pamiętaj, aby zainstalować Pakiet WINE _(wymagany przez Kerkythea w systemie Linux)_.
- możesz przekonwertować swoje modele za pomocą Środowiska pracy Mesh na siatkę, a następnie wyeksportować te siatki jako pliki .obj.
- Jeśli twój eksport siatki spowodował błędy _(przerzucanie wektorów normalnych, dziury...)_ możesz spróbować szczęścia z [Netfabb Studio Basic](http://www.netfabb.com/downloadcenter.php?basic=1)

: Darmowy do użytku osobistego, dostępny dla systemów Linux, Mac OSX i Windows.
: Posiada standardowe narzędzia naprawcze, które naprawią Twój model w większości przypadków.

- inny dobry program do analizy/naprawiania siatki to [Meshlab](http://sourceforge.net/projects/meshlab/)

: Open Source, dostępny dla systemów, Linux, Mac OSX i Windows.
: Posiada standardowe narzędzia naprawcze, które naprawią model w większości przypadków _(wypełnianie dziur, reorientacja wektorów normalnych, itp.)_.

- możesz użyć **make compound**, a następnie **make single copy** lub możesz scalić bryły, aby je pogrupować przed przekształceniem w siatki.
- pamiętaj o ustawieniu w Kerkythea współczynnika importowego **0,001** dla modelu obj, ponieważ Kerkythea oczekuje, że plik obj będzie w metrach _(ale standardowy schemat jednostek w FreeCAD jest w mm)_.

: Wewnątrz WIndows 7 64-bitowy Kerkythea nie wydaje się być w stanie zapisać tych ustawień.
: Więc pamiętaj o tym, za każdym razem, gdy rozpoczniesz pracę z programem Kerkythea.

- jeśli importujesz wiele obiektów w Kerkythea możesz użyć polecenia w programie Kerkythea "Plik → Połącz".

## Opracowanie i rozwój

Strony te odnoszą się do nowego Środowiska pracy, zaprogramowanego w Pythonie, które ma zastąpić obecny Raytracing Workbench.

- [Środowisko pracy Render](https://github.com/FreeCAD/FreeCAD-render)
- [Środowisko pracy Render](https://forum.freecadweb.org/viewtopic.php?f=9&t=25933) (announcement only, no discussion)
- [Ulepszenia środowiska Renderer programu FreeCAD](https://forum.freecadweb.org/viewtopic.php?t=39168)

Retrieved from "<http://wiki.freecad.org/index.php?title=Raytracing_Workbench/pl&oldid=1260939>"
