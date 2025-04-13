---
title: MeshPart EbenesNetzErstellen
---
|  |
| --- |
| MeshPart EbenesNetzErstellen |
| Menüeintrag |
| Netze → Netz abwickeln |
| Arbeitsbereich |
| [Mesh](/Mesh_Workbench/de "Mesh Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.19 |
| Siehe auch |
| [MeshPart EbeneFlächeErstellen](/MeshPart_CreateFlatFace/de "MeshPart CreateFlatFace/de") |
|  |

## Beschreibung

Der Befehl **MeshPart EbenesNetzErstellen** erstellt einen ebenen Repräsentanten eines Netzobjekts (mesh object), indem es eben ausgebreitet oder abgewickelt wird. Der erstellte Umriss ist ein [Part-Formelement](/Part_Feature/de "Part Feature/de").

![](/images/MeshPart_CreateFlatMesh_example.png)

Ein Netzobjekt und in rot sein ebener Repräsentant

## Anwendung

1. Ein einzelnes Netzobjekt auswählen. Das Netz muss abwickelbar sein. Zum Beispiel muss ein zylindrisches Netz offene Enden und eine offene Naht besitzen, damit es abgewickelt werden kann. Gekrümmte Oberflächen müssen auch ein relativ fein unterteiltes Netz besitzen; bei Bedarf den Befehl [Mesh NeuVernetzenGmsh](/Mesh_RemeshGmsh/de "Mesh RemeshGmsh/de") verwenden.
2. Den Menüeintrag **Netze → ![](/images/MeshPart_CreateFlatMesh.svg) Netz abwickeln** auswählen.

## Eigenschaften

Siehe [Part Formelement](/Part_Feature/de "Part Feature/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=MeshPart_CreateFlatMesh/de&oldid=1350484>"