import "./glass.css";

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
    <div style={overlayStyles} className="glass">
      <div style={popupStyles}>
        <p>{message}</p>
        <div>
          <button onClick={onConfirm} style={buttonStyles}>
            Confirm
          </button>
          <button onClick={onCancel} style={buttonStyles}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

// Styles
const overlayStyles: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "999",
};

const popupStyles: React.CSSProperties = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
};

const buttonStyles: React.CSSProperties = {
  margin: "10px",
  padding: "10px 20px",
  cursor: "pointer",
  borderRadius: "5px",
};
