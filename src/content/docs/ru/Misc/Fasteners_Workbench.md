---
title: Верстак Стандартные Изделия (Fasteners)
---

![](/images/Fasteners_workbench_icon.svg)

Логотип верстака Стандартные изделия (Fasteners)

## Введение

[Внешний](/External_workbenches/ru "External workbenches/ru") верстак ![](/images/Fasteners_workbench_icon.svg) Стандартные Изделия (Fasteners) позволяет быстро и удобно создавать различные крепёжные изделия а также устанавливать их в посадочные места деталей.

![](/images/Fasteners_Toolbars.png)

Внешний вид панели инструментов верстака.  
Крепёжные изделия с метрическими размерами имеют оранжевые значки.  
Крепёжные изделия с дюймовыми размерами имеют зеленые значки.

## Установка

1. Установите верстак Fasteners через ![](/images/AddonManager.svg) [менеджер дополнений](/Std_AddonMgr/ru "Std AddonMgr/ru"). В случае установки вручную ознакомьтесь с руководством по [установке дополнительных верстаков](/Installing_more_workbenches/ru "Installing more workbenches/ru").
2. Перезапустите FreeCAD.
3. Выберете верстак ![](/images/Fasteners_workbench_icon.svg) Fasteners в [в списке доступных верстаков](/Std_Workbench/ru "Std Workbench/ru").
4. При необходимости настройте панель инструментов и расположение меню:
   1. Перейдите в меню: **Правка → Настройки... → Fasteners → Основные настройки → Toolbar screw icons grouping**.
   2. Выберите один из доступных вариантов:
      - **None**: Все крепежные элементы отображаются на одной панели инструментов. Чтобы просмотреть все доступные изделия, используйте кнопку >> чтобы развернуть ее.
      - **Separate toolbars**: Крепежные элементы сгруппированы на нескольких панелях инструментов. Этот вариант выбран по умолчанию.
      - **Dropdown buttons**: Крепежные элементы сгруппированы на панелях инструментов.
   3. Перезапустите FreeCAD.

## Применение

Крепёжные элементы могут быть прикреплены к посадочному месту или не прикреплены. У прикрепленныех крепёжных изделий в свойстве Данные**base Object**, указанно ребро круглой формы к которому прикреплено изделие, следовательно свойство Данные**Placement** динамический связано с этим ребом. Команда ![](/images/Fasteners_Move.svg) [Перемещения крепежа](/Fasteners_Move/ru "Fasteners Move/ru") может быть использована для прикрепления или отсоединения крепежа.

### Добавление изделий без их крепления к чему либо

1. Select the desired fastener by clicking its button or by picking it from the menu.
2. A fastener is created at the origin.
3. Optionally change the dimensions and other properties of the fastener:
   1. Select the fastener.
   2. Go to the **Data** tab of the [Property editor](/Property_editor "Property editor").
   3. Change the required properties.

### Добавление изделий с креплением к посадочным местам

![](/images/Fasteners_Attached_Selected.png) ![](/images/Fasteners_Attached_Created.png)

Слева в посадочных местах выбрано две грани круглой формы. Справа крепёжные изделия установленны в указанные места.

1. Specify if the selected holes are tap holes or pass holes by selecting ![](/images/Fasteners_MatchTypeInner.svg) [Fasteners MatchTypeInner](/Fasteners_MatchTypeInner "Fasteners MatchTypeInner") or ![](/images/Fasteners_MatchTypeOuter.svg) [Fasteners MatchTypeOuter](/Fasteners_MatchTypeOuter "Fasteners MatchTypeOuter") respectively (not used for countersunk screws).
2. Select one or more circular edges and/or faces with circular edges. For countersunk screws the top edge of the chamfered hole must be selected.
3. Select the desired fastener by clicking its button or by picking it from the menu.
4. A fastener is attached to each of the selected circular edges.
5. The default dimensions of each fastener depend on the radius of the circular edge it is attached to. Countersunk screws are matched by their head diameter, other fasteners are matched by their shaft diameter.
6. Optionally change the dimensions and other properties of the fasteners. See above.
7. Fasteners that appear upside-down can be inverted with the ![](/images/Fasteners_Flip.svg) [Fasteners Flip](/Fasteners_Flip "Fasteners Flip") command or by changing their Данные**Invert** property.
8. Optionally change the Данные**Offset** property to create space between the fasteners and the edges they are attached to.

