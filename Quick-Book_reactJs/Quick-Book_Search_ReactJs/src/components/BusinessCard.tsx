
import { Business } from "@/data/mockBusinessData";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface BusinessCardProps {
  business: Business;
}

const BusinessCard = ({ business }: BusinessCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 w-full bg-muted">
        <img
          src={business.image}
          alt={business.name}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{business.name}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>{business.rating.toFixed(1)}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {business.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {business.services.slice(0, 3).map((service, index) => (
            <Badge key={index} variant="secondary">
              {service}
            </Badge>
          ))}
          {business.services.length > 3 && (
            <Badge variant="outline">+{business.services.length - 3} more</Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 text-sm">
        <p className="line-clamp-1">{business.address}</p>
        <p className="text-primary">{business.phone}</p>
      </CardFooter>
    </Card>
  );
};

export default BusinessCard;
