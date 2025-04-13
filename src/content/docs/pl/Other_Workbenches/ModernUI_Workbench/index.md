---
title: Środowisko pracy Nowoczesny UI
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::
![](/images/ModernUI_workbench_icon.svg)

Ikonka FreeCAD dla środowiska Nowoczesny UI

## Wprowadzenie

Środowisko pracy Nowoczesny UI jest [zewnętrznym środowiskiem pracy](/External_workbenches/pl "External workbenches/pl"), które zastępuje standardowy interfejs użytkownika. Posiada ono nowoczesne funkcje, takie jak:

* Każde środowisko pracy posiada swoją zakładkę wstążki.
* zakładka **Modern UI** zastępuje menu główne.
* Aktywowanie zakładki dla danego środowiska pracy pokazuje grupy narzędzi tego środowiska.
* Panele takie jak [Widok połączony](/Combo_view/pl "Combo view/pl") są zwijane / rozwijane po najechaniu kursorem myszki.

## Ustawienia

* Autor: Hakan Seven
* Kod źródłowy na portalu github: [Source code Modern-UI](https://github.com/HakanSeven12/Modern-UI)

## Ograniczenia i rozwiązywanie problemów

* Jeśli doświadczysz nieoczekiwanego zachowania, zawsze najpierw spróbuj odinstalować, a następnie zainstalować ponownie środowisko pracy Nowoczesny UI.
* Środowisko pracy jest testowane głównie z językiem angielskim i może wykazywać nieoczekiwane zachowanie w innych językach.
* Instalowanie kolejnych środowisk pracy po zainstalowaniu Nowoczesny UI może powodować problemy.

## Instalacja

Instalację wykonaj za pomocą ![](/images/Std_AddonMgr.svg) [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl").

Uwaga: Aby odinstalować, musisz utworzyć makro i wykonać je. Jeśli nie czujesz się pewnie w tej kwestii, rozważ możliwość zaniechania instalacji.

Uruchamianie Nowoczesnego UI w samodzielnym katalogu

Aby łatwo przetestować Nowoczesny UI bez zakłócania standardowej konfiguracji, można umieścić je w osobnym katalogu. Odinstalowanie Modern UI polega na usunięciu tego katalogu. [dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl")

#### Linux

Dla przykładu:

```
$ mkdir modernUI  # new directory that contains Modern UI
$ cd modernUI
$ HOME="$PWD" FREECAD_USER_HOME="$PWD" FreeCAD_0.19.AppImage

```

Uruchamiając FreeCAD w ten sposób po raz pierwszy, masz nową domyślną konfigurację. Teraz zainstaluj *(i skonfiguruj)* nowoczesny UI. Jest to zasadniczo [*przenośna* wersja FreeCAD](/Download/pl#Uwagi_dla_u.C5.BCytkownik.C3.B3w_systemu_GNU.2FLinux "Download/pl").

Zamiast używać wiersza poleceń, możesz również [utworzyć dedykowaną ikonę na pulpicie](/Start_up_and_Configuration/pl#Uruchamianie_programu_FreeCAD_z_pulpitu "Start up and Configuration/pl").

#### Windows

Nie ma jeszcze odpowiednich instrukcji dla systemu Windows, jednak procedura ta jest bardzo podobna do [tworzenia przenośnej wersji programu FreeCAD na nośniku USB](/Start_up_and_Configuration/pl#Uruchamianie_programu_FreeCAD_z_no.C5.9Bnika_USB "Start up and Configuration/pl").

## Odinstalowanie

Szczegółowe instrukcje można znaleźć na [GitHub](https://github.com/HakanSeven12/Modern-UI#uninstallation).

1. Deinstalacja za pomocą ![](/images/AddonManager.svg) [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl").
2. Uruchom ponownie FreeCAD.
3. Utwórz makro z tym kodem:

   ```
   from PySide2 import QtCore, QtGui, QtWidgets
   mw = FreeCADGui.getMainWindow()
   mw.menuBar().show()
    
   WBList = FreeCADGui.listWorkbenches()
   for WB in WBList:
       FreeCADGui.activateWorkbench(WB)
       for tb in mw.findChildren(QtWidgets.QToolBar):
           tb.show()

   ```
4. Wykonaj makro.
5. Zrestartuj FreeCAD.

## Odnośniki internetowe

* Forum FreeCAD: <https://forum.freecadweb.org/viewtopic.php?f=34&t=44937>
* Zgłaszanie błędów: <https://github.com/HakanSeven12/Modern-UI>
* Patreon (aby wesprzeć autora): <https://www.patreon.com/HakanSeven12>

Retrieved from "<http://wiki.freecad.org/index.php?title=ModernUI_Workbench/pl&oldid=1066593>"