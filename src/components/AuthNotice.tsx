import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Database, Lock, Zap } from "lucide-react";

const AuthNotice = ({ feature }: { feature: string }) => {
  return (
    <Card className="max-w-md mx-auto my-8">
      <CardHeader className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
          <Database className="w-8 h-8 text-white" />
        </div>
        <CardTitle>Backend Required</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert>
          <Lock className="h-4 w-4" />
          <AlertDescription>
            To use {feature}, you need to connect StudySync to Supabase for authentication, 
            database storage, and AI processing capabilities.
          </AlertDescription>
        </Alert>
        
        <div className="space-y-2 text-sm">
          <p className="font-medium">Supabase enables:</p>
          <ul className="space-y-1 text-muted-foreground ml-4">
            <li>• User authentication & profiles</li>
            <li>• Notes & video storage</li> 
            <li>• AI quiz generation</li>
            <li>• Community features</li>
            <li>• Progress tracking</li>
          </ul>
        </div>

        <Button className="w-full bg-gradient-primary">
          <Zap className="w-4 h-4 mr-2" />
          Connect Supabase
        </Button>
      </CardContent>
    </Card>
  );
};

export default AuthNotice;