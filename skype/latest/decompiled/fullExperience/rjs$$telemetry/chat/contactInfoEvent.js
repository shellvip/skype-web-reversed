define("telemetry/chat/contactInfoEvent", [
  "require",
  "exports",
  "module",
  "experience/settings",
  "constants/common",
  "ui/telemetry/telemetryClient",
  "telemetry/chat/telemetryEnumerator",
  "ui/modelHelpers/personHelper"
], function (e, t) {
  function a(e) {
    var t = e.person;
    return {
      state: f(t),
      hasDisplayName: l(t),
      contactType: c(t),
      participantsCount: e.participantsCount,
      participantsCountGroup: o.getParticipantCountGroup(e.participantsCount),
      timeInStale: e.timeInStale,
      timeInStaleGroup: o.getMessageLifeDurationGroup(new Date() - e.timeInStale),
      actionName: e.actionName
    };
  }
  function f(e) {
    return u.isKnownPerson(e) ? "EXISTING" : "NEW";
  }
  function l(e) {
    return e.displayName() !== e.id();
  }
  function c(e) {
    return u.isPstn(e) ? "PSTN" : "SKYPE";
  }
  function h(e) {
    var t = i.TYPE, r = a(e);
    s.get().sendEvent(n.telemetry.uiTenantToken, t, r);
  }
  var n = e("experience/settings"), r = e("constants/common"), i = r.telemetry.contactInfo, s = e("ui/telemetry/telemetryClient"), o = e("telemetry/chat/telemetryEnumerator"), u = e("ui/modelHelpers/personHelper");
  t.publishShowEvent = function (e) {
    return e.actionName = i.action.SHOW, h(e);
  };
  t.publishActionEvent = function (e) {
    return e.actionName = i.action.CLICK, h(e);
  };
});
