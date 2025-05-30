
interface ErrorStateProps {
  message?: string;
  onRetry: () => void;
}

export function ErrorState({
  message = "Failed to load posts.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col justify-center items-center py-12 space-y-4">
      <p className="text-red-500 text-lg">{message}</p>
      <button
        onClick={onRetry}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Retry
      </button>
    </div>
  );
}
