---
title: Arch Verschachteln
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Verschachteln |
| Menüeintrag |
| Utils → Plattenwerkzeuge → Verschachteln |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Arch Platte](/Arch_Panel/de "Arch Panel/de"), [Arch Plattenzeichnung](/Arch_Panel_Sheet/de "Arch Panel Sheet/de") |
|  |

## Beschreibung

Das Werkzeug **Arch Verschachteln** ermöglicht die Auswahl einer ebenen Form (Flächenobjekt) als Behälter und einer Reihe anderer ebener Formen, die innerhalb der Fläche angeordnet werden sollen, die die Behälterform vorgibt. Dies ist in der Regel für CNC-Bearbeitungen erforderlich, bei denen eine Reihe von Teilen aus einer Grundplatte (Tafel) ausgeschnitten werden, um diese Teile so kompakt wie möglich anzuordnen, damit sie weniger Platz auf der Grundplatte einnehmen.

Der Algorithmus hinter dem Verschachtelungswerkzeug befindet sich in ständiger Entwicklung und ist derzeit noch nicht vollständig optimiert. In der Zukunft sollte die Leistung dieses Werkzeugs viel besser werden.

![](/images/Arch_Nest_example.jpg)

*Das obige Bild zeigt eine Reihe von Formen vor und nach dem Verschachtelungsvorgang.*

## Anwendung

1. Den Menüeintrag **Utils → Plattenwerkzeuge → ![](/images/Arch_Nest.svg) Verschachteln** auswählen.
2. Ein ebenes Flächenobjekt als Behälter (Container) auswählen. Dieses Objekt muss aktuell noch rechteckig sein.
3. Auf die Schaltfläche Auswahl hinzufügen klicken, um dieses Objekt als Container zu verwenden.
4. Eine Reihe anderer ebener Flächenobjekte auswählen, die im Behälter platziert werden sollen. Diese Objekte müssen sich alle in derselben Ebene wie der Behälter befinden.
5. Die gewünschten Optionen unten einstellen.
6. Den Berechnungsvorgang starten.
7. Klicke am Ende der Berechnung auf die Schaltfläche Vorschau, um eine temporäre Ergebnisvorschau zu erhalten.
8. Soll das Ergebnis angewendet werden (die tatsächlichen Formen auf ihren neuen Platz verschoben und gedreht werden), Schaltfläche OK drücken.

![](/images/Arch_Nest_panel.jpg)

Aufgaben-Bereich für das Werkzeug Arch Verschachteln

## Hinweise

* Alle Objekte müssen aus einer Fläche bestehen.
* Im Moment arbeitet das Werkzeug nur mit ebenen Objekten, die alle gleich ausgerichtet sind.
* Im Moment muss der Behälter rechteckig sein.
* Im Moment ist ein Rand/Abstand zwischen den Teilen noch nicht implementiert.
* Die Berechnung kann bei vielen Objekten sehr viel Zeit in Anspruch nehmen. Das wird in Zukunft optimiert werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Nest/de&oldid=1437343>"