
import { useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSearch: (query: string) => void;
  className?: string;
  placeholder?: string;
}

const SearchBar = ({ 
  onSearch, 
  className,
  placeholder = "QUICK BOOK: Search services, businesses..." 
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn(
        "relative flex w-full max-w-2xl items-center", 
        className
      )}
    >
      <div className="relative w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="h-12 w-full rounded-full border border-input bg-background px-12 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute inset-y-0 right-0 flex items-center pr-4 text-muted-foreground hover:text-foreground"
          >
            <span className="sr-only">Clear search</span>
            <span className="text-xl">&times;</span>
          </button>
        )}
      </div>
      <button
        type="submit"
        className="ml-2 px-4 py-2 h-12 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
