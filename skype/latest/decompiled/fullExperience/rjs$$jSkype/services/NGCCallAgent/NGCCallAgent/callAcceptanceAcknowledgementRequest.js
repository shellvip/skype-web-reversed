define("jSkype/services/NGCCallAgent/NGCCallAgent/callAcceptanceAcknowledgementRequest", [
  "require",
  "jSkype/services/NGCCallAgent/NGCCallAgent/utils",
  "jSkype/services/NGCCallAgent/NGCCallAgent/urlBuilder",
  "jSkype/services/NGCCallAgent/NGCCallAgent/constants"
], function (e) {
  var t = e("jSkype/services/NGCCallAgent/NGCCallAgent/utils"), n = e("jSkype/services/NGCCallAgent/NGCCallAgent/urlBuilder"), r = e("jSkype/services/NGCCallAgent/NGCCallAgent/constants"), i = {};
  return i.getPayload = function (e) {
    t.assertNotNull(e, "signalingSession cannot be null");
    var i = {
      payload: {
        callAcceptanceAcknowledgement: {
          links: {
            mediaRenegotiation: n.get(e, r.URL_PATH.MEDIA_RENEGOTIATION),
            transfer: n.get(e, r.URL_PATH.TRANSFER),
            replacement: n.get(e, r.URL_PATH.REPLACE),
            retargetCompletion: n.get(e, r.URL_PATH.RETARGET_COMPLETION)
          }
        },
        debugContent: {
          callId: e.correlationId,
          endpointId: e.participantManager.localParticipant.endpointId,
          participantId: e.participantManager.localParticipant.participantId
        }
      }
    };
    return i;
  }, i;
});
