import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as s}from"./app.404da4f0.js";const d={},r=s(`<h1 id="builder-\u1111\u1162\u1110\u1165\u11AB" tabindex="-1"><a class="header-anchor" href="#builder-\u1111\u1162\u1110\u1165\u11AB" aria-hidden="true">#</a> Builder \uD328\uD134</h1><p>Builder \uD328\uD134\uC740 \uAC1D\uCCB4\uB97C \uC0DD\uC131\uD560 \uB54C \uC0AC\uC6A9\uD558\uB294 \uB514\uC790\uC778 \uD328\uD134 \uC911 \uD558\uB098\uB85C, <strong>\uB2E4\uC218\uC758 \uD544\uB4DC\uB97C \uAC00\uC9C0\uB294 \uBCF5\uC7A1\uD55C \uD074\uB798\uC2A4\uC758 \uAC1D\uCCB4\uB97C \uC0DD\uC131\uD558\uB294 \uACBD\uC6B0</strong> \uC720\uC6A9\uD558\uB2E4.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// \uC0DD\uC131\uC790\uB97C \uC774\uC6A9\uD55C \uBC29\uBC95
User user = new User(&quot;giwon&quot;, 28, &quot;\uC11C\uC6B8&quot;, &quot;developer&quot;, &quot;010-1234-5678&quot;);

// setter\uB97C \uC774\uC6A9\uD55C \uBC29\uBC95
User user = new User();
user.setName(&quot;giwon&quot;);
user.setAge(28);
user.setAddress(&quot;\uC11C\uC6B8&quot;);
user.job(&quot;developer&quot;);
user.phone(&quot;010-1234-5678&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// Builder \uD328\uD134
User user = User.builder()
		.name(&quot;giwon&quot;)
		.age(28)
		.address(&quot;\uC11C\uC6B8&quot;)
		.job(&quot;developer&quot;)
		.phone(&quot;010-1234-5678&quot;)
		.build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Builder \uD328\uD134\uC774 \uC0DD\uC131\uC790\uB098 setter\uBCF4\uB2E4 \uB354 \uAC00\uB3C5\uC131\uC774 \uC88B\uACE0 \uCF54\uB4DC\uB97C \uAD6C\uD604\uD558\uAE30\uB3C4 \uD3B8\uD558\uB2E4.<br> \uC704\uC640 \uAC19\uC774 \uBE4C\uB354 \uD328\uD134\uC740 \uCC28\uB840\uCC28\uB840 \uBCC0\uC218\uB97C \uBC1B\uC544\uB4E4\uC774\uACE0 \uBAA8\uB4E0 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uBC1B\uACE0 \uB098\uC11C \uC774 \uBCC0\uC218\uB4E4\uC744 \uD1B5\uD569\uD558\uC5EC \uAC1D\uCCB4\uB97C \uC0DD\uC131\uD55C\uB2E4. <br><br><br></p><h2 id="\u1112\u1162\u1100\u1167\u11AF\u1103\u116C\u1102\u1173\u11AB-\u1106\u116E\u11AB\u110C\u1166\u110C\u1165\u11B7\u1103\u1173\u11AF" tabindex="-1"><a class="header-anchor" href="#\u1112\u1162\u1100\u1167\u11AF\u1103\u116C\u1102\u1173\u11AB-\u1106\u116E\u11AB\u110C\u1166\u110C\u1165\u11B7\u1103\u1173\u11AF" aria-hidden="true">#</a> \uD574\uACB0\uB418\uB294 \uBB38\uC81C\uC810\uB4E4</h2><h3 id="\u1109\u1162\u11BC\u1109\u1165\u11BC\u110C\u1161\u1105\u1173\u11AF-\u1110\u1169\u11BC\u1112\u1161\u11AB-\u1100\u1162\u11A8\u110E\u1166-\u1109\u1162\u11BC\u1109\u1165\u11BC\u110B\u1174-\u1106\u116E\u11AB\u110C\u1166\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1109\u1162\u11BC\u1109\u1165\u11BC\u110C\u1161\u1105\u1173\u11AF-\u1110\u1169\u11BC\u1112\u1161\u11AB-\u1100\u1162\u11A8\u110E\u1166-\u1109\u1162\u11BC\u1109\u1165\u11BC\u110B\u1174-\u1106\u116E\u11AB\u110C\u1166\u110C\u1165\u11B7" aria-hidden="true">#</a> \uC0DD\uC131\uC790\uB97C \uD1B5\uD55C \uAC1D\uCCB4 \uC0DD\uC131\uC758 \uBB38\uC81C\uC810</h3><ul><li>\uD2B9\uC815 \uD544\uB4DC\uB9CC \uBC1B\uC544\uC11C \uAC1D\uCCB4\uB97C \uB9CC\uB4E4\uACE0 \uC2F6\uC740 \uACBD\uC6B0 \uC0DD\uC131\uC790\uB97C \uCD94\uAC00\uD574\uC57C\uD55C\uB2E4.</li><li>\uC0DD\uC131\uC790 \uD638\uCD9C \uCF54\uB4DC\uB9CC \uBCF4\uACE0 \uC5B4\uB5A4 \uD544\uB4DC\uC5D0 \uC5B4\uB5A4 \uAC12\uC774 \uB4E4\uC5B4\uAC00\uB294\uC9C0 \uC54C\uAE30 \uC5B4\uB835\uB2E4.</li></ul><h3 id="setter-\u1112\u1169\u110E\u116E\u11AF\u110B\u1173\u11AF-\u1110\u1169\u11BC\u1112\u1161\u11AB-\u1100\u1162\u11A8\u110E\u1166-\u1109\u1162\u11BC\u1109\u1165\u11BC\u110B\u1174-\u1106\u116E\u11AB\u110C\u1166\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#setter-\u1112\u1169\u110E\u116E\u11AF\u110B\u1173\u11AF-\u1110\u1169\u11BC\u1112\u1161\u11AB-\u1100\u1162\u11A8\u110E\u1166-\u1109\u1162\u11BC\u1109\u1165\u11BC\u110B\u1174-\u1106\u116E\u11AB\u110C\u1166\u110C\u1165\u11B7" aria-hidden="true">#</a> setter \uD638\uCD9C\uC744 \uD1B5\uD55C \uAC1D\uCCB4 \uC0DD\uC131\uC758 \uBB38\uC81C\uC810</h3><ul><li>setter \uBA54\uC11C\uB4DC\uAC00 \uC788\uC73C\uBBC0\uB85C immutable\uC744 \uC9C0\uD0A4\uAE30 \uD798\uB4E4\uB2E4.</li><li>\uC5EC\uB7EC\uBC88 \uD638\uCD9C\uD574\uC57C \uD55C\uB2E4. <br><br><br></li></ul><h2 id="\u1109\u1161\u110B\u116D\u11BC-\u110B\u1168\u110C\u1166" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC-\u110B\u1168\u110C\u1166" aria-hidden="true">#</a> \uC0AC\uC6A9 \uC608\uC81C</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class User {
    private String name;
    private int age;
    private String address;
    private String job;
    private String phone;
	
    public User(String name, int age, String address, String job, String phone) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.job = job;
        this.phone = phone;
    }
    
    public static UserBuilder builder() {
    	return new UserBuilder();
    }
    
    public static class UserBuilder() {
      private String name;
    	private int age;
    	private String address;
    	private String job;
    	private String phone;
		}
        
    public UserBuilder name(String name) {
        this.name = name;
        return this;
    }
    
    public UserBuilder age(int age) {
        this.age = age;
        return this;
    }
    
    public UserBuilder address(String address) {
        this.address = address;
        return this;
    }
    
    public UserBuilder job(String job) {
        this.job = job;
        return this;
    }
    
    public UserBuilder phone(String phone) {
        this.phone = phone;
        return this;
    }
    
    public User build() {
        User user = new User(name, age, address, job, phone)
        return user;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC790\uBC14\uB97C \uC0AC\uC6A9\uD55C\uB2E4\uBA74 Lombok\uC5D0\uC11C @Builder \uC5B4\uB178\uD14C\uC774\uC158\uC744 \uC774\uC6A9\uD558\uC5EC \uBE4C\uB354 \uD328\uD134\uC744 \uC27D\uAC8C \uAD6C\uD604\uD560 \uC218 \uC788\uB2E4.</p>`,13),l=[r];function a(v,u){return i(),n("div",null,l)}var b=e(d,[["render",a],["__file","Builder \uD328\uD134.html.vue"]]);export{b as default};
