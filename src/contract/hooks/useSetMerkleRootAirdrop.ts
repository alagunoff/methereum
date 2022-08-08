import { useContractWriteMethod } from 'etherium/hooks';
import contract from 'contract';

function useSetMerkleRootAirdrop() {
  const write = useContractWriteMethod(
    contract.methods.write.setMerkleRootAirDrop,
    contract.airdropMerkleTree.getHexRoot(),
  );

  return write;
}

export default useSetMerkleRootAirdrop;
