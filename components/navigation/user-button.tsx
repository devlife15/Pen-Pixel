"use client";

import { Session } from "next-auth";

export const UserButton = ({ user }: Session) => {
  return (
    <div>
      <h1>User-btn</h1>
    </div>
  );
};
