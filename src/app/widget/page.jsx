"use client";

import "./style.css";
import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("favourites"));
    console.log(info);
  });
  return (
    <div>
      <p></p>
    </div>
  );
}
