---
title: Ini luas
---

Ini luas, belum sepenuhnya lengkap, daftar implementasi dari fitur - fitur FreeCAD. Jika kamu ingin mengetahui FreeCAD kedepan seperti apa, lihat pada [Development roadmap](/Development_roadmap/id "Development roadmap/id"), untuk sekilas gambaran [Screenshots](/Screenshots/id "Screenshots/id") adalah halaman yang bagus untuk dilihat.

## Catatan rilis

- [Release 0.20](/Release_notes_0.20 "Release notes 0.20") - TBD
- [Release 0.19](/Release_notes_0.19 "Release notes 0.19") - March 2021
- [Release 0.18](/Release_notes_0.18 "Release notes 0.18") - March 2019
- [Release 0.17](/Release_notes_0.17 "Release notes 0.17") - April 2018
- [Release 0.16](/Release_notes_0.16 "Release notes 0.16") - April 2016
- [Release 0.15](/Release_notes_0.15 "Release notes 0.15") - March 2015
- [Release 0.14](/Release_notes_0.14 "Release notes 0.14") - March 2014
- [Release 0.13](/Release_notes_0.13 "Release notes 0.13") - January 2013
- [Release 0.12](/Release_notes_0.12 "Release notes 0.12") - December 2011
- [Release 0.11](/Release_notes_0.11 "Release notes 0.11") - March 2011

## Fitur - fitur utama

