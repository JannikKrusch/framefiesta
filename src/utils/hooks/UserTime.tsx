import { useEffect, useState } from "react";
import { TimerInterval } from "../constants/Timer";

export function useTime(): {
  greeting: string;
} {
  const [greeting, setGreeting] = useState<string>("");

  useEffect(() => {
    function updateTimeGreeting(): void {
      const date = new Date();
      const timeOfDayGreeting = getGreetingForTimeOfDay(date);
      setGreeting(timeOfDayGreeting);
    }

    updateTimeGreeting();

    const interval = setInterval(updateTimeGreeting, TimerInterval);

    return () => clearInterval(interval);
  }, []);

  return { greeting };
}

function getGreetingForTimeOfDay(date: Date): string {
  const hours = date.getHours();
  let greetingForTime = "Good ";

  switch (true) {
    case hours >= 6 && hours < 12:
      greetingForTime += "Morning";
      break;
    case hours >= 12 && hours < 18:
      greetingForTime += "Afternoon";
      break;
    case hours >= 18 && hours < 22:
      greetingForTime += "Evening";
      break;
    default:
      greetingForTime += "Night";
      break;
  }

  return greetingForTime;
}
