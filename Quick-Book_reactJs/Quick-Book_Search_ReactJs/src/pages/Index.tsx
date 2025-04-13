
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import BusinessList from "@/components/BusinessList";
import SearchHistory from "@/components/SearchHistory";
import { Business, searchBusinesses } from "@/data/mockBusinessData";

const Index = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Business[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const savedHistory = localStorage.getItem("searchHistory");
    if (savedHistory) {
      try {
        setSearchHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error("Failed to parse search history:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a search term");
      return;
    }

    setQuery(searchQuery);
    setIsLoading(true);
    setHasSearched(true);

    setTimeout(() => {
      const searchResults = searchBusinesses(searchQuery);
      setResults(searchResults);
      setIsLoading(false);

      setSearchHistory((prev) => {
        const filtered = prev.filter((item) => item !== searchQuery);
        return [searchQuery, ...filtered].slice(0, 5);
      });

      if (searchResults.length > 0) {
        toast.success(`Found ${searchResults.length} businesses matching "${searchQuery}"`);
      } else {
        toast.info(`No businesses found matching "${searchQuery}"`);
      }
    }, 800);
  };

  const handleClearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem("searchHistory");
    toast.success("Search history cleared");
  };

  const handleRemoveHistoryItem = (index: number) => {
    setSearchHistory((prev) => {
      const newHistory = [...prev];
      newHistory.splice(index, 1);
      return newHistory;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              QUICK BOOK: Find Your Perfect Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Instantly discover and book services like car wash, computer repair, 
              plumbing, and more. We'll help you find the best businesses in South Africa.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <SearchBar onSearch={handleSearch} />
          </div>

          <SearchHistory
            searchHistory={searchHistory}
            onClearHistory={handleClearHistory}
            onSearchHistoryItem={handleSearch}
            onRemoveHistoryItem={handleRemoveHistoryItem}
          />

          {hasSearched && (
            <>
              <div className="mb-4">
                {!isLoading && results.length > 0 && (
                  <h2 className="text-2xl font-semibold">
                    Search Results for "{query}"
                  </h2>
                )}
              </div>
              <BusinessList businesses={results} isLoading={isLoading} />
            </>
          )}

          {!hasSearched && (
            <div className="mt-16 mb-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Start Searching</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Enter a service type, business name, or keyword in the search bar above 
                to find South African businesses that match your needs.
              </p>
            </div>
          )}
        </div>
      </main>
      <footer className="bg-secondary py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} Quick Book. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
