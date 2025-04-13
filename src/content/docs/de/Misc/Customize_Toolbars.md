---
title: Anpassung der Werkzeugleisten
---
|  |
| --- |
| Tutorium |
| Thema |
| Symbolleisten anpassen |
| Niveau |
| Anfänger |
| Zeit zum Abschluss |
| 5 Minuten |
| Autoren |
| [Mario52](/User:Mario52 "User:Mario52") |
| FreeCAD-Version |
| Alle |
| Beispieldateien |
| *None* |
| Siehe auch |
| [Anpassung der Oberfläche](/Interface_Customization/de "Interface Customization/de"). |
|  |

## Zusammenfassung

Diese Anleitung zeigt, wie eine Schaltfläche für ein [Makro](/Macros/de "Macros/de") zu einer selbsterstellten Symbolleiste hinzugefügt wird.

Für allgemeinere Informationen siehe [Anpassung der Oberfläche](/Interface_Customization/de "Interface Customization/de").

## Anwendung

**1.** Finde das Anpassungsmenü

* Klicke **Hauptmenü → Werkzeuge → Benutzerdefiniert**,

![Benutzerdefiniert](/images/CustomizeToolBar_01.png)

Benutzerdefiniert

* oder rechtsklicke auf eine beliebige Werkzeugleiste.

![Rechter Mausklick](/images/CustomizeToolBar_02.png)

Rechter Mausklick

* Das Anpassungsfenster erscheint.

![Das Anpassungsfenster erscheint](/images/CustomizeToolBar_03.png)

Das Anpassungsfenster erscheint

**2.** Erzeuge ein Makro zu einem Makro-Werkzeug

* Wähle den "Makro" Reiter.

* Um ein Symbol für das bereitgestellte Makro hinzuzufügen, klicke auf die Pixmap Schaltfläche (labelled ... ).

![Wähle eine Werkzeugleiste](/images/CustomizeToolBar_04.png)

Wähle eine Werkzeugleiste

* Suche nach einem geeigneten Symbol aus den vorhandenen Symbolen von FreeCAD,

[oder füge Dein eigenes Symbol durch klicken von Symbole hinzufügen...] hinzu.                  (erweitere für ein Beispiel)

![Symbol hinzufügen](/images/CustomizeToolBar_05.png)

Symbol hinzufügen

     [Du erhälst ein Dateiauswahlfenster, wähle deine benutzerdefinierte Bilddatei (PNG format, 64x64 pixels)]

![Hole eine Datei](/images/CustomizeToolBar_06.png)

Hole eine Datei

* Wähle dein Symbol und klicke OK.

![Wähle dein Symbol](/images/Customize5de.jpg)

Wähle dein Symbol

* Das von dir gewählte Symbol wird nun neben der Pixmap Schaltfläche mit der Beschriftung ... angezeigt.

![Dein Symbol wird angezeigt](/images/Customize6de.jpg)

Dein Symbol wird angezeigt

* Wähle das mitgelieferte Makro in der Zeile **Makro:' *aus und gib einen*** *Menütext**: an (der als Textbeschriftung im Menü erscheint); fülle auch die** Werkzeugspitze':* aus (das ist der Text, der erscheint, wenn sich die Maus über der Schaltfläche auf der Symbolleiste befindet); weitere Zeilen sind optional.

* Klicke die Schaltfläche Add.

![Drücke die Schaltfläche](/images/CustomizeToolBar_09.png)

Drücke die Schaltfläche

* Die Schaltfläche des Makrowerkzeugs ist nun erstellt.

![Deine Schaltfläche ist erstellt](/images/CustomizeToolBar_10.png)

Deine Schaltfläche ist erstellt

**3.** Erstelle eine Werkzeugleiste außerhalb des Arbeitsbereichs **Makro**, die das erstellte **Makrowerkzeug** enthält

* Wähle die Registerkarte **Werkzeugleisten** und wähle den Arbeitbereich (für den die Werkzeugleiste vorgesehen ist) in der Aufklappliste auf der rechten Seite (**Teil** in diesem Beispiel).

        [Seit Version 0.15 gibt es einen Arbeitsbereich  ![](/images/Freecad.svg) Global  Werkzeugleiste.
Wenn dies ausgewählt wird, befindet sich die bereitgestellte Werkzeugleiste in jedem Arbeitsbereich.]

![Werkzeugleistenreiter](/images/CustomizeToolBar_11.png)

Werkzeugleistenreiter

* Wähle in der Aufklappliste auf der linken Seite **Makros**.

![Makros](/images/CustomizeToolBar_12.png)

Makros

* Das Makrowerkzeug mit seinem Symbol erscheint in der Liste.

![Dein Symbol wird aufgeführt](/images/CustomizeToolBar_13.png)

Dein Symbol wird aufgeführt

* Klicke die Schaltfläche Neu.

![Klicke auf "Neu"](/images/CustomizeToolBar_14.png)

Klicke auf "Neu"

* Im Fenster "Neue Werkzeugleiste" gib den Namen der bereitgestellten zusätzlichen Werkzeugleiste für den **Part** Arbeitsbereich ein und klicke auf OK

![Gib den Namen für die Werkzeugleiste ein](/images/CustomizeToolBar_15.png)

Gib den Namen für die Werkzeugleiste ein

* Die Werkzeugleiste ist nun erstellt.

* Um das erzeugte Makrowerkzeug dieser Symbolleiste hinzuzufügen, wähle es im linken Fenster aus und klicke dann auf die Button-Schaltfläche, wobei der Pfeil nach rechts zeigt.

![Wähle Dein Makro](/images/CustomizeToolBar_16.png)

Wähle Dein Makro

* Du hast nun eine Werkzeugleiste mit dem Namen "Kamera" erstellt (mit dem Makrowerkzeug **Kamera** darin)

* Klicke die Close Schaltfläche.

![Schließen](/images/CustomizeToolBar_17.png)

Schließen

* Deine neue Werkzeugleiste ist jetzt im Rechtsklickmenü der Werkzeugleisten enthalten. Seine Symbole (in unserem Beispiel nur die Kamera) sind sichtbar, wenn die Symbolleiste aktiviert ist (blaues Häkchen).

![Neue Werkzeugleiste](/images/CustomizeToolBar_18.png)

Neue Werkzeugleiste

Retrieved from "<http://wiki.freecad.org/index.php?title=Customize_Toolbars/de&oldid=1512544>"