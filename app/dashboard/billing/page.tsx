import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const featureItems = [
  { name: "Unlimited Notes" },
  { name: "Unlimited Storage" },
  { name: "Unlimited Sharing" },
  { name: "Unlimited Collaboration" },
];

export default function BillingPage() {
  return (
    <div className="max-w-md mx-auto space-y-4">
      <Card className="flex flex-col">
        <CardContent className="py-8">
          <div>
            <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-primary/10 text-primary">
              Monthly
            </h3>
          </div>
          <div className="mt-4 flex items-baseline text-6xl font-extrabold">
            $30{" "}
            <span className="ml-1 text-2xl font-medium text-muted-foreground">
              /mo
            </span>
          </div>
          <p className="mt-5 text-lg text-muted-foreground">
            Write as Many Notes as You Want
          </p>
        </CardContent>
        <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-secondary rounded-lg m-1 space-y-6 sm:p-10 sm:pt-6">
          <ul className="space-y-4">
            {featureItems.map((item, index) => (
              <li key={index} className="flex items-center">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                </div>
                <p className="ml-3 text-base">{item.name}</p>
              </li>
            ))}
          </ul>
          <form className="w-full">
            <Button className="w-full">Buy Today</Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
