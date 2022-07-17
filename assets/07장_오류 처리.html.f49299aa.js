import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as a}from"./app.404da4f0.js";const r={},l=a(`<h1 id="_7\u110C\u1161\u11BC-\u110B\u1169\u1105\u1172-\u110E\u1165\u1105\u1175" tabindex="-1"><a class="header-anchor" href="#_7\u110C\u1161\u11BC-\u110B\u1169\u1105\u1172-\u110E\u1165\u1105\u1175" aria-hidden="true">#</a> 7\uC7A5. \uC624\uB958 \uCC98\uB9AC</h1><h2 id="\u110B\u1169\u1105\u1172-\u110F\u1169\u1103\u1173\u1107\u1169\u1103\u1161-\u110B\u1168\u110B\u116C\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1105\u1161" tabindex="-1"><a class="header-anchor" href="#\u110B\u1169\u1105\u1172-\u110F\u1169\u1103\u1173\u1107\u1169\u1103\u1161-\u110B\u1168\u110B\u116C\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1105\u1161" aria-hidden="true">#</a> \uC624\uB958 \uCF54\uB4DC\uBCF4\uB2E4 \uC608\uC678\uB97C \uC0AC\uC6A9\uD558\uB77C</h2><h2 id="try-catch-finally-\u1106\u116E\u11AB\u1107\u116E\u1110\u1165-\u110C\u1161\u11A8\u1109\u1165\u11BC\u1112\u1161\u1105\u1161" tabindex="-1"><a class="header-anchor" href="#try-catch-finally-\u1106\u116E\u11AB\u1107\u116E\u1110\u1165-\u110C\u1161\u11A8\u1109\u1165\u11BC\u1112\u1161\u1105\u1161" aria-hidden="true">#</a> Try-Catch-Finally \uBB38\uBD80\uD130 \uC791\uC131\uD558\uB77C</h2><p>try \uBE14\uB85D\uC740 \uD2B8\uB79C\uC7AD\uC158\uACFC \uBE44\uC2B7\uD558\uB2E4.</p><p>try \uBE14\uB85D\uC5D0\uC11C \uBB34\uC2A8 \uC77C\uC774 \uC0DD\uAE30\uB4E0\uC9C0 catch \uBE14\uB85D\uC740 \uD504\uB85C\uADF8\uB7A8 \uC0C1\uD0DC\uB97C \uC77C\uAD00\uC131 \uC788\uAC8C \uC720\uC9C0\uD574\uC57C \uD55C\uB2E4.</p><ol><li><strong>\uC77C\uB2E8 \uD14C\uC2A4\uD2B8\uCF54\uB4DC\uB97C \uC791\uC131\uD55C\uB2E4.</strong></li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>@Test(expected = StoargeException.class)
public void retrieveSectionShouldThrowOnInvalidFileName() {
    sectionStore.retrieveSection(&quot;invalid - file&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>\uD14C\uC2A4\uD2B8\uCF54\uB4DC\uC5D0 \uB9DE\uCDB0 \uB2E4\uC74C \uCF54\uB4DC\uB97C \uAD6C\uD604\uD55C\uB2E4.</strong></li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public List&lt;RecordedGrip&gt; retrieveSection(String sectionName) {
    return new ArrayList&lt;RecordedGrip&gt;();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>\uC608\uC678\uB97C \uB358\uC9C0\uAC8C \uCF54\uB4DC\uB97C \uC218\uC815\uD55C\uB2E4.</strong></li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public List&lt;RecordGrip&gt; retrieveSection(String sectionName) {
    try {
        FileinputStream stream = new FileInputStream(sectionName)
    } catch (Exception e) {
        throw new StorageException(&quot;retrieval error&quot;, e);
    }
    return new ArrayList&lt;RecordedGrip&gt;()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><strong>catch\uC758 \uC608\uC678 \uC720\uD615\uC744 \uC881\uD600 \uC2E4\uC81C\uB85C FileInputStream \uC0DD\uC131\uC790\uAC00 \uB358\uC9C0\uB294 \uC608\uC678\uB97C \uC7A1\uC544\uB0B4\uC790.</strong></li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public List&lt;RecordGrip&gt; retrieveSection(String sectionName) {
    try {
        FileinputStream stream = new FileInputStream(sectionName)
    } catch (FileNotFoundException e) {
        throw new StorageException(&quot;retrieval error&quot;, e);
    }
    return new ArrayList&lt;RecordedGrip&gt;()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uB807\uAC8C \uD558\uBA74 try\uBB38\uC5D0 \uB4E4\uC5B4\uAC00\uC57C\uD558\uB294 \uD544\uC218 \uB85C\uC9C1\uC744 \uBA85\uD655\uD788 \uBD84\uB9AC\uD558\uC5EC \uAD6C\uD604\uD560 \uC218 \uC788\uB2E4.</p><h2 id="\u1106\u1175\u1112\u116A\u11A8\u110B\u1175\u11AB-\u110B\u1168\u110B\u116C\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1105\u1161" tabindex="-1"><a class="header-anchor" href="#\u1106\u1175\u1112\u116A\u11A8\u110B\u1175\u11AB-\u110B\u1168\u110B\u116C\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1105\u1161" aria-hidden="true">#</a> \uBBF8\uD655\uC778 \uC608\uC678\uB97C \uC0AC\uC6A9\uD558\uB77C</h2><p>\uC608\uC678\uB97C \uC0C1\uC704\uB85C throw\uD560 \uACBD\uC6B0, \uD558\uC704 \uB2E8\uACC4\uC758 \uCF54\uB4DC\uB97C \uC218\uC815\uD558\uBA74 \uC0C1\uC704\uC5D0\uC11C \uC7A1\uC544\uC57C \uD560 \uC608\uC678\uAC00 \uB298\uC5B4\uB09C\uB2E4.</p><p>\uB9CC\uC57D\uC5D0 \uD655\uC778\uB41C \uC608\uC678\uB97C \uD558\uB098\uD558\uB098 \uC804\uBD80 \uC7A1\uAC8C \uD574\uB193\uC558\uB294\uB370 \uD558\uC704 \uCF54\uB4DC\uB97C \uC218\uC815\uD55C\uB2E4\uBA74, \uC0C8\uB85C\uC6B4 \uC608\uC678\uB97C \uCD94\uAC00\uD574\uC57C\uD560 \uC218\uB3C4 \uC788\uB2E4.</p><p>\uACB0\uACFC\uC801\uC73C\uB85C \uCD5C\uD558\uC704\uC5D0\uC11C \uCD5C\uC0C1\uC704 \uB2E8\uACC4\uAE4C\uC9C0 \uC5F0\uC1C4\uC801\uC778 \uC218\uC815\uC774 \uC77C\uC5B4\uB09C\uB2E4.</p><p>\uC989, \uCD5C\uD558\uC704 \uD568\uC218\uC5D0\uC11C \uB358\uC9C0\uB294 \uC608\uC678\uB97C \uBAA8\uB450 \uC54C\uC544\uC57C \uD558\uBBC0\uB85C \uCEA1\uC290\uD654\uAC00 \uAE68\uC9C4\uB2E4.</p><p>\uC774\uB7F4 \uACBD\uC6B0\uC5D0\uB294 \uD655\uC778\uB41C \uC624\uB958\uB97C \uC218\uC815 \uD639\uC740 \uCD94\uAC00\uD558\uB294 \uBE44\uC6A9\uC774 \uCEE4\uC9C8 \uC218\uB3C4 \uC788\uB2E4.</p><p>\uC624\uB958\uB97C \uD655\uC778\uD558\uB294 \uBE44\uC6A9\uC774 \uCEE4\uC9C8\uC9C0, \uCF54\uB4DC \uC218\uC815 \uBE44\uC6A9\uC774 \uCEE4\uC9C8\uC9C0\uB294 \uADF8\uB54C\uADF8\uB54C \uC0DD\uAC01\uD574\uBD10\uC57C \uD55C\uB2E4.</p><h2 id="\u110B\u1168\u110B\u116C\u110B\u1166-\u110B\u1174\u1106\u1175\u1105\u1173\u11AF-\u110C\u1166\u1100\u1169\u11BC\u1112\u1161\u1105\u1161" tabindex="-1"><a class="header-anchor" href="#\u110B\u1168\u110B\u116C\u110B\u1166-\u110B\u1174\u1106\u1175\u1105\u1173\u11AF-\u110C\u1166\u1100\u1169\u11BC\u1112\u1161\u1105\u1161" aria-hidden="true">#</a> \uC608\uC678\uC5D0 \uC758\uBBF8\uB97C \uC81C\uACF5\uD558\uB77C</h2><p>\uC608\uC678\uB97C \uB358\uC9C8 \uB54C\uB294 \uC804\uD6C4 \uC0C1\uD669\uC744 \uCDA9\uBD84\uD788 \uB367\uBD99\uC778\uB2E4.</p><p>\uC989, \uC624\uB958 \uBA54\uC2DC\uC9C0\uC5D0 \uC815\uBCF4\uB97C \uB2F4\uC544 \uC608\uC678\uC640 \uD568\uAED8 \uB358\uC9C0\uC790.</p><h2 id="\u1112\u1169\u110E\u116E\u11AF\u110C\u1161\u1105\u1173\u11AF-\u1100\u1169\u1105\u1167\u1112\u1162-\u110B\u1168\u110B\u116C-\u110F\u1173\u11AF\u1105\u1162\u1109\u1173\u1105\u1173\u11AF-\u110C\u1165\u11BC\u110B\u1174\u1112\u1161\u1105\u1161" tabindex="-1"><a class="header-anchor" href="#\u1112\u1169\u110E\u116E\u11AF\u110C\u1161\u1105\u1173\u11AF-\u1100\u1169\u1105\u1167\u1112\u1162-\u110B\u1168\u110B\u116C-\u110F\u1173\u11AF\u1105\u1162\u1109\u1173\u1105\u1173\u11AF-\u110C\u1165\u11BC\u110B\u1174\u1112\u1161\u1105\u1161" aria-hidden="true">#</a> \uD638\uCD9C\uC790\uB97C \uACE0\uB824\uD574 \uC608\uC678 \uD074\uB798\uC2A4\uB97C \uC815\uC758\uD558\uB77C</h2><p>\uD504\uB85C\uADF8\uB798\uBA38\uC5D0\uAC8C \uAC00\uC7A5 \uC911\uC694\uD55C \uAD00\uC2EC\uC0AC\uB294 <strong>\uC624\uB958\uB97C \uC7A1\uC544\uB0B4\uB294 \uBC29\uBC95</strong>\uC774 \uB418\uC5B4\uC57C \uD55C\uB2E4.</p><p>try/catch\uBB38\uC744 \uB2E4\uB978 \uD074\uB798\uC2A4(\uC678\uBD80 API)\uB85C \uAC10\uC2F8\uC8FC\uBA74 \uC758\uC874\uC131\uC774 \uD06C\uAC8C \uC904\uC5B4\uB4E0\uB2E4.</p><ul><li><strong>before</strong></li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>LocalPort port = new ACMEPort(12);
try {
    port.open()
} catch {DeviceResponseException e) {
    reportPortError(e);
    logger.log(&quot;Device response exception&quot;, e)
} catch (ATM1212UnlockedException e) {
    reportPortError(e);
    logger.log(&quot;Unlock exception&quot;, e)
} catch (GMXError e) {
    reportPortError(e);
    logger.log(&quot;Device response exception&quot;, e)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>after</strong></li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class LocalPort {
    private ACMEPort innerPort;

    public LocalPort(int portNumber) {
        innerPort = new ACMEPort(portNumber);
    }

    public void open() {
        try {
            port.open()
        } catch {DeviceResponseException e) {
            reportPortError(e);
            logger.log(&quot;Device response exception&quot;, e)
        } catch (ATM1212UnlockedException e) {
            reportPortError(e);
            logger.log(&quot;Unlock exception&quot;, e)
        } catch (GMXError e) {
            reportPortError(e);
            logger.log(&quot;Device response exception&quot;, e)
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>LocalPort port = new LocalPort(12);
try {
    port.open();
} catch (PortDeviceFailure e) {
    reportError(e);
    logger.log(e.getMessage(), e);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uB807\uAC8C \uAC10\uC2F8\uBA74 \uD2B9\uC815 \uC5C5\uCCB4\uAC00 \uC124\uACC4\uD55C API \uBC29\uC2DD\uC5D0 \uBC1C\uBAA9 \uC7A1\uD788\uC9C0 \uC54A\uB294\uB2E4.</p><h2 id="\u110C\u1165\u11BC\u1109\u1161\u11BC-\u1112\u1173\u1105\u1173\u11B7\u110B\u1173\u11AF-\u110C\u1165\u11BC\u110B\u1174\u1112\u1161\u1105\u1161" tabindex="-1"><a class="header-anchor" href="#\u110C\u1165\u11BC\u1109\u1161\u11BC-\u1112\u1173\u1105\u1173\u11B7\u110B\u1173\u11AF-\u110C\u1165\u11BC\u110B\u1174\u1112\u1161\u1105\u1161" aria-hidden="true">#</a> \uC815\uC0C1 \uD750\uB984\uC744 \uC815\uC758\uD558\uB77C</h2><h3 id="\u1110\u1173\u11A8\u1109\u116E-\u1109\u1161\u1105\u1168-\u1111\u1162\u1110\u1165\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1110\u1173\u11A8\u1109\u116E-\u1109\u1161\u1105\u1168-\u1111\u1162\u1110\u1165\u11AB" aria-hidden="true">#</a> \uD2B9\uC218 \uC0AC\uB840 \uD328\uD134</h3><p>\uD074\uB77C\uC774\uC5B8\uD2B8\uAC00 \uC608\uC678\uCC98\uB9AC\uB97C \uD560 \uD544\uC694 \uC5C6\uAC8C \uD074\uB798\uC2A4\uB098 \uAC1D\uCCB4\uAC00 \uC608\uC678\uC0C1\uD669\uC744 \uCEA1\uC290\uD654\uD55C\uB2E4.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>try {
    MealExpenses expenses = expenseReportDAO.getMeals(employee.getID());
    m_total += expanses.getTotal()
} catch(MealExpansesNotFound e) {
    m_total += getMealPerDiem();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>MealExpenses expenses = expenseReportDAO.getMeals(employee.getID());
m_total += expanses.getTotal()

////////////////////////////////////////////////////////

public class PerDiemMealExpenses implemens MealExpenses {
    public int getTotal() {
        // \uAE30\uBCF8\uAC12\uC73C\uB85C \uC77C\uC77C \uAE30\uBCF8 \uC2DD\uBE44\uB97C \uBC18\uD658\uD55C\uB2E4.
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="null\u110B\u1173\u11AF-\u1107\u1161\u11AB\u1112\u116A\u11AB\u1112\u1161\u110C\u1175-\u1106\u1161\u1105\u1161" tabindex="-1"><a class="header-anchor" href="#null\u110B\u1173\u11AF-\u1107\u1161\u11AB\u1112\u116A\u11AB\u1112\u1161\u110C\u1175-\u1106\u1161\u1105\u1161" aria-hidden="true">#</a> null\uC744 \uBC18\uD658\uD558\uC9C0 \uB9C8\uB77C</h2><p>null \uB300\uC2E0 \uBE48 \uB9AC\uC2A4\uD2B8\uB97C \uBC18\uD658\uD558\uB358\uAC00 \uD558\uB294 \uBC29\uC2DD\uC73C\uB85C NullPointerException\uC744 \uBC29\uC9C0\uD560 \uC218 \uC788\uB2E4.</p><h2 id="null\u110B\u1173\u11AF-\u110C\u1165\u11AB\u1103\u1161\u11AF\u1112\u1161\u110C\u1175-\u1106\u1161\u1105\u1161" tabindex="-1"><a class="header-anchor" href="#null\u110B\u1173\u11AF-\u110C\u1165\u11AB\u1103\u1161\u11AF\u1112\u1161\u110C\u1175-\u1106\u1161\u1105\u1161" aria-hidden="true">#</a> null\uC744 \uC804\uB2EC\uD558\uC9C0 \uB9C8\uB77C</h2><p>\uBA54\uC11C\uB4DC\uB85C null\uC744 \uC804\uB2EC\uD558\uB294 \uBC29\uC2DD\uC740 null\uC744 \uBC18\uD658\uD558\uB294 \uAC83\uBCF4\uB2E4 \uB354 \uB098\uC058\uB2E4.</p><p>\uC560\uCD08\uC5D0 null\uC744 \uB118\uAE30\uC9C0 \uBABB\uD558\uB3C4\uB85D \uAE08\uC9C0\uD558\uB294 \uC815\uCC45\uC774 \uAC00\uC7A5 \uD569\uB9AC\uC801\uC774\uB2E4.</p><p>\uC774\uB7F0 \uC815\uCC45\uC744 \uB530\uB974\uBA74 \uADF8\uB9CC\uD07C \uBD80\uC8FC\uC758\uD55C \uC2E4\uC218\uB97C \uC800\uC9C0\uB97C \uD655\uB960\uB3C4 \uC791\uC544\uC9C4\uB2E4.</p><h2 id="\u1100\u1167\u11AF\u1105\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1100\u1167\u11AF\u1105\u1169\u11AB" aria-hidden="true">#</a> \uACB0\uB860</h2><p>\uC624\uB958 \uCC98\uB9AC\uB97C \uD504\uB85C\uADF8\uB7A8 \uB17C\uB9AC\uC640 \uBD84\uB9AC\uD558\uBA74 \uB3C5\uB9BD\uC801\uC778 \uCD94\uB860\uC774 \uAC00\uB2A5\uD574\uC9C0\uBA70 \uCF54\uB4DC \uC720\uC9C0\uBCF4\uC218\uC131\uB3C4 \uD06C\uAC8C \uB192\uC544\uC9C4\uB2E4.</p>`,46),s=[l];function d(t,c){return i(),n("div",null,s)}var u=e(r,[["render",d],["__file","07\uC7A5_\uC624\uB958 \uCC98\uB9AC.html.vue"]]);export{u as default};
