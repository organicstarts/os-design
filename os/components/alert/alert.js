import $ from "jquery"

export function alert() {
    $.get("https://ipapi.co/8.8.8.8/json/").then(res => {
        if (res.country === "US") {
          $("body").append(`
              <div class="modal fade" id="alertModalCenter" tabindex="-1" role="dialog" aria-labelledby="alertModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h5 class="modal-title" id="alertModalLongTitle">These products are unavailable in your country.</h5>
                          </div>
                          <div class="modal-body">
                              <p>Thank you for your interest however these products are not approved for retail in your country. While these formulas do meet rigorous European Union (EU) quality standards and nutritional requirements, the importation of these products do not comply with your country's regulations. We know this comes as a grave disappointment to many of you and we sincerely apologize for any inconvenience. We understand that this may especially difficult for those of you who rely on these products.</p>
                              <p>For further information, please refer to <a href="http://alert.organicstart.com/">our public alert</a>.</p>
                          </div>
                      </div>
                  </div>
              </div>
          `);
          $("#alertModalCenter").modal({
            backdrop: "static",
            keyboard: false
          });
        }
      });
}