var qr = null;

var vm = new Vue({
    el: '#app',
    data: {
        link: 'https://www.frontendmentor.io/',
        title: 'Improve your front-end skills by building projects',
        description: 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level',
        btn_messages: {
            generate: 'Share generator',
            loading: 'Generating',
            update: 'Update link',
            thanks: 'Thank you!',
        },
        btn_text: '',
        language: {
            meta: {
                title: "QR-Code Generator"
            },
            content: {
                title: "Generate your own QR-Code, for free!",
                subtitle: "Fill out the form and your QR-Code will be automatically generated."
            },
            labels: {
                link: "Link (required)",
                title: "Title (optional)",
                description: "Description (optional)"
            },
            inputs: {
                link: "https://github.com/nathabonfim59",
                title: "Improve your front-end skills by building projects",
                description: "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
            },
            buttons: {
                share: "Share",
                share_message: "Did you like it? Share it and help others as well!",
                copy_image: "Copy QR-Code",
                copy_link: "Copy",
                thank_you: "Thanks for sharing!"
            }
        },
        status: {
            loading: false,
            link_generated: false,
        },
        project_link: window.location.href,
    },
    mounted: function() {
        this.generateQrCode();
        this.btn_text = this.btn_messages.generate;
        this.setLanguage(navigator.language);
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
            this.status.link_generated = true;
            this.btn_text = this.btn_messages.thanks;
        },
        copyImage: async function() {
            const qrCodeCanvas = document.getElementById('qr-code');

            qrCodeCanvas.toBlob(function(blob) {
                const item = new ClipboardItem({ "image/png": blob });
                navigator.clipboard.write([item]); 
            });
        },
        copyLink: async function() {
            await navigator.clipboard.writeText(this.project_link)
        },
        async setLanguage(languageCode) {
            const languageFile = languageCode.replace(/-/, '_');

            const response = await fetch('/js/languages/' + languageFile + '.json');
            const json = await response.json();
            this.language = json;

            this.title = this.language.inputs.title;
            this.link = this.language.inputs.link;
            this.description = this.language.inputs.description;
        }
    },
    watch: {
        link: function() {
            this.updateQrCode();
        }
    }
});

