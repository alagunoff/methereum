import { useAccount, useBalance as useUserBalance } from 'wagmi';

function useBalance(): number | undefined {
  const { address } = useAccount();
  const { data: balance } = useUserBalance({
    addressOrName: address,
  });

  return balance ? Number(balance.formatted) : undefined;
}

export default useBalance;
