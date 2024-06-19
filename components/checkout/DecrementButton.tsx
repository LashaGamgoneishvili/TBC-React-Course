import { decrementCart } from "../../actions";
import { useAppContext } from "../../app/context";
interface Props {
  productId: number;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  price: number;
}

export default function DecrementButton({
  productId,
  quantity,
  setQuantity,
  setTotal,
  price,
}: Props) {
  const { setState } = useAppContext();

  function handleDecrementAmount() {
    decrementCart(productId);
    setQuantity((quantity) => quantity - 1);
    setState((prev: number) => prev - 1);
    setTotal((prev) => prev - price);
  }

  return (
    <button
      className="  text-md border-gray dark:border-white border w-8 "
      disabled={Number(quantity) === 1}
      onClick={() => handleDecrementAmount()}
    >
      &#9866;
    </button>
  );
}
