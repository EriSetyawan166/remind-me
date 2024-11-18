import { Skeleton } from "@/components/ui/skeleton";
import { currentUser } from "@clerk/nextjs/server";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Suspense fallback={ <WelcomeMsgFallback /> }>
        <WelcomeMsg />
      </Suspense>
    </>
  )
}

async function WelcomeMsg() {
  const user = await currentUser(); 

  if (!user) {
    return <div>error</div>
  }


  return (
    <div className="flex w-full">
      <div className="text-4xl font-bold">
        <div>Welcome, <br /> {user.firstName} { user.lastName }</div>
      </div>
    </div>
  );
}

function WelcomeMsgFallback() {
  return (
    <div className="flex w-full">
      <div className="text-4xl font-bold">
        <Skeleton className="w-[180px] h-[36px]"/>
        <Skeleton className="w-[180px] h-[36px]"/>
      </div>
    </div>
  )
}
