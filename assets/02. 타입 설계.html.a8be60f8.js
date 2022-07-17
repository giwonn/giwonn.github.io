import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as a}from"./app.404da4f0.js";const s={},d=a(`<h1 id="tip-02-\u1110\u1161\u110B\u1175\u11B8-\u1109\u1165\u11AF\u1100\u1168" tabindex="-1"><a class="header-anchor" href="#tip-02-\u1110\u1161\u110B\u1175\u11B8-\u1109\u1165\u11AF\u1100\u1168" aria-hidden="true">#</a> Tip-02. \uD0C0\uC785 \uC124\uACC4</h1><h2 id="\u110B\u1172\u1102\u1175\u110B\u1169\u11AB\u110B\u1174-\u110B\u1175\u11AB\u1110\u1165\u1111\u1166\u110B\u1175\u1109\u1173\u1107\u1169\u1103\u1161\u1102\u1173\u11AB-\u110B\u1175\u11AB\u1110\u1165\u1111\u1166\u110B\u1175\u1109\u1173\u110B\u1174-\u110B\u1172\u1102\u1175\u110B\u1169\u11AB\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1172\u1102\u1175\u110B\u1169\u11AB\u110B\u1174-\u110B\u1175\u11AB\u1110\u1165\u1111\u1166\u110B\u1175\u1109\u1173\u1107\u1169\u1103\u1161\u1102\u1173\u11AB-\u110B\u1175\u11AB\u1110\u1165\u1111\u1166\u110B\u1175\u1109\u1173\u110B\u1174-\u110B\u1172\u1102\u1175\u110B\u1169\u11AB\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC720\uB2C8\uC628\uC758 \uC778\uD130\uD398\uC774\uC2A4\uBCF4\uB2E4\uB294 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uC720\uB2C8\uC628\uC744 \uC0AC\uC6A9\uD558\uAE30</h2><p><code>type</code>\uC5D0 \uB530\uB77C layout\uACFC paint\uAC00 \uC815\uD574\uC9C4\uB2E4\uACE0 \uAC00\uC815\uD574\uBCF4\uC790.<br> type\uC774 <code>fill</code>\uC77C \uB54C <code>FillLayout</code>, <code>FillPaint</code>\uC774\uC5EC\uC57C \uD55C\uB2E4\uBA74 \uC544\uB798\uC758 \uCF54\uB4DC\uB294 \uC815\uD655\uD558\uC9C0 \uC54A\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>interface Layer {
  type: &#39;fill&#39; | &#39;line&#39; | &#39;point&#39;;
  layout: FillLayout | LineLayout | PointLayout;
  paint: FillPaint | LinePaint | PonintPaint;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC544\uB798\uCC98\uB7FC \uAC1C\uC120\uD558\uC790.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>interface FillLayer {
  type: &#39;fill&#39;;
  layout: FillLayout;
  paint: FillPaint;
}
interface LineLayer {
  type: &#39;line&#39;;
  layout: LineLayout;
  paint: LinePaint;
}
interface PointLayer {
  type: &#39;point&#39;;
  layout: PointLayout;
  paint: PointPaint;
}
type Layer = FillLayer | LineLayer | PointLayer;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1103\u1169\u11BC\u1109\u1175\u110B\u1166-\u1100\u1161\u11B9\u110B\u1175-\u110C\u1169\u11AB\u110C\u1162\u1112\u1161\u1100\u1165\u1102\u1161-\u110B\u1165\u11B9\u1102\u1173\u11AB-\u1103\u1166\u110B\u1175\u1110\u1165-\u1110\u1161\u110B\u1175\u11B8\u110B\u1173\u11AB-\u1106\u116E\u11A9\u110B\u1165\u110C\u116E\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#\u1103\u1169\u11BC\u1109\u1175\u110B\u1166-\u1100\u1161\u11B9\u110B\u1175-\u110C\u1169\u11AB\u110C\u1162\u1112\u1161\u1100\u1165\u1102\u1161-\u110B\u1165\u11B9\u1102\u1173\u11AB-\u1103\u1166\u110B\u1175\u1110\u1165-\u1110\u1161\u110B\u1175\u11B8\u110B\u1173\u11AB-\u1106\u116E\u11A9\u110B\u1165\u110C\u116E\u110C\u1161" aria-hidden="true">#</a> \uB3D9\uC2DC\uC5D0 \uAC12\uC774 \uC874\uC7AC\uD558\uAC70\uB098 \uC5C6\uB294 \uB370\uC774\uD130 \uD0C0\uC785\uC740 \uBB36\uC5B4\uC8FC\uC790</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>interface Persion {
  name: string;
  // \uB450 \uB370\uC774\uD130\uB294 \uB3D9\uC2DC\uC5D0 \uC788\uAC70\uB098 \uC5C6\uB2E4.
  placeOfBirth?: string;
  dateOfBirth?: Date;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC544\uB798\uC640 \uAC19\uC774 \uAC1C\uC120 \uAC00\uB2A5\uD558\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>interface Persion {
  name: string;
  // \uB450 \uB370\uC774\uD130\uB294 \uB3D9\uC2DC\uC5D0 \uC788\uAC70\uB098 \uC5C6\uB2E4.
  birth?: {
    place: string;
    date: Date;
  };
}

// \uD639\uC740 \uC544\uB798\uC640 \uAC19\uC774 \uB098\uB20C \uC218\uB3C4 \uC788\uB2E4.
interface Name {
  name: string;
}
interface PersonWithBirth extends Name {
  placeOfBirth: string;
  dateOfBirth: Date;
}

type Person = Name | PersonWithBirth;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="string\u1107\u1169\u1103\u1161-\u1103\u1165-\u1100\u116E\u110E\u1166\u110C\u1165\u11A8\u110B\u1175\u11AB-\u1110\u1161\u110B\u1175\u11B8-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#string\u1107\u1169\u1103\u1161-\u1103\u1165-\u1100\u116E\u110E\u1166\u110C\u1165\u11A8\u110B\u1175\u11AB-\u1110\u1161\u110B\u1175\u11B8-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> string\uBCF4\uB2E4 \uB354 \uAD6C\uCCB4\uC801\uC778 \uD0C0\uC785 \uC0AC\uC6A9\uD558\uAE30</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>function pluck(records, key) {
  returnrecords.map((r) =&gt; r[key]);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1107\u116E\u110C\u1165\u11BC\u1112\u116A\u11A8\u1112\u1161\u11AB-\u1110\u1161\u110B\u1175\u11B8\u1107\u1169\u1103\u1161\u1102\u1173\u11AB-\u1106\u1175\u110B\u116A\u11AB\u1109\u1165\u11BC-\u1110\u1161\u110B\u1175\u11B8\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1107\u116E\u110C\u1165\u11BC\u1112\u116A\u11A8\u1112\u1161\u11AB-\u1110\u1161\u110B\u1175\u11B8\u1107\u1169\u1103\u1161\u1102\u1173\u11AB-\u1106\u1175\u110B\u116A\u11AB\u1109\u1165\u11BC-\u1110\u1161\u110B\u1175\u11B8\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uBD80\uC815\uD655\uD55C \uD0C0\uC785\uBCF4\uB2E4\uB294 \uBBF8\uC644\uC131 \uD0C0\uC785\uC744 \uC0AC\uC6A9\uD558\uAE30</h2><p>api\uCC98\uB7FC \uB4E4\uC5B4\uC624\uB294 \uD0C0\uC785\uC774 \uBC14\uB014 \uC218 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uD0C0\uC785\uC744 \uAD6C\uCCB4\uC801\uC73C\uB85C \uC120\uC5B8\uD558\uC9C0 \uB9D0\uC790.<br><code>GeoPosition</code>\uC5D0 \uC704,\uACBD\uB3C4\uB9CC \uB4E4\uC5B4\uC624\uB9AC\uB77C\uB294 \uBCF4\uC7A5\uC774 \uC5C6\uB2E4. api\uAC00 \uAC1C\uC120\uB418\uC5B4 \uB2E4\uB978 \uB370\uC774\uD130\uAC00 \uB4E4\uC5B4\uC62C \uC218 \uC788\uC73C\uBBC0\uB85C <code>number[]</code>\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uB354 \uC548\uC804\uD560 \uAC83\uC774\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>type GeoPosition = [number, number];
interface Point {
  type: &#39;Point&#39;;
  coordinates: GeoPosition;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),l=[d];function r(t,c){return i(),n("div",null,l)}var o=e(s,[["render",r],["__file","02. \uD0C0\uC785 \uC124\uACC4.html.vue"]]);export{o as default};
