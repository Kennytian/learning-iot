# learning-iot

#### 采购：

1.  Arduino UNO 开发板。刚开始学习只需买一块开发板即可，会送一根线，板载有 led 灯，淘宝一般在 30 块钱左右。
2.  Arduino 电子元件。随着后期深入学习，就自然明白需要什么元件，再买不迟。

#### 环境：

1.  Mac、Windows、Linux 电脑均可（以后我以 Mac 电脑为开发环境）。
2.  安装 Node 4.3.0 及以上版本，建议安装 LTS 版，下载地址 https://nodejs.org/en/download/ 。
3.  安装 Arduino 相应驱动，并重启电脑。具体驱动请自行搜索开发板型号+当前操作系统，如：`ch340g mac`。 如果你买的是`Arduino UNO R3(CH340G)`开发板，就下载
    http://www.wch.cn/download/CH341SER_MAC_ZIP.html 。
4.  安装 Arduino IDE 开发环境，下载地址：https://www.arduino.cc/en/main/software

#### 开发板：

1.  将 USB 数据线把电脑与开发板连接后，正常情况下你会在 Arduino IDE 上看到你开发板的端口，如图：

    ![arduino_port](https://raw.githubusercontent.com/Kennytian/learning-iot/master/assets/arduino_port.jpg)

    你开发板的端口很有可能与图中的端口不一样，但没有关系，只要识别出来就行。一般是：'/dev/cu.xxxusbxxx' 字样的标识。

2.  打开 Arduino IDE, 选择: File > Examples > Firmata > StandardFirmataPlus，如图：

    ![standard_firemata_plus](https://raw.githubusercontent.com/Kennytian/learning-iot/master/assets/standard_firemata_plus.jpg)

3.  在 Arduino IDE 界面点击 "上传" 按钮，如图：

    ![upload_firemata](https://raw.githubusercontent.com/Kennytian/learning-iot/master/assets/upload_firemata.jpg)

欢迎 QQ 群加入交流 [700434239](http://shang.qq.com/wpa/qunwpa?idkey=11cd472ee62461eed296856bfe97e15e02fc551c4ff476ec4eba16e6a9c27000)

![QQ群](https://raw.githubusercontent.com/Kennytian/learning-iot/master/assets/qq_group_qrcode.jpg)
