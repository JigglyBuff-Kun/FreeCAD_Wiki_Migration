---
title: Редактор настроек
---
## Введение

Чтобы запустить **Редактор настроек** выберите пункт меню **Правка → Настройки...**. В Mac OS пункт **Настройки...** может находиться в меню **FreeCAD** (это типичное расположение для большинства приложений Mac).

FreeCAD использует концепцию верстаков, в которой каждый верстак отвечает за свои конкретные задачи и функции. Верстак может иметь свой собственный раздел с настройками. Раздел этот появляется в редакторе настроек только после того, как верстак был открыт (загружен) хотя-бы один раз после запуска FreeCAD. Подробнее об этом можно узнать в разделе [Рабочее окружение](#Рабочее_окружение).

To preserve resources, FreeCAD does not automatically load all available workbenches. See [Workbenches](#Workbenches) for more information. For a list of workbench related preferences see [Workbench related preferences](#Workbench_related_preferences).

Изначально в Редакторе настроек доступны четыре секции (даже если ни один верстак не был загружен). Это секции: [Основные](#Основные), [Отображение](#Отображение), [Рабочее окружение](#Рабочее_окружение) и [Импорт/Экспорт](#Настройки_Импорта/Экспорта). Верстаки которые могут быть загружены в процессе работы, имеют свою вкладку настроек и будут рассмотрены далее.

Обратите внимание, что нажатие кнопки  Reset в левом нижнем углу диалога Настроек сбросит **все** настройки FreeCAD к значениям по умолчанию.

Некоторые дополнительные настройки можно изменить только в [Редакторе параметров](/Std_DlgParameter/ru "Std DlgParameter/ru"). На странице [Точных настроек](/Fine-tuning/ru "Fine-tuning/ru") перечислены некоторые из них.

This page has been updated for version 1.0.

## Основные

Этот раздел настроек имеет 9 вкладок: Основные, Документ, Выделение, Кэш, Редактор кода, Консоль Python, Просмотр отчёта, Макрос, Единицы измерения. И 10 вкладка "Помощь", будет добавлена если [дополнение Помощь](https://github.com/FreeCAD/FreeCAD-Help) включено. Это дополнение может быть установлено через [Менеджер дополнений](/Std_AddonMgr/ru "Std AddonMgr/ru").

In 0.21 and below the seventh page, Help, is only available if the [Help Addon](https://github.com/FreeCAD/FreeCAD-Help) has been [installed](/Std_AddonMgr "Std AddonMgr").

### Основные

![](/images/Preferences_General_Page_General.png)

Вкладка *Основные* позволяет настроить следующие параметры:

| Название | Описание |
| --- | --- |
| **Изменить язык** | Выберите язык пользовательского интерфейса FreeCAD |
| **Размер списка последних файлов** | Укажите, сколько файлов должно быть указано в списке последних файлов. |
| **Включить фон из повторяющегося узора** | Если этот флажок установлен, фон главного окна FreeCAD по умолчанию будет состоять из плиток этого изображения:  Optionally, imported files can be excluded from this list, and exported files can be included. See [Fine-tuning](/Fine-tuning "Fine-tuning"). |
| **Enable tiled background** | If checked, the background of FreeCAD's main window will by default consist of tiles of this image:  Этот параметр действует только в том случае, если **Таблица стилей** не выделенна.  Изображение можно изменить, добавив папки Gui/Images в папку:  [%APPDATA%](https://www.howtogeek.com/318177/what-is-the-appdata-folder-in-windows/)/FreeCAD (в Windows),  $HOME/.FreeCAD (в Linux) или  $HOME/Library/Preferences/FreeCAD (в MacOS).  Поместите туда файл с именем background.png и включите/отключите этот параметр, чтобы увидеть измененный файл. |
| **Enable cursor blinking** | If checked the text cursor in the [Python console](/Python_console "Python console") and the [Macro editor](/Std_DlgMacroExecute#Edit "Std DlgMacroExecute") will blink. |
| **Стиль интерфейса** | Выбор стиля оформления. Стиль оформления определяют внешний вид пользовательского интерфейса FreeCAD. |
| **Размер значков на панелях инструментов** | Выбор размера значков панели инструментов:  * **Small (16px)** * **Medium (24px)** * **Large (32px)** * **Extra large (48px)** |
| **Режим отображения древовидного представления документа** | Настройка отображения панели древовидного представления документа. Для того, чтобы настройки вступили в силу, требуется перезапуск FreeCAD. Возможны следующие варианты представления:  * **Одна комбопанель**: древовидное представление и раздел свойств скомбинированы в одну панель. * **TreeView и PropertyView**: древовидное представление и раздел свойств разделены на две панели. * **Оба**: древовидное представление и раздел свойств скомбинированы в одну панель и дополнительно еще есть одна панель свойств. |
| **При запуске автоматически загружать верстак** | Выбор того, какой верстак будет использоваться сразу после запуска FeeCAD |
| **Включение экрана-заставки при запуске** | Если пункт выбран, при запуске отображается заставка FreeCAD. Изображение экрана-заставки можно изменить, поместив файл с именем splash\_image.png в папку Images, уже упомянутую в разделе **Включить фон из повторяющегося узора**. |
| **Включить перенос слов** | Слова будут перенесены, когда они превысят доступное горизонтальное пространство в консоли Python. Эта консоль отображается с помощью меню **Вид → Панели → Консоль Python**. |

### Документ

![](/images/Preferences_General_Page_Document.png)

Вкладка *Документ* позволяет настроить следующие параметры:

| Название | Описание |
| --- | --- |
| **Создавать новый документ при запуске** | Если отмечено, FreeCAD создаст новый документ при запуске |
| **Уровень сжатия сохраняемого документа** | Спецификация уровня сжатия для файлов FCStd. Файлы FCStd являются сжатыми файлами ZIP. Поэтому вы можете переименовать их суффикс .FCStd в .zip и открыть их с помощью программы ZIP-архива. |
| **Отмены/Повторы** | Если пункт выбран, все изменения в документах сохраняются, чтобы их можно было отменить/повторить. |
| **Максимум шагов отмен/повторов** | Укажите, сколько шагов Отмена/Повтор нужно записать |
| **Разрешить отмену перерасчета** | Allow to aborting the document recomputation by pressing Esc. This may slightly increase the recomputation time. |
| **Запуск автоматического восстановления при запуске** | Если файл восстановления доступен, FreeCAD автоматически запустит восстановление файла при запуске. Таким образом, файлы могут быть восстановлены в случае сбоя. |
| **Автосохранение каждые** | Определяет, как часто будет записывается файл автосохранния. |
| **Сохранить миниатюру в файл проекта при сохранении документа** | Если пункт выбран, то при сохранении документа также будет сохранена его миниатюра. Например, миниатюра будет отображаться в списке последних файлов в [Верстаке Start](/Start_Workbench/ru "Start Workbench/ru"). It is possible to select a **Size** between 128×128 and 512×512 pixels for the thumbnail. Common sizes are the powers of two: 128, 256, 512. |
| **Добавить логотип программы в генерируемую миниатюру** | Если пункт выбран, логотип программы FreeCAD  будет добавлен к миниатюре. Этот параметр действует только в том случае, если используется **Сохранить миниатюру в файл проекта при сохранении документа**. |
| **Максимальное количество файлов резервных копий, при пересохранении документа** | Если пункт выбран, файлы резервных копий будут сохраняться при сохранении документа. Вы можете указать количество сохраняемых файлов резервных копий. Они содержат ранее сохраненную версию документа. Первый файл резервной копии будет иметь суффикс файла .FCStd1, второй .FCStd2 и т.д. |
| **Use date and FCBak extension** | If checked, backup files will get the extension *.FCbak* and their file names get a date suffix according to the specified date format. For a description of the date format see [this site](https://devhints.io/datetime). With the default settings the backup file will get for example this name *TD-Cube.20200315-215654.FCBak* (original filename is *TD-Cube.FCStd*). |
| **Разрешить идентичные метки объектов в одном документе** | Если пункт выбран, объекты могут иметь одинаковую метку/имя. Например, разные части или элементы могут иметь одинаковое имя в одном и том же документе. |
| **Disable partial loading of external linked objects** | Enable partial loading of external linked document. When enabled, only the referenced objects and their dependencies will be loaded when a linked document is auto opened together with the main document. A partially loaded document cannot be edited. Double click the document icon in the tree view to reload it in full. A more detailed explanation of the feature can be found on the [Assembly3 documentation page](https://github.com/realthunder/FreeCAD_assembly3/wiki/Core-Changes#partial-document-loading) |
| **Имя автора** | Все документы, которые будут созданы, получат указанное имя автора. Оставьте поле автора пустым для анонимного автора. Если опция  **Устанавливать при сохранении** отмечена, поле  *Last updated by*  будет установлено для указанного автора при сохранении файла. Это поле можно просмотреть с помощью меню **Файл → Информация о проекте**. |
| **Компания** | Все документы, которые будут созданы, получат указанное название компании |
| **Лицензия по умолчанию** | Выбор лицензии по умолчанию для новых документов. Для предопределенной лицензии **URL-адрес лицензии** будет автоматически установлен соответствующим образом. Выберите «Другое» для собственной или специальной лицензии. |
| **URL адрес лицензии** | Указание URL-адреса, описывающего лицензию, выбранного в **Лицензия по умолчанию** |

### Выделение

![](/images/Preferences_General_Page_Selection.png)

Вкладка *Выделение* ([представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")) позволяет настроить следующие параметры:

| Название | Описание |
| --- | --- |
| **Автопереключение в 3D вид, содержащий выбранный элемент** | Включает/выключает опцию [Синхронизировать вид](/Std_TreeSyncView/ru "Std TreeSyncView/ru") |
| **Автоматический разворачивать элемент дерева при выделении соответствующего объекта в 3D виде** | Включает/выключает опцию [Синхронизировать выделение](/Std_TreeSyncSelection/ru "Std TreeSyncSelection/ru") |
| **Выделить объект в режиме 3D при наведении курсора на элемент дерева** | Включает/выключает опцию [Предвыборка](/Std_TreePreSelection/ru "Std TreePreSelection/ru") |
| **Записывать выделение в древе для перехода назад/вперед с помощью кнопки навигации** | Включает/выключает опцию [Записать выделение](/Std_TreeRecordSelection/ru "Std TreeRecordSelection/ru") |
| **Добавить флажки для выделения в древе документов** | Если пункт выбран, то каждый элемент [древа документа](/Tree_view/ru "Tree view/ru") получает флажок. Это к примеру может быть удобно для выбора нескольких элементов при работе на сенсорном экране. |

Note that objects created while this option is not checked will have their Вид**Selectable** property set to `false`. With that value they are not selectable in the 3D view, even if this option is checked again.
|-
| **Pick radius (px)**
| Sets the area for picking elements in the [3D view](/3D_view "3D view"). Larger value makes it easier to pick things, but can make some small features impossible to select.
|-
| **Auto switch to the 3D view containing the selected item**
| Enables the [Tree view SyncView mode](/Std_TreeSyncView "Std TreeSyncView").
|-
| **Auto expand tree item when the corresponding object is selected in 3D view**
| Enables the [Tree view SyncSelection mode](/Std_TreeSyncSelection "Std TreeSyncSelection").
|-
| **Preselect the object in 3D view when mouse over the tree item**
| Enables the [Tree view PreSelection mode](/Std_TreePreSelection "Std TreePreSelection").
|-
| **Record selection in tree view in order to go back/forward using navigation button**
| Enables the [Tree view RecordSelection mode](/Std_TreeRecordSelection "Std TreeRecordSelection").
|-
| **Add checkboxes for selection in document tree**
| Each [Tree view](/Tree_view "Tree view") item will get a checkbox. This is for example useful for selecting multiple items on a touchscreen.
|}

### Кэш

![](/images/Preferences_General_Page_Cache.png)

These preferences are related to the cache directory where FreeCAD stores temporary files.

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Location (read-only)** | Shows the path of the cache directory. Use the  button to browse the directory. |
| **Check periodically at program start** | Controls the frequency with which the directory size is checked. The options are:  * **Always** * **Daily** * **Weekly** * **Monthly** * **Yearly** * **Never** |
| **Cache size limit** | Specifies the maximum size of the directory. You will be notified if a check is performed and the size exceeds this value. The options are:  * **100 MB** * **300 MB** * **500 MB** * **1 GB** * **2 GB** * **3 GB** |
| **Current cache size** | Shows the current size of the directory, if available. Press the Check now... button to update the value. |

### Notification Area

![](/images/Preferences_General_Page_Notification_Area.png)

These preferences control the Notification Area and its notifications.

On this page ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) you can specify the following:

| Name | Description |
| --- | --- |
| **Enable Notification Area** | If checked, the Notification Area will appear in the status bar. |
| **Enable non-intrusive notifications** | If checked, non-intrusive notifications will appear next to the Notification Area in the status bar. |
| **Debug errors** | If checked, errors intended for developers will appear in the Notification Area. |
| **Debug warnings** | If checked, warnings intended for developers will appear in the Notification Area. |
| **Maximum Duration** | Maximum duration during which notifications are shown (unless mouse buttons are clicked). |
| **Minimum Duration** | Minimum duration (idem). |
| **Maximum Number of Notifications** | Maximum number of notifications shown simultaneously. |
| **Notification width** | Width of the Notification Area in pixels. |
| **Hide when other window is activated** | If checked, open notifications will disappear when another window is activated. |
| **Do not show when inactive** | If checked, notifications will not appear if the FreeCAD window is not the active window. |
| **Maximum Messages (0 = no limit)** | The maximum number of messages kept in the list. Set to 0 for no limit. |
| **Auto-remove User Notifications** | If checked, notifications will be removed from the message list when the **Maximum Duration** has elapsed. |

### Report view

![](/images/Preferences_General_Page_Report_view.png)

Параметры вывода влияют на поведение [Представление отчета](/Report_view/ru "Report view/ru"). Эта панель отображается с помощью меню **Вид → Панели → Отчет**.

The Report view uses the same font settings as the [Macro editor](#Editor).

Вкладка *Просмотр отчёта* позволяет настроить следующие параметры:

| Название | Описание |
| --- | --- |
| **Выводить обычные сообщения (normal)** | Если пункт выбран, обычные сообщения будут записываться в отчёт. Они будут выделены в [отчёте](/Report_view/ru "Report view/ru") цветом указанным в пункте **Выделение сообщений → Обычные сообщения**. |
| **Выводить информационные сообщения (log)** | Если пункт выбран, то также будут отображаться информационные сообщения. Они будут выведены на панель Отчет цветом, установленным в **Журнал (logs)**. Эта панель активируется с помощью меню **Вид → Панели → Отчет**. |
| **Выводить предупреждения (warnings)** | Если пункт выбран, то предупреждения будут отображаться. Они будут выведены на панель Отчет цветом, установленным в  **Предупреждения (warnings)**. |
| **Выводить сообщения об ошибках (errors)** | Если пункт выбран, то будут отображаться сообщения об ошибках. Они будут выведены на панель Отчет цветом, установленным в  **Ошибки (errors)** |
| **Показать отчёт в случае ошибки** | Если пункт выбран, то the [Report view](/Report_view "Report view") will be shown automatically when an error is recorded |
| **Показать отчёт в случае предупреждения** | Если пункт выбран, то the [Report view](/Report_view "Report view") will be shown automatically when a warning is recorded |
| **Показать отчет при выводе обычного сообщения** | Если пункт выбран, то the [Report view](/Report_view "Report view") will be shown automatically when a normal message is recorded |
| **Показать отчёт в журнале** | Если пункт выбран, то the [Report view](/Report_view "Report view") will be shown automatically when a log message is recorded |
| **Включить код времени для каждой записи** | Если пункт выбран, то each message and warning will receive a timecode |
| **Обычные сообщения (normal)** | Задание цвета шрифта для обычных сообщений на панели Отчет. |
| **Информационные сообщения (log)** | Задание цвета шрифта для сообщений журнала на панели Отчет. |
| **Предупреждения (warnings)** | Задание цвета шрифта для предупреждающих сообщений на панели Отчет. |
| **Сообщения об Ошибках (errors)** | Задание цвета шрифта для сообщений об ошибках на панели Отчет. |
| **Перенаправлять внутренний вывод Python в отчёт** | Если пункт выбран, то внутренний вывод Python будет перенаправляться из [консоли Python](/Python_console/ru "Python console/ru") в [отчёт](/Report_view/ru "Report view/ru") |
| **Перенаправлять внутренние сообщения об ошибках Python в отчёт** | Если пункт выбран, то внутренние сообщения об ошибках Python будут перенаправляться из [консоли Python](/Python_console/ru "Python console/ru") в [отчёт](/Report_view/ru "Report view/ru") |

### Справка

![](/images/Preferences_General_Page_Help.png)

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Source** | Specifies the source of the Help files. The options are:  * **FreeCAD Wiki (online)**: * **Markdown version (online)**: * **GitHub (online)**: Cannot be selected. * **Custom location**: Enter the path where the downloaded FreeCAD documentation can be found. To download the documentation select the *offline-documentation* addon from the Workbenches list in the [Addon Manager](/Std_AddonMgr "Std AddonMgr").   **Translation suffix**: For the Wiki option and the Markdown option a [language suffix](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) can be specified. Use for example `fr` for the French translation. |
| **Display** | Specifies where the documentation should be displayed. The options are:  * **In your default web browser**: The documentation is displayed in the default web browser. * **In a FreeCAD tab**: The documentation is displayed on a new tab in the [Main view area](/Main_view_area "Main view area"). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Can no longer be used. * **In a separate, embeddable, dialog**: The documentation is displayed in a separate dialog. This dialog can be docked on top of the [Combo view](/Combo_view "Combo view") for example. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Can no longer be used. |
| **Custom stylesheet** | Specifies an optional custom stylesheet. Not used for the Wiki. |

## Отображение

Этот раздел настроек имеет три стандартные вкладки: 3D Вид, Навигация и Цвета. Четвертая вкладка, Отображение Mesh, добавляется, если [верстак Mesh](/Mesh_Workbench/ru "Mesh Workbench/ru") был загружен.

### 3D Вид

![](/images/Preferences_Display_Page_3D_View.png)

Вкладка *3D Вид* позволяет настроить следующие параметры:

| Название | Описание |
| --- | --- |
| **Показывать систему координат в углу** | Если пункт выбран, то основная система координат всегда будет отображаться в правом нижнем углу в открытых файлах |
| **Показывать перекрестие осей по умолчанию** [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru") | Если пункт выбран, то пересечение осей будет показано по умолчанию при создании или открытии файла |
| **Показывать счетчик кадров в секунду** | Если пункт выбран, то время, необходимое для последней операции, и полученная частота кадров [[1]](https://en.wikipedia.org/wiki/Frame_rate) всегда будут отображаться в нижнем левом углу в открытых файлах. |
| **Запомнить активный верстак вкладкой** [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru") | Если пункт выбран, то приложение запомнит текущий активный верстак для независимо каждой вкладки в [Main view area](/Main_view_area/ru "Main view area/ru"). При переключении на вкладку этот верстак будет автоматически восстановлен. |
| **Использовать програмное обеспечение OpenGL** [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru") | Если пункт выбран, то [OpenGL](https://en.wikipedia.org/wiki/OpenGL) will use the CPU instead of the GPU. This option is useful for troubleshooting graphics card and driver problems. Changing this option requires a restart of the application. |
| **Использовать OpenGL VBO (объекты буфера вершин)** | Если пункт выбран, то будут использоваться [объекты буфера вершин](https://en.wikipedia.org/wiki/Vertex_Buffer_Object) (VBO). VBO - это функция [OpenGL](https://en.wikipedia.org/wiki/OpenGL), которая предоставляет методы для загрузки данных вершин (положение, вектор нормали, цвет и т.д.) на видеокарту. VBO обеспечивает существенный выигрыш в производительности, потому что данные находятся в графической памяти, а не в системной памяти, и поэтому они могут отображаться непосредственно графическим процессором. Для получения дополнительной информации см. [эту веб-страницу](https://www.haroldserrano.com/blog/understanding-opengl-objects). |
| **Кэш рендера** [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru") | "Кэш рендера" или "Render Acceleration" is explained in more detail in [Link#render-caching](https://github.com/realthunder/FreeCAD_assembly3/wiki/Link#render-caching). There are 3 options:  * **Авто** (default), let Coin3D decide where to cache. * **Распределенный**, manually turn on cache for all view provider root nodes. * **Централизованный**, manually turn off cache in all nodes of all view providers, and only cache at the scene graph root node. This offers the fastest rendering speed, but slower response to any scene changes. |
| **Сглаживание** | Выбор используемого типа [Multisample сглаживания](https://en.wikipedia.org/wiki/Multisample_anti-aliasing) |
| **Прозрачные объекты** [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru") | Render type of transparent objects. The types are:  * **Один проход** (default), rendering is done in one pass. For non-solid objects like faces or meshes this can lead to artifacts. [This image](https://forum.freecadweb.org/download/file.php?id=109935) shows such an artifact (black triangle) and that the type **Проход фона** avoids this. * **Проход фона**, has only an effect for non-solid objects. They are then rendered in two passes: Back-facing polygons are rendered in the first pass and the front-facing in the second pass. |
| **Размер метки** | Выбор размера [вершины](/Glossary#Вершина "Glossary") (точки) в [верстаке Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru"). The clickable area of points can be additionally enlarged by increasing **Pick radius** (on Colors tab). |
| **Расстояние между глаз для стерео режима** | Спецификация расстояния между глазами, используемого для стереопроекции. Указанное значение является коэффициентом, который будет умножен на размер  [ограничивающего прямоугольника](/Property_editor#_Вид "Property editor") трехмерного объекта, который отображается в данный момент. |
| **Цвет подсветки** | Если пункт выбран, то подсветка включена с заданным цветом. Backlight is used for rendering back sides of faces (usually, you don't see them in solids, unless you slice one with a clipping plane, or if the faces aren't oriented correctly). It is only active for objects whose Lighting property (on View tab) is set to "One side". If disabled, back sides of faces of objects in "One side" lighting mode will be black. The related **Intensity** setting specifies the intensity of the backlight. |
| **Тип камеры** | Выбор типа проекции камеры. |

### Light Sources

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

![](/images/Preferences_Display_Page_Light_Sources.png)

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Light source** | If checked, the objects in the [3D view](/3D_view "3D view") are lit by a directional light source and the specified color will be used for it. Without this all objects appear as solid black. |
| **Intensity** | Move the slider to change the intensity of the light. |
| **Direction** | The preview shows the XY plane and a sphere, indicating the light source, connected by a line to a cone, indicating the direction. All elements in the preview, the sphere, the small cone directly attached to it, the line and the large cone, can be dragged to change the direction of the light. For more precision the direction vector can be set by specifying the **x**, **y** and **z** values or the **q0** - **q3** [quaternion](https://en.wikipedia.org/wiki/Quaternion) values. You can zoom the preview in and out with the buttons in the lower left corner. |

### UI

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

![](/images/Preferences_Display_Page_UI.png)

### Навигация

![](/images/Preferences_Display_Page_Navigation.png)

Вкладка *Навигация* позволяет настроить следующие параметры:

| Название | Описание |
| --- | --- |
| **Куб навигации** | Если значение установлено, то [Навигационный куб](/Navigation_Cube/ru "Navigation Cube/ru") будет отображаться. **Шаги вращения** Определяет количество шагов требуемых для полного оборота навигационного куба при использовании стрелок поворота.  Если **Поворачивать к ближайшему** включенно, the 3D view is rotated to the nearest most logical state when a cube face is clicked. When it is off, clicking to a cube face will and up always to the same position, no matter in what cube state you were when you clicked the face. [представлено в версии 0.20](/Release_notes_0.20/ru "Release notes 0.20/ru")  **Размер куба** Определяет размер навигационного куба. [представлено в версии 0.20](/Release_notes_0.20/ru "Release notes 0.20/ru") |
| **Трехмерная навигация** | Selection of a [navigation settings set](/Mouse_navigation "Mouse navigation"). To see what each set defines, select it and then press the Mouse... button. |
| **Стиль вращения** | Selection of the rotation orbit style. When viewing a part in the x-y plane and being in the rotation mode of the 3D navigation, the difference is: If **Trackball** is selected, moving the mouse horizontally will rotate the part around the y-axis, if **Turntable** is selected the part will be rotated around the z-axis. |
| **Режим вращения** | Определяет центр вращения. Можно выбрать **Центр окна**, **Перенести к курсору** или **Центр объекта**. |
| **Ориентация камеры по умолчанию** | Selection of the camera orientation for new documents. This setting is also used by the [Std ViewHome](/Std_ViewHome "Std ViewHome") command. |
| **Масштаб нового документа** | Affects the initial camera zoom level for new documents. The value you set is the diameter of a sphere that fits in 3D view. Default is 100 mm. It also sets the initial size of origin features (base planes in new [PartDesign Bodies](/PartDesign_Body "PartDesign Body")). |
| **Включить анимацию** | If checked, rotations can be animated. If for example the **3D Navigation** set *CAD* is used and the mouse is moved while the scroll wheel and the right mouse button are pressed, parts are rotated. If one keeps the mouse moving while releasing e.g. the right mouse button, the rotation will continue as animation. To end the animation left-click with the mouse. |
| **Зум туда, где мышь** | If checked, zoom operations will be performed at the position of the mouse pointer. Otherwise zoom operations will be performed at the center of the current view. The **Zoom step** defines how much will be zoomed. A zoom step of **1** means a factor of 7.5 for every zoom step. |
| **Инвертировать зум** | If checked, the direction of zoom operations will be inverted |
| **Отключить жест наклона для сенсорного экрана** | If checked, the tilting gesture will be disabled for pinch-zooming (two-finger zooming). This only affects the **3D Navigation** set *Gesture*. |

**Color** sets the base color for all elements. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

**Угол** Определяет место положение Навигационного куба на экране.

**Font name** specifies the font used for the cube's texts. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

**Opacity when inactive** Opacity of the Navigation cube when not hovered by the mouse. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

|-
| **Rotation center indicator** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
| If checked, the rotation center of the view is shown when dragging.
The **Sphere size** and the **Color and transparency** of the indicator can be specified.

|-
| **3D Navigation**
| Specifies a [mouse navigation style](/Mouse_navigation "Mouse navigation"). To see the details of each style, select it and then press the Mouse... button.
|-
| **Orbit style**
| Specifies the rotation orbit style used when in rotation mode. The options are:

* **Turntable**: Moving the mouse will divide the rotation in steps, rotations around the different axes are performed sequentially.
* **Trackball**: Rotations around the different axes are performed simultaneously.
* **Free Turntable**: Like **Trackball**, but if possible the rotation axis is kept collinear with the global 3D view axis. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

|-
| **Rotation mode**
| Defines the rotation center. The options are:

* **Window center**
* **Drag at cursor**
* **Object center**

|-
| **Default camera orientation**
| Specifies the camera orientation for new documents. This setting is also used by the [Std ViewHome](/Std_ViewHome "Std ViewHome") command.
|-
| **Camera zoom**
| Affects the initial camera zoom level for new documents. The value you set is the diameter of a sphere that fits in the [3D view](/3D_view "3D view"). The default is 100 mm. It also sets the initial size of origin features (base planes in new [PartDesign Bodies](/PartDesign_Body "PartDesign Body") and [Std Parts](/Std_Part "Std Part")).
|-
| **Zoom at cursor**
| If checked, zoom operations will be performed at the position of the mouse pointer. Otherwise zoom operations will be performed at the center of the current view. The **Zoom step** defines how much will be zoomed. A zoom step of **1** means a factor of 7.5 for every zoom step.
|-
| **Invert zoom**
| If checked, the direction of zoom operations will be inverted.
|-
| **Disable touchscreen tilt gesture**
| If checked, and **3D Navigation** is set to **Gesture**, the tilting gesture will be disabled for pinch-zooming (two-finger zooming).

|-
| **Enable support of legacy space mouse devices** [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
| If checked, legacy space mouse devices can be used. May be backported to version 1.0.1.

|-
| **Animations**
| If checked, view rotations and zooms, except those invoked by mouse actions, are animated. The **Animation duration** can be specified.

**Enable spinning animations** if checked, and if **3D Navigation** is set to **CAD**, rotations invoked by the mouse can be animated as well. If the mouse is moved while the scroll wheel and the right mouse button are pressed, the view is rotated. If one keeps the mouse moving while releasing the right mouse button, the rotation will continue. To end this animation left-click with the mouse.
|}

### Цвета

![](/images/Preferences_Display_Page_Colors.png)

Вкладка *Цвета* позволяет настроить следующие параметры:

| Название | Описание |
| --- | --- |
| **Включить подсвечивание при наведении курсора** | Если этот флажок установлен, предварительный выбор включен и будет выделен указанным цветом. Предварительный выбор означает, что, например, ребра в деталях будут выделены при наведении курсора на них, чтобы указать, что они могут быть выбраны. |
| **Включить подсвечивание выделенного** | Если флажок установлен, подсветка выделения включена и для нее будет использоваться указанный цвет |
| **Один цвет** | Если пункт выбран, то фон [3D Вида](/3D_view/ru "3D view/ru") для деталей будет иметь выбранный цвет |
| **Цветовой градиент** | Если пункт выбран, то фон [3D Вида](/3D_view/ru "3D view/ru") для деталей будет иметь выбранный вертикальный цветовой градиент. Первый цвет будет цветом верха фона, второй будет цветом низа. |
| **Средний цвет** | Доступно только если выбрано **Цветовой градиент**. Если этот флажок установлен, цветовой градиент получит выбранный цвет как средний цвет. |
| **Объект редактируется** | Выбор цвета фона для объектов в виде дерева, которые в данный момент редактируются |
| **Активный контейнер** | Выбор цвета фона для активных контейнеров в виде дерева. Например, если в древовидном представлении есть несколько частей и одна часть переключается как [активное тело](/PartDesign_Body/ru#Active_Status "PartDesign Body/ru"), она получит выбранный цвет фона в древовидном представлении. |

### Advanced

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

![](/images/Preferences_Display_Page_Advanced.png)

### Просмотр в виде полигональной сетки

![](/images/Preferences_Display_Page_Mesh_view.png)

Данная вкладка становится доступной, только после загрузки [Верстака Mesh](/Mesh_Workbench/ru "Mesh Workbench/ru").

Вкладка *Просмотр в виде полигональной сетки* позволяет настроить следующие параметры:

| Название | Описание |
| --- | --- |
| **Цвет полигональной сетки по умолчанию** | Определяет цвет полигонов полигональной сетки по умолчанию |
| **Цвет линии по умолчанию** | Определяет цвет линий полигональной сетки по умолчанию |
| **Прозрачность полигональной сетки** | Определяет прозрачность полигонов полигональной сетки по умолчанию |
| **Прозрачность линии** | Определяет прозрачность линий полигонов полигональной сетки по умолчанию |
| **Двустороннее отображение** | Если пункт выбран, цвет внутренних сторон граней будет таким же, как и на внешней стороне. Иначе внутренние стороны граней будут подсвечены [цветом подсветки](#3D_Вид) или будут отображены просто черным цветом если подсветка будет отключена. |
| **Отображать границы габаритных размеров для подсвеченных или выбранных полигональных сеток** | Если пункт выбран, тогда будет отображаться желтый прямоугольный каркас отображающий границы габаритных размеров для подсвеченных или выбранных полигональных сеток. |
| **Задавать нормаль для каждой вершины** | Если пункт выбран, тогда вместо плоского затенения будет применяться [затенение по Фонгу](https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D1%82%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BF%D0%BE_%D0%A4%D0%BE%D0%BD%D0%B3%D1%83). Тип затенения определяет внешний вид поверхностей. При плоском затенении нормали поверхности не определяются для каждой вершины. Это приводит к нереалистичному внешнему виду криволинейных поверхностей. В то время, как затенение по Фонгу приводит к более реалистичному внешнему виду. |
| **Угол сгиба** | Угол сгиба-это пороговый угол между двумя гранями. Он может быть установлен только в том случае, если включена опция: **задавать нормаль доля каждой вершины**. Если угол грани ≥ угла сгиба, применяется затенение без размытия  Если угол грани < угла сгиба, применяется плавное затенение |

## Рабочее окружение

В этом разделе настроек есть одна вкладка: Доступные верстаки.

### Доступные Верстаки

![](/images/Preferences_Workbenches_Page_Available_Workbenches.png)

These preferences control workbench loading.

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Workbench list** | The list displays all installed workbenches. The list can be reordered by drag and drop ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) and sorted by right-clicking the list and selecting **Sort alphabetically** ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")). The order of the list also determines the order of the [Workbench selector](/Std_Workbench "Std Workbench").  * [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): **First checkbox in each row**: If checked, the workbench will be available in the Workbench selector in the next FreeCAD session. The start up workbench cannot be unchecked. Unchecked workbenches are moved to the bottom of the list. * **Auto-load**: If checked, the workbench will auto-load when FreeCAD starts. Loading more workbenches will make the start up slower, but switching between workbenches that have already been loaded is faster. * Load: Press this button to load the workbench in the current FreeCAD session. |
| **Start up workbench** | The workbench that is activated when FreeCAD starts. |
| **Workbench selector type** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | The options are:  * **ComboBox**: Workbenches can be selected from a dropdown list. * **TabBar**: Workbenches can be selected from a tab bar. This takes fewer clicks than the previous option, but takes up more screen space. |
| **Workbench selector items style** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | The options are:  * **Icon & Text** * **Icon** * **Text** |
| **Remember active workbench by tab** | If checked, FreeCAD will remember and restore the workbench that was active for each tab in the [Main view area](/Main_view_area "Main view area"). |

## Python

This preferences group ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) has three pages: Macro, General and Editor.

### Макрос

![](/images/Preferences_Python_Page_Macro.png)

Вкладка *Макрос* позволяет настроить следующие параметры:

| Название | Описание |
| --- | --- |
| **Запуск макросов в локальном окружении** | Если параметр включен, переменные, определенные макросами, создаются как локальные переменные, в противном случае они создаются как глобальные переменные Python |
| **Куда записывать макросы** | Путь к папке в которой находятся макросы |
| **Записать команды интерфейса** | Если параметр включен, [записанные макросы](/Std_DlgMacroRecord/ru "Std DlgMacroRecord/ru") также будет содержать команды интерфейса пользователя |
| **Записывать как комментарий** | Если параметр включен, [записанные макросы](/Std_DlgMacroRecord/ru "Std DlgMacroRecord/ru") также будет содержать команды интерфейса пользователя, но в виде комментариев. Это полезно, если вы не хотите выполнять видимые действия при запуске макроса, а видеть, что можно сделать визуально. |
| **Показать команды скрипта в консоли Python** | Если параметр включен, команды, выполняемые макросами, отображаются в консоли Python. Эта консоль отображается с помощью меню  **Вид → Панели → Консоль Python**. |
| **Размер списка недавних макросов** | Значение определяет длину списка недавно открытых макросов. |
| **Количество ярлыков** | Значение определяет длину списка недавно открытых макросов которые можно запустить с помощью комбинации клавиш |
| **Комбинация клавиш** | Определяет, какая комбинация клавиш клавиатуры используются для запуска макросов, например если значение равно **Ctrl+Shift+** это означает что маеросы можно запустить с помощью комбинаций клавиш **Ctrl+Shift+1**, **Ctrl+Shift+2** и так далее. |

### Консоль Python

![](/images/Preferences_Python_Page_General.png)

These preferences control the behavior of the [Python console](/Python_console "Python console"). This console can be opened using the **View → Panels → Python console** menu option.

Note that the color and font settings for the console are defined on the [Editor](#Editor) page.

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Enable word wrap** | If checked, words will be wrapped if they exceed the available horizontal space in the console. |
| **Enable block cursor** | If checked, the cursor will have a block shape. |
| **Save history** | If checked, Python history is saved across sessions. |
| **Python profiler interval (milliseconds)** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | The interval at which the profiler runs when there is Python code running (to keep the GUI responding). Set to 0 to disable. |
| **Path to external Python executable (optional)** | Used for package installation with pip and debugging with debugpy. Autodetected if needed and not specified. |

### Редактор кода

![](/images/Preferences_Python_Page_Editor.png)

Настройки предпочтений редактора влияют на поведение редактора макросов. Этот редактор можно открыть с помощью меню **Макрос → Макросы... → Редактировать/Создать**.

Настройки цвета и шрифта также оказывают влияние на [консоль Python](/Python_console/ru "Python console/ru"). Эта консоль отображается с помощью меню **Вид → Панели → Консоль Python**.

Вкладка *Редактор кода* позволяет настроить следующие параметры:

| Название | Описание |
| --- | --- |
| **Показывать номера строк** | Если пункт выбран, то строки кода будут пронумерованы |
| **Шаг табуляции** | Определение шага табулятора (количество пробелов). Если, например, установлено значение «6», при нажатии Tab будет выполнен переход к символу 7, 13, 19 и т.д., в зависимости от текущей позиции курсора. Этот параметр используется только в том случае, если выбран **Символы табуляции**. |
| **Размер отступа** | Указывает, сколько пробелов будет вставлено при нажатии Tab. Этот параметр используется только в том случае, если выбран **Заменять на пробелы**. |
| **Символы табуляции** | Если пункт выбран, то нажатие  Tab вставит табулятор с растром, определяемым **Шаг табуляции** |
| **Заменять на пробелы** | Если пункт выбран, то нажатие  Tab вставит количество пробелов, определяемых **Размер отступа** |
| **Показать пункты** | Выбор типа кода. Настройки цвета и шрифта будут применены к выбранному типу. Результат можно проверить в окне "Предпросмотр". |
| **Шрифт** | Выбор типа шрифта, который должен использоваться для выбранного типа кода |
| **Размер** | Выбор размера шрифта, который должен использоваться для выбранного типа кода |
| **Цвет** | Определение цвета, который должен использоваться для выбранного типа кода |

## Менеджер Дополнений

This preferences group has a single page: Addon manager options.

### Настройки менеджера дополнений

![](/images/Preferences_Addon_Manager_Page_Addon_manager_options.png)

These preferences control the behavior of the [Addon manager](/Std_AddonMgr "Std AddonMgr").

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Automatically check for updates at start (requires git)** | If checked, the Addon manager will check for updates when it is launched. Git must be installed for this to work. |
| **Download Macro metadata (approximately 10MB)** | If checked, macro metadata is downloaded for display in the Addon manager's main addon listing. This data is cached locally. |
| **Cache update frequency** | Controls the frequency with which the locally cached addon availability and metadata information is updated. The options are:  * **Manual (no automatic updates)** * **Daily** * **Weekly** |
| **Hide Addons without license** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | If checked, addons without a license are not included in the listing. |
| **Hide Addons with non-FSF Free/Libre license** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | If checked, addons with a Free/Libre license not published by the [Free Software Foundation](https://www.fsf.org/licensing) are not included in the listing. |
| **Hide Addons with non-OSI-approved license** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | If checked, addons with a license not approved by the [Open Source Initiative](https://opensource.org/licenses) are not included in the listing. |
| **Hide Addons marked Python 2 Only** | If checked, addons marked as "Python 2 Only" are not included in the listing. These addons are unlikely to work in the current FreeCAD version. |
| **Hide Addons marked Obsolete** | If checked, addons marked as "Obsolete" are not included in the listing. |
| **Hide Addons that require a newer version of FreeCAD** | If checked, addons that require a newer FreeCAD version are not included in the listing. |
| **Custom repositories** | Custom repositories can be specified here. To add a repository press the  button. Both the **Repository URL** and the **Branch**, typically `master` or `main`, must be specifies in the dialog that opens. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")  To remove a repository select it in the list and press the  button. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| **Proxy** | The Addon manager includes experimental support for proxies requiring authentication, set up as user-defined proxies. |
| **Score source URL** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | The URL for the Addon Score data. See [Std AddonMgr](/Std_AddonMgr#Sorting_by_score "Std AddonMgr") for formatting and hosting details. |
| **Path to git executable (optional)** [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") | The Addon manager attempts to determine the git executable. To override this selection, the path to the executable can be set here. |
| **Show option to change branches (requires git)** | If checked, the Addon manager provides an interface on the addon's details screen that allows switching which git branch is currently checked out. This is intended for advanced users only, as it is possible that a non-primary-branch version of an addon may result in instability and compatibility issues. Git must be installed for this to work. Use with caution. |
| **Disable git (fall back to ZIP downloads only)** [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") | If checked, git downloads are disabled. |
| **Addon developer mode** [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") | If checked, Addon manager options intended for developers of addons are activated. |

## Импорт/Экспорт

The Import-Export preferences affect how files are imported and exported. They are described on the [Import Export Preferences](/Import_Export_Preferences "Import Export Preferences") page.

## Measure

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

This preferences group has a single page: Appearance.

### Appearance

![](/images/Preferences_Measure_Page_Appearance.png)

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Text size** | Specifies the size of the text in pixels. |
| **Text color** | Specifies the color of the text. |
| **Line color** | Specifies the color of the line connecting the text label with the measured element(s). |
| **Background color** | Specifies the background color of the text label. |

## Настройки верстаков

Настройки для более распространенных верстаков приведены ниже.
У некоторых верстаков нет настроек.
Другие дополнительные верстаки могут быть не перечислены. Эти ссылки так же перечислены в [Category:Preferences](/Category:Preferences "Category:Preferences")

* [Настройки Arch](/Arch_Preferences/ru "Arch Preferences/ru")
* [Настройки Draft](/Draft_Preferences/ru "Draft Preferences/ru")
* Drawing Preferences (none) [упразднено в версии 0.16](/Release_notes_0.16/ru "Release notes 0.16/ru")
* [Настройки FEM](/FEM_Preferences/ru "FEM Preferences/ru")
* Настройки Image (нет)
* Настройки Inspection (нет)
* Настройки Mesh Design (нет)
* [Настройки OpenSCAD](/OpenSCAD_Preferences/ru "OpenSCAD Preferences/ru")
* Настройки Part : верстак Part так же использует [настройки верстака PartDesign](/PartDesign_Preferences "PartDesign Preferences")
* [Настройки PartDesign](/PartDesign_Preferences/ru "PartDesign Preferences/ru")
* [Настройки Path](/Path_Preferences/ru "Path Preferences/ru")
* Настройки Plot (нет)
* Настройки Points (нет)
* [Настройки Raytracing](/Raytracing_Preferences/ru "Raytracing Preferences/ru")
* Настройки Reverse Engineering (нет)
* Настройки Robot (нет)
* [Настройки Sketcher](/Sketcher_Preferences/ru "Sketcher Preferences/ru")
* Настройки Spreadsheet (нет)
* [Настройки Стартовой страницы](/Start_Preferences/ru "Start Preferences/ru")
* Настройки Surface (нет)
* [Настройки TechDraw](/TechDraw_Preferences/ru#Настройки "TechDraw Preferences/ru")
* Настройки Test Framework (нет)
* Настройки Web (нет)

## Программирование

See [Std DlgParameter](/Std_DlgParameter#Scripting "Std DlgParameter").

## Сопутствующая информация

* [Редактор параметров](/Std_DlgParameter/ru "Std DlgParameter/ru")
* [Точная настройка](/Fine-tuning/ru "Fine-tuning/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Preferences_Editor/ru&oldid=1542520>"