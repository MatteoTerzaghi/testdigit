"use client";

import BackendService from "@/backend/backendFunc";
import Card from "./card";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const [showErrorBanner, changeShowErrorBannerValue] = useState(false);

  async function login(formData: FormData) {
    const user = formData.get("username");
    const pw = formData.get("pass");
    if (user && pw) {
      const res = await BackendService.login(user.toString(), pw.toString());
      if (res.result) {
        redirect(`/homepage?user=${user}`);
      }
    }

    changeShowErrorBannerValue(true);
  }

  return (
    <div className="col-span-4 col-start-5">
      {showErrorBanner && (
        <div className="bg-red-200 border-red-400 text-red-600 font-bold p-2 mb-2">
          Username or Password wrong!
        </div>
      )}
      <Card>
        <div className="flex justify-center flex-col items-center p-2">
          <span className="text-lg font-bold">Login</span>
          <form action={login} className="text-center">
            <input
              className="block border my-2 p-2"
              placeholder="Username"
              name="username"
            ></input>
            <input
              className="block border my-2 p-2"
              placeholder="Password"
              name="pass"
              type="password"
            ></input>

            <button
              className="border my-2 p-2 rounded-xl bg-blue-300"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
}
