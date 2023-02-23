import{_ as s,c as a,o as n,a as e}from"./app.4779992d.js";const d=JSON.parse('{"title":"TypeScript 相关使用","description":"","frontmatter":{},"headers":[{"level":2,"title":"赋值","slug":"赋值","link":"#赋值","children":[]}],"relativePath":"arco_pro/arco_ts_assignment.md"}'),l={name:"arco_pro/arco_ts_assignment.md"},p=e(`<h1 id="typescript-相关使用" tabindex="-1">TypeScript 相关使用 <a class="header-anchor" href="#typescript-相关使用" aria-hidden="true">#</a></h1><h2 id="赋值" tabindex="-1">赋值 <a class="header-anchor" href="#赋值" aria-hidden="true">#</a></h2><p>原始对象赋值 （TS支持像JS一样的对象赋值）</p><div class="language-TypeScript"><button title="Copy Code" class="copy"></button><span class="lang">TypeScript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> mayouchen </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">yoga</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">eat</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1234567890</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(mayouchen</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">eat</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>引用数据类型常见的：</p><pre><code>  array    String     Date    RegExp 
</code></pre><p>引用类型变量 定义</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">    let arr1:number []; //数值类型</span></span>
<span class="line"><span style="color:#A6ACCD;">    let arr2:Array&lt;string&gt;; //字符串类型</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>子面量 赋值</p><pre><code>let arr3:number[] = [];
let arr4:number[] = [111,22,33];

let arr5:Array&lt;string&gt; = [&#39;mayouchen&#39;,&#39;coloa&#39;];
let arr6:Array&lt;boolean&gt; = [false,true];
</code></pre><p>构建函数 赋值</p><pre><code>let arr7:number[] = new Array();
let arr8:number[] = new Array(1,2,3,4);

let arr9:Array&lt;string&gt; = new Array(&#39;mayouchen&#39;,&#39;coloa&#39;);
let arr0:Array&lt;boolean&gt; = new Array(false,true,false);
</code></pre><p>元组 赋值</p><pre><code>let M:[string,number];
M = [&#39;hello TS&#39;,10000]
</code></pre>`,14),o=[p];function r(t,c,y,i,D,F){return n(),a("div",null,o)}const C=s(l,[["render",r]]);export{d as __pageData,C as default};