## Примечания

- Если вы хотите, чтобы крепеж имел реалистичную резьбу (по умолчанию при добавлении крепежа резьба на нем не строится) его свойство Данные**thread** должно быть установлено как `true`. Создание такой резьбы поглощает много ресурсов. Перерасчет трехмерного Вида (Recompute) занимает гораздо больше времени, если в документе много крепёжных изделий с реалистичной резьбой.
- Свойства Данные**invert** и Данные**offset** игнорируются для крепёжных изделий которые не установлены в посадочные места.

## Команды

- ![](/images/Fasteners_Flip.svg) [Перевернуть крепёж](/Fasteners_Flip/ru "Fasteners Flip/ru"): Обращает ориентацию уже установленного крепежа на противоположную.

- ![](/images/Fasteners_Move.svg) [Переместить крепёж](/Fasteners_Move/ru "Fasteners Move/ru"): Перемещает и устанавливает крепёж в указанную грань круглой формы. Может также использоваться для отсоединения крепёжа.

- ![](/images/Fasteners_Shape.svg) [Создать непараметрическую копию](/Fasteners_Shape/ru "Fasteners Shape/ru"): Создает непараметрическую копию объекта (стандартного изделия).

- ![](/images/Fasteners_MatchTypeInner.svg) [Match for tap hole (Установить винты/болты в указанные места)](/Fasteners_MatchTypeInner/ru "Fasteners MatchTypeInner/ru"): По диаметру выбранных ребер отверстий, автоматический подбирает крепёж по размеру в соответствии со стандартами и прикрепляет его к этим посадочным местам.

- ![](/images/Fasteners_MatchTypeOuter.svg) [Match screws by outer thread diameter (Pass hole)](/Fasteners_MatchTypeOuter "Fasteners MatchTypeOuter"): подобрать резьбу по диаметру внутренний резьбы (отверстия под метчик).

- ![](/images/Fasteners_BOM.svg) [Спецификация](/Fasteners_BOM/ru "Fasteners BOM/ru"): Создает электронную таблицу со спецификацией крепежных элементов имеющихся в документе.

- ![](/images/Fasteners_ScrewCalculator.svg) [Калькулятор отверстия под резьбу](/Fasteners_ScrewCalculator/ru "Fasteners ScrewCalculator/ru"): Открывает калькулятор для определения размера отверстия под резьбу определенного диаметра.

- ![](/images/Fasteners_ChangeParameters.svg) [Изменить параметры крепежа](/Fasteners_ChangeParameters/ru "Fasteners ChangeParameters/ru"): Изменить параметры стандартных изделий.

## Крепёжные изделия

Крепёжные изделия с метрическими размерами имеют оранжевые значки. Крепёжные изделия с дюймовыми размерами имеют зеленые значки.

### Винты и болты с шестигранной головкой

- ![](/images/Fasteners_ASMEB18.2.1.6.svg) **ASME B18.2.1.6** UNC Винт с шестигранной головкой.

- ![](/images/Fasteners_ASMEB18.2.1.8.svg) **ASME B18.2.1.8** UNC Винт с шестигранной головкой и фланцем.

- ![](/images/Fasteners_DIN571.svg) **DIN 571** **(Ближайший аналог ГОСТ 11473)** Шуруп с шестигранной головкой (для дерева).

- ![](/images/Fasteners_ISO4017.svg) **DIN 933** Hexagon head screw.

