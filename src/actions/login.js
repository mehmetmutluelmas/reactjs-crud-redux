
export const VISIBLE = "VISIBLE";

export function effect(visibleStatus){
  return dispatch => {
    dispatch({
      type: VISIBLE,
      payload: {
        visible: visibleStatus
      }
    })

  }
} 