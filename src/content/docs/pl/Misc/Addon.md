---
title: Dodatki
---
## Wprowadzenie

W programie FreeCAD i w tej dokumentacji **Dodatek** to dowolny komponent, który nie jest częścią podstawowej instalacji, ale który można dodać do systemu za pomocą określonych metod.

## Różne rodzaje

Istnieją trzy rodzaje dodatków:

* [Makrodefinicje](/Macros/pl "Macros/pl"): krótki wycinek kodu środowiska [Python](/Python/pl "Python/pl"), który dostarcza nowe narzędzie lub funkcjonalność w pojedynczym pliku o rozszerzeniu `.FCMacro`.
* [Środowiska pracy](/External_workbenches/pl "External workbenches/pl"): zbiory plików środowiska Python, które zapewniają powiązane [polecenia GUI](/Gui_Command/pl "Gui Command/pl") *(narzędzia)* skupione wokół konkretnego tematu, na przykład narzędzia do projektowania szafek, lub narzędzia do pracy z architekturą, lub narzędzia do projektowania łodzi, itp. Te środowiska zazwyczaj definiują nowe paski narzędzi, w których [polecenia](/Gui_Command/pl "Gui Command/pl") są umieszczone jako przyciski.
* [Pakiety preferencji](/Preference_Packs/pl "Preference Packs/pl"): dystrybuowane zbiory preferencji użytkownika. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

## Instalacja

Zalecanym sposobem na instalację dodatków jest ![](/images/Std_AddonMgr.svg) [Menedżer dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl").

Ale w przypadku makrodefinicji i środowisk pracy możliwa jest również instalacja ręczna:

* [Jak zainstalować makrodefinicje](/How_to_install_macros/pl "How to install macros/pl")
* [Instalacja większej ilości środowisk pracy](/Installing_more_workbenches/pl "Installing more workbenches/pl")

## Informacja dla programistów

Jeśli opracowałeś Środowisko pracy lub makrodefinicję i chcesz zobaczyć je w Menedżerze dodatków, przeczytaj jak to zrobić na stronach repozytorium: *([FreeCAD-addons](https://github.com/FreeCAD/FreeCAD-addons/) i [FreeCAD-macros](https://github.com/FreeCAD/FreeCAD-macros/))*. Jeśli dodasz swoje makro do strony [Przepisy na makropolecenia](/Macros_recipes/pl "Macros recipes/pl"), nie będziesz miał już nic innego do zrobienia, zostanie ono automatycznie przechwycone przez Menadżer dodatków.

Zobacz również:

* [Dystrybucja środowiska pracy stworzonego w Python](/Workbench_creation/pl#Dystrybucja "Workbench creation/pl").
* [Dystrybucja środowiska pracy stworzonego w C++](/Workbench_creation/pl#Dystrybucja_2 "Workbench creation/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Addon/pl&oldid=1227494>"