- ![](/images/Fasteners_ISO4017.svg) **DIN 961** Hexagon head screw.

- ![](/images/Fasteners_EN1662.svg) **EN 1662** Болт с шестигранной головкой и фланцем, легкая серия.

- ![](/images/Fasteners_EN1665.svg) **EN 1665** Болт с шестигранной головкой и фланцем, тяжёлая серия.

- ![](/images/Fasteners_ISO4014.svg) **ISO 4014** **(ГОСТ Р ИСО 4014)** Болт с шестигранной головкой. _Классы точности А и В._

- ![](/images/Fasteners_ISO4014.svg) **ISO 4015** Hexagon head bolt with reduced shank.

- ![](/images/Fasteners_ISO4014.svg) **ISO 4016** Hexagon head bolt. _Product grade C._

- ![](/images/Fasteners_ISO4017.svg) **ISO 4017** **(ГОСТ Р ИСО 4017)** Винт с шестигранной головкой. _Классы точности А и В._

- ![](/images/Fasteners_ISO4017.svg) **ISO 4018** Hexagon head screw. _Product grade C._

- ![](/images/Fasteners_EN1662.svg) **ISO 4162** Hexagon bolt with flange, small series. _Product grade A with driving feature of product grade B._

- ![](/images/Fasteners_ISO4017.svg) **ISO 8676** Hexagon head screw with fine pitch thread. _Product grades A and B._

- ![](/images/Fasteners_ISO4014.svg) **ISO 8765** Hexagon head bolt with fine pitch thread.

- ![](/images/Fasteners_EN1662.svg) **ISO 15071** Hexagon bolt with flange, small series. _Product grade A._

- ![](/images/Fasteners_EN1662.svg) **ISO 15072** Hexagon bolt with flange and fine pitch thread, small series. _Product grade A._

### Винты шестигранным углублением под ключ

- ![](/images/Fasteners_ASMEB18.3.1A.svg) **ASME B18.3.1A** UNC Винт с цилиндрической головкой и шестигранным углублением под ключ.

- ![](/images/Fasteners_ASMEB18.3.1G.svg) **ASME B18.3.1G** UNC Винт с цилиндрической головкой уменьшенной высоты и шестигранным углублением под ключ.

- ![](/images/Fasteners_ASMEB18.3.2.svg) **ASME B18.3.2** UNC Винт с потайной головкой и шестигранным углублением под ключ.

- ![](/images/Fasteners_ASMEB18.3.3A.svg) **ASME B18.3.3A** UNC Винт с полукруглой головкой и шестигранным углублением под ключ.

- ![](/images/Fasteners_ASMEB18.3.3B.svg) **ASME B18.3.3B** UNC Винт с полукруглой головкой с буртом и шестигранным углублением под ключ.

- ![](/images/Fasteners_ASMEB18.3.4.svg) **ASME B18.3.4** UNC Винт с внутренним шестигранником в головке и утолщенным стержнем.

- ![](/images/Fasteners_DIN6912.svg) **DIN 6912** Винт с цилиндрической головкой уменьшенной высоты и шестигранным углублением под ключ с центрирующим отверстием.

- ![](/images/Fasteners_DIN7984.svg) **DIN 7984** Винт с цилиндрической головкой уменьшенной высоты и шестигранным углублением под ключ.

- ![](/images/Fasteners_ISO2936.svg) **ISO 2936** Hexagon socket screw key.

- ![](/images/Fasteners_ISO4762.svg) **ISO 4762** **(ГОСТ Р ИСО 4762)** Винт с цилиндрической головкой и шестигранным углублением под ключ.

- ![](/images/Fasteners_ISO7379.svg) **ISO 7379** **(Ближайший аналог ГОСТ 28962)** Винт с внутренним шестигранником в головке и утолщенным стержнем.

- ![](/images/Fasteners_ISO7380.svg) **ISO 7380-1** **(ГОСТ Р ИСО 7380-1)** Винт с полукруглой головкой и шестигранным углублением под ключ.

