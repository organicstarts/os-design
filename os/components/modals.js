import Master from "./index"

export default class Modals extends Master {

    constructor() {
        super();
    }

    Modal(target, options) {
        this.$(target).modal(options)
    }

    Create(id, options) {
        // size: sm | md | lg
        // centered: true | false
        // header: text
        // body: html text
        var size = options.size ? `-${options.size}` : null
        this.$("body").prepend(`
            <div class="modal fade" id="${id}" tabindex="-1" role="dialog" aria-labelledby="${id}Title" aria-hidden="true">
                <div class="modal-dialog modal${size}${options.centered ? ' modal-dialog-centered' : null}" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="${id}Title">${options.header}</h5>
                        </div>
                        <div class="modal-body">
                            ${options.body}
                        </div>
                    </div>
                </div>
            </div>
        `);
    }

    CountryModal() {
        var $ = this.$
        $.get("https://ipapi.co/json").then(res => {
            if (res.country === "US") {
                this.Create("alertModalCenter", {
                    size: 'lg',
                    centered: true,
                    header: 'These products are unavailable in your country.',
                    body: `<p>Thank you for your interest however these products are not approved for retail in your country. While these formulas do meet rigorous European Union (EU) quality standards and nutritional requirements, the importation of these products do not comply with your country's regulations. We know this comes as a grave disappointment to many of you and we sincerely apologize for any inconvenience. We understand that this may especially difficult for those of you who rely on these products.</p><p>For further information, please refer to <a href="http://alert.organicstart.com/">our public alert</a>.</p>`
                })
                this.Modal("#alertModalCenter", {
                    backdrop: "static",
                    keyboard: false
                })
            }
        })
    }
}