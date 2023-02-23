# TypeScript 相关使用

## 赋值
原始对象赋值 （TS支持像JS一样的对象赋值）

``` TypeScript
    let mayouchen = {
      name:'yoga',
      age:1000,
      eat:function(){
        console.log("1234567890");
      }
    }
    
    console.log(mayouchen.eat());
```

引用数据类型常见的：

      array    String     Date    RegExp 

引用类型变量 定义

```
    let arr1:number []; //数值类型
    let arr2:Array<string>; //字符串类型
```

子面量 赋值

    let arr3:number[] = [];
    let arr4:number[] = [111,22,33];
    
    let arr5:Array<string> = ['mayouchen','coloa'];
    let arr6:Array<boolean> = [false,true];

构建函数 赋值

    let arr7:number[] = new Array();
    let arr8:number[] = new Array(1,2,3,4);
    
    let arr9:Array<string> = new Array('mayouchen','coloa');
    let arr0:Array<boolean> = new Array(false,true,false);
元组 赋值

    let M:[string,number];
    M = ['hello TS',10000]
