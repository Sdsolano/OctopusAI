// Hook para marcar elementos como no traducibles
export const useNoTranslate = () => {
  const markAsNoTranslate = (ref) => {
    if (ref.current) {
      ref.current.setAttribute('data-no-translate', 'true');
    }
  };

  return { markAsNoTranslate };
};

// Componente para envolver contenido que no debe traducirse
export const NoTranslate = ({ children, className = '' }) => {
  return (
    <span data-no-translate="true" className={className}>
      {children}
    </span>
  );
};