- ![](/images/Feature1.jpg)

  Berbasiskan [Teknologi Open CASCADE](http://en.wikipedia.org/wiki/Open_CASCADE) **kernel geometri** yang lengkap memungkinkan operasi 3D yang rumit pada bentuk - bentuk yang komplek, dengan dukungan bawaan untuk konsep - konsep seperti [brep](http://en.wikipedia.org/wiki/Boundary_representation), [nurbs curves](http://en.wikipedia.org/wiki/Non-uniform_rational_B-spline) dan [permukaan](http://en.wikipedia.org/wiki/Surface), berbagai kesatuan geometri, [**boolean**](http://en.wikipedia.org/wiki/Constructive_solid_geometry) dan [**fillet**](<http://en.wikipedia.org/wiki/Fillet_(mechanics)>) dan mendukung format STEP dan IGES.

- ![](/images/Feature3.jpg)

  Sebuah pemodelan prametrik yang lengkap. Semua objek FreeCAD adalah murni parametrik, yang berarti bentuk - bentuknya dapat didasarkan pada [properties](/Property/id "Property/id") atau bahkan bergantung pada objek lain, semua perubahan dihitung saat itu juga, dan disimpan oleh sistem undo/redo. Tipe objek baru dapat ditambahkan dengan mudah, yang bahkan dapat di [fully programmed in Python](/Scripted_objects/id "Scripted objects/id")

- ![](/images/Feature4.jpg)

  **Modul asitektur** yang memungkinkan plugin (modul) untuk menambahkan fungsi ke inti aplikasi. Penambahan - penambahan itu dapat se-kompleks seperti aplikasi baru atau sesederhana seperti [Python scripts](/Power_users_hub/id "Power users hub/id") atau self-recorded [macros](/Macros/id "Macros/id"). Kamu mempunyai akses penuh melalui interpreter **Python**, makro atau skrip - skrip eksternal terhadap hampir semua bagian dari FreeCAD, dalam [pembuatan geometri dan transformasinya](/Topological_data_scripting/id "Topological data scripting/id"), representasi 2D atau 3D dari geometrinya([scenegraph](/Scenegraph/id "Scenegraph/id")) atau bahkan [Antarmuka FreeCAD](/PySide/id "PySide/id")

- ![](/images/Feature5.jpg)

  Import/export ke **format standar** seperti [STEP](http://en.wikipedia.org/wiki/ISO_10303), [IGES](http://en.wikipedia.org/wiki/IGES), [OBJ](http://en.wikipedia.org/wiki/Obj), [STL](http://en.wikipedia.org/wiki/STL_%28file_format%29), [DXF](http://en.wikipedia.org/wiki/Dxf), [SVG](http://en.wikipedia.org/wiki/Svg), [STL](<http://en.wikipedia.org/wiki/STL_(file_format)>), [DAE](http://en.wikipedia.org/wiki/COLLADA), [IFC](http://en.wikipedia.org/wiki/Industry_Foundation_Classes) or [OFF](http://people.sc.fsu.edu/~jburkardt/data/off/off.html), [NASTRAN](http://en.wikipedia.org/wiki/NASTRAN), [VRML](http://en.wikipedia.org/wiki/VRML) selain format asli FreeCAD [Fcstd file format](/Fcstd_file_format/id "Fcstd file format/id"). Tingkat kompatibilitas antara FreeCAD dan format file yang diberikan dapat bervariasi, karena tergantung pada modul yang mengimplementasikannya.

- ![](/images/Feature7.jpg)

  [Sketcher](/Sketcher_Workbench/id "Sketcher Workbench/id") dengan constraint-solver, memungkinkan untuk membentuk sketsa 2D berbasis geometry-constraint. Saat ini sketcher memungkinkan kamu untuk membangun beberapa tipe dari constrained-geometri, dan memakainya sebagai dasar untuk membangun objek yang lain dalam FreeCAD.

- ![](/images/Feature9.jpg)

  Modul [Robot simulation](/Robot_Workbench/id "Robot Workbench/id") memungkinkan untuk mempelajari pergerakan robot. Modul robot sudah memiliki antarmuka grafis yang memungkinkan mengaturkan alur kerja hanya melalui antarmuka grafis saja.

- ![](/images/Feature8.jpg)

  Modul [Drawing sheets](/Drawing_Workbench/id "Drawing Workbench/id") yang mampu membuat tampilan 2D dari model 3D-mu pada kertas lembar kerja. Hal ini kemudian menghasilkan modul siap ekspor ke lembaran kerja SVG atau PDF. Modul ini masih belum sempurna tetapi sudah dilengkapi dengan fungsi Python sangat berguna.

- ![](/images/Feature-raytracing.jpg)

  Modul [Rendering](/Raytracing_Workbench/id "Raytracing Workbench/id") yang dapat mengekspor objek 3D untuk rendering dengan renderers eksternal. Saat ini hanya mendukung [Povray](http://en.wikipedia.org/wiki/POV-Ray) and [LuxRender](http://en.wikipedia.org/wiki/LuxRender), namun diharapkan akan diperluas ke renderers lain di masa depan.

- ![](/images/Feature-arch.jpg)

  Modul [Architecture](/Arch_Workbench/id "Arch Workbench/id") yang memungkinkan membuat alurkerja seperti [BIM](http://en.wikipedia.org/wiki/Building_Information_Modeling), yang kompatibel dengan [IFC](http://en.wikipedia.org/wiki/Industry_Foundation_Classes). Pembuatan modul Arch sangat serius dibahas oleh komunitas [di forum ini](http://www.freecadweb.org/forum/viewtopic.php?f=10&t=821).

## Fitur umum

- **FreeCAD adalah multi-platform**. FreeCAD dapat berjalan dan berperilaku sama persis pada Windows Linux dan Mac OSX.

- **FreeCAD memiliki GUI yang lengkap**. FreeCAD memiliki antarmuka grafis yang lengkap didasarkan pada framework [Qt](http://www.qtsoftware.com/) yang terkenal, dengan penampil 3D berdasarkan [Open Inventor](http://en.wikipedia.org/wiki/Open_Inventor), memungkinkan proses render yang cepat dari tampilan 3D dan representasi tampilan grafik yang sangat mudah diakses.

- **FreeCAD juga dapa berjalan melalui aplikasi 'command line**, dengan memory yang rendah. Dalam modus 'command line', FreeCAD berjalan tanpa antarmuka, tapi semua alat/fitur geometrinya bisa digunakan. Ini bisa dipakai pada, misalnya, digunakan sebagai server untuk menghasilkan komten untuk aplikasiilainya.

- **FreeCAD dapat diimpor sebagai [Python modul](/Embedding_FreeCAD/id "Embedding FreeCAD/id")**, ke dalam aplikasi lain yang dapat menjalankan script python, atau di command line python. Seperti dalam modus command line, bagian antarmuka FreeCAD tidak tersedia, tetapi semua alat/fitur geometri dapat diakses.

- **Workbench concept**: Di antarmuka FreeCAD, peralatan ditools dikelompokan pada [workbenches](/Workbenches/id "Workbenches/id"). Hal ini memungkinkan untuk menampilkan hanya peralatan yang digunakan saja untuk menyelesaikan tugas tertentu, menjaga ruang kerja yang rapi dan responsif, dan aplikasi cepat.

- **Plugin/Module framework for late loading of features/data-types**. FreeCAD dibagi ke dalam aplikasi inti dan modul, yang dimuat hanya bila diperlukan. Hampir semua alat dan jenis geometri disimpan dalam modul. Modul berperilaku seperti plugin, dan dapat ditambahkan atau dihapus dari instalasi FreeCAD yang sudah ada.

- **Parametric associative document objects**: Semua objek didokumen FreeCAD dapat didifinisikan oleh parameter. Parameter - parameter tersebut dapa dimodifikasi dengan cepat dan dihitung setiap waktu. Hubungan antara objek juga disimpan, sehingga memodifikasi satu objek juga memodifikasi benda tergantung padanya.

- **Parametric primitive shapes** seperti box, sphere, cylinder, cone or torus.

- Graphical **modification operations** seperti translation, rotation, scaling, mirroring, offset or shape conversion, di setiap bidang ruang 3D.

- **[Boolean operations](http://en.wikipedia.org/wiki/Constructive_solid_geometry)** seperti **union**, **difference** dan **intersection**.

- Graphical creation of **simple planar geometry** seperti lines, wires, rectangles, arcs or circles di setiap bidang ruang 3D.

- Pemodelan dengan tip lurus atau revolosi (perputaran) **extrusions**, **sections** and **fillets**.

- Topologi komponen seperti **vertices, edges, wires** and **planes** (memalui bahasa skrip python).

- **Testing and repairing** Peralatan untuk meshes: solid test, non-two-manifolds test, self-intersection test, hole filling and uniform orientation.

- **Annotations** seperti teks dan dimensi.

- **Undo/Redo framework**: Semua aktivitas bisa di - undo/redo, dengan akses terhadap susunan undo, jadi sistem undo dapat di lakukan berulang - ulang.

- **Transaction management**: kumpulan undo/redo menyimpan transaksi dokumen dan bukan tindakan tunggal, memungkinkan setiap alat untuk menentukan apa yang harus dibatalkan atau diulang.

- **Built-in [scripting](/Power_users_hub/id "Power users hub/id") framework**: Fitur bawaan FreeCAD [Python](http://www.python.org/) interpreter, dan API yang mencakup hampir semua bagian dari aplikasi, antarmuka, geometri dan representasi geometri ini dalam menampil 3D. Interpreter Python dapat menjalankan perintah tunggal hingga script yang kompleks, pada kenyataannya seluruh modul bahkan dapat diprogram sepenuhnya dalam Python.

- **Built-in Python console** dengan syntax highlighting, autocomplete and class browser: perintah - perintah python dapat diterbitkan langsung di FreeCAD dan segera memberikan hasil, memungkinkan scriptwriter untuk menguji fungsi secara langsung, mengeksplorasi isi modul dan mudah belajar tentang internal FreeCAD.

- **User interaction mirroring on the console**: Semua aktifitas pengguna di antarmuka FreeCAD dieksekusi oleh python, yang dapat ditampilkan pada konsol dan disimpan di makros.

- **Full macro recording & editing**: Perintah python dikeluarkan ketika pengguna memanipulasi antarmuka kemudian dapat direkam, diedit jika diperlukan, dan disimpan untuk direproduksi kemudian.

- **Compound (ZIP based) document save format**: FreeCAD dokumen disimpan dengan [fcstd](/Fcstd_file_format/id "Fcstd file format/id"). Ekstensi dapat berisi berbagai jenis informasi, seperti geometri, script atau ikon thumbnail.

- **Fully customizable/scriptable Graphical User Interface**. Berbasiskan [Qt](http://www.qtsoftware.com), antarmuka FreeCAD sepenuhnya dapat diakses melalui interpreter python. Selain dari fungsi sederhana yang disediakan FreeCAD untuk workbenches, seluruh Qt-framework juga dapat diakses, memungkinkan setiap operasi pada GUI, seperti membuat, menambahkan, docking, memodifikasi atau menghapus widget dan toolbar.

- **Thumbnailer** (Linux systems only at the moment): Ikon Dokumen FreeCAD menampilkan isi dari file di kebanyakan aplikasi manager seperti nautilus di gnome.

- **Modul instalasi MSI** memungkinkan sistem pengintalasian yang fleksible pada windows. Paket untuk sistem ubuntu juga tersedia dan terpelihara.

## Extra Workbenches

Power users have created various custom [external workbenches](/External_workbenches "External workbenches").

Retrieved from "<http://wiki.freecad.org/index.php?title=Feature_list/id&oldid=1456924>"
