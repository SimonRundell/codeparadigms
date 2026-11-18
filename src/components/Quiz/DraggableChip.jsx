import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

const NEXT_ZONE = {
  tray: 'imperative',
  imperative: 'both',
  both: 'declarative',
  declarative: 'tray',
};

export default function DraggableChip({ language, zone, status, onCycle }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: language.id,
  });

  const style = transform
    ? { transform: CSS.Translate.toString(transform), zIndex: isDragging ? 20 : undefined }
    : undefined;

  const statusClass = status ? `quiz-chip--${status}` : '';

  return (
    <button
      ref={setNodeRef}
      style={style}
      className={`quiz-chip ${statusClass} ${isDragging ? 'quiz-chip--dragging' : ''}`}
      onClick={() => onCycle(language.id, NEXT_ZONE[zone])}
      title={`${language.name} — drag, or click/tap to move`}
      {...listeners}
      {...attributes}
    >
      {language.name}
    </button>
  );
}
