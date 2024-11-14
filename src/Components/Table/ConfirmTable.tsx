import css from "./style.module.css";

type ConfirmPopupProps = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  isOpen: boolean;
};
export const ConfirmTable = ({
  message,
  onConfirm,
  onCancel,
  isOpen,
}: ConfirmPopupProps) => {
  if (isOpen) return null;

  return (
    <div className={css["overlay"]}>
      <div className={css["popup"]}>
        <p>{message}</p>
        <div>
          <button onClick={onConfirm} className={css["button"]}>
            Confirm
          </button>
          <button onClick={onCancel} className={css["button"]}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
