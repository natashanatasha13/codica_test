export const createAsyncActions = <
  RPayload,
  SPayload,
  FPayload,
  ActionType extends string
>(
  actionType: ActionType
) => {
  const requestType = `${actionType}_REQUEST` as `${ActionType}_REQUEST`;
  const successType = `${actionType}_SUCCESS` as `${ActionType}_SUCCESS`;
  const failedType = `${actionType}_FAILED` as `${ActionType}_FAILED`;

  return {
    REQUEST: (payload: RPayload) => ({
      type: requestType,
      payload,
    }),
    SUCCESS: (payload: SPayload) => ({
      type: successType,
      payload,
    }),
    FAILED: (payload: FPayload) => ({
      type: failedType,
      payload,
    }),
    types: {
      REQUEST: requestType,
      SUCCESS: successType,
      FAILED: failedType,
    },
  };
};