- ![](/images/Fasteners_ISO7380-2.svg) **ISO 7380-2** **(ГОСТ Р ИСО 7380-2)** Винт с полукруглой головкой с буртом и шестигранным углублением под ключ.

- ![](/images/Fasteners_ISO10642.svg) **ISO 10642** **(ГОСТ Р ИСО 10642)** Винт с потайной головкой и шестигранным углублением под ключ.

### Винты звездообразным углублением под ключ

- ![](/images/Fasteners_ISO14579.svg) **ISO 14579** **(ГОСТ Р ИСО 14579)** Винт с цилиндрической головкой и звездообразным углублением под ключ.

- ![](/images/Fasteners_ISO14580.svg) **ISO 14580** **(ГОСТ Р ИСО 14580)** Винт с низкой цилиндрической головкой и звездообразным углублением под ключ.

- ![](/images/Fasteners_ISO14581.svg) **ISO 14581** Hexalobular socket countersunk flat head screw.

- ![](/images/Fasteners_ISO14582.svg) **ISO 14582** **(ГОСТ Р ИСО 14582)** Винт с высокой потайной головкой и звездообразным углублением под ключ.

- ![](/images/Fasteners_ISO14583.svg) **ISO 14583** **(ГОСТ Р ИСО 14583)** Винт со скругленной головкой и звездообразным углублением под ключ.

- ![](/images/Fasteners_ISO14584.svg) **ISO 14584** **(ГОСТ Р ИСО 14584)** Винт с полупотайной головкой и звездообразным углублением под ключ.

### Винты с прямым шлицем

- ![](/images/Fasteners_ASMEB18.6.1.2.svg) **ASME B18.6.1.2** Slotted flat countersunk head wood screw.

- ![](/images/Fasteners_ASMEB18.6.1.4.svg) **ASME B18.6.1.4** Slotted oval countersunk head wood screw.

- ![](/images/Fasteners_ASMEB18.6.3.1A.svg) **ASME B18.6.3.1A** UNC Винт с потайной головкой и прямым шлицем.

- ![](/images/Fasteners_ASMEB18.6.3.4A.svg) **ASME B18.6.3.4A** UNC slotted oval countersunk head screw.

- ![](/images/Fasteners_ASMEB18.6.3.9A.svg) **ASME B18.6.3.9A** UNC slotted pan head screw.

- ![](/images/Fasteners_ASMEB18.6.3.10A.svg) **ASME B18.6.3.10A** UNC Slotted fillister head screw.

- ![](/images/Fasteners_ASMEB18.6.3.12A.svg) **ASME B18.6.3.12A** UNC Slotted truss head screws.

- ![](/images/Fasteners_ASMEB18.6.3.16A.svg) **ASME B18.6.3.16A** UNC Slotted round head screw.

- ![](/images/Fasteners_ISO1207.svg) **DIN 84 (superseded by ISO 1207)** Slotted cheese head screw. _Product grade A._

- ![](/images/Fasteners_DIN96.svg) **DIN 96** Slotted half round head wood screw.

- ![](/images/Fasteners_DIN96.svg) **ГОСТ 1144 (Исполнение 1)** Шуруп с полукруглой головкой.

- ![](/images/Fasteners_DIN96.svg) **ГОСТ 1144 (Исполнение 2)** Шуруп с полукруглой головкой.

- ![](/images/Fasteners_ISO1207.svg) **ISO 1207** **(ГОСТ Р ИСО 1580)** Винт с низкой цилиндрической головкой со шлицем. _Класс точности А._

- ![](/images/Fasteners_ISO1580.svg) **ISO 1580** **(ГОСТ Р ИСО 1580)** Винт с плоской головкой со шлицем. _Класс точности А._

- ![](/images/Fasteners_ISO2009.svg) **ISO 2009** **(ГОСТ Р ИСО 2009)** Винт с потайной головкой и прямым шлицем. _Класс точности А_.

