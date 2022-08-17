import { useAccount } from 'wagmi';

function useShortAddress(): string | undefined {
  const { address } = useAccount();

  return address
    ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
    : undefined;
}

export default useShortAddress;
