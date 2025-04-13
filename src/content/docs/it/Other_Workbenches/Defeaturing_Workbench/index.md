---
title: Ambiente Defeaturing
---

![](/images/Defeaturing_workbench_icon.svg)

L'icona dell'ambiente Defeaturing

## Introduzione

L'ambiente ![](/images/Defeaturing_workbench_icon.svg) **Defeaturing** è un ambiente aggiuntivo destinato alla modifica dei modelli STEP, per rimuovere dal modello le funzioni selezionate. È un [ambiente esterno](/External_Workbenches/it "External Workbenches/it") e quindi non fa parte dell'installazione standard di FreeCAD.

## Funzioni

- Dispone di una serie di strumenti per modificare una forma o un modello STEP, rimuovere fori, facce, semplificare il modello, modificare la tolleranza, applicare operazioni booleane fuzzy ecc ...
- Ci sono anche strumenti per creare forme solide, da bordi, facce o gusci.
- È anche possibile utilizzare la modellazione diretta del modello, quando la cronologia delle operazioni non è disponibile. (Questo è il caso dei modelli 3D STEP).
- Utile in situazioni per rimuovere rapidamente i dettagli proprietari del modello prima di condividerlo. Vedere [Defeaturing](/Defeaturing/it "Defeaturing/it")

Nota: è possibile utilizzare gli strumenti di Defeaturing più avanzati se è disponibile [OCC7.3](/OpenCASCADE/it "OpenCASCADE/it").

## Installazione

### Automatica (consigliata)

