"use client";

import { useEffect } from "react";
import Card from "../card";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const user = useSearchParams()?.get("user") ?? "";

  return (
    <div className="col-span-8 col-start-3">
      <Card>
        <div className="flex items-center flex-col p-4">
          <div className="font-bold md:text-4xl text-xl mb-4">
            Welcome Back!
          </div>
          <div className="font-semiboldbold md:text-2xl text-md">{user}</div>
        </div>
      </Card>
    </div>
  );
}
