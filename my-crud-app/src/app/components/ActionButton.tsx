interface ActionButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const ActionButton = ({ onClick, children }: ActionButtonProps) => {
  return (
    <button onClick={onClick} className="bg-military-green text-white px-4 py-2 rounded">
      {children}
    </button>
  );
};

export default ActionButton;