- ![](/images/Fasteners_ISO2010.svg) **ISO 2010** **(ГОСТ Р ИСО 2010)** Винт с полупотайной головкой со шлицем. _Класс точности А._

### Винты с крестообразным шлицем

- ![](/images/Fasteners_ASMEB18.6.1.3.svg) **ASME B18.6.1.3** Flat countersunk head wood screw.

- ![](/images/Fasteners_ASMEB18.6.1.5.svg) **ASME B18.6.1.5** Oval countersunk head wood screw.

- ![](/images/Fasteners_ASMEB18.6.3.1B.svg) **ASME B18.6.3.1B** UNC flat countersunk head screw.

- ![](/images/Fasteners_ASMEB18.6.3.4B.svg) **ASME B18.6.3.4B** UNC oval countersunk head screw.

- ![](/images/Fasteners_ASMEB18.6.3.9B.svg) **ASME B18.6.3.9B** UNC pan head screw.

- ![](/images/Fasteners_ASMEB18.6.3.10B.svg) **ASME B18.6.3.10B** UNC fillister head screw.

- ![](/images/Fasteners_ASMEB18.6.3.12C.svg) **ASME B18.6.3.12C** UNC truss head screws.

- ![](/images/Fasteners_ASMEB18.6.3.16B.svg) **ASME B18.6.3.16B** UNC round head screw.

- ![](/images/Fasteners_DIN967.svg) **DIN 967** **(Ближайший аналог ГОСТ 11644)** Винт с полукруглой головкой, буртом и крестообразным шлицем.

- ![](/images/Fasteners_DIN7996.svg) **DIN 7996** Pan head wood screw.

- ![](/images/Fasteners_DIN7996.svg) **GOST 1144-3** Pan head wood screw.

- ![](/images/Fasteners_DIN7996.svg) **GOST 1144-4** Pan head wood screw.

- ![](/images/Fasteners_ISO7045.svg) **ISO 7045** **(ГОСТ Р ИСО 7045)** Винт со скругленной головкой и крестообразным шлицем типа Н. _Класс точности А._

- ![](/images/Fasteners_ISO7046.svg) **ISO 7046** **(ГОСТ Р ИСО 7046 две части)** Винт с потайной головкой и крестообразным шлицем типа Н. _Класс точности А._

- ![](/images/Fasteners_ISO7047.svg) **ISO 7047** **(ГОСТ Р ИСО 7047)** Винт с полупотайной головкой и крестообразным шлицем типа H. _Класс точности А._

- ![](/images/Fasteners_ISO7048.svg) **ISO 7048** **(ГОСТ Р ИСО 7048)** Винт с низкой цилиндрической головкой и крестообразным шлицем.

- ![](/images/Fasteners_DIN7996.svg) **ISO 7049-C** Pan head self tapping screws with conical point.

- ![](/images/Fasteners_ISO7049-F.svg) **ISO 7049-F** Pan head self tapping screws with flat point.

- ![](/images/Fasteners_DIN7996.svg) **ISO 7049-R** Pan head self tapping screws with rounded point.

### Болты с другими головками

- ![](/images/Fasteners_ASMEB18.2.1.1.svg) **ASME B18.2.1.1** UNC square head bolt.

- ![](/images/Fasteners_ASMEB18.5.2.svg) **ASME B18.5** UNC Round head square neck bolt.

- ![](/images/Fasteners_DIN478.svg) **DIN 478** Square head bolt with collar.

- ![](/images/Fasteners_ASMEB18.5.2.svg) **ASME B18.5** UNC Болт с полукруглой головкой и квадратным подголовком.

- ![](/images/Fasteners_ISO2342.svg) **ISO 2342** Headless screw with shank

### Set screws

- ![](/images/Fasteners_ASMEB18.3.5A.svg) **ASME B18.3.5A** UNC Винт установочный с шестигранным углублением и плоским концом.

