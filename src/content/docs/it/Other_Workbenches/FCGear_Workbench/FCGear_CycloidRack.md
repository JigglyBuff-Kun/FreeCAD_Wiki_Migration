---
title: FCGear Cremagliera cicloidale
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                                                  |
| -------------------------------------------------------------------------------- |
| Cremagliera cicloidale                                                           |
| Posizione nel menu                                                               |
| Gear → Cycloid Rack                                                              |
| Ambiente                                                                         |
| [FCGear](/FCGear_Workbench/it "FCGear Workbench/it")                             |
| Avvio veloce                                                                     |
| None                                                                             |
| Introdotto nella versione                                                        |
| 1.0                                                                              |
| Vedere anche                                                                     |
| [FCGear: Ingranaggio cicloidale](/FCGear_CycloidGear/it "FCGear CycloidGear/it") |
|                                                                                  |

## Descrizione

![](/images/FCGear_CycloidRack-01.png)

Cremagliere cicloidali da sinistra a destra: ingranaggio dritto, ingranaggio elicoidale, ingranaggio elicoidale doppio

## Utilizzo

1. Passare a ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/it "FCGear Workbench/it").
2. Esistono diversi modi per richiamare il comando:
   - Premere il pulsante ![](/images/FCGear_CycloidRack.svg) Cycloid Rack nella barra degli strumenti.
   - Selezionare l'opzione **Gear → ![](/images/FCGear_CycloidRack.svg) Cycloid Rack** dal menu.
3. Modificare il parametro dell'ingranaggio alle condizioni richieste (vedi [Proprietà](#Proprietà)).

## Proprietà

Un oggetto FCGear CycloidRack deriva da un oggetto [Part Feature](/Part_Feature/it "Part Feature/it") e ne eredita tutte le proprietà. Ha inoltre le seguenti proprietà aggiuntive:

accuracy

- Dati**numpoints** (`Integer`): Il valore predefinito è `15`. Numero di punti per la spline.

base

- Dati**add_endings** (`bool`): Se `true` (predefinito), la lunghezza totale della cremagliera è denti \* passo. Se `false`, la cremagliera inizia con un fianco dentellato.
- Dati**height** (`Length`): Il valore predefinito è `5 mm`. Valore della larghezza dell'ingranaggio.
- Dati**teeth** (`Integer`): Il valore predefinito è `15`. Numero di denti.
- Dati**thickness** (`Length`): Il valore predefinito è `5 mm`. Spessore della parte non lavorata della cremagliera.

computed

- Dati**transverse_pitch** (`Length`): (sola lettura) Inclinazione nel piano trasversale.

cycloid

- Dati**inner_diameter** (`Float`): Il valore predefinito è `7.5`. Diametro del cerchio rotante dell'ipocicloide, normalizzato dal Dati**module** (vedere [Note](/FCGear_CycloidGear/it#Note "FCGear CycloidGear/it")).
- Dati**outer_diameter** (`Float`): Il valore predefinito è `7.5`. Diametro del cerchio di rotolamento dell'epicicloide, normalizzato dal Dati**module** (vedere [Note](/FCGear_CycloidGear/it#Note "FCGear CycloidGear/it")).

fillets

- Dati**head_fillet** (`Float`): Il valore predefinito è `0`.
- Dati**root_fillet** (`Float`): Il valore predefinito è `0`.

helical

- Dati**beta** (`Angle`): L'impostazione predefinita è `0 °`. Con l'angolo dell'elica β viene creato un ingranaggio elicoidale (valore positivo → senso di rotazione destra, valore negativo → senso di rotazione sinistra).
- Dati**double_helix** (`Bool`): L'impostazione predefinita è `false`, `true` crea un ingranaggio a doppia elica (vedere [Note](/FCGear_CycloidGear/it#Note "FCGear CycloidGear/it")).

involute

- Dati**module** (`Length`): Il valore predefinito è `1 mm`. Per le cremagliere il modulo è uguale al passo e lo stesso vale per la distanza tra i punti corrispondenti sui denti adiacenti (vedere [Note](/FCGear_CycloidGear/it#Note "FCGear CycloidGear/it")).

precision

- Dati**simplified** (`Bool`): L'impostazione predefinita è `false`. Se `true` la cremagliera viene disegnata con un numero costante di denti per evitare la ridenominazione topologica.

tolerance

- Dati**clearance** (`Float`): Il valore predefinito è `0.25` (vedere [Note](/FCGear_CycloidGear/it#Note "FCGear CycloidGear/it")).
- Dati**head** (`Float`): Il valore predefinito è `0`. Lunghezza aggiuntiva sulla testa dei denti, normalizzata da Dati**module**.

version

- Dati**version** (`String`):

## Note

Vedere [Ingranaggio cicloidale](/FCGear_CycloidGear/it#Notes "FCGear CycloidGear/it").

## Formule utili

Vedere [Ingranaggio cicloidale](/FCGear_CycloidGear/it#Formule_utili "FCGear CycloidGear/it").

## Script

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_CycloidRack/it&oldid=1422386>"
