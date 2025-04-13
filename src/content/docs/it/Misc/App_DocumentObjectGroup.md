---
title: App DocumentObjectGroup
---
## Introduzione

![](/images/Folder.svg)

Un oggetto App DocumentObjectGroup o formalmente un `App::DocumentObjectGroup`, è un elemento semplice che consente di raggruppare qualsiasi tipo di [App DocumentObject](/App_DocumentObject/it "App DocumentObject/it") nella [vista ad albero](/Tree_view/it "Tree view/it") indipendentemente dal tipo di dati.

È stato sviluppato per organizzare gli oggetti nella [vista ad albero](/Tree_view/it "Tree view/it") in modo logico per l'utente.

![](/images/FreeCAD_core_objects.svg)

Diagramma semplificato delle relazioni tra gli oggetti principali del programma. La classe `App::DocumentObjectGroup` ha un'estensione che le consente di raggruppare qualsiasi tipo di oggetto; il gruppo di per se stesso non ha molte proprietà.

## Utilizzo

1. Premere il pulsante ![](/images/Std_Group.svg) [Gruppo](/Std_Group/it "Std Group/it") nella barra degli strumenti della struttura. Viene creato un gruppo vuoto.
2. Per aggiungere degli oggetti a un gruppo, selezionarli nella [vista ad albero](/Tree_view/it "Tree view/it"), quindi trascinarli e rilasciarli sul gruppo.
3. Per rimuovere degli oggetti da un gruppo, trascinarli fuori dal gruppo, sull'etichetta del documento nella parte superiore della [vista ad albero](/Tree_view/it "Tree view/it").

Vedere la pagina [Gruppo](/Std_Group/it "Std Group/it") per le informazioni complete, incluso il suo uso negli [Script](/Std_Group/it#Script "Std Group/it").

## Proprietà

Un App DocumentObjectGroup (classe `App::DocumentObjectGroup`) è derivato dall'oggetto base [App DocumentObject](/App_DocumentObject/it "App DocumentObject/it") (classe `App::DocumentObject`), pertanto condivide tutte le proprietà di quest'ultimo.

Vedere le proprietà nella pagina [Gruppo](/Std_Group/it "Std Group/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=App_DocumentObjectGroup/it&oldid=1356809>"