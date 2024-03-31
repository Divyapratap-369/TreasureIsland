"use client"
import MainScreen from "@/components/MainScreen";
import Sounds from "@/components/Sounds";
import GameControl from "@/components/GameControl";


export default function Home() {
  return (
    <main>
      <MainScreen />
      <Sounds />
      <GameControl />
    </main>
  );
}
