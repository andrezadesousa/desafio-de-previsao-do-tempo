"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para a tela principal
    router.push("/weather");
  }, [router]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "var(--font-poppins)",
        fontSize: "1.2rem",
      }}
    >
      Redirecionando...
    </div>
  );
}
