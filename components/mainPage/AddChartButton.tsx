import { addCartFunction } from "../../actions";
import { useAppContext } from "../../app/context";

export default function AddCartButton({
  productId,
  role,
}: {
  productId: number;
  role: string[] | unknown;
}) {
  const { state, setState } = useAppContext();

  let roleArr: string[] = [];
  if (Array.isArray(role)) {
    roleArr = [...role];
    console.log("roleArr", roleArr);
  }

  function handleAddButton() {
    if (roleArr[0] !== "admin") {
      console.log(state);
      addCartFunction(productId);
      setState((prev: number) => Number(prev) + 1);
    } else {
      alert("Admin cann't add product in cart");
    }
  }

  return (
    <button
      className="text-xl text-white dark:text-black "
      onClick={handleAddButton}
    >
      Add to cart
    </button>
  );
}
