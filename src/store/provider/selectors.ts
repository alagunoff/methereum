import { RootState } from 'store';

function selectInitProviderRequestState(state: RootState) {
  return state.provider.api.initProvider;
}

export { selectInitProviderRequestState };
