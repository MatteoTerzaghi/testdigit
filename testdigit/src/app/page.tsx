"use client";

import { useEffect } from "react";
import Card from "./card";
import BackendService from "@/backend/backendFunc";

export default function Home() {
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  // useEffect(() => {
  //   BackendService.test().then((res) => console.log(res));
  // }, []);
  return (
    <div className="col-span-8 col-start-3">
      <Card>
        <div>
          Hello <b>USER</b>
        </div>
      </Card>
    </div>
  );
}
