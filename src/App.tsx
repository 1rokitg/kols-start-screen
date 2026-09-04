import { useState, useEffect } from "react";
import StartPage from "./components/StartPage";
import HaveBusiness from "./components/HaveBusiness";
import WantBusiness from "./components/WantBusiness";
import WantWork from "./components/WantWork";
import Background from "./components/Background";

type Screen = "start" | "have-business" | "want-business" | "want-work";

export default function App() {
  const [screen, setScreen] = useState<Screen>("start");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [screen]);

  const navigate = (target: Screen) => {
    setScreen(target);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Background />
      <div className="relative z-10">
        {screen === "start" && (
          <StartPage
            onHaveBusiness={() => navigate("have-business")}
            onWantBusiness={() => navigate("want-business")}
            onWantWork={() => navigate("want-work")}
          />
        )}
        {screen === "have-business" && (
          <HaveBusiness onBack={() => navigate("start")} />
        )}
        {screen === "want-business" && (
          <WantBusiness onBack={() => navigate("start")} />
        )}
        {screen === "want-work" && (
          <WantWork onBack={() => navigate("start")} />
        )}
      </div>
    </div>
  );
}
