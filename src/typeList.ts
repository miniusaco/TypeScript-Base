/* eslint-disable @typescript-eslint/no-unused-vars */
/** TypeScriptの基本の方 **/

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字
let str: string = "A";

// Arrey 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple　あまり使われない
let tuple: [number, string] = [0, "A"];

// any なるべく使わずに開発していけることが理想
let any1: any = false;

// void 関数が何も返却していない
const funcA = (): void => {
  const test = "TEST";
};
// 上記のようなケースではあえて下記のようにvoidを書かない場合もある
const funcB = () => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefind
let undefinde1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AAA" };
