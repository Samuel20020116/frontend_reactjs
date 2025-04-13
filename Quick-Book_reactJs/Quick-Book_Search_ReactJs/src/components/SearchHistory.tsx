
import { X } from "lucide-react";

interface SearchHistoryProps {
  searchHistory: string[];
  onClearHistory: () => void;
  onSearchHistoryItem: (query: string) => void;
  onRemoveHistoryItem: (index: number) => void;
}

const SearchHistory = ({
  searchHistory,
  onClearHistory,
  onSearchHistoryItem,
  onRemoveHistoryItem,
}: SearchHistoryProps) => {
  if (searchHistory.length === 0) return null;

  return (
    <div className="mt-4 mb-8">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-muted-foreground">Recent searches</h3>
        <button
          onClick={onClearHistory}
          className="text-xs text-primary hover:underline"
        >
          Clear all
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {searchHistory.map((query, index) => (
          <div
            key={index}
            className="flex items-center bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm"
          >
            <button
              onClick={() => onSearchHistoryItem(query)}
              className="mr-1"
            >
              {query}
            </button>
            <button
              onClick={() => onRemoveHistoryItem(index)}
              className="ml-1 text-muted-foreground hover:text-foreground"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;