Utilizzando FreeCAD ![](/images/AddonManager.svg) [Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it") disponibile in v0.17+ tramite **Strumenti → Addon Manager**. Cerca l'icona ![](/images/Defeaturing_workbench_icon.svg) Defeaturing_workbench. Addon Manager avvisa anche l'utente quando è disponibile una nuova versione di questo Addon.

### Manuale

Vedere [Come installare ambienti di lavoro aggiuntivi](/How_to_install_additional_workbenches/it "How to install additional workbenches/it")

### Supporti

- FreeCAD v0.15 4671
- FreeCAD v0.16 >= 6712
- FreeCAD v0.17 >= 13522
- FreeCAD v0.18+

## Riferimenti

- Autore: Github: [@easyw](https://github.com/easyw) | FreeCAD Forums: [[1]](https://forum.freecadweb.org/viewtopic.php?f=9&t=29506)
- Codice sorgente in github: <https://github.com/easyw/Defeaturing_WB>
- Discussione nel forum di FreeCAD <https://forum.freecadweb.org/viewtopic.php?t=29506>

## Strumenti

![Finestra di dialogo degli strumenti di Defeaturing](/images/Defeaturing_WB.png)

Finestra di dialogo degli strumenti di Defeaturing

![](/images/Defeaturing_Tools.svg) Gli strumenti di defeaturing si trovano in una maschera separata.

- ![](/images/DefeatWB_Tools_rmv_hole.png) [Remove Holes](/index.php?title=DefeatWB_Tools_rmv_hole&action=edit&redlink=1 "DefeatWB Tools rmv hole (page does not exist)"): rimuove il foro dalla faccia
- ![](/images/DefeatWB_Tools_rmv_listed_Faces.png) [Remove listed Faces](/index.php?title=DefeatWB_Tools_rmv_listed_Faces&action=edit&redlink=1 "DefeatWB Tools rmv listed Faces (page does not exist)"): rimuove le facce "in elenco"
- ![](/images/DefeatWB_Tools_add_Faces_listed_Edges.png) [Add Faces from 'in List' Edges](/index.php?title=DefeatWB_Tools_add_Faces_listed_Edges&action=edit&redlink=1 "DefeatWB Tools add Faces listed Edges (page does not exist)"): aggiunge facce dai bordi "in elenco"
- ![](/images/DefeatWB_Tools_select_Faces_Param_Defeat.png) [Select Faces to be Parametric defeatured](/index.php?title=DefeatWB_Tools_select_Faces_Param_Defeat&action=edit&redlink=1 "DefeatWB Tools select Faces Param Defeat (page does not exist)"): seleziona le facce a cui applicare il defeaturing parametrico
- ![](/images/DefeatWB_Tools_create_copy_listed_edges.png) [Create a copy of the 'in List' Edges](/index.php?title=DefeatWB_Tools_create_copy_listed_edges&action=edit&redlink=1 "DefeatWB Tools create copy listed edges (page does not exist)") : crea una copia dei bordi "in elenco"

- ![](/images/DefeatWB_Tools_copy_Faces_listed_faces.png) [copy Faces from 'in List' Faces](/index.php?title=DefeatWB_Tools_copy_Faces_listed_faces&action=edit&redlink=1 "DefeatWB Tools copy Faces listed faces (page does not exist)") : copia le facce "in elenco"
- ![](/images/DefeatWB_Tools_offset_face.png) [offset face](/index.php?title=DefeatWB_Tools_offset_face&action=edit&redlink=1 "DefeatWB Tools offset face (page does not exist)"): sposta una faccia
- ![](/images/DefeatWB_Tools_offset_edge.png) [offset edge](/index.php?title=DefeatWB_Tools_offset_edge&action=edit&redlink=1 "DefeatWB Tools offset edge (page does not exist)"): sposta un bordo

- ![](/images/DefeatWB_Tools_make_solid_listed_faces.png) [Make Solid from in List Faces](/index.php?title=DefeatWB_Tools_make_solid_listed_faces&action=edit&redlink=1 "DefeatWB Tools make solid listed faces (page does not exist)"): crea un solido da un elenco di facce
- ![](/images/DefeatWB_Tools_make_solid_faces_selected_objects.png) [Make Solid from the Faces of the selected Objects](/index.php?title=DefeatWB_Tools_make_solid_faces_selected_objects&action=edit&redlink=1 "DefeatWB Tools make solid faces selected objects (page does not exist)"): crea un solido dalle facce degli oggetti selezionati
- ![](/images/DefeatWB_Tools_select_one_object_2_make_solid_step_proc.png) [Make Solid from in List Faces](/index.php?title=DefeatWB_Tools_select_one_object_2_make_solid_step_proc&action=edit&redlink=1 "DefeatWB Tools select one object 2 make solid step proc (page does not exist)"): seleziona un oggetto per provare a creare un solido attraverso il processo di importazione/esportazione di STEP
- ![](/images/DefeatWB_Tools_Connect.png) [Connect](/index.php?title=DefeatWB_Tools_Connect&action=edit&redlink=1 "DefeatWB Tools Connect (page does not exist)"): collegamento
- ![](/images/DefeatWB_Tools_clean_face_rmv_holes.png) [clean Face(s) removing holes and merging Outwire](/index.php?title=DefeatWB_Tools_clean_face_rmv_holes&action=edit&redlink=1 "DefeatWB Tools clean face rmv holes (page does not exist)"): pulisce le facce rimuovendo i fori e unendo i contorni

- ![](/images/DefeatWB_Tools_show_listed_edges.png) [show 'in List‘ Edge(s)](/index.php?title=DefeatWB_Tools_show_listed_edges&action=edit&redlink=1 "DefeatWB Tools show listed edges (page does not exist)"): mostra i bordi "in elenco"
- ![](/images/DefeatWB_Tools_show_listed_faces.png) [show 'in List‘ Face(s)](/index.php?title=DefeatWB_Tools_show_listed_faces&action=edit&redlink=1 "DefeatWB Tools show listed faces (page does not exist)"): mostra le facce "in elenco"
- ![](/images/DefeatWB_Tools_refine.png) [refine](/index.php?title=DefeatWB_Tools_refine&action=edit&redlink=1 "DefeatWB Tools refine (page does not exist)"): affina
- ![](/images/DefeatWB_Tools_simple_copy.png) [simple copy](/index.php?title=DefeatWB_Tools_simple_copy&action=edit&redlink=1 "DefeatWB Tools simple copy (page does not exist)"): copia semplice
- ![](/images/DefeatWB_Tools_parametric_refine.png) [parametric Refine](/index.php?title=DefeatWB_Tools_parametric_refine&action=edit&redlink=1 "DefeatWB Tools parametric refine (page does not exist)"): affina parametricamente

- ![](/images/DefeatWB_Tools_geometry_check.png) [geometry check](/index.php?title=DefeatWB_Tools_geometry_check&action=edit&redlink=1 "DefeatWB Tools geometry check (page does not exist)"): controlla la geometria
- ![](/images/DefeatWB_Tools_get_Tolerance_value.png) [get Tolerance value](/index.php?title=DefeatWB_Tools_get_Tolerance_value&action=edit&redlink=1 "DefeatWB Tools get Tolerance value (page does not exist)"): cerca il valore di tolleranza
- ![](/images/DefeatWB_Tools_set_Tolerance_value.png) [set Tolerance value](/index.php?title=DefeatWB_Tools_set_Tolerance_value&action=edit&redlink=1 "DefeatWB Tools set Tolerance value (page does not exist)"): imposta il valore di tolleranza

- ![](/images/DefeatWB_Tools_make_edges_selected_vertexes.png) [make Edge from selected Vertexes](/index.php?title=DefeatWB_Tools_make_edges_selected_vertexes&action=edit&redlink=1 "DefeatWB Tools make edges selected vertexes (page does not exist)"): crea bordi dai vertici selezionati
- ![](/images/DefeatWB_Tools_reset_placement.png) [reset Placement](/index.php?title=DefeatWB_Tools_reset_placement&action=edit&redlink=1 "DefeatWB Tools reset placement (page does not exist)"): resetta il posizionamento
- ![](/images/DefeatWB_Tools_show_hide_typeId_shape.png) [show/hide TypeId of the Shape](/index.php?title=DefeatWB_Tools_show_hide_typeId_shape&action=edit&redlink=1 "DefeatWB Tools show hide typeId shape (page does not exist)"): mostra o nasconde il tipo ID della forma
- ![](/images/DefeatWB_Tools_help.png) [help](/index.php?title=DefeatWB_Tools_help&action=edit&redlink=1 "DefeatWB Tools help (page does not exist)"): aiuto

- ![](/images/DefeatWB_Tools_Fuzzy_Cut.png) [Fuzzy Cut](/index.php?title=DefeatWB_Tools_Fuzzy_Cut&action=edit&redlink=1 "DefeatWB Tools Fuzzy Cut (page does not exist)"): taglio approssimativo
- ![](/images/DefeatWB_Tools_Fuzzy_Union.png) [Fuzzy Union](/index.php?title=DefeatWB_Tools_Fuzzy_Union&action=edit&redlink=1 "DefeatWB Tools Fuzzy Union (page does not exist)"): unione approssimativa
- ![](/images/DefeatWB_Tools_Fuzzy_Common.png) [Fuzzy Common](/index.php?title=DefeatWB_Tools_Fuzzy_Common&action=edit&redlink=1 "DefeatWB Tools Fuzzy Common (page does not exist)"): intersezione approssimativa

## Tutorial video

### Defeaturing

Rimozione delle funzioni mediante i nuovi strumenti OCC7.3

[![](/images/Defeaturing-WB-%40Work_v3.png](https://raw.githubusercontent.com/easyw/FreeCAD-tutorials/master/testing-files/removing-holes.mp4)

Defeaturing-WB: removing-features (holes)

[![](/images/Defeaturing-WB-%40Work_v1.png)](https://youtu.be/yrTtWFakAyE)

YouTube: Defeaturing tools - Simplifying the model

[![](/images/Defeaturing-WB-%40Work_v2.png)](https://youtu.be/vgQwGI6Fk6Q)

YouTube: Defeaturing tools - Multi-select faces for defeaturing

[![](/images/Defeaturing-WB-%40Work_v4.png)](https://raw.githubusercontent.com/easyw/FreeCAD-tutorials/master/testing-files/removing-fillet-chamfer.mp4)

Defeaturing-WB - removing-fillet-chamfer

[![](/images/Defeaturing-WB-%40Work_v5.png)](https://peertube.mastodon.host/videos/watch/c6bc5abd-2eb7-48c7-af67-c4d8e6783872)

Defeaturing-WB - overview-features (in german language)

[![](/images//Defeaturing-WB-%40Work_v6.png)](https://raw.githubusercontent.com/easyw/FreeCAD-tutorials/master/testing-files/parametric-defeaturing.mp4)

Defeaturing-WB - parametric-defeaturing

### Riparazioni

- Cucire una forma
- Rimuovere o semplificare delle facce
- Rimuovere i fori o le tasche
- Leggere o modificare la tolleranza
- effettuare operazioni booleane

## Ambienti esterni

Gli ambienti di lavoro per FreeCAD sono facilmente programmabili in [Python](/Python/it "Python/it"), quindi ci sono molte persone che stanno sviluppando degli ambienti aggiuntivi al di fuori del codice di base di FreeCAD.

La pagina [Ambienti complementari](/External_workbenches/it "External workbenches/it") contiene alcune informazioni e tutorial su alcuni di loro, e il progetto [FreeCAD Addons](https://github.com/FreeCAD/FreeCAD-addons) mira a raccoglierli e renderli facilmente installabili dall'interno di FreeCAD.

Sono in fase di sviluppo ulteriori nuovi ambienti.

Retrieved from "<http://wiki.freecad.org/index.php?title=Defeaturing_Workbench/it&oldid=1536755>"
