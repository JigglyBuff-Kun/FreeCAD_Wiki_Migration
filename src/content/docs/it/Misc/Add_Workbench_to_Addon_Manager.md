---
title: Aggiungere un Ambiente all'Addon Manager
---
## Introduzione

Le seguenti sono istruzioni dettagliate su come aggiungere un ambiente di lavoro Python all'[Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it").

Requisiti:

* Un repository git locale.
* Un repository git remoto. Gli host git supportati sono [GitHub](https://github.com), [GitLab](https://about.gitlab.com/), [Framagit](https://framagit.org/public/projects) e [Debian Salsa](https://salsa.debian.org/public).
* Git deve essere installato.

## Abilitare la modalità sviluppatore

1. Aprire l'[editor delle preferenze](/Preferences_Editor "Preferences Editor"): selezionare l'opzione **Modifica → ![](/images/Std_DlgPreferences.svg) Preferenze...** dal menu.
2. Selezionare l'opzione **![](/images/Std_AddonMgr.svg) Addon Manager** nella barra di sinistra.
3. Nella scheda **Opzioni di Addon Manager** selezionare la casella di controllo **Modalità sviluppatore Addon**. Ciò abiliterà il pulsante Strumenti di sviluppo... in Addon manager.
4. Premere il pulsante OK per chiudere l'editor delle preferenze.

## Creare il file package.xml

1. Aprire [Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it"): selezionare l'opzione **Strumenti → ![](/images/Std_AddonMgr.svg) Addon manager** dal menu.
2. Premere il pulsante Strumenti di sviluppo....
3. Si apre la finestra di dialogo **Estensioni strumenti per sviluppatori**.  
   ![](/images/Addon_Manager_Addon_Developer_Tools_Dialog.png)
4. Inserire quanto segue:
   * **Percorso per l'estensione**: Il percorso del repository Git locale.
   * **Nome dell'estensione**: Questo apparirà negli elenchi di Addon Manager.
   * **Descrizione**: Idem.
   * **Versione**: Idem.
   * **URL del repository**
   * **Ramo primario**
   * **URL del README**: Consigliato.
   * **Icona**: L'icona deve far parte del repository.
5. Premere il pulsante ![](/images/List-add.svg) nella parte inferiore della finestra di dialogo.
6. Si apre la finestra di dialogo **Contenuto dell'estensione**.  
   ![](/images/Addon_Manager_Content_Item_Dialog.png)
7. Il **Tipo del contenuto** deve essere impostato su `Workbench`.
8. Selezionare la casella di controllo **Questo è l'unico elemento nel componente aggiuntivo**.
9. Inserire il **Nome della classe del Workbench**. Questo è il nome della classe specificato nel file InitGui.py.
10. In **Sottodirectory** inserire `./`.
11. Premere il pulsante OK per chiudere la finestra di dialogo.
12. Premere il pulsante Salva per chiudere la finestra di dialogo **Estensioni strumenti per sviluppatori** e salvare il file package.xml.
13. Premere il pulsante ![](/images/Process-stop.svg) Chiudi per chiudere Gestione componenti aggiuntivi.
14. Inviare il file creato al proprio repository remoto.

## Aggiungere l'ambiente al file the .gitmodules

1. Creare un fork di <https://github.com/FreeCAD/FreeCAD-addons>.
2. Creare un nuovo branch.
3. Modificare il file .gitmodules per includere il tuo nuovo componente aggiuntivo, in ordine alfabetico.
4. Inviare il nuovo branch a GitHub.
5. Inviare una richiesta pull al repository di FreeCAD-Addons con il nuovo file .gitmodules.

## Vedere anche

* [Creare un Ambiente di lavoro](/Workbench_creation/it "Workbench creation/it")
* [Pacchetto Metadata](/Package_Metadata/it "Package Metadata/it"): Informazioni dettagliate sul file package.xml.

Retrieved from "<http://wiki.freecad.org/index.php?title=Add_Workbench_to_Addon_Manager/it&oldid=1418125>"