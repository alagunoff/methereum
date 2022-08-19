import { useContractEvent } from 'wagmi';

import contract from '../contract';

function useEvent(eventName: string, listener: any) {
  useContractEvent({
    addressOrName: contract.address,
    contractInterface: contract.interface,
    eventName,
    listener,
  });
}

export default useEvent;
