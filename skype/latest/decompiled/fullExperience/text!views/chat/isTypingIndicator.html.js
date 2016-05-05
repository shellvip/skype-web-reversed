define("text!views/chat/isTypingIndicator.html", [], function () {
  return "<div class=\"typing\" data-bind=\"css: { active: typingParticipantsCount() > 0 }\">\r\n    <!-- ko if: isFeatureOn -->\r\n        <div class=\"grid margin\">\r\n            <div class=\"indicator\">\r\n                <swx-avatar-deprecated params=\"avatar: avatar\" class=\"avatar\"></swx-avatar-deprecated>\r\n                <span class=\"text\">\r\n                    <p class=\"small\" data-bind=\"html: isTypingLabel\"></p>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    <!-- /ko -->\r\n</div>\r\n";
})