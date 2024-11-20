import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="px-4 md:px-6">
      <div className="flex flex-col items-center space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Auto Task
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
            Plan smarter, achieve more
          </p>
        </div>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/getting-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
