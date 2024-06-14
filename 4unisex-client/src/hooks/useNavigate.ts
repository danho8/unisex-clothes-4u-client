import { useRouter } from "next/navigation";

const useNavigation = () => {
  const router = useRouter();

  const navigateTo = (path: string): void => {
    router.push(path, { scroll: false });
  };

  return { navigateTo };
};

export default useNavigation;
