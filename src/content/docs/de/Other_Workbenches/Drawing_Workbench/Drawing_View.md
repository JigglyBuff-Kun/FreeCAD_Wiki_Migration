---
title: Zeichnung Ansicht
---
|  |
| --- |
| Drawing View |
| Menüeintrag |
| Zeichnung → Ansicht in Zeichnung einfügen |
| Arbeitsbereich |
| [Drawing](/Drawing_Workbench/de "Drawing Workbench/de"), Complete |
| Standardtastenkürzel |
| Keine |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Drawing Landscape A3](/Drawing_Landscape_A3/de "Drawing Landscape A3/de") |
|  |

:::caution
Die Entwicklung des Drawing-Arbeitsbereich wurde gestoppt und ein neuer in v0.17 eingeführter TechDraw-Arbeitsbereich zielt darauf, es zu ersetzen. Beide Module stehen in v0.17 zur Verfügung, aber das Drawing-Arbeitsbereich könnte in zukünftigen Ausgaben entfernt werden.
:::

Dieses Werkzeug erstellt eine neue Ansicht des ausgewählten Objekts im aktiven Zeichenblatt.

![Ein Zeichenblatt mit drei Ansichten: Front, Draufsicht und isometrisch.](/images/Drawing_Views.png)

### Anwendung

Wähle ein Objekt entweder in der 3D-Ansicht oder dem Projektbaum, klicke dann auf das Zeichnungsansichtswerkzeug. Als Standard wird eine Draufsicht im Maßstab 1:1 (reale Größe) links oben auf der Seite platziert. Möglicherweise ist sie nicht sichtbar, weil sie viel zu groß oder viel zu klein für die Seite ist.

Ein **Ansicht**-Objekt wird zum **Seite**-Ojekt des Projektbaums hinzugefügt. Für untergeordnete Ansichcten wird eine dreistellige Zahl an den Namen angehängt. Klicke auf den Pfeil vor den Seite-Objekt, um es aufzuklappen und den Inhalt anzuzeigen.

Wenn nur das Objekt im Projektbaum ausgewählt ist, wird die Ansicht zur ersten Seite des Projekts hinzugefügt. Wenn es mehrere Seiten im Projekt gibt, dann wähle bitte das Objekt aus und die Seite, zu der es hinzugefügt werden soll. Klicke dann auf das Icon, um die Ansicht zur ausgewählten Seite hinzuzufügen.

### Ändern einer existierenden Ansicht

Klappe das Seite-Objekt im Projektbaum auf und wähle die Ansicht. Deren Parameter können in der Eigenschaftenansicht im Daten-Reiter geändert werden.

![](/images/Drawing_View_Properties.png)

![](/images/Drawing_View_Iso.png)

Isometric view with smooth lines visibility off

![](/images/Drawing_View_Iso_SmoothLines.png)

Isometric view with smooth lines visibility on

* **Label***: ändert die Bezeichnung der Ansicht im Projektbaum. Du kannst auch auf die Ansicht in der Struktur klicken und mit der rechten Maustaste auf → Umbenennen klicken oder F2 drücken.*
* **Rotation'**: dreht die Ansicht. Beispielsweise erfordert eine isometrische Ansicht eine Drehung um 60 Grad (siehe auch Parameter Richtung unten).
* **Scale'**: setzt den Maßstab der Ansicht.
* **X'**: setzt die horizontale Position der Ansicht auf der Seite in Millimetern.
* **Y'**: setzt die vertikale Position der Ansicht auf der Seite in Millimetern. Bitte beachte, dass sich die Koordinate (0,0) oben links auf der Seite befindet, d.h. je höher die Zahl, desto niedriger ist der Wert auf der Seite.
* **Direction'**: ändert die Blickrichtung. Es wird durch xyz-Werte gesetzt, die einen Vektor definieren, der normal zur Seite ist. Die Draufsicht wird (0,0,1) und die Isometrie (1,1,1,1) sein. Die Werte können negativ sein.
* **Show Hidden Lines'**: Schaltet die Sichtbarkeit der versteckten Linien ein oder aus, indem man *True* oder *False* wählt.
* **Show Smooth Lines'**: Schaltet die Sichtbarkeit der glatten Linien ein oder aus, indem Sie *True* oder *False* wählen. Glatte Linien werden auch als Tangentialkanten bezeichnet. Diese Kanten zeigen Oberflächenveränderungen zwischen tangentialen Oberflächen an.

### Anderes

Falls Du nach der Umschaltung in perspektivisch-orthogonal in der 3D-Ansicht suchst, probiere [Std PerspektivKamera](/Std_PerspectiveCamera/de "Std PerspectiveCamera/de") und [Std OrthogonaleKamera](/Std_OrthographicCamera/de "Std OrthographicCamera/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_View/de&oldid=1461819>"