- ![](/images/Fasteners_ASMEB18.3.5B.svg) **ASME B18.3.5B** UNC Винт установочный с шестигранным углублением и коническим концом.

- ![](/images/Fasteners_ASMEB18.3.5C.svg) **ASME B18.3.5C** UNC Винт установочный с шестигранным углублением и цилиндрическим концом.

- ![](/images/Fasteners_ASMEB18.3.5D.svg) **ASME B18.3.5D** UNC Винт установочный с шестигранным углублением и концом с лункой.

- ![](/images/Fasteners_ISO4026.svg) **ISO 4026** **(ГОСТ Р ИСО 4026)** Винт установочный с шестигранным углублением и плоским концом.

- ![](/images/Fasteners_ISO4027.svg) **ISO 4027** **(ГОСТ Р ИСО 4027)** Винт установочный с шестигранным углублением и коническим концом.

- ![](/images/Fasteners_ISO4028.svg) **ISO 4028** **(ГОСТ Р ИСО 4028)** Винт установочный с шестигранным углублением и цилиндрическим концом.

- ![](/images/Fasteners_ISO4029.svg) **ISO 4029** **(ГОСТ Р ИСО 4029)** Винт установочный с шестигранным углублением и концом с лункой.

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

### Гайки

- ![](/images/Fasteners_ASMEB18.2.2.1A.svg) **ASME B18.2.2.1A** UNC Гайка шестигранная общего назначения.

- ![](/images/Fasteners_ASMEB18.2.2.1B.svg) **ASME B18.2.2.1B** UNC square machine screw nut.

- ![](/images/Fasteners_ASMEB18.2.2.2.svg) **ASME 18.2.2.2** UNC square nut.

- ![](/images/Fasteners_ASMEB18.2.2.1A.svg) **ASME B18.2.2.4A** UNC Гайка шестигранная.

- ![](/images/Fasteners_ASMEB18.2.2.4B.svg) **ASME B18.2.2.4B** UNC Гайка шестигранная низкая.

- ![](/images/Fasteners_ASMEB18.2.2.5.svg) **ASME 18.2.2.5** UNC hexagon castle nut.

- ![](/images/Fasteners_ASMEB18.2.2.12.svg) **ASME 18.2.2.12** UNC hexagon nut with flange.

- ![](/images/Fasteners_ASMEB18.2.2.13.svg) **ASME 18.2.2.13** UNC hexagon coupling nut.

- ![](/images/Fasteners_ASMEB18.6.9A.svg) **ASME 18.6.9A** Wing nut, type A.

- ![](/images/Fasteners_DIN315.svg) **DIN 315** Wing nut.

- ![](/images/Fasteners_DIN557.svg) **DIN 557** **(Ближайший аналог ОСТ 37.001.112)** Гайка квадратная с фаской.

- ![](/images/Fasteners_DIN562.svg) **DIN 562** **(Ближайший аналог ОСТ 37.001.112)** Гайка квадратная низкая.

- ![](/images/Fasteners_DIN917.svg) **DIN 917** **(Ближайший аналог ГОСТ 11860 Исполнение 2)** Гайка колпачковая, низкая.

- ![](/images/Fasteners_DIN928.svg) **DIN 928** Square weld nut.

- ![](/images/Fasteners_DIN929.svg) **DIN 929** Hexagon weld nut.

- ![](/images/Fasteners_ISO4032.svg) **DIN 934 (superseded by ISO 4035 and ISO 8673)** Hexagon thin nut chamfered. _Product grades A and B._

- ![](/images/Fasteners_DIN935.svg) **DIN 935** Hexagon castle nut.

- ![](/images/Fasteners_DIN985.svg) **DIN 985** **(Ближайший аналог ГОСТ 50273)** Гайка самоконтрящаяся со стопорным кольцом.

- ![](/images/Fasteners_DIN1587.svg) **DIN 1587** **(Ближайший аналог ГОСТ 11860 Исполнение 1)** Гайка колпачковая.

