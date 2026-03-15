// Q16: Would username re-render when Theme changes?
// If yes, why and how do we avoid it? If No, why?
import { createContext, useContext, useState } from "react";

const UserContext = createContext<{ user: { name: string } } | null>(null);
const ThemeContext = createContext<{
  theme: string;
  setTheme: (v: string) => void;
} | null>(null);

function UserProvider({ children }: { children: React.ReactNode }) {
  const [user] = useState({ name: "Alice" });
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeToggle() {
  const ctx = useContext(ThemeContext);
  if (!ctx) return null;
  console.log("ThemeToggle rendered");
  return (
    <button
      className="primary"
      onClick={() =>
        ctx.setTheme(ctx.theme === "dark" ? "light" : "dark")
      }
    >
      Theme: {ctx.theme}
    </button>
  );
}

function UserName() {
  const ctx = useContext(UserContext);
  if (!ctx) return null;
  console.log("UserName rendered");
  return <p>User: {ctx.user.name}</p>;
}

export default function Q16() {
  return (
    <UserProvider>
      <ThemeProvider>
        <ThemeToggle />
        <UserName />
      </ThemeProvider>
    </UserProvider>
  );
}