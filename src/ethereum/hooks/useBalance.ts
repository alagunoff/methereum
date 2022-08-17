import { useAccount, useBalance as useUserBalance } from 'wagmi';

function useBalance(): number | undefined {
  const { address } = useAccount();
  const { data } = useUserBalance({ addressOrName: address });

  return data ? Number(Number(data.formatted).toFixed(4)) : undefined;
}

export default useBalance;
