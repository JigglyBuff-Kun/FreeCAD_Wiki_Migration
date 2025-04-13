---
title: ダウンロード
---
## 安定版

2024年111月18日にFreeCAD 1.0版を公開しました。新規機能については[リリースノート](/Release_notes_1.0 "Release notes 1.0")を参照してください。

[1.0.0リリースページ](https://github.com/FreeCAD/FreeCAD/releases/tag/1.0.0)にあるSHA256チェックサムをつかって、ダウンロードファイルが正しいことを検証できます。

古いバージョンは、[リリース一覧](https://github.com/FreeCAD/FreeCAD/releases)からダウンロードできます。

|  |  |  |
| --- | --- | --- |
| [Install instructions](/Installing_on_Windows "Installing on Windows")  [64-bit installer](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-Windows-x86_64-installer-1.exe)  [64-bit portable version (.7z)](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-Windows-x86_64-py311.7z) | [Install instructions](/Installing_on_Mac "Installing on Mac")  [ARM (M-series) disk image](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-macOS-arm64-py311.dmg)  [Intel disk image](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-macOS-x86_64-py311.dmg) | [Install instructions](/Installing_on_Linux "Installing on Linux")  [x86\_64 AppImage](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-Linux-x86_64-py311.AppImage)  [aarch64 AppImage](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-Linux-aarch64-py311.AppImage) |

### Windowsユーザーのための注意点

* サポートするWindowsバージョンは64-bit 8/10/11です。
* FreeCADは[Chocolatey](https://chocolatey.org/packages/freecad)マネージャーからもインストール可能ですが、現在最新化されていません。

### macOSユーザーのための注意点

* サポートしているのはMacOS 10.12 Sierra以上です。

### GNU/Linuxユーザーのための注意点

多くのディストリビューションではFreeCADを提供しています。ただし、セキュリティ修正以外の機能追加を安定版に適用しないリリースモデルに従っているディストリビューションの場合、提供されるバージョンが古い可能性があります。その場合、ディストリビューションが提供するものの代わりに上記のAppImageをダウンロードし、これに実行可能フラグを立てれば、インストールせずにFreeCADを使えます。

Ubuntuやその派生ディストリビューションのための開発版パッケージを含む、インストールのその他の方法については、[Linuxへのインストール](/Installing_on_Linux/ja "Installing on Linux/ja")ページを参照してください。

AppImageは下記のコマンドで使えます。

```
cd path/to/directory_containing_AppImage/
chmod +x ./name_of_AppImage_file.AppImage
HOME="$PWD/Settings" FREECAD_USER_HOME="$PWD/Settings" ./name_of_AppImage_file.AppImage

```

FreeCADの環境変数について説明は[環境変数](/Start_up_and_Configuration/ja#Environment_variables "Start up and Configuration/ja")ページにあります。

## 開発版

FreeCADの開発は活発に行われています。

* 開発版のビルドおよびソースコードについては、[ウィークリー・ビルド](https://github.com/FreeCAD/FreeCAD-Bundle/releases/tag/weekly-builds)を参照してください。Linux、macOS、Windows用のウィークリー・ビルドがあります。Linux用については、デイリー・ビルドもあります。[snapパッケージ](/Ubuntu_Snap "Ubuntu Snap")のedgeチャンネルを利用するか、（Debianベースのディストリビューションでは）[FreeCADデイリーPPA](https://launchpad.net/~freecad-maintainers/+archive/ubuntu/freecad-daily)を使ってください。
* 最新版のソースコードからのコンパイルについては、[コンパイル](/Compiling "Compiling")ページを参照してください。

## 追加のモジュールやマクロ

FreeCADコミュニティーの貢献で、多くの追加のモジュールやマクロが作られています。これらは、![](/images/Std_AddonMgr.svg) [アドオンマネージャー](/Std_AddonMgr/ja "Std AddonMgr/ja")から簡単にインストールできます。

Retrieved from "<http://wiki.freecad.org/index.php?title=Download/ja&oldid=1536141>"