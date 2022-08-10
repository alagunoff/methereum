import { useEthers, useCall, useContractFunction } from '@usedapp/core';
import { ethers } from 'ethers';

import contract from '../index';

function usePublicSaleMint() {
  const { account, library } = useEthers();
  const signer = library?.getSigner(account);

  const { value: getSignatureCheckerContractAddressResponse } =
    useCall(
      account && {
        contract: contract.instance,
        method:
          contract.publicSale.methods.read.getSignatureCheckerContractAddress,
        args: [],
      },
    ) ?? {};
  const { send } = useContractFunction(
    contract.instance,
    contract.publicSale.methods.write.mint,
  );

  async function mint(tokensNumber: number, cost: number) {
    if (
      signer &&
      getSignatureCheckerContractAddressResponse &&
      tokensNumber > 0
    ) {
      const signatureCheckerContractAddress =
        getSignatureCheckerContractAddressResponse[0];
      const signedSignatureCheckerContractAddress = await signer.signMessage(
        ethers.utils.arrayify(signatureCheckerContractAddress),
      );

      return send(tokensNumber, signedSignatureCheckerContractAddress, {
        value: ethers.utils.parseEther(String(cost)),
      });
    }

    return undefined;
  }

  return {
    mint,
  };
}

export default usePublicSaleMint;
