const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'SET_MODAL_STATE':
        return { ...state, modalState: action.payload };
      case 'CLOSE_MODAL':
        return { ...state, modalState: 'closed' };
      default:
        return state;
    }
  };

export default reducer;
