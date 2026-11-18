import { useDroppable } from '@dnd-kit/core';

export default function DropZone({ id, className, children }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      id={`zone-${id}`}
      className={`${className} ${isOver ? 'drop-zone--over' : ''}`}
    >
      {children}
    </div>
  );
}
