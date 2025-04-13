---
title: Arbeitsbereich Verbindungselemente
---

![](/images/Fasteners_workbench_icon.svg)

Arbeitsbereichssymbol Verbindungselemente

## Einführung

Der ![](/images/Fasteners_workbench_icon.svg) Arbeitsbereich Verbindungselemente ist ein [externer Arbeitsbereich](/External_workbenches/de "External workbenches/de"), der Bauteilen bzw. Baugruppen unterschiedliche Verbindungselemente hinzufügen kann.

![](/images/Fasteners_Toolbars.png)

Das optionale Layout des Arbeitsbereichs mit einer Symbolleiste.  
 Verbindungselemente mit metrischen Abmessungen haben orangefarbene Symbole.  
 Verbindungselemente mit Abmessungen in Zoll haben türkisfarbene Symbole.

## Einrichtung

1. Arbeitsbereich Verbindungselemente über den [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") installieren. Zur manuellen Installation siehe: [Weitere Arbeitsbereiche installieren](/Installing_more_workbenches/de "Installing more workbenches/de").
2. FreeCAD neu starten.
3. Den Arbeitsbereich ![](/images/Fasteners_workbench_icon.svg) Fasteners (Verbindungselemente) aus der Auswahlliste [Arbeitsbereich](/Std_Workbench/de "Std Workbench/de") auswählen.
4. Bei Bedarf kann die Symbolleiste und die Menüanordnung geändert werden:
   1. **Bearbeiten → Einstellungen... → Fasteners → General settings**.
   2. Eine der vorhandenen Optionen unter **Toolbar screw icons grouping** auswählen:
      - **Keine**: Alle Verbindungselemente befinden sich in einer einzigen Symbolleiste. Um sie zu erweitern und alle vorhandenen Schaltflächen zu sehen, benutzt man die Schaltfläche >>.
      - **Separate toolbars**: Die Verbindungselemente werden in mehreren Symbolleisten gruppiert. Dies ist das Standardlayout.
      - **Dropdown buttons**: Die Verbindungselemente werden in einer Symbolleiste mit Ausklappmenüs gruppiert.
   3. Wahlweise einen oder mehrere Optionen unter **Fastener standards shown in toolbars** deaktivieren. Deaktivierte Normen sind noch immer über das Menü erreichbar.
   4. FreeCAD neu starten.

## Anwendung

Verbindungselemente können zugeordnet oder lose sein. Zugeordnete Verbindungselemente haben ein Daten-Eigenschaft**Base Object**, eine kreisförmige Kante, und ihre Daten-Eigenschaft**Placement** ist dynamisch mit dem Objekt verknüpft. Der Befehl ![](/images/Fasteners_Move.svg) [Fasteners Bewegen](/Fasteners_Move/de "Fasteners Move/de") kann dazu benutzt werden, ein Verbindungselement zu befestigen oder zu lösen.

### Lose Verbindungselemente

1. Das gewünschte Verbindungselement auswählen, durch anklicken seiner Schaltfläche oder durch Auswahl aus dem Menü.
2. Ein Verbindungselement wird im Ursprung erstellt.
3. Optional können die Abmessungen und andere Eigenschaften der Verbindungselemente verändert werden:
   1. Verbindungselement auswählen.
   2. Den Reiter **Data** des [Eigenschafteneditors](/Property_editor/de "Property editor/de") aktivieren.
   3. Die erforderlichen Eigenschaften ändern.

### Zugeordnete Verbindungselemente

![](/images/Fasteners_Attached_Selected.png) ![](/images/Fasteners_Attached_Created.png)

Links: Zwei ausgewählte kreisförmige Kanten. Rechts: Die (ihnen) zugeordneten Verbindungselemente.

1. Festlegen, ob die ausgewählten Löcher Kernlöcher oder Durchgangslöcher sind, durch Auswahl von ![](/images/Fasteners_MatchTypeInner.svg) [AuswahlNachInnenmaß](/Fasteners_MatchTypeInner/de "Fasteners MatchTypeInner/de") oder ![](/images/Fasteners_MatchTypeOuter.svg) [AuswahlNachAußenmaß](/Fasteners_MatchTypeOuter/de "Fasteners MatchTypeOuter/de") (wird für Senkschrauben nicht verwendet).
2. Auswahl einer oder mehrerer kreisförmiger Kanten und/oder Flächen mit kreisförmigen Kanten. Für Senkschrauben muss die obere Kante der Lochsenkung ausgewählt werden.
3. Das gewünschte Verbindungselement auswählen, durch anklicken seiner Schaltfläche oder durch Auswahl aus dem Menü.
4. Jeder kreisförmigen Kante wird ein Verbindungselement zugeordnet.
5. Die vorgegebenen Abmessungen jedes einzelnen Verbindungselements sind von dem Radius der jeweiligen kreisförmigen Kante abhängig, der es zugeordnet wurde. Senkschrauben werden nach Kopfdurchmesser ausgewählt, andere Verbindungselemente nach ihrem Schaftdurchmesser.
6. Optional können die Abmessungen und andere Eigenschaften der Verbindungselemente verändert werden. Siehe oben.
7. Verbindungselemente, die verkehrt herum erscheinen, können mit dem Befehl ![](/images/Fasteners_Flip.svg) [Fasteners Umdrehen](/Fasteners_Flip/de "Fasteners Flip/de") umgedreht werden oder durch Ändern ihrer Daten-Eigenschaft**Invert**.
8. Optional kann die Daten-Eigenschaft**Offset** geändert werden, um einen Abstand zwischen den Verbindungselementen und den Kanten, denen sie zugeordnet sind, herzustellen.

## Hinweise

- Um Gewinde zu erzeugen, muss die Daten-Eigenschaft**Thread** eines Verbindungselements auf `true` geändert werden. Gewinde zu erzeugen ist aufwändig. Eine Neuberechnung dauert viel länger, wenn ein Dokument viele Verbindungselemente mit Gewinden enthält.
- Die Daten-Eigenschaft**Invert** und die Daten-Eigenschaft**Offset** werden für nicht befestigte Verbindungselemente ignoriert.

## Befehle

- ![](/images/Fasteners_Flip.svg) [Verbindungselement Umdrehen](/Fasteners_Flip/de "Fasteners Flip/de"): Ausrichtung der zugeordneten Verbindungselemente umkehren.

- ![](/images/Fasteners_Move.svg) [Verbindungselement Bewegen](/Fasteners_Move/de "Fasteners Move/de"): Ein Verbindungselement auf eine kreisförmige Kante bewegen und mit dieser zu verbinden. Kann auch zum Lösen der Verbindung verwendet werden.

- ![](/images/Fasteners_Simplify.svg) [Form vereinfachen](/Fasteners_Simplify/de "Fasteners Simplify/de"): Erstellt nichtparametrische Kopien von Verbindungselementen.

- ![](/images/Fasteners_MatchTypeInner.svg) [Match tap hole](/Fasteners_MatchTypeInner/de "Fasteners MatchTypeInner/de"): Kreisförmige Kanten werden als Gewindebohrungen angesehen, wenn neue Verbindungselemente mit ihnen verbunden werden.

- ![](/images/Fasteners_MatchTypeOuter.svg) [Match for pass hole](/Fasteners_MatchTypeOuter/de "Fasteners MatchTypeOuter/de"): Kreisförmige Kanten werden als Durchgangslöcher angesehen, wenn neue Verbindungselemente mit ihnen verbunden werden.

- ![](/images/Fasteners_BOM.svg) [Stückliste generieren](/Fasteners_BOM/de "Fasteners BOM/de"): Erstellt eine Tabelle mit einer Stückliste für die im Dokument verwendeten Verbindungselemente.

- ![](/images/Fasteners_ScrewCalculator.svg) [Schraubenberechner](/Fasteners_ScrewCalculator/de "Fasteners ScrewCalculator/de"): Zeigt einen Rechner zum Ermitteln des Kernlochdurchmessers einer Gewindebohrung an.

- ![](/images/Fasteners_ChangeParameters.svg) [Parameter der Verbindungselemente ändern](/Fasteners_ChangeParameters/de "Fasteners ChangeParameters/de"): Ändert die Parameter der Verbindungselemente.

## Verbindungselemente

Verbindungselemente mit metrischen Maßen haben orangefarbene Symbole. Befestigungselemente mit Zollmaßen haben türkisfarbene Symbole.

### Sechskantschrauben und -Bolzen

- ![](/images/Fasteners_ASMEB18.2.1.6.svg) **ASME B18.2.1.6** UNC Sechskantschraube.

- ![](/images/Fasteners_ASMEB18.2.1.8.svg) **ASME B18.2.1.8** UNC Sechskantschraube mit Flansch.

- ![](/images/Fasteners_DIN571.svg) **DIN 571** Sechskantholzschraube.

- ![](/images/Fasteners_ISO4017.svg) **DIN 933** Sechskantschraube.

- ![](/images/Fasteners_ISO4017.svg) **DIN 961** Sechskantschraube.

- ![](/images/Fasteners_EN1662.svg) **EN 1662** Sechskantschrauben mit Flansch, leichte Reihe.

- ![](/images/Fasteners_EN1665.svg) **EN 1665** Sechskantschrauben mit Flansch, schwere Reihe.

- ![](/images/Fasteners_ISO4014.svg) **ISO 4014** Sechskantschrauben. _Produktklassen A und B._

- ![](/images/Fasteners_ISO4014.svg) **ISO 4015** Hexagon head bolt with reduced shank.

- ![](/images/Fasteners_ISO4014.svg) **ISO 4016** Hexagon head bolt. _Product grade C._

- ![](/images/Fasteners_ISO4017.svg) **ISO 4017** Sechskantschrauben. _Produktklassen A und B._

- ![](/images/Fasteners_ISO4017.svg) **ISO 4018** Hexagon head screw. _Product grade C._

- ![](/images/Fasteners_EN1662.svg) **ISO 4162** Hexagon bolt with flange, small series. _Product grade A with driving feature of product grade B._

- ![](/images/Fasteners_ISO4017.svg) **ISO 8676** Sechskantschraube mit Feingewinde. _Produktklassen A und B._

- ![](/images/Fasteners_ISO4014.svg) **ISO 8765** Hexagon head bolt with fine pitch thread.

- ![](/images/Fasteners_EN1662.svg) **ISO 15071** Hexagon bolt with flange, small series. _Product grade A._

- ![](/images/Fasteners_EN1662.svg) **ISO 15072** Hexagon bolt with flange and fine pitch thread, small series. _Product grade A._

### Schrauben mit Innensechskant

- ![](/images/Fasteners_ASMEB18.3.1A.svg) **ASME B18.3.1A** UNC hexagon socket head cap screw.

- ![](/images/Fasteners_ASMEB18.3.1G.svg) **ASME B18.3.1G** UNC hexagon socket head cap screw with low head.

- ![](/images/Fasteners_ASMEB18.3.2.svg) **ASME B18.3.2** UNC hexagon socket countersunk head screw.

- ![](/images/Fasteners_ASMEB18.3.3A.svg) **ASME B18.3.3A** UNC hexagon socket button head screw.

- ![](/images/Fasteners_ASMEB18.3.3B.svg) **ASME B18.3.3B** UNC hexagon socket button head screw with flange.

- ![](/images/Fasteners_ASMEB18.3.4.svg) **ASME B18.3.4** UNC hexagon socket head shoulder screw.

- ![](/images/Fasteners_DIN6912.svg) **DIN 6912** Zylinderschrauben mit Innensechskant und Schlüsselführung niedriger Kopf.

- ![](/images/Fasteners_DIN7984.svg) **DIN 7984** Zylinderschrauben mit Innensechskant, niedriger Kopf.

- ![](/images/Fasteners_ISO2936.svg) **ISO 2936** Hexagon socket screw key.

- ![](/images/Fasteners_ISO4762.svg) **ISO 4762** Zylinderschrauben mit Innensechskant.

- ![](/images/Fasteners_ISO7379.svg) **ISO 7379** Zylinderkopfschrauben mit Innensechskant und Ansatzschaft.

- ![](/images/Fasteners_ISO7380.svg) **ISO 7380-1** Halbrundkopfschrauben mit Innensechsrund.

- ![](/images/Fasteners_ISO7380-2.svg) **ISO 7380-2** Halbrundkopfschrauben mit Innensechsrund und Bund.

- ![](/images/Fasteners_ISO10642.svg) **ISO 10642** Senkschrauben mit Innensechskant.

### Schrauben mit Innensechsrund

- ![](/images/Fasteners_ISO14579.svg) **ISO 14579** Zylinderschr. mit Innensechsrund.

- ![](/images/Fasteners_ISO14580.svg) **ISO 14580** Zylinderschrauben mit Innensechsrund, niedriger Kopf.

- ![](/images/Fasteners_ISO14581.svg) **ISO 14581** Hexalobular socket countersunk flat head screw.

- ![](/images/Fasteners_ISO14582.svg) **ISO 14582** Senkschrauben mit Innensechsrund, hoher Kopf.

- ![](/images/Fasteners_ISO14583.svg) **ISO 14583** Flachkopfschrauben mit Innensechsrund.

- ![](/images/Fasteners_ISO14584.svg) **ISO 14584** Linsensenkschrauben mit Innensechsrund.

### Schlitzschrauben

- ![](/images/Fasteners_ASMEB18.6.1.2.svg) **ASME B18.6.1.2** Slotted flat countersunk head wood screw.

- ![](/images/Fasteners_ASMEB18.6.1.4.svg) **ASME B18.6.1.4** Slotted oval countersunk head wood screw.

- ![](/images/Fasteners_ASMEB18.6.3.1A.svg) **ASME B18.6.3.1A** UNC Senkkopfschraube mit Schlitz.

- ![](/images/Fasteners_ASMEB18.6.3.4A.svg) **ASME B18.6.3.4A** UNC slotted oval countersunk head screw.

- ![](/images/Fasteners_ASMEB18.6.3.9A.svg) **ASME B18.6.3.9A** UNC slotted pan head screw.

- ![](/images/Fasteners_ASMEB18.6.3.10A.svg) **ASME B18.6.3.10A** UNC Slotted fillister head screw.

- ![](/images/Fasteners_ASMEB18.6.3.12A.svg) **ASME B18.6.3.12A** UNC Slotted truss head screws.

- ![](/images/Fasteners_ASMEB18.6.3.16A.svg) **ASME B18.6.3.16A** UNC Slotted round head screw.

- ![](/images/Fasteners_ISO1207.svg) **DIN 84 (superseded by ISO 1207)** Slotted cheese head screw. _Product grade A._

- ![](/images/Fasteners_DIN96.svg) **DIN 96** Slotted half round head wood screw.

- ![](/images/Fasteners_DIN96.svg) **GOST 1144-1** Slotted half round head wood screw.

- ![](/images/Fasteners_DIN96.svg) **GOST 1144-2** Slotted half round head wood screw.

- ![](/images/Fasteners_ISO1207.svg) **ISO 1207** Zylinderschrauben mit Schlitz. _Produktklasse A._

- ![](/images/Fasteners_ISO1580.svg) **ISO 1580** Flachkopfschrauben mit Schlitz. _Produktklasse A._

- ![](/images/Fasteners_ISO2009.svg) **ISO 2009** Senkschrauben mit Schlitz. _Produktklasse A._

- ![](/images/Fasteners_ISO2010.svg) **ISO 2010** Linsensenkschrauben mit Schlitz. _Produktklasse A._

### Kreuzschlitzschrauben

- ![](/images/Fasteners_ASMEB18.6.1.3.svg) **ASME B18.6.1.3** Flat countersunk head wood screw.

- ![](/images/Fasteners_ASMEB18.6.1.5.svg) **ASME B18.6.1.5** Oval countersunk head wood screw.

- ![](/images/Fasteners_ASMEB18.6.3.1B.svg) **ASME B18.6.3.1B** UNC flat countersunk head screw.

- ![](/images/Fasteners_ASMEB18.6.3.4B.svg) **ASME B18.6.3.4B** UNC oval countersunk head screw.

- ![](/images/Fasteners_ASMEB18.6.3.9B.svg) **ASME B18.6.3.9B** UNC pan head screw.

- ![](/images/Fasteners_ASMEB18.6.3.10B.svg) **ASME B18.6.3.10B** UNC fillister head screw.

- ![](/images/Fasteners_ASMEB18.6.3.12C.svg) **ASME B18.6.3.12C** UNC truss head screws.

- ![](/images/Fasteners_ASMEB18.6.3.16B.svg) **ASME B18.6.3.16B** UNC round head screw.

- ![](/images/Fasteners_DIN967.svg) **DIN 967** Linsenkopfschrauben mit Bund.

- ![](/images/Fasteners_DIN7996.svg) **DIN 7996** Pan head wood screw.

- ![](/images/Fasteners_DIN7996.svg) **GOST 1144-3** Pan head wood screw.

- ![](/images/Fasteners_DIN7996.svg) **GOST 1144-4** Pan head wood screw.

- ![](/images/Fasteners_ISO7045.svg) **ISO 7045** Linsenkopfschraube. _Produktklasse A._

- ![](/images/Fasteners_ISO7046.svg) **ISO 7046** Senkschrauben. _Produktklasse A._

- ![](/images/Fasteners_ISO7047.svg) **ISO 7047** Linsensenkschrauben. _Produktklasse A._

- ![](/images/Fasteners_ISO7048.svg) **ISO 7048** Zylinderschrauben.

- ![](/images/Fasteners_DIN7996.svg) **ISO 7049-C** Pan head self tapping screws with conical point.

- ![](/images/Fasteners_ISO7049-F.svg) **ISO 7049-F** Pan head self tapping screws with flat point.

- ![](/images/Fasteners_DIN7996.svg) **ISO 7049-R** Pan head self tapping screws with rounded point.

### Other head bolts

- ![](/images/Fasteners_ASMEB18.2.1.1.svg) **ASME B18.2.1.1** UNC square head bolt.

- ![](/images/Fasteners_ASMEB18.5.2.svg) **ASME B18.5** UNC Round head square neck bolt.

- ![](/images/Fasteners_DIN478.svg) **DIN 478** Square head bolt with collar.

- ![](/images/Fasteners_DIN603.svg) **DIN 603** Round head square neck bolt.

- ![](/images/Fasteners_ISO2342.svg) **ISO 2342** Headless screw with shank

### Set screws

- ![](/images/Fasteners_ASMEB18.3.5A.svg) **ASME B18.3.5A** UNC hexagon socket set screw with flat point.

- ![](/images/Fasteners_ASMEB18.3.5B.svg) **ASME B18.3.5B** UNC hexagon socket set screw with cone point.

- ![](/images/Fasteners_ASMEB18.3.5C.svg) **ASME B18.3.5C** UNC hexagon socket set screw with dog point.

- ![](/images/Fasteners_ASMEB18.3.5D.svg) **ASME B18.3.5D** UNC hexagon socket set screw with cup point.

- ![](/images/Fasteners_ISO4026.svg) **ISO 4026** Gewindestifte mit Innensechskant und Kegelstumpf.

- ![](/images/Fasteners_ISO4027.svg) **ISO 4027** Gewindestifte mit Innensechskant und Spitze.

- ![](/images/Fasteners_ISO4028.svg) **ISO 4028** Gewindestifte mit Innensechskant und Zapfen.

- ![](/images/Fasteners_ISO4029.svg) **ISO 4029** Gewindestifte mit Innensechskant und Ringschneide.

- ![](/images/Fasteners_ISO4026.svg) **ISO 4766** Slotted socket set screw with flat point.

- ![](/images/Fasteners_ISO4027.svg) **ISO 7434** Slotted socket set screw with cone point.

- ![](/images/Fasteners_ISO4028.svg) **ISO 7435** Slotted socket set screw with long dog point.

- ![](/images/Fasteners_ISO4029.svg) **ISO 7436** Slotted socket set screw with cup point.

### Thumb screws

- ![](/images/Fasteners_DIN464.svg) **DIN 464** Knurled thumb screw, high type.

- ![](/images/Fasteners_DIN465.svg) **DIN 465** Slotted knurled thumb screw, high type.

- ![](/images/Fasteners_DIN653.svg) **DIN 653** Knurled thumb screw, low type.

### Ground screws

- ![](/images/Fasteners_GroundScrew.svg) **Ground Screw** Round plate ground screw.

### Muttern

- ![](/images/Fasteners_ASMEB18.2.2.1A.svg) **ASME B18.2.2.1A** UNC hexagon machine screw nut.

- ![](/images/Fasteners_ASMEB18.2.2.1B.svg) **ASME B18.2.2.1B** UNC square machine screw nut.

- ![](/images/Fasteners_ASMEB18.2.2.2.svg) **ASME 18.2.2.2** UNC square nut.

- ![](/images/Fasteners_ASMEB18.2.2.1A.svg) **ASME B18.2.2.4A** UNC hexagon nut.

- ![](/images/Fasteners_ASMEB18.2.2.4B.svg) **ASME B18.2.2.4B** UNC hexagon thin nut.

- ![](/images/Fasteners_ASMEB18.2.2.5.svg) **ASME 18.2.2.5** UNC hexagon castle nut.

- ![](/images/Fasteners_ASMEB18.2.2.12.svg) **ASME 18.2.2.12** UNC hexagon nut with flange.

- ![](/images/Fasteners_ASMEB18.2.2.13.svg) **ASME 18.2.2.13** UNC hexagon coupling nut.

- ![](/images/Fasteners_ASMEB18.6.9A.svg) **ASME 18.6.9A** Wing nut, type A.

- ![](/images/Fasteners_DIN315.svg) **DIN 315** Wing nut.

- ![](/images/Fasteners_DIN557.svg) **DIN 557** Vierkantmuttern.

- ![](/images/Fasteners_DIN562.svg) **DIN 562** Vierkantmuttern.

- ![](/images/Fasteners_DIN917.svg) **DIN 917** Cap nut, low form.

- ![](/images/Fasteners_DIN928.svg) **DIN 928** Square weld nut.

- ![](/images/Fasteners_DIN929.svg) **DIN 929** Hexagon weld nut.

- ![](/images/Fasteners_ISO4032.svg) **DIN 934 (superseded by ISO 4035 and ISO 8673)** Hexagon thin nut chamfered. _Product grades A and B._

- ![](/images/Fasteners_DIN935.svg) **DIN 935** Hexagon castle nut.

- ![](/images/Fasteners_DIN985.svg) **DIN 985** Sechskantsicherungsmuttern mit Kunststoffring.

- ![](/images/Fasteners_DIN1587.svg) **DIN 1587** Cap nut.

- ![](/images/Fasteners_DIN6330.svg) **DIN 6330** Hexagon nut 1.5d high.

- ![](/images/Fasteners_DIN6331.svg) **DIN 6331** Hexagon with collar 1.5d high.

- ![](/images/Fasteners_DIN6334.svg) **DIN 6334** Hexagon coupling nut.

- ![](/images/Fasteners_DIN7967.svg) **DIN 7967** Self-locking counter nut.

- ![](/images/Fasteners_EN1661.svg) **EN 1661** Sechskantmuttern mit Flansch.

- ![](/images/Fasteners_DIN1587.svg) **GOST 11860-1** Cap nut.

- ![](/images/Fasteners_ISO4032.svg) **ISO 4032** Sechskantmuttern (Typ 1). _Produktklassen A und B._

- ![](/images/Fasteners_ISO4033.svg) **ISO 4033** Hohe Sechskantmuttern (Typ 2). _Produktklassen A und B._

- ![](/images/Fasteners_ISO4034.svg) **ISO 4034** Hexagon nut, style 1.

- ![](/images/Fasteners_ISO4035.svg) **ISO 4035** Sechskantmuttern mit Fase, niedrige Form (Typ 0). _Produktklassen A und B._

- ![](/images/Fasteners_EN1661.svg) **ISO 4161** Hexagon nut with flange.

- ![](/images/Fasteners_DIN985.svg) **ISO 7040** Prevailing torque type hexagon nut (with non-metallic insert).

- ![](/images/Fasteners_DIN985.svg) **ISO 7041** Prevailing torque type hexagon nut (with non-metallic insert), style 2.

- ![](/images/Fasteners_ISO7043.svg) **ISO 7043** Prevailing torque type hexagon nut with flange (with non-metallic insert).

- ![](/images/Fasteners_ISO7044.svg) **ISO 7044** Prevailing torque type all-metal hexagon nut with flange.

- ![](/images/Fasteners_ISO7719.svg) **ISO 7719** Prevailing torque type all-metal hexagon nut.

- ![](/images/Fasteners_ISO7719.svg) **ISO 7720** Prevailing torque type all-metal hexagon nut, style 2.

- ![](/images/Fasteners_ISO8673.svg) **ISO 8673** Hexagon nut with fine pitch thread, style 1. _Product grades A and B._

- ![](/images/Fasteners_ISO8674.svg) **ISO 8674** Hexagon high nut with fine pitch thread, style 2. _Product grades A and B._

- ![](/images/Fasteners_ISO8675.svg) **ISO 8675** Hexagon thin nut with fine pitch thread, style 0. _Product grades A and B._

- ![](/images/Fasteners_DIN985.svg) **ISO 10511** Prevailing torque type hexagon thin nut (with non-metallic insert).

- ![](/images/Fasteners_DIN985.svg) **ISO 10512** Prevailing torque type hexagon nut with fine pitch thread (with non-metallic insert).

- ![](/images/Fasteners_ISO7719.svg) **ISO 10513** Prevailing torque type all-metal hexagon nut with fine pitch thread.

- ![](/images/Fasteners_EN1661.svg) **ISO 10663** Hexagon nut with flange and fine pitch thread.

- ![](/images/Fasteners_ISO7043.svg) **ISO 12125** Prevailing torque type hexagon nut with flange and fine pitch thread (with non-metallic insert).

- ![](/images/Fasteners_ISO7044.svg) **ISO 12126** Prevailing torque type all-metal hexagon nut with flange and fine pitch thread.

- ![](/images/Fasteners_ISO21670.svg) **ISO 21670** Hexagon weld nut with flange.

- ![](/images/Fasteners_SAEJ483a1.svg) **SAE J483a 1** Low cap nut.

- ![](/images/Fasteners_SAEJ483a2.svg) **SAE J483a 2** High cap nut.

### T-slot fasteners

- ![](/images/Fasteners_DIN508.svg) **DIN 508** Mutter für T-Nut.

- ![](/images/Fasteners_GN505.svg) **GN 505** Serrated quarter-turn T-slot nut.

- ![](/images/Fasteners_GN505.4.svg) **GN 505.4** Serrated T-slot bolt.

- ![](/images/Fasteners_GN506.svg) **GN 506** T-Slot swivel nut.

- ![](/images/Fasteners_GN507.svg) **GN 507** Mutter für T-Nut.

- ![](/images/Fasteners_DIN508.svg) **ISO 299** T-Slot nut.

### Scheiben

- ![](/images/Fasteners_ASMEB18.21.1.12A.svg) **ASME B18.21.1.12A** UN Unterlegscheibe, schmale Reihe.

- ![](/images/Fasteners_ASMEB18.21.1.12B.svg) **ASME B18.21.1.12B** UN Scheibe, normale Reihe.

- ![](/images/Fasteners_ASMEB18.21.1.12C.svg) **ASME B18.21.1.12C** UN Scheibe, breite Reihe.

- ![](/images/Fasteners_DIN6319C.svg) **DIN 6319C** Spherical washer.

- ![](/images/Fasteners_DIN6319D.svg) **DIN 6319D** Conical seat.

- ![](/images/Fasteners_DIN6319G.svg) **DIN 6319G** Conical seat.

- ![](/images/Fasteners_DIN6340.svg) **DIN 6340** Washer for clamping devices.

- ![](/images/Fasteners_ISO7089.svg) **ISO 7089** Scheiben, Form A. _Produktklasse A._

- ![](/images/Fasteners_ISO7090.svg) **ISO 7090** Scheiben mit Fase, Form B. _Produktklasse A._

- ![](/images/Fasteners_ISO7092.svg) **ISO 7092** Scheiben, kleine Reihe. _Produktklasse A._

- ![](/images/Fasteners_ISO7093-1.svg) **ISO 7093-1** Flache Scheiben, große Reihe. _Produktklasse A._

- ![](/images/Fasteners_ISO7094.svg) **ISO 7094** Scheiben, extra große Reihe. _Produktklasse C._

- ![](/images/Fasteners_ISO8738.svg) **ISO 8738** Plain washer for clevis pins.

- ![](/images/Fasteners_NFE27-619.svg) **NFE27-619** Countersunk washer.

### Rods, taps and dies

- ![](/images/Fasteners_ScrewTapInch.svg) Zöllige Gewindestange zum Schneiden von Innengewinden.

- ![](/images/Fasteners_ScrewDieInch.svg) Gewindewerkzeug zum Schneiden von zölligen Außengewinden.

- ![](/images/Fasteners_ThreadedRodInch.svg) Zöllige Gewindestange **UNC**.

- ![](/images/Fasteners_ThreadedRod.svg) Metrische Gewindestange **DIN 975**.

- ![](/images/Fasteners_ScrewTap.svg) Metrische Gewindestange zum Schneiden von Innengewinden.

- ![](/images/Fasteners_ScrewDie.svg) Gewindewerkzeug zum Schneiden von metrischen Außengewinden.

### Einsätze

- ![](/images/Fasteners_IUTHeatInsert.svg) Einsätze zum Warmeinbetten.

- ![](/images/Fasteners_PEMPressNut.svg) Einpressmutter.

- ![](/images/Fasteners_PEMStandoff.svg) Einpressbuchse mit Gewinde.

- ![](/images/Fasteners_PEMStud.svg) Einpressbolzen.

- ![](/images/Fasteners_PCBSpacer.svg) Abstandshalter für Leiterplatten, Innengewinde beidseitig.

- ![](/images/Fasteners_PCBStandoff.svg) Abstandshalter für Leiterplatten mit Außen- und Innengewinde.

- ![](/images/Fasteners_4PWTI.svg) 4 prong threaded wood insert (DIN 1624 Tee nuts).

### Sicherungsringe

- ![](/images/Fasteners_DIN471.svg) **DIN 471** Sicherungsring für Wellen.

- ![](/images/Fasteners_DIN472.svg) **DIN 472** Sicherungsring für Bohrungen.

- ![](/images/Fasteners_DIN6799.svg) **DIN 6799** Sicherungsscheibe.

### Nägel

- ![](/images/Fasteners_DIN1143.svg) **DIN 1143** Round plain head nail for use in automatic nailing machines.

- ![](/images/Fasteners_DIN1144-A.svg) **DIN 1144-A** Nail for the installation of wood wool composite panels, 20mm round head.

- ![](/images/Fasteners_DIN1151-A.svg) **DIN 1151-A** Round plain head wire nail.

- ![](/images/Fasteners_DIN1151-B.svg) **DIN 1151-B** Round countersunk head wire nail.

- ![](/images/Fasteners_DIN1152.svg) **DIN 1152** Round lost head wire nail.

- ![](/images/Fasteners_DIN1151-A.svg) **DIN 1160-A** Clout or slate nail.

- ![](/images/Fasteners_DIN1151-A.svg) **DIN 1160-B** Clout or slate wide head nail.

### Pins

- ![](/images/Fasteners_ISO1234.svg) **ISO 1234** Split pin.

- ![](/images/Fasteners_ISO2338.svg) **ISO 2338** Parallel pin.

- ![](/images/Fasteners_ISO2339.svg) **ISO 2339** Taper pin.

- ![](/images/Fasteners_ISO2340A.svg) **ISO 2340A** Clevis pin.

- ![](/images/Fasteners_ISO2340B.svg) **ISO 2340B** Clevis pin without head (with split pin holes).

- ![](/images/Fasteners_ISO2341A.svg) **ISO 2341A** Clevis pin with head.

- ![](/images/Fasteners_ISO2341B.svg) **ISO 2341B** Clevis pin with head (with split pin hole).

- ![](/images/Fasteners_ISO8733.svg) **ISO 8733** Parallel pin with internal thread, unhardened.

- ![](/images/Fasteners_ISO8734.svg) **ISO 8734** Dowel pin.

- ![](/images/Fasteners_ISO8735.svg) **ISO 8735** Parallel pin with internal thread, hardened.

- ![](/images/Fasteners_ISO8736.svg) **ISO 8736** Taper pin with internal thread, unhardened.

- ![](/images/Fasteners_ISO8737.svg) **ISO 8737** Taper pin with external thread, unhardened.

- ![](/images/Fasteners_ISO8739.svg) **ISO 8739** Full-length grooved pin with pilot.

- ![](/images/Fasteners_ISO8740.svg) **ISO 8740** Full-length grooved pin with chamfer.

- ![](/images/Fasteners_ISO8741.svg) **ISO 8741** Half-length reverse taper grooved pin.

- ![](/images/Fasteners_ISO8742.svg) **ISO 8742** Third-length center grooved pin.

- ![](/images/Fasteners_ISO8743.svg) **ISO 8743** Half-length center grooved pin.

- ![](/images/Fasteners_ISO8744.svg) **ISO 8744** Full-length taper grooved pin.

- ![](/images/Fasteners_ISO8745.svg) **ISO 8745** Half-length taper grooved pin.

- ![](/images/Fasteners_ISO8746.svg) **ISO 8746** Grooved pin with round head.

- ![](/images/Fasteners_ISO8747.svg) **ISO 8747** Grooved pin with countersunk head.

- ![](/images/Fasteners_ISO8748.svg) **ISO 8748** Coiled spring pin, heavy duty.

- ![](/images/Fasteners_ISO8750.svg) **ISO 8750** Coiled spring pin, standard duty.

- ![](/images/Fasteners_ISO8751.svg) **ISO 8751** Coiled spring pin, light duty.

- ![](/images/Fasteners_ISO8752.svg) **ISO 8752** Slotted spring pin, heavy duty.

- ![](/images/Fasteners_ISO13337.svg) **ISO 13337** Slotted spring pin, light duty.

## Veraltet

- ![](/images/Fasteners_ChamferHole.svg) [Senkungen vornehmen](/Fasteners_ChamferHole/de "Fasteners ChamferHole/de"): Erstellt eine Senkung an einem Loch für Senkschrauben. Steht in 0.5.13 und neuer nicht mehr zur Verfügung.

## Referenzen

- Autor: (<http://theseger.com/projects/author/shaise/> shaise)
  - SchraubenErsteller: Ulrich Brammer
  - Arbeitsbereichsumgebung: Shai Seger
- Quellcode: <https://github.com/shaise/FreeCAD_FastenersWB>
- Bug-Reports und Feature-Requests: <https://github.com/shaise/FreeCAD_FastenersWB/issues>
- Forumsbeitrag: <https://forum.freecadweb.org/viewtopic.php?t=11429>

## Verweise

- [BOLTS](https://github.com/jreinhardt/BOLTS): Eine offene Bibliothek für technische Spezifikationen.

Retrieved from "<http://wiki.freecad.org/index.php?title=Fasteners_Workbench/de&oldid=1567273>"