- ![](/images/Fasteners_DIN6330.svg) **DIN 6330** Hexagon nut 1.5d high.

- ![](/images/Fasteners_DIN6331.svg) **DIN 6331** Hexagon with collar 1.5d high.

- ![](/images/Fasteners_DIN6334.svg) **DIN 6334** Hexagon coupling nut.

- ![](/images/Fasteners_DIN7967.svg) **DIN 7967** Self-locking counter nut.

- ![](/images/Fasteners_EN1661.svg) **EN 1661** **(Ближайший аналог ГОСТ 50592 / ISO 4161 / DIN 6923 )** Гайка шестигранная с фланцем.

- ![](/images/Fasteners_DIN1587.svg) **ГОСТ 11860 (Исполнение 1)** Гайка колпачковая. _Класс точности А._

- ![](/images/Fasteners_ISO4032.svg) **ISO 4032** **(ГОСТ Р ИСО 4032)** Гайка шестигранная нормальная (тип 1). _Классы точности А и В._

- ![](/images/Fasteners_ISO4033.svg) **ISO 4033** **(ГОСТ Р ИСО 4033)** Гайка шестигранная высокая (тип 2). _Классы точности А и В._

- ![](/images/Fasteners_ISO4034.svg) **ISO 4034** Hexagon nut, style 1.

- ![](/images/Fasteners_ISO4035.svg) **ISO 4035** **(ГОСТ Р ИСО 4035)** Гайка шестигранная низкая с фаской (тип 0). _Классы точности А и В._

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

- ![](/images/Fasteners_DIN508.svg) **DIN 508** Гайка для Т-образных пазов.

- ![](/images/Fasteners_GN505.svg) **GN 505** Serrated quarter-turn T-slot nut.

- ![](/images/Fasteners_GN505.4.svg) **GN 505.4** Serrated T-slot bolt.

- ![](/images/Fasteners_GN506.svg) **GN 506** T-Slot swivel nut.

- ![](/images/Fasteners_GN507.svg) **GN 507** T-slot nut.

- ![](/images/Fasteners_DIN508.svg) **ISO 299** T-Slot nut.

### Шайбы

- ![](/images/Fasteners_ASMEB18.21.1.12A.svg) **ASME B18.21.1.12A** UN Шайба, уменьшенная серия.

- ![](/images/Fasteners_ASMEB18.21.1.12B.svg) **ASME B18.21.1.12B** UN Шайба, нормальная серия.

- ![](/images/Fasteners_ASMEB18.21.1.12C.svg) **ASME B18.21.1.12C** UN Шайба, увеличенная серия.

- ![](/images/Fasteners_DIN6319C.svg) **DIN 6319C** Spherical washer.

- ![](/images/Fasteners_DIN6319D.svg) **DIN 6319D** Conical seat.

- ![](/images/Fasteners_DIN6319G.svg) **DIN 6319G** Conical seat.

- ![](/images/Fasteners_DIN6340.svg) **DIN 6340** Washer for clamping devices.

- ![](/images/Fasteners_ISO7089.svg) **ISO 7089** **(Ближайший аналог ГОСТ 11371 Исполнение 1)** Шайба плоская. Нормальная серия. _Класс точности А_.

- ![](/images/Fasteners_ISO7090.svg) **ISO 7090** **(Ближайший аналог ГОСТ 11371 Исполнение 2)** Шайба плоская с фаской. Нормальная серия. _Класс точности А_.

- ![](/images/Fasteners_ISO7092.svg) **ISO 7092** **(ГОСТ Р ИСО 7092)** Шайба плоская. Мелкая серия. _Класс точности А_.

- ![](/images/Fasteners_ISO7093-1.svg) **ISO 7093-1** **(ГОСТ Р ИСО 7093-1)** Шайба плоская. Крупная серия. _Класс точности А_.

