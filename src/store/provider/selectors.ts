import { RootState } from 'store';

function selectFetchProviderRequestState(state: RootState) {
  return state.provider.api.fetchProvider;
}

export { selectFetchProviderRequestState };
