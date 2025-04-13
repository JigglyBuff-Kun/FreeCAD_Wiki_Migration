---
title: BIM Diff
---
|  |
| --- |
| BIM Diff |
| Menüeintrag |
| Dienstprogramme → IFC Diff... |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug **BIM Diff** erstellt aus zwei geöffnete FreeCAD-Dokumenten ein visuelles Diff (ein Differenzobjekt, das Unterschiede kennzeichnet).

"Diff" im Zusammenhang mit Programmieren bezieht sich auf ein Dienstprogramm, das zwei Textdokumente miteinander vergleicht und die abweichenden Absätze hervorhebt. Es markiert üblicherweise entfernte Absätze rot und hinzugefügte Absätze grün. Sein Hauptzweck ist das schnelle Erfassen dessen, was zwischen zwei unterschiedlichen Versionen desselben Dokuments geändert wurde.

Dieses Werkzeug macht das gleiche, nur graphisch. Es öffnet ein neues Dokument, zeigt die Inhalte von Datei B, aber mit (farblichen) Hervorhebungen:

![](/images/BIM_Diff_example.jpg)

Dieses Werkzeug eignet sich hauptsächlich für IFC-Dateien, da es die IFC-Global-ID verwendet, um sicherzustellen, dass ein Objekt in einer Datei noch immer dasselbe Objekt in der anderen Datei ist. Es funktioniert jedoch auch mit zwei FreeCAD-Dateien ohne IFC-Zusammenhang.

## Anwendung

1. Ein Dokument in FreeCAD öffnen.
2. Ein zweites Dokument in FreeCAD öffnen, dass mit dem ersten verglichen werden soll.
3. Den Menüeintrag **Dienstprogramme → ![](/images/BIM_Diff.svg) IFC Diff...** auswählen.

## Optionen

* **Rot** kennzeichnet alle Elemente der Datei A, die nicht mehr in Datei B vorhanden sind.
* **Grün** kennzeichnet alle Elemente der Datei B, die noch nicht in der Datei A vorhanden waren.
* **Gelb** kennzeichnet alle Elemente der Datei A, die noch immer in der Datei B vorhanden sind, aber deren Geometrie geändert wurde.
* **Orange** kennzeichnet alle Elemente der Datei A, die noch immer mit denselben Geometrien in der Datei B vorhanden sind, bei denen aber andere Eigenschaften geändert wurden.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Diff/de&oldid=1498835>"