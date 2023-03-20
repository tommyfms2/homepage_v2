# homepage_v2

### 開発

#### ブランチをきる
developから開発ブランチをきる(feature)
developブランチにはnpm run buildが通らないとマージできないようにってる

#### 動作確認
下記を実行しながら開発する
```
$ npm run dev
```

commit前に下記を実行して、静的サイトとして起動することを確認する。
```
$ npm run build
$ npx serve out
```

### マージ時確認
prを作成すると｀.github/workflows/main.yml｀でビルドし、テスト環境(http://www.toyozaki.me/homepage_v2)にデプロイされる  
デプロイ完了後、サイトを見て問題ないことを確認してからマージする
