---
date: "2017-04-09"
title: "H.265/HEVC + Deep Learning"
tags:
  - "deep-learning"
  - "pub"
image_preview: "/assets/project_2017-04-09/network-shumbnail.png"
summary: "ambientletterをUIST 2018でポスター発表しました"
descriptions:
  texts:
    - name: "Publication"
      text: "電子情報通信学会 総合大会 2017"
    - name: "Date"
      text: "2017-3-26"
  links:
    - name: "PDF"
      url: "./assets/project_2017-04-09/2017-01-10-ieice.pdf"

---

### 深層学習を用いたHEVCイントラ予測モード決定手法の検討

という題目で電子情報通信学会の総合大会2017（名城大学）で[発表](http://www.gakkai-web.net/gakkai/ieice/G_2017/Settings/ab/d_11_056.html)してきました。
同時に卒業研究でもあります。


## Abstract

動画像符号化規格HEVC/H.265の参照ソフトウェアHEVC Test Modelでは，RD最適化を行うことで最適な予測モードを決定している．しかし，RD最適化は計算量が多くエンコードには時間がかかる．
そこで，35モードあるイントラ予測モード決定に深層学習を用いることを検討した。
本稿では，CNNの入力に当該PUのみを使用する手法，当該PUと隣接画素を入力とした手法，予測モードをランダムに決定した手法においてBD-Rateによる比較を行った．
結果として，CNNを利用するイントラ予測モード決定はランダムに決定する手法と比較し，有意性があることを確かめた．
また、隣接画素を含んだ手法は含んでいない手法より符号化効率が高いことがわかった．