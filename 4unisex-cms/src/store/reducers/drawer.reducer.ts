interface LoadingState {
    isLoading: boolean;
  }
  
  const initialState: LoadingState = {
    isLoading: false,
  };
  
  interface BaseAction {
    type: string;
  }
  
  type LoadingAction = BaseAction;
  
  export const showLoading = () => ({
    type: "SHOW_LOADING" as const,
  });
  
  export const hideLoading = () => ({
    type: "HIDE_LOADING" as const,
  });
  
  export default function slideDrawer(
    state: LoadingState = initialState,
    action: LoadingAction
  ): LoadingState {
    switch (action.type) {
      case "SHOW_LOADING":
        return { ...state, isLoading: true };
      case "HIDE_LOADING":
        return { ...state, isLoading: false };
      default:
        return state;
    }
  }
  