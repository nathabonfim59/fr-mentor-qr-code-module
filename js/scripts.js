var qr = null;

var vm = new Vue({
    el: '#app',
    data: {
        link: 'https://www.frontendmentor.io/',
        title: 'Improve your front-end skills by building projects',
        description: 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level',
        btn_messages: {
            generate: 'Generate link',
            loading: 'Generating',
            update: 'Update link',
        },
        btn_text: '',
        status: {
            loading: false,
            link_generated: false,
        }
    },
    mounted: function() {
        this.generateQrCode();
        this.btn_text = this.btn_messages.generate;
    },
    methods: {
        generateQrCode: function () {
            qr = new QRious({
                element: document.getElementById('qr-code'),
                value: app.link,
                background: 'transparent',
                foreground: '#021A3E',
                size: 500,
            });
        },
        updateQrCode: function() {
            qr.value = this.link
        },
        generateLink: function() {
            this.status.loading = true;
            this.btn_text = this.btn_messages.loading;
        }
    },
    watch: {
        link: function() {
            this.updateQrCode();
        }
    }
});

