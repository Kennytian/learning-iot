## 机器人爱 JavaScript 系列二

为什么这简单 5 行代码就能驱动 Arduino 开发板上的灯闪亮呢?

```javascript
const { Board, Led } = require('johnny-five');
const board = new Board();
board.on('ready', function() {
  new Led(13).blink(500);
});
```

下面我们来逐步分解一下这些代码：

### johnny-five 库

johnny-five 是一个 JavaScript 的机器人和物联网平台库，可以用 JavaScript 来驱动开发板。本文采用的是 Arduino UNO 开发板，但 johnny-five 支持更多[其它开发板](http://johnny-five.io/platform-support/)。

在 JavaScript 项目中，使用`npm install johnny-five`来安装，然后我们可以在`node_modules/johnny-five/lib/johnny-five.js` 看到关于它的源代码。

![j5_board](https://raw.githubusercontent.com/Kennytian/learning-iot/master/assets/j5_board.jpg)

### Board 类

```typescript
export declare class Board {
  constructor(option?: BoardOption);

  io: any;
  id: string;
  repl: any;
  isReady: boolean;
  pins: Array<Pin>;
  port: string;
  inject: Repl;

  on(event: string, cb: () => void): this;
  on(event: 'ready', cb: () => void): this;
  on(event: 'connect', cb: () => void): this;
  pinMode(pin: number, mode: number): void;
  analogWrite(pin: number, value: number): void;
  analogRead(pin: number, cb: (item: number) => void): void;
  digitalWrite(pin: number, value: number): void;
  digitalRead(pin: number, cb: (item: number) => void): void;
  servoWrite(pin: number, angle: number): void;
  shiftOut(dataPin: Pin, clockPin: Pin, isBigEndian: boolean, value: number): void;
  wait(ms: number, cb: () => void): void;
  loop(ms: number, cb: () => void): void;
  samplingInterval(ms: number): void;
}
```

该类主要作用是提供操作开发板的一些方法，目前常用的有 on 方法，后面会逐步介绍：pinMode、wait、loop 和 samplingInterval

### Led 类

```typescript
export declare class Led {
  constructor(option: number | LedOption);

  id: string;
  pin: number;

  on(): void;
  off(): void;
  toggle(): void;
  strobe(ms: number): void;
  blink(): void;
  blink(ms: number): void;
  brightness(val: number): void;
  fade(brightness: number, ms: number): void;
  fadeIn(ms: number): void;
  fadeOut(ms: number): void;
  pulse(ms: number): void;
  stop(ms: number): void;
}
```

Led 灯有如上一些方法，我们从名字能大概看出来各自的作用。常用的方法有：

* on/off 开/关灯
* blink/strobe (strobe 是 blink 的别名) 灯闪
* pulse 脉冲
* stop 与关灯不同，是

### on 方法

```typescript
 on(event: "ready", cb: () => void): this;
```

参数：

1.  event 传入 ready 的字符串，做为事件名
2.  cb 传入一个回调函数，处理开发板实例创建好了之后要处理业务

### blink 方法

```typescript
 blink(ms: number): void;
```

亮灯的方法，它还有一个别名 strobe。

----------------------------------推广分隔线----------------------------------

欢迎 QQ 群加入交流 [700434239](http://shang.qq.com/wpa/qunwpa?idkey=11cd472ee62461eed296856bfe97e15e02fc551c4ff476ec4eba16e6a9c27000)

![QQ群](https://raw.githubusercontent.com/Kennytian/learning-iot/master/assets/qq_group_qrcode.jpg)
