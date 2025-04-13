
import { Business } from "@/data/mockBusinessData";
import BusinessCard from "./BusinessCard";

interface BusinessListProps {
  businesses: Business[];
  isLoading: boolean;
}

const BusinessList = ({ businesses, isLoading }: BusinessListProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-8 h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (businesses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-8 h-64">
        <h3 className="text-xl font-medium text-gray-500">No businesses found</h3>
        <p className="text-muted-foreground mt-2">Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {businesses.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
