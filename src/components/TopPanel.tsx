import "./TopPanel.css"

type TopPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
};

function TopPanel({ isOpen, onClose, title, children }: TopPanelProps) {
  if (!isOpen) return null;

  return (
    <div className="top-panel open">
      <div className="top-panel-header">
        <h2>{title}</h2>
        <button onClick={onClose}>✕</button>
      </div>

      <div className="top-panel-content">
        {children}
      </div>
    </div>
  );
}

export default TopPanel;
