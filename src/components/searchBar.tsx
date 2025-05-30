interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="w-full sm:w-72">
        
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search posts..."
        className="w-full border border-gray-300 rounded-md py-2 px-3  text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-100 focus:border-blue-100 transition-all"
      />
    
    </div>
  );
}
