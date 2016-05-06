define("jSkype/services/NGCCallAgent/NGCCallAgent/telemetryConstants", [], function () {
  return {
    SOURCE: { NGC_SOURCE: "SkypeConcore" },
    EVENT_TYPE: { CONVERSATION_CALL_MODALITY: "skypecosi_concore_web_csa_conversation_callmodality" },
    EXTENSIONS: {
      DATA_VERSION: "DataVersion",
      DIRECTION: "Direction",
      CONNECTED_DURATION_IN_MS: "ConnectedDurationInMsecs",
      TIME_TO_RING_IN_MS: "TimeToRingInMsecs",
      CALL_TERMINATING_END: "CallTerminatingEnd",
      NETWORK_REQUESTS_PENDING: "NetworkRequestsPending",
      NETWORK_REQUESTS_COMPLETED: "NetworkRequestsCompleted",
      LOCAL_OPERATIONS_PERFORMED: "LocalOperationsPerformed",
      CALL_START_TIME: "CallStartTime",
      CALL_END_TIME: "CallEndTime",
      IS_GROUP_CALL: "IsGroupCall",
      CALL_END_CODE: "Code",
      CALL_END_SUB_CODE: "SubCode",
      CONVERSATION_SERVICE_URL: "ConversationServiceUrl",
      RESULT_VALUE: "ResultValue",
      RESULT_DETAIL: "ResultDetail",
      RESULT_CODE: "ResultCode",
      LOCAL_OFFER_ANSWER_TIME_IN_MS: "LocalOfferAnswerTimeInMsecs",
      SELF_PARTICIPANT_ROLE: "SelfParticipantRole",
      CALLER_TYPE: "Caller_Type",
      CALLEE_TYPE: "Callee_Type",
      TEST_CONTEXT_ID: "Test_Context_Id",
      OUTGOING_MODALITIES: "Outgoing_Modalities",
      INCOMING_MODALITIES: "Incoming_Modalities",
      VBSS_OPERATIONS: "VBSS_Operations"
    },
    CONTEXT_ID: {
      CORRELATIONID: "CorrelationId",
      THREADID: "ThreadId",
      SPACES_MESSAGEID: "SkypeSpacesMessageId",
      ENDPOINTID: "EndpointId",
      PARTICIPANTID: "ParticipantId",
      DATA_VERSION: "DataVersion"
    },
    CALL_TERMINATING_END: {
      LOCAL: "Local",
      REMOTE: "Remote"
    },
    RESULT_VALUE: {
      SUCCESS: "Success",
      FAILURE: "Failure"
    },
    NETWORK_REQUESTS: {
      SEND_MEDIA_ANSWER: "SendMediaAnswer",
      START_RENEGOTIATION: "StartRenegotiation",
      SEND_MEDIA_ACKNOWLEDGEMENT: "SendMediaAcknowledgement",
      SEND_MEDIA_REJECTION: "SendMediaRejection",
      ADD_PARTICIPANT: "AddParticipant",
      REMOVE_PARTICIPANT: "RemoveParticipant",
      SEND_ACCEPTANCE: "SendAcceptance",
      SEND_ACCEPTANCE_ACKNOWLEDGEMENT: "SendAcceptanceAcknowledgement",
      END_CALL: "EndCall",
      CANCEL_CALL: "CancelCall",
      REJECT_CALL: "RejectCall",
      JOIN_CONVERSATION: "JoinConversation",
      JOIN_CONVERSATION_WITHOUT_CALL_MODALITY: "JoinConversationWithoutCallModality",
      LEAVE_CONVERSATION: "LeaveConversation",
      PLACE_CALL: "PlaceCall",
      UPDATE_CONVERSATION_LINKS: "UpdateConversationLinks",
      SEND_CALL_ATTACH: "SendCallAttach",
      SEND_CALL_PROGRESS: "SendCallProgress",
      SEND_KEEP_ALIVE: "SendKeepAlive"
    },
    LOCAL_OPERATIONS: {
      HANDLE_MEDIA_ACKNOWLEDGEMENT: "HandleMediaAcknowledgement",
      HANDLE_MEDIA_NEGOTIATION_FAILURE: "HandleMediaNegotiationFailure",
      HANDLE_MEDIA_ANSWER: "HandleMediaAnswer",
      HANDLE_MEDIA_OFFER: "HandleMediaOffer",
      REJECT_RENEGOTIATION: "RejectRenegotiation",
      HANDLE_RETARGET_COMPLETED: "HandleRetargetCompleted",
      HANDLE_MEDIA_ANSWER_TIMEOUT: "HandleMediaAnswerTimeout",
      HANDLE_MEDIA_ACKNOWLEDGEMENT_TIMEOUT: "HandleMediaAcknowledgementTimeout",
      ACCEPT_RENEGOTIATION: "AcceptRenegotiation",
      START_RENEGOTIATION: "StartRenegotiation",
      ADD_PARTICIPANT: "AddParticipant",
      ADD_PARTICIPANT_TIMEOUT: "AddParticipantTimeout",
      REMOVE_PARTICIPANT: "RemoveParticipant",
      REMOVE_PARTICIPANT_TIMEOUT: "RemoveParticipantTimeout",
      HANDLE_ADD_PARTICIPANT_SUCCESS: "HandleAddParticipantSuccess",
      HANDLE_ADD_PARTICIPANT_FAILURE: "HandleAddParticipantFailure",
      HANDLE_ADD_PARTICIPANT_MODALITY_FAILURE: "HandleAddParticipantModalityFailure",
      HANDLE_REMOVE_PARTICIPANT_SUCCESS: "HandleRemoveParticipantSuccess",
      HANDLE_REMOVE_PARTICIPANT_FAILURE: "HandleRemoveParticipantFailure",
      HANDLE_ROSTER_UPDATE: "HandleRosterUpdate",
      HANDLE_CONVERSATION_UPDATE: "HandleConversationUpdate",
      SET_SUBJECT: "SetSubject",
      SET_THREADID: "SetThreadId",
      START_CALL: "StartCall",
      JOIN_CALL: "JoinCall",
      JOIN_CONVERSATION_WITHOUT_CALL_MODALITY: "JoinConversationWithoutCallModality",
      HANDLE_INCOMING_CALL: "HandleIncomingCall",
      END_CALL: "EndCall",
      SET_PROVISIONAL_ANSWER: "SetProvisionalAnswer",
      ACCEPT_CALL: "AcceptCall",
      HANDLE_CALL_ACCEPTANCE_ACK: "HandleCallAcceptanceAck",
      HANDLE_CALL_ACCEPTANCE: "HandleCallAcceptance",
      HANDLE_CALL_ESTABLISHMENT_TIMEOUT: "HandleCallEstablishmentTimeout",
      HANDLE_CALL_END: "HandleCallEnd",
      HANDLE_CALL_PROGRESS: "HandleCallProgress",
      TROUTER_URL_CHANGED: "TrouterUrlChanged"
    },
    DIRECTION: {
      INCOMING: "Incoming",
      OUTGOING: "Outgoing"
    },
    ROLE: {
      CALLER: "Caller",
      CALLEE: "Callee",
      JOIN: "Join",
      JOIN_FOR_ROSTER_ONLY: "JoinForRosterOnly"
    },
    VBSS_OPERATION: {
      START: "Start",
      STOP: "Stop",
      REJECTED: "Rejected",
      REMOTE_START: "RemoteStart",
      TIMEOUT: "Timeout",
      CALL_END: "CallEnd"
    },
    LOCAL_OFFER_ANSWER_TIMES: {
      INITIAL_OFFER_TIME: "InitialOfferTime",
      RENEGOTIATION_OFFER_TIME: "RenegotiationOfferTime",
      INITIAL_ANSWER_TIME: "InitialAnswerTime",
      PROVISIONAL_ANSWER_TIME: "ProvisionalAnswerTime",
      RENEGOTIATION_ANSWER_TIME: "RenegotiationAnswerTime"
    }
  };
})