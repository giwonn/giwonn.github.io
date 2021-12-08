<template>
    <div id="darass"
    data-project-key="LfcOiagSmVVa8wO498" 
    data-dark-mode="false"
    data-primary-color="#10DF99"
    data-show-sort-option="true"
    data-allow-social-login="true"
    data-show-logo="true"
    >
    <noscript>다라쓰 댓글 작성을 위해 JavaScript를 활성화 해주세요</noscript>
    </div>
</template>
<script>
export default {
    methods: {
        darass() {
            var $document = document;

            var $script = $document.createElement("script");
            $script.src = "https://reply-module.darass.co.kr/embed.js";
            $script.defer = true;

            $document.head.appendChild($script);
        }
    },
    mounted() {
        this.darass();
    }
}
</script>
