---
title: Środowisko pracy Rozłożony Zespół
---

![](/images/ExplodedAssembly_workbench_icon.svg)

Ikonka FreeCAD dla środowiska pracy Rozłożony Zespół

## Wprowadzenie

Środowisko ![](/images/ExplodedAssembly_workbench_icon.svg) Rozłożony zespół jest zewnętrznym narzędziem do tworzenia widoków rozwiniętych i animacji złożeń.

### Cechy

- Twórz ładne rozbicia złożeń w sposób graficzny _(bez kodu!)_.
- Tworzenie grup z rozbiciami.
- Nadaj obrót śrubom i nakrętkom dla realistycznego demontażu.
- Użyj pomocniczych narzędzi montażowych, aby umieścić swoje części razem.
- Funkcja do wykonania: tworzenie trajektorii z linii i szkiców.

## Bibliografia

- Autor: JMG1
- Strona domowa: [ExplodedAssembly](https://github.com/JMG1/ExplodedAssembly)
- Kod źródłowy na githubie: [ExplodedAssembly](https://github.com/JMG1/ExplodedAssembly)

## Przybory

![](/images/ExplodedAssembly-menu-orizz.png)

Pasek narzędzi

![](/images/ExplodedAssembly-menu-vert.png)

Menu

### Narzędzia standardowe

- ![](/images/ExplodedAssembly_CreateBoltGroup.png) Utwórz grupę śrub
- ![](/images/ExplodedAssembly_CreateSimpleGroup.png) Utwórz grupę podstawową
- ![](/images/ExplodedAssembly_ModifyIndividualObjectTrajectory.png) Modyfikacja trajektorii pojedynczego obiektu
- ![](/images/ExplodedAssembly_PlaceBefore.png) Miejsce przed
- ![](/images/ExplodedAssembly_ExplodeToSelection.png) Rozbij do wyboru
- ![](/images/ExplodedAssembly_Assemble.png) Złożenie
- ![](/images/ExplodedAssembly_PlayBackwards.png) Odtwarzaj od tyłu
- ![](/images/ExplodedAssembly_StopAnimation.png) Zatrzymaj animację
- ![](/images/ExplodedAssembly_PlayForward.png) Odtwarzaj do przodu
- ![](/images/ExplodedAssembly_Disassemble.png) Demontuj
- ![](/images/ExplodedAssembly_TrajectoryVisibility.png) Widoczność trajektorii
- ![](/images/ExplodedAssembly_AlignToEdge.png) Wyrównaj do krawędzi
- ![](/images/ExplodedAssembly_Rotate90.png) Obróć o 90°
- ![](/images/ExplodedAssembly_PoinToPoint.png) Wskaż do punktu
- ![](/images/ExplodedAssembly_PlaceConcentrically.png) Umieść centralnie

### Narzędzia dodatkowe

Te narzędzia można dodać do niestandardowego paska narzędzi. Zobacz stronę [Dostosowywanie interfejsu użytkownika do własnych potrzeb](/Interface_Customization/pl "Interface Customization/pl").

- ![](/images/ExplodedAssembly_AnimationCameraEdge.png) Krawędź ujęcia widoku
- ![](/images/ExplodedAssembly_AnimationCameraFollow.png) Podążaj za ujęciem widoku
- ![](/images/ExplodedAssembly_AnimationCameraManual.png) Manualne ujęcie widoku
- ![](/images/ExplodedAssembly_WireTrajectory.png) Linia trajektorii

## Instalacja

### Instalacja automatyczna

To środowisko pracy można zainstalować za pomocą [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl").

### Z repozytorium GitHub

Używanie git na Ubuntu i Mint:

- Otwórz wiersz poleceń _(terminal)_ za pomocą klawiszy Ctrl + Alt + t.
- Zainstaluj git: `sudo apt-get install git`
- Sklonuj repozytorium: `git clone https://github.com/JMG1/ExplodedAssembly ~/.FreeCAD/Mod/ExplodedAssembly`

To wszystko, przy następnym uruchomieniu programu FreeCAD powinno być dostępne stanowisko pracy.

Aby przeprowadzić instalację samodzielnie, pobierz to repozytorium jako ZIP i:

- Dla Ubuntu, Mint i podobnych OS rozpakuj go wewnątrz folderu: /home/username/.local/share/FreeCAD/Mod (0.20 and above) lub /home/username/.FreeCAD/Mod (wersja 0.19 i poniżej)
- Dla Windows rozpakuj go w: C:\Users\twoja_nazwa_użytkownika\AppData\Roaming\FreeCAD\Mod

## Linki do środowiska pracy Rozłożony Zespół

- Forum FreeCAD: <http://forum.freecadweb.org/viewtopic.php?f=24&t=9028> .
- Filmy: [Exploded Assembly Workbench 2](https://www.youtube.com/watch?v=lzYR7I2h7KQ) [Exploded Assembly Workbench 2.0](https://www.youtube.com/watch?v=t72qdG772Q8&feature=youtu.be).
- Pliki: wewnątrz środowiska pracy.
- Zgłaszanie błędów: Proszę zgłaszać błędy na <https://github.com/JMG1/ExplodedAssembly/issues> .

## Inne użyteczne odnośniki

- [Zewnętrzne środowiska pracy](/External_workbenches/pl "External workbenches/pl")
- [Przepisy na makropolecenia](/Macros_recipes/pl "Macros recipes/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=ExplodedAssembly_Workbench/pl&oldid=1536789>"
