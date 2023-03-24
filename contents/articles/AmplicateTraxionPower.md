---
date: "2017-09-27"
title: "Traxionの追実装＋パワーの増幅信号"
tags:
  - "post"
image_preview: "/assets/posts/post_2017-09-27_traxion/thumbnail.JPG"
summary: "仮想力覚のパワーをあげる信号"
descriptions:
  headings: true

---

# Traxionの追実装
Traxionの追実装を行いました。これだけでは別に珍しくないのでさらっと書きます。

Traxionを追実装するにあたっては、アルプス社のHaptic Reactorを利用します。
これはswitchのコントローラーに入っているので取り出します。
左の白いクッションの様なものがついているものがHaptic Reactorです。

![Traxion](/assets/posts/post_2017-09-27_traxion/P_20170511_150220.jpg)
![Traxion](/assets/posts/post_2017-09-27_traxion/P_20170511_150714.jpg)

これをアンプに繋げて、矩形波を流すだけです。

![Traxion](/assets/posts/post_2017-09-27_traxion/DSC_0097.JPG)

一秒おきに力の向きを変えて矩形波を出力。（デューティー比、2:6と6:2を交互に流す。）
![Traxion](/assets/posts/post_2017-09-27_traxion/traxion.gif)

# 地味にわかりづらい
やってみるとわかりますが、Traxionの力覚はだれもがわかるというほど強くはないです。
もってみると、どっちの向きに力が働いているか集中してみないとわからなかったりします。
左右に動かしながら持ってみると感じやすいとかはありますが、それでも微妙です。  

# パワーの増幅
特定の信号をながすことで振動子を用いた仮想力覚が生じます。
もともとのTraxionの論文ではデューティ比2:6の信号を125Hzでながすとありますが、今回使っている振動子はそれとは異なるため、少し変わります。
アルプス電気のサイトによると、今回使う振動子は160Hzで強く振動するらしいです。
![Traxion](/assets/posts/post_2017-09-27_traxion/figure_s1.png)

この信号を以下のようにすることで、仮想力覚のパワーが増加しました。あくまでも個人の感覚で、実験はしていないですが。
![Traxion](/assets/posts/post_2017-09-27_traxion/figure_1.png)
上の画像とこの画像の意味合いの符合がとれていないので少しわかりづらいですが、
この画像の左側と右側はTraxionの力の向きが反対であることを意味します。  
同様に160Hzです。  
普通の方が6:2に対して1つのパルスの右側をsin派にします。 
