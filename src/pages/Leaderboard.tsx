
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Leaderboard = () => {
  const contributors = [
    { rank: 1, name: "Alex Johnson", problems: 24, solutions: 37, points: 521 },
    { rank: 2, name: "Samantha Chen", problems: 18, solutions: 42, points: 489 },
    { rank: 3, name: "Marcus Wilson", problems: 15, solutions: 33, points: 412 },
    { rank: 4, name: "Priya Sharma", problems: 12, solutions: 29, points: 387 },
    { rank: 5, name: "David Lee", problems: 19, solutions: 21, points: 352 },
    { rank: 6, name: "Sophia Rodriguez", problems: 16, solutions: 19, points: 328 },
    { rank: 7, name: "Mohammed Ali", problems: 11, solutions: 24, points: 315 },
    { rank: 8, name: "Emma Thompson", problems: 14, solutions: 17, points: 301 },
    { rank: 9, name: "Daniel Kim", problems: 10, solutions: 22, points: 286 },
    { rank: 10, name: "Olivia Garcia", problems: 13, solutions: 15, points: 264 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Leaderboard</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Top Contributors</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">Rank</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="text-center">Problems</TableHead>
                  <TableHead className="text-center">Solutions</TableHead>
                  <TableHead className="text-center">Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contributors.map((contributor) => (
                  <TableRow key={contributor.rank}>
                    <TableCell className="font-medium">{contributor.rank}</TableCell>
                    <TableCell>{contributor.name}</TableCell>
                    <TableCell className="text-center">{contributor.problems}</TableCell>
                    <TableCell className="text-center">{contributor.solutions}</TableCell>
                    <TableCell className="text-center font-semibold">{contributor.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;
