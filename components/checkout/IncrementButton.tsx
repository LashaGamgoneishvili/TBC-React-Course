"use client";
import { incrementItemAmount } from "../../actions";
import { useAppContext } from "../../app/context";
interface Props {
  productId: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}
function IncrementButton({ productId, setQuantity }: Props) {
  const { setState } = useAppContext();

  function handleSetNewAmount() {
    setQuantity((quantity) => quantity + 1);
    incrementItemAmount(productId);
    setState((prev: number) => prev + 1);
  }
  return (
    <button
      className="  text-md  border-gray dark:border-white w-8 border"
      onClick={() => handleSetNewAmount()}
    >
      &#10010;
    </button>
  );
}

export default IncrementButton;
