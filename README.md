# DyProp

DynamicPropertyを実質無限に同じIDで保存することができます
```ts
import * as DyProp from "./lib/DyProp";
const Id = "test";

// Idからテキストデータを保存する
DyProp.save(Id, String);

// Idからデータを取得する
DyProp.get(Id); // 配列を返します

// Idを取得する
DyProp.getIds(); // 配列を返します
```

DynamicProperty can be stored virtually infinitely with the same ID
```ts
import * as DyProp from "./lib/DyProp";
const Id = "test";

// Save Dyprop Id with string data
DyProp.save(Id, String);

// Get Dyprop data with Id
DyProp.get(Id); // return array

// Get Dyprop Ids
DyProp.getIds(); // return array
```