- ![](/images/Fasteners_ISO7094.svg) **ISO 7094** **(Ближайший аналог ГОСТ 28848)** Шайба плоская. Особо большая. _Класс точности C_.

- ![](/images/Fasteners_ISO8738.svg) **ISO 8738** Plain washer for clevis pins.

- ![](/images/Fasteners_NFE27-619.svg) **NFE27-619** Шайба-розетка полнотелая для винтов с потайной головкой.

### Rods, taps and dies

- ![](/images/Fasteners_ScrewTapInch.svg) Метчик произвольного диаметра (с дюймовой резьбой).

- ![](/images/Fasteners_ScrewDieInch.svg) Плашка произвольного диаметра (с дюймовой резьбой).

- ![](/images/Fasteners_ThreadedRodInch.svg) **Дюймовая (UNC)** шпилька произвольной длины.

- ![](/images/Fasteners_ThreadedRod.svg) **DIN 975** шпилька произвольной длины (с метрической резьбой).

- ![](/images/Fasteners_ScrewTap.svg) Метчик произвольного диаметра (с метрической резьбой).

- ![](/images/Fasteners_ScrewDie.svg) Плашка произвольного диаметра (с метрической резьбой).

### Запрессовочный крепёж и крепёж для Печатных Плат

- ![](/images/Fasteners_IUTHeatInsert.svg) (Heat staked insert) Резьбовая втулка под горячую запрессовку.

- ![](/images/Fasteners_PEMPressNut.svg) (Self-clinching nut) Гайка запрессовочная.

- ![](/images/Fasteners_PEMTHStandoff.svg) (Self-clinching standoff) Втулка запрессовочная полнопроходная резьбовая с шестигранным основанием.

- ![](/images/Fasteners_PEMStud.svg) (Self-clinching stud) Шпилька резьбовая запрессовочная.

- ![](/images/Fasteners_PCBSpacer.svg) (PCB spacer Female/Female) Дистанцирующая стойка для печатных плат.

- ![](/images/Fasteners_PCBStandoff.svg) (PCB standoff Female/Male) Шестигранная стойка для печатных плат.

- ![](/images/Fasteners_4PWTI.svg) 4 prong threaded wood insert (DIN 1624 Tee nuts).

### Retaining rings

- ![](/images/Fasteners_DIN471.svg) **DIN 471** External retaining ring.

- ![](/images/Fasteners_DIN472.svg) **DIN 472** Internal retaining ring.

- ![](/images/Fasteners_DIN6799.svg) **DIN 6799** E-clip retaining ring.

### Nails

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

## Obsolete

- ![](/images/Fasteners_ChamferHole.svg) [Зенкование](/Fasteners_ChamferHole/ru "Fasteners ChamferHole/ru"): Зенковать отверстия (добавить фаску) для крепежа с потайной головкой.

## Справочные данные

- Автор: [shaise](http://theseger.com/projects/author/shaise/)
  - ScrewMaker: Ulrich Brammer
  - Обертка (wrapper) верстака: Shai Seger
- Домашняя страница: <http://theseger.com/projects/2015/06/fasteners-workbench-for-freecad/>
- Исходный код: <https://github.com/shaise/FreeCAD_FastenersWB>
- Сообщения об ошибках и запросы: <https://github.com/shaise/FreeCAD_FastenersWB/issues>
- Тема на форуме: <https://forum.freecadweb.org/viewtopic.php?t=11429>

## Ссылки

- [Создание отверстий для винтов с потайной головкой в freecad](http://theseger.com/projects/2015/07/generating-holes-for-countersunk-screws-in-freecad/)
- [BOLTS](https://github.com/jreinhardt/BOLTS): Открытая библиотека технических спецификаций.
- [Внешние верстаки](/External_workbenches/ru "External workbenches/ru")
- [Сборник макросов](/Macros_recipes/ru "Macros recipes/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Fasteners_Workbench/ru&oldid=1567274>"
