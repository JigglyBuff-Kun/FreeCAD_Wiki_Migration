---
title: Makros
---
## Einführung

Makros sind eine bequeme Möglichkeit, komplexe Aktionen in FreeCAD zu wiederholen. Du kannst einfach Aktionen nach Belieben aufzeichnen, diese dann unter einem Namen speichern und sie jederzeit wieder abspielen. Da ein Makro in Wirklichkeit eine Liste aus [Python](/Python/de "Python/de") Befehlen ist, kannst du sie auch bearbeiten und sehr komplexe Skripte erstellen.

Während Python Skripte normalerweise die Dateiendung `.py` haben, sollten FreeCAD Makros die Endung `.FCMacro` haben. Eine Sammlung von Makros, die von erfahrenene Anwendern geschrieben wurden, findet sich auf der [Makrorezepte](/Macros_recipes/de "Macros recipes/de") Seite.

Siehe [Anlaufstelle für Intensivnutzer](/Power_users_hub/de "Power users hub/de") um mehr über die [Python](/Python/de "Python/de") Programmiersprache und über das Schreiben von Makros zu erfahren. Insbesondere solltest du mit diesen Seiten beginnen:

* [Einführung in Python](/Introduction_to_Python/de "Introduction to Python/de")
* [Python Tutorium Skripten](/Python_scripting_tutorial/de "Python scripting tutorial/de")
* [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de")

## Wie es funktioniert

Aktiviere die Konsolenausgabe im Menü **Bearbeiten → Einstellungen → Python→ Makro → Skript-Befehle in Python-Konsole anzeigen**. Du wirst sehen, dass in FreeCAD jede Aktion, die du ausführst, wie z.B. das Drücken einer Schaltfläche, einen Python-Befehl ausgibt. Diese Befehle sind das, was in einem Makro aufgezeichnet werden kann. Das Hauptwerkzeug zum Erstellen von Makros ist die Symbolleiste Makro: ![](/images/Macros_toolbar.jpg). Sie enthält die 4 Schaltflächen: Aufnahme, Aufnahme stoppen, Bearbeiten und Ausführen des aktuellen Makros.

Es ist sehr einfach zu bedienen: Drücke die Aufnahmetaste, du wirst aufgefordert, deinem Makro einen Namen zu geben und dann einige Aktionen durchzuführen. Wenn du fertig bist, klicke auf die Schaltfläche Aufzeichnung stoppen, und deine Aktionen werden gespeichert. Du kannst nun mit der Schaltfläche Bearbeiten auf den Makro Dialog zugreifen.

![](/images/Macros-DE.png)

Makro Dialog, der die im System verfügbaren Makros auflistet

Dort können Sie Ihre Makros verwalten, löschen, bearbeiten, duplizieren, installieren oder von Grund auf neue erstellen. Wenn Sie ein Makro bearbeiten, wird es in einem Editor-Fenster geöffnet, wo Sie Änderungen an seinem Code vornehmen können. Neue Makros können (ab FreeCAD v0.17) über die Schaltfläche Addons... installiert werden, die den [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") aufruft.

## Beispiel

Drücken die Aufnahmetaste, gib einen Namen an, sagen wir "Zylinder 10x10", und erstelle dann im [Formteil Arbeitsbereich](/Part_Workbench/de "Part Workbench/de") einen Zylinder mit Radius = 10 und Höhe = 10. Drücke dann die "Aufzeichnung stoppen" Schaltfläche. Im Dialogfeld "Makros bearbeiten" siehst du den aufgezeichneten Python Code und kannst, wenn du möchtest, Änderungen daran vornehmen. Um dein Makro auszuführen, drücke einfach die "Ausführen" Schaltfläche in der Werkzeugleiste, während sich dein Makro im Editor befindet. Dein Makro wird immer auf der Festplatte gespeichert, so dass jede Änderung, die du vornimmst, oder jedes neue Makro, das du erstellst, immer verfügbar ist, wenn du FreeCAD das nächste Mal startest.

## Anpassung

Natürlich ist es nicht praktisch vor dem Benutzen immer erst ein Makro in den Editor zu laden. FreeCAD bietet deutlich bessere Möglichkeiten um dein Makro zu verwenden, wie das Zuweisen einer Tastenkombination oder einen Eintrag im Menü erstellen. Sobald dein Makro erstellt wurde, kannst du dies im Menü **Werkzeuge → Benutzerdefiniert** erledigen.

![](/images/Macros-config-DE.png)

Auf diese Weise kannst du dein Makro zu einem echten Werkzeug machen, genau wie jedes andere FreeCAD Standardwerkzeug. Dies, zusätzlich zu den Möglichkeiten der Python Skripterstellung innerhalb von FreeCAD, macht es möglich, der Schnittstelle auf einfache Weise deine eigenen Werkzeuge hinzuzufügen. Lies weiter auf der Seite [Scripting](/Scripting/de "Scripting/de"), wenn du mehr über [Python](/Python/de "Python/de") Skripten erfahren möchtest.

Siehe [Werkzeugleisten anpassen](/Customize_Toolbars/de "Customize Toolbars/de") für eine ausführlichere Beschreibung.

## Erstellen von Makros ohne Aufzeichnung

Du kannst Python Code auch direkt in ein Makro kopieren/einfügen, ohne die GUI Aktion aufzuzeichnen. Erstelle einfach ein neues Makro, bearbeite es und füge deinen Code ein. Du kannst dein Makro dann auf die gleiche Weise speichern, wie du ein FreeCAD Dokument speicherst. Wenn du FreeCAD das nächste Mal startest, erscheint das Makro unter dem Punkt "Installierte Makros" des Makro Menüs.

Siehe [Wie Makros installieren](/How_to_install_macros/de "How to install macros/de") für eine ausführlichere Beschreibung.

## Makro Repositorien

Es gibt zwei wichtige Anlaufstellen für Makros. Die erste ist das offiziell geprüfte Makro Repository unter [GitHub](https://github.com/FreeCAD/FreeCAD-macros). Die zweite ist die [Makrorezepte](/Macros_recipes/de "Macros recipes/de") Seite Dort kannst du einige nützliche Makros finden, die du zu deiner FreeCAD Installation hinzufügen kannst. Makros aus beiden Repositorien können über den [Addon Manager](/Std_AddonMgr "Std AddonMgr") direkt in FreeCAD installiert werden.

## Zusätzliche Informationen

* [Automatisches Makroausführen beim Start](/Macro_at_Startup/de "Macro at Startup/de")
* [Installieren weiterer Arbeitsbereiche](/Installing_more_workbenches/de "Installing more workbenches/de")

## Tutorien

Du kannst Erweiterungen manuell installieren, es ist jedoch viel einfacher, einfach den [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") zu verwenden.

* [Wie man Makros installiert](/How_to_install_macros/de "How to install macros/de")
* [Wie man zusätzliche Arbeitsbereiche installiert](/How_to_install_additional_workbenches/de "How to install additional workbenches/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=Macros/de&oldid=1549